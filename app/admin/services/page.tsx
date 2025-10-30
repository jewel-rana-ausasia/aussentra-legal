"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/toast";

interface Service {
  id: string;
  title: string;
  slug: string;
  image?: string;
  page?: {
    title: string;
    description: string;
    heroImage?: string;
  };
}

interface ToastItem {
  id: number;
  title: string;
  variant?: "default" | "destructive" | "success";
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Service | null>(null);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    image: "",
    heroImage: "",
    description: "",
  });

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const res = await fetch("/api/admin/services");
      const data = await res.json();
      setServices(data);
    } catch (error) {
      addToast("Error fetching services", "destructive");
      console.error(error);
    }
  }

  function addToast(title: string, variant: "default" | "destructive" | "success" = "default") {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, variant }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000);
  }

  async function handleSubmit() {
    const method = editing ? "PUT" : "POST";
    const url = editing ? `/api/admin/services/${editing.id}` : "/api/admin/services";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to save service");

      addToast(`Service ${editing ? "updated" : "created"} successfully`, "success");

      setOpen(false);
      setEditing(null);
      setForm({ title: "", slug: "", image: "", heroImage: "", description: "" });

      fetchServices();
    } catch (error) {
      console.error(error);
      addToast("Error saving service", "destructive");
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this service?")) return;

    try {
      const res = await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete service");

      addToast("Service deleted successfully", "success");
      fetchServices();
    } catch (error) {
      console.error(error);
      addToast("Error deleting service", "destructive");
    }
  }

  function handleEdit(service: Service) {
    setEditing(service);
    setForm({
      title: service.title,
      slug: service.slug,
      image: service.image || "",
      heroImage: service.page?.heroImage || "",
      description: service.page?.description || "",
    });
    setOpen(true);
  }

  return (
    <div className="p-8">
      <Toaster toasts={toasts} />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Manage Services</h1>
        <Button
          onClick={() => {
            setEditing(null);
            setForm({ title: "", slug: "", image: "", heroImage: "", description: "" });
            setOpen(true);
          }}
        >
          + Add Service
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition p-4 flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail */}
              <img
                src={service.image || "/placeholder.jpg"}
                alt={service.title}
                className="w-full h-40 object-cover rounded mb-4"
              />

              <h2 className="font-medium text-lg">{service.title}</h2>
              <p className="text-gray-500 text-sm mb-2">/{service.slug}</p>

              {service.page?.description && (
                <p className="text-gray-600 text-sm line-clamp-3">{service.page.description}</p>
              )}
            </div>

            <div className="mt-4 flex gap-2">
              <Button variant="outline" onClick={() => handleEdit(service)}>
                Edit
              </Button>
              <Button variant="destructive" onClick={() => handleDelete(service.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Service" : "Add New Service"}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <Input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <Input
              placeholder="Slug (url)"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
            />
            <Input
              placeholder="Thumbnail Image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
            <Input
              placeholder="Hero Image URL"
              value={form.heroImage}
              onChange={(e) => setForm({ ...form, heroImage: e.target.value })}
            />
            <Textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <Button className="w-full" onClick={handleSubmit}>
              {editing ? "Update Service" : "Create Service"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

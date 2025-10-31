"use client"

import { useEffect, useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import ServiceCard from "@/components/admin/services/service-card"
import AdminServiceForm from "@/components/admin/services/admin-service-form"
import { toast } from "sonner" // <-- use Sonner toast

interface Paragraph {
  text: string;
}

interface ListItem {
  text: string;
}

interface Section {
  title: string;
  paragraphs: Paragraph[];
  listItems: ListItem[];
}

interface CTA {
  text: string;
  buttonText: string;
  link: string;
}

interface Meta {
  title: string;
  description: string;
  keywords: string[];
}

interface Service {
  id: string;
  title: string;
  slug: string;
  image?: string;
  page?: {
    title: string;
    description: string;
    heroImage?: string;
    sections: Section[];
    cta?: CTA;
    meta?: Meta;
  };
}
export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetchServices()
  }, [])

  async function fetchServices() {
    try {
      setLoading(true)
      const res = await fetch("/api/admin/services")
      if (!res.ok) throw new Error("Failed to fetch services")
      const data = await res.json()
      setServices(data)
    } catch (error) {
      console.error(error)
      toast.error("Failed to fetch services") // <-- Sonner toast
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (service: Service) => {
    setEditingService(service)
    setDialogOpen(true)
  }

  const handleAdd = () => {
    setEditingService(null)
    setDialogOpen(true)
  }

  const handleDelete = async (slug: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return

    try {
      const res = await fetch(`/api/admin/services/${slug}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Failed to delete service")

      toast.success("Service deleted successfully") // <-- Sonner success
      fetchServices()
    } catch (error) {
      console.error(error)
      toast.error("Failed to delete service") // <-- Sonner error
    }
  }

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.slug.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground">Services</h1>
              <p className="text-muted-foreground mt-2">Manage your legal services and their content</p>
            </div>
            <Button onClick={handleAdd} size="lg" className="gap-2">
              <Plus className="w-5 h-5" />
              Add Service
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            <div className="col-span-full flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
            </div>
          ) : filteredServices.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">No services found</p>
              <Button onClick={handleAdd} variant="outline" className="mt-4 bg-transparent">
                Create your first service
              </Button>
            </div>
          ) : (
            filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} onEdit={handleEdit} onDelete={handleDelete} />
            ))
          )}
        </div>
      </div>

      {/* Dialog Form */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="lg:max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>{editingService ? "Edit Service" : "Create New Service"}</DialogTitle>
          </DialogHeader>
          <AdminServiceForm
            service={editingService}
            onClose={() => setDialogOpen(false)}
            onSuccess={() => {
              setDialogOpen(false)
              fetchServices()
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

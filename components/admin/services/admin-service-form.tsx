"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Plus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionEditor from "./section-editor";
import { toast } from "sonner"; // <-- Sonner toast

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

interface AdminServiceFormProps {
  service?: Service | null;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AdminServiceForm({
  service,
  onClose,
  onSuccess,
}: AdminServiceFormProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    sections: [
      { title: "", paragraphs: [{ text: "" }], listItems: [{ text: "" }] },
    ] as Section[],
    cta: { text: "", buttonText: "", link: "" } as CTA,
    meta: { title: "", description: "", keywords: [] } as Meta,
  });

  const [images, setImages] = useState({
    thumbnail: null as File | null,
    hero: null as File | null,
  });

  const [previews, setPreviews] = useState({
    thumbnail: service?.image || null,
    hero: service?.page?.heroImage || null,
  });

  useEffect(() => {
    if (service?.page) {
      setForm({
        title: service.title,
        slug: service.slug,
        description: service.page.description,
        sections: service.page.sections || [
          { title: "", paragraphs: [{ text: "" }], listItems: [{ text: "" }] },
        ],
        cta: service.page.cta || { text: "", buttonText: "", link: "" },
        meta: service.page.meta || { title: "", description: "", keywords: [] },
      });
    }
  }, [service]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "thumbnail" | "hero"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setImages((prev) => ({ ...prev, [type]: file }));
      setPreviews((prev) => ({ ...prev, [type]: URL.createObjectURL(file) }));
    }
  };

  const addSection = () => {
    setForm((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        { title: "", paragraphs: [{ text: "" }], listItems: [{ text: "" }] },
      ],
    }));
  };

  const updateSection = (index: number, updatedSection: Section) => {
    setForm((prev) => {
      const newSections = [...prev.sections];
      newSections[index] = updatedSection;
      return { ...prev, sections: newSections };
    });
  };

  const removeSection = (index: number) => {
    setForm((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    if (!form.title.trim() || !form.slug.trim()) {
      toast.error("Title and slug are required"); // <-- Sonner error
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("slug", form.slug);
      formData.append("description", form.description);

      if (images.thumbnail) {
        formData.append("image", images.thumbnail);
      }
      if (images.hero) {
        formData.append("heroImage", images.hero);
      }

      formData.append("sections", JSON.stringify(form.sections));
      formData.append("cta", JSON.stringify(form.cta));
      formData.append("meta", JSON.stringify(form.meta));

      const url = service
        ? `/api/admin/services/${service.slug}`
        : "/api/admin/services";
      const method = service ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      if (!res.ok) throw new Error("Failed to save service");

      toast.success(`Service ${service ? "updated" : "created"} successfully`); // <-- Sonner success
      onSuccess();
    } catch (error) {
      console.error(error);
      toast.error("Failed to save service"); // <-- Sonner error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {/* Basic Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Basic Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="title"
              placeholder="Service title"
              value={form.title}
              onChange={handleInputChange}
            />
            <Input
              name="slug"
              placeholder="service-slug"
              value={form.slug}
              onChange={handleInputChange}
            />
          </div>
          <Textarea
            name="description"
            placeholder="Service description"
            value={form.description}
            onChange={handleInputChange}
            rows={3}
          />
        </div>

        {/* Images */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Images</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Thumbnail
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, "thumbnail")}
                className="w-full"
              />
              {previews.thumbnail && (
                <img
                  src={previews.thumbnail || "/placeholder.svg"}
                  alt="Thumbnail"
                  className="mt-2 h-24 w-full object-cover rounded"
                />
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Hero Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, "hero")}
                className="w-full"
              />
              {previews.hero && (
                <img
                  src={previews.hero || "/placeholder.svg"}
                  alt="Hero"
                  className="mt-2 h-24 w-full object-cover rounded"
                />
              )}
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">
              Content Sections
            </h3>
            <Button
              onClick={addSection}
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent"
            >
              <Plus className="w-4 h-4" />
              Add Section
            </Button>
          </div>

          <div className="space-y-3">
            {form.sections.map((section, index) => (
              <SectionEditor
                key={index}
                section={section}
                index={index}
                onUpdate={updateSection}
                onRemove={removeSection}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Call-to-Action
          </h3>
          <div className="space-y-3">
            <Textarea
              placeholder="CTA text"
              value={form.cta.text}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  cta: { ...prev.cta, text: e.target.value },
                }))
              }
              rows={2}
            />
            <Input
              placeholder="Button text"
              value={form.cta.buttonText}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  cta: { ...prev.cta, buttonText: e.target.value },
                }))
              }
            />
            <Input
              placeholder="Button link"
              value={form.cta.link}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  cta: { ...prev.cta, link: e.target.value },
                }))
              }
            />
          </div>
        </div>

        {/* Meta */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            SEO Metadata
          </h3>
          <div className="space-y-3">
            <Input
              placeholder="Meta title"
              value={form.meta.title}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  meta: { ...prev.meta, title: e.target.value },
                }))
              }
            />
            <Textarea
              placeholder="Meta description"
              value={form.meta.description}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  meta: { ...prev.meta, description: e.target.value },
                }))
              }
              rows={2}
            />
            <Input
              placeholder="Keywords (comma-separated)"
              value={form.meta.keywords.join(", ")}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  meta: {
                    ...prev.meta,
                    keywords: e.target.value
                      .split(",")
                      .map((k) => k.trim())
                      .filter(Boolean),
                  },
                }))
              }
            />
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="border-t border-border p-6 flex gap-3 justify-end bg-card">
        <Button variant="outline" onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} disabled={loading} className="gap-2">
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {service ? "Update Service" : "Create Service"}
        </Button>
      </div>
    </div>
  );
}

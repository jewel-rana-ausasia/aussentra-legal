"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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

interface PageData {
  title: string;
  description: string;
  heroImage?: string;
  sections: Section[];
  cta?: CTA;
  meta?: Meta;
}

interface ServiceFormProps {
  editingService?: any;
  onClose: () => void;
  onSaved: () => void;
  addToast?: (title: string, variant?: "default" | "destructive" | "success") => void;
}

export default function AdminServiceForm({ editingService, onClose, onSaved, addToast }: ServiceFormProps) {
  const [form, setForm] = useState<any>({
    title: "",
    slug: "",
    image: null,
    heroImage: null,
    page: {
      title: "",
      description: "",
      sections: [
        {
          title: "",
          paragraphs: [{ text: "" }],
          listItems: [{ text: "" }],
        },
      ],
      cta: { text: "", buttonText: "", link: "" },
      meta: { title: "", description: "", keywords: [] },
    },
  });

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [heroPreview, setHeroPreview] = useState<string | null>(null);

  // Load editing data
  useEffect(() => {
    if (editingService) {
      setForm({
        title: editingService.title,
        slug: editingService.slug,
        image: null,
        heroImage: null,
        page: {
          title: editingService.page?.title || "",
          description: editingService.page?.description || "",
          sections: editingService.page?.sections?.map((s: any) => ({
            title: s.title,
            paragraphs: s.paragraphs?.map((p: any) => ({ text: p.text })) || [{ text: "" }],
            listItems: s.listItems?.map((l: any) => ({ text: l.text })) || [{ text: "" }],
          })) || [
            { title: "", paragraphs: [{ text: "" }], listItems: [{ text: "" }] },
          ],
          cta: editingService.page?.cta || { text: "", buttonText: "", link: "" },
          meta: editingService.page?.meta || { title: "", description: "", keywords: [] },
        },
      });
      setThumbnailPreview(editingService.image || null);
      setHeroPreview(editingService.page?.heroImage || null);
    }
  }, [editingService]);

  // Handle input changes
  const handleChange = (field: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [field]: value }));
  };

  const handlePageChange = (field: string, value: any) => {
    setForm((prev: any) => ({ ...prev, page: { ...prev.page, [field]: value } }));
  };

  // Image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: "image" | "heroImage") => {
    const file = e.target.files?.[0] || null;
    setForm((prev: any) => ({ ...prev, [type]: file }));

    const previewUrl = file ? URL.createObjectURL(file) : null;
    if (type === "image") setThumbnailPreview(previewUrl);
    else setHeroPreview(previewUrl);
  };

  // Section management
  const addSection = () => {
    handlePageChange("sections", [
      ...form.page.sections,
      { title: "", paragraphs: [{ text: "" }], listItems: [{ text: "" }] },
    ]);
  };

  const removeSection = (index: number) => {
    const newSections = [...form.page.sections];
    newSections.splice(index, 1);
    handlePageChange("sections", newSections);
  };

  const updateSection = (index: number, key: string, value: any) => {
    const newSections = [...form.page.sections];
    newSections[index][key] = value;
    handlePageChange("sections", newSections);
  };

  // Paragraph/ListItem management
  const addParagraph = (secIndex: number) => {
    const sections = [...form.page.sections];
    sections[secIndex].paragraphs.push({ text: "" });
    handlePageChange("sections", sections);
  };
  const addListItem = (secIndex: number) => {
    const sections = [...form.page.sections];
    sections[secIndex].listItems.push({ text: "" });
    handlePageChange("sections", sections);
  };
  const updateParagraph = (secIndex: number, pIndex: number, value: string) => {
    const sections = [...form.page.sections];
    sections[secIndex].paragraphs[pIndex].text = value;
    handlePageChange("sections", sections);
  };
  const updateListItem = (secIndex: number, lIndex: number, value: string) => {
    const sections = [...form.page.sections];
    sections[secIndex].listItems[lIndex].text = value;
    handlePageChange("sections", sections);
  };

  // CTA and Meta
  const handleCTAChange = (key: string, value: string) => {
    handlePageChange("cta", { ...form.page.cta, [key]: value });
  };
  const handleMetaChange = (key: string, value: any) => {
    handlePageChange("meta", { ...form.page.meta, [key]: value });
  };

  // Submit
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("slug", form.slug);
      formData.append("description", form.page.description);
      if (form.image) formData.append("image", form.image);
      if (form.heroImage) formData.append("heroImage", form.heroImage);
      formData.append("sections", JSON.stringify(form.page.sections));
      formData.append("cta", JSON.stringify(form.page.cta));
      formData.append("meta", JSON.stringify(form.page.meta));

      const url = editingService ? `/api/services/${editingService.id}` : "/api/services";
      const method = editingService ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      if (!res.ok) throw new Error("Failed to save service");

      addToast && addToast(`Service ${editingService ? "updated" : "created"} successfully`, "success");
      onSaved();
      onClose();
    } catch (err) {
      console.error(err);
      addToast && addToast("Error saving service", "destructive");
    }
  };

  return (
    <div className="space-y-4 mt-4 max-h-[80vh] overflow-y-auto">
      <Input placeholder="Title" value={form.title} onChange={(e) => handleChange("title", e.target.value)} />
      <Input placeholder="Slug" value={form.slug} onChange={(e) => handleChange("slug", e.target.value)} />

      <div>
        <label className="block mb-1 font-medium">Thumbnail Image</label>
        <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "image")} />
        {thumbnailPreview && <img src={thumbnailPreview} alt="Thumbnail" className="mt-2 w-32 h-20 object-cover rounded" />}
      </div>

      <div>
        <label className="block mb-1 font-medium">Hero Image</label>
        <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "heroImage")} />
        {heroPreview && <img src={heroPreview} alt="Hero" className="mt-2 w-full h-40 object-cover rounded" />}
      </div>

      <Textarea
        placeholder="Page Description"
        value={form.page.description}
        onChange={(e) => handlePageChange("description", e.target.value)}
      />

      {/* Sections */}
      <div>
        <h4 className="font-semibold mb-2">Sections</h4>
        {form.page.sections.map((sec, i) => (
          <div key={i} className="border rounded p-2 mb-3">
            <Input
              placeholder="Section Title"
              value={sec.title}
              onChange={(e) => updateSection(i, "title", e.target.value)}
            />

            {/* Paragraphs */}
            {sec.paragraphs.map((p, pi) => (
              <Textarea
                key={pi}
                placeholder="Paragraph"
                value={p.text}
                onChange={(e) => updateParagraph(i, pi, e.target.value)}
                className="mt-2"
              />
            ))}
            <Button variant="outline" size="sm" onClick={() => addParagraph(i)} className="mt-1">
              + Add Paragraph
            </Button>

            {/* List Items */}
            {sec.listItems.map((l, li) => (
              <Input
                key={li}
                placeholder="List Item"
                value={l.text}
                onChange={(e) => updateListItem(i, li, e.target.value)}
                className="mt-2"
              />
            ))}
            <Button variant="outline" size="sm" onClick={() => addListItem(i)} className="mt-1">
              + Add List Item
            </Button>

            <Button variant="destructive" size="sm" onClick={() => removeSection(i)} className="mt-2">
              Remove Section
            </Button>
          </div>
        ))}
        <Button variant="outline" onClick={addSection}>+ Add Section</Button>
      </div>

      {/* CTA */}
      <div className="mt-4">
        <h4 className="font-semibold mb-1">CTA</h4>
        <Input placeholder="CTA Text" value={form.page.cta?.text} onChange={(e) => handleCTAChange("text", e.target.value)} />
        <Input placeholder="Button Text" value={form.page.cta?.buttonText} onChange={(e) => handleCTAChange("buttonText", e.target.value)} />
        <Input placeholder="Button Link" value={form.page.cta?.link} onChange={(e) => handleCTAChange("link", e.target.value)} />
      </div>

      {/* Meta */}
      <div className="mt-4">
        <h4 className="font-semibold mb-1">Meta</h4>
        <Input placeholder="Meta Title" value={form.page.meta?.title} onChange={(e) => handleMetaChange("title", e.target.value)} />
        <Input placeholder="Meta Description" value={form.page.meta?.description} onChange={(e) => handleMetaChange("description", e.target.value)} />
        <Input
          placeholder="Keywords (comma separated)"
          value={form.page.meta?.keywords.join(",")}
          onChange={(e) => handleMetaChange("keywords", e.target.value.split(","))}
        />
      </div>

      <Button className="w-full mt-4" onClick={handleSubmit}>
        {editingService ? "Update Service" : "Create Service"}
      </Button>
    </div>
  );
}

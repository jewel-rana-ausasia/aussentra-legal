"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AdminAboutSection2Page() {
  const [section, setSection] = useState<any>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    description: "",
  });

  useEffect(() => {
    fetchSection();
  }, []);

  const fetchSection = async () => {
    const res = await fetch("/api/admin/about-section-2");
    const data = await res.json();
    setSection(data);
    setForm({
      title: data?.title || "",
      subtitle: data?.subtitle || "",
      description: data?.description || "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    if (imageFile) formData.append("image", imageFile);
    formData.append("title", form.title);
    formData.append("subtitle", form.subtitle);
    formData.append("description", form.description);

    await fetch("/api/admin/about-section-2", { method: "POST", body: formData });
    await fetchSection();
    setLoading(false);
  };

  if (!section)
    return (
      <div className="w-full h-screen flex items-center justify-center text-lg font-semibold text-emerald-700">
        Loading About Section 2 Data...
      </div>
    );

  return (
    <div className="w-full mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700">
        About Section 2 Admin Panel
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow space-y-6"
      >
        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-2 text-emerald-800">
            Section Image
          </label>
          {section.imageUrl && (
            <Image
              src={section.imageUrl}
              alt="About Section Image"
              width={400}
              height={200}
              className="mb-3 rounded-lg border border-emerald-200 shadow-sm"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="border border-emerald-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
          />
        </div>

        {/* Title & Subtitle */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="border border-emerald-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
          />
          <input
            type="text"
            placeholder="Subtitle"
            value={form.subtitle}
            onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
            className="border border-emerald-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
          />
        </div>

        {/* Description */}
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border border-emerald-300 p-3 rounded-lg w-full h-36 focus:ring-2 focus:ring-emerald-400 outline-none transition-all resize-none"
        />

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}

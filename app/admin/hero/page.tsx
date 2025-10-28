"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AdminHeroPage() {
  const [header, setHeader] = useState<any>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [fallbackFile, setFallbackFile] = useState<File | null>(null);
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    description: "",
    ctaText: "",
    ctaLink: "",
  });

  useEffect(() => {
    fetchHeader();
  }, []);

  const fetchHeader = async () => {
    const res = await fetch("/api/admin/header");
    const data = await res.json();
    setHeader(data);
    setForm({
      title: data?.title || "",
      subtitle: data?.subtitle || "",
      description: data?.description || "",
      ctaText: data?.ctaText || "",
      ctaLink: data?.ctaLink || "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    if (videoFile) formData.append("video", videoFile);
    if (fallbackFile) formData.append("fallbackImage", fallbackFile);
    if (iconFile) formData.append("icon", iconFile);
    formData.append("title", form.title);
    formData.append("subtitle", form.subtitle);
    formData.append("description", form.description);
    formData.append("ctaText", form.ctaText);
    formData.append("ctaLink", form.ctaLink);

    await fetch("/api/admin/header", { method: "POST", body: formData });
    await fetchHeader();
    setLoading(false);
  };

  if (!header)
    return (
      <div className="w-full h-screen flex items-center justify-center text-lg font-semibold text-emerald-700">
        Loading Header Data...
      </div>
    );

  return (
    <div className="w-full mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700">
        Hero Section Admin Panel
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow space-y-6"
      >
        {/* Video Upload */}
        <div>
          <label className="block font-semibold mb-2 text-emerald-800">
            Video
          </label>
          {header.videoUrl && (
            <video
              className="w-full max-w-7xl mx-auto mb-3 rounded-lg border border-emerald-200 shadow-sm"
              controls
            >
              <source src={header.videoUrl} type="video/mp4" />
            </video>
          )}
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
            className="border border-emerald-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
          />
        </div>

        {/* Fallback Image */}
        <div>
          <label className="block font-semibold mb-2 text-emerald-800">
            Fallback Image
          </label>
          {header.fallbackImage && (
            <Image
              src={header.fallbackImage}
              alt="fallback"
              width={350}
              height={180}
              className="mb-3 rounded-lg border border-emerald-200 shadow-sm"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFallbackFile(e.target.files?.[0] || null)}
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

        {/* CTA Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="CTA Text"
            value={form.ctaText}
            onChange={(e) => setForm({ ...form, ctaText: e.target.value })}
            className="border border-emerald-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
          />
          <input
            type="text"
            placeholder="CTA Link"
            value={form.ctaLink}
            onChange={(e) => setForm({ ...form, ctaLink: e.target.value })}
            className="border border-emerald-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
          />
        </div>
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

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AdminAboutPage() {
  const [about, setAbout] = useState<any>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    description: "",
    listItems: ["", ""],
    buttonText: "",
    buttonLink: "",
  });

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    const res = await fetch("/api/admin/about");
    const data = await res.json();
    setAbout(data);
    setForm({
      title: data?.title || "",
      subtitle: data?.subtitle || "",
      description: data?.description || "",
      listItems: data?.listItems || ["", ""],
      buttonText: data?.buttonText || "",
      buttonLink: data?.buttonLink || "",
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
    form.listItems.forEach((item, index) => formData.append(`listItems[${index}]`, item));
    formData.append("buttonText", form.buttonText);
    formData.append("buttonLink", form.buttonLink);

    await fetch("/api/admin/about", { method: "POST", body: formData });
    await fetchAbout();
    setLoading(false);
  };

  const handleListItemChange = (index: number, value: string) => {
    const newList = [...form.listItems];
    newList[index] = value;
    setForm({ ...form, listItems: newList });
  };

  const addListItem = () => setForm({ ...form, listItems: [...form.listItems, ""] });
  const removeListItem = (index: number) =>
    setForm({ ...form, listItems: form.listItems.filter((_, i) => i !== index) });

  if (!about)
    return (
      <div className="w-full h-screen flex items-center justify-center text-lg font-semibold text-emerald-700">
        Loading About Section Data...
      </div>
    );

  return (
    <div className="w-full mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700">About Section Admin Panel</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow space-y-6"
      >
        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-2 text-emerald-800">Image</label>
          {about.imageUrl && (
            <Image
              src={about.imageUrl}
              alt="About Image"
              width={350}
              height={180}
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

        {/* List Items */}
        <div>
          <label className="block font-semibold mb-2 text-emerald-800">List Items</label>
          {form.listItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleListItemChange(index, e.target.value)}
                className="border border-emerald-300 p-2 rounded-lg w-full focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => removeListItem(index)}
                className="text-red-600 font-bold px-2 py-1 rounded-lg hover:bg-red-100 transition"
              >
                &times;
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addListItem}
            className="mt-2 text-emerald-600 font-semibold hover:underline"
          >
            + Add Item
          </button>
        </div>

        {/* Button Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Button Text"
            value={form.buttonText}
            onChange={(e) => setForm({ ...form, buttonText: e.target.value })}
            className="border border-emerald-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
          />
          <input
            type="text"
            placeholder="Button Link"
            value={form.buttonLink}
            onChange={(e) => setForm({ ...form, buttonLink: e.target.value })}
            className="border border-emerald-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
          />
        </div>

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

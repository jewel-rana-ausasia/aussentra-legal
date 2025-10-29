"use client";

import { useEffect, useState } from "react";

export default function AdminAboutCaseStudy() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ icon: "", title: "", description: "", order: 0 });

  const fetchItems = async () => {
    const res = await fetch("/api/admin/about-case-study");
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/admin/about-case-study", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ icon: "", title: "", description: "", order: 0 });
    await fetchItems();
    setLoading(false);
  };

  const handleChange = (key: string, value: any) => setForm({ ...form, [key]: value });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-emerald-700">About CaseStudy Admin</h1>

      <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-lg">
        <input
          type="text"
          placeholder="Icon URL"
          value={form.icon}
          onChange={(e) => handleChange("icon", e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="border p-2 rounded w-full"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Order"
          value={form.order}
          onChange={(e) => handleChange("order", Number(e.target.value))}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>

      <div className="mt-6">
        {items.map((item) => (
          <div key={item.id} className="border p-2 mb-2 rounded">
            <p className="font-semibold">{item.title}</p>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

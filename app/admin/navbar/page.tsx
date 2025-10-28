"use client";

import { useState, useEffect, useRef } from "react";
import { iconMap, availableIcons } from "@/lib/iconMap";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function AdminNavbarPage() {
  const [navbar, setNavbar] = useState<any>(null);
  const [newItem, setNewItem] = useState({
    label: "",
    href: "",
    icon: "",
    order: 1,
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [cta, setCta] = useState({ ctaText: "", ctaLink: "" });
  const [loading, setLoading] = useState(false);
  const addItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchNavbar();
  }, []);

  const fetchNavbar = async () => {
    const res = await fetch("/api/admin/navbar");
    const data = await res.json();
    setNavbar(data);
    setCta({ ctaText: data?.ctaText || "", ctaLink: data?.ctaLink || "" });
  };

  const handleLogoUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    if (logoFile) formData.append("logo", logoFile);
    formData.append("ctaText", cta.ctaText);
    formData.append("ctaLink", cta.ctaLink);
    await fetch("/api/admin/navbar", { method: "POST", body: formData });
    await fetchNavbar();
    setLoading(false);
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.label || !newItem.href) return;
    setLoading(true);
    await fetch("/api/admin/navbar", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    setNewItem({ label: "", href: "", icon: "", order: 1 });
    await fetchNavbar();
    setLoading(false);
    addItemRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    await fetch("/api/admin/navbar", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await fetchNavbar();
    setLoading(false);
  };

  if (!navbar)
    return (
      <div className="w-full h-screen flex items-center justify-center text-lg font-semibold">
        Loading Navbar Data...
      </div>
    );

  return (
   <div className="w-full mx-auto px-6 space-y-10 scroll-smooth">
  <h1 className="text-3xl font-bold mb-6 text-emerald-700">
    Navbar Admin Panel
  </h1>

  {/* --- Logo + CTA --- */}
  <form
    onSubmit={handleLogoUpload}
    className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
  >
    <h2 className="text-xl mb-5 font-semibold text-emerald-900">
      Logo & CTA Settings
    </h2>
    <div className="flex flex-col md:flex-row items-center gap-6 mb-5">
      {navbar.logoUrl && (
        <div className="relative w-[140px] h-[80px] rounded-md overflow-hidden border border-emerald-300 shadow-sm">
          <Image
            src={navbar.logoUrl}
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
        className="block border border-emerald-300 rounded-md px-4 py-2 w-full md:w-auto focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
      />
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="CTA Text"
        value={cta.ctaText}
        onChange={(e) => setCta({ ...cta, ctaText: e.target.value })}
        className="border border-emerald-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-emerald-400 outline-none transition"
      />
      <input
        type="text"
        placeholder="CTA Link"
        value={cta.ctaLink}
        onChange={(e) => setCta({ ...cta, ctaLink: e.target.value })}
        className="border border-emerald-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-emerald-400 outline-none transition"
      />
    </div>

    <button
      type="submit"
      disabled={loading}
      className="mt-5 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
    >
      {loading ? "Saving..." : "Save Changes"}
    </button>
  </form>

  {/* --- Nav Items --- */}
  <div>
    <h2 className="text-xl font-semibold mb-4 text-emerald-800">
      Navigation Items
    </h2>

    <AnimatePresence>
      {navbar.navItems.map((item: any) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="flex justify-between items-center border border-emerald-200 bg-white p-4 mb-3 rounded-2xl shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3">
            {item.icon && iconMap[item.icon]}
            <div className="flex flex-col">
              <span className="font-medium text-emerald-900">{item.label}</span>
              <span className="text-sm text-gray-400">{item.href}</span>
            </div>
          </div>
          <button
            onClick={() => handleDelete(item.id)}
            className="text-red-500 hover:text-red-600 font-medium"
          >
            Delete
          </button>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>

  {/* --- Add New Item --- */}
  <div ref={addItemRef}>
    <form
      onSubmit={handleAddItem}
      className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border border-emerald-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8"
    >
      <h3 className="text-lg mb-5 font-semibold text-emerald-900">
        Add New Nav Item
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Label"
          value={newItem.label}
          onChange={(e) => setNewItem({ ...newItem, label: e.target.value })}
          className="border border-emerald-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-emerald-400 outline-none transition"
        />
        <input
          type="text"
          placeholder="Href"
          value={newItem.href}
          onChange={(e) => setNewItem({ ...newItem, href: e.target.value })}
          className="border border-emerald-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-emerald-400 outline-none transition"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {/* --- Icon picker dropdown --- */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-full justify-between border border-emerald-300 hover:border-emerald-400 bg-white"
            >
              <div className="flex items-center gap-2">
                {newItem.icon && iconMap[newItem.icon]}
                <span>{newItem.icon ? newItem.icon : "Select Icon"}</span>
              </div>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[250px] p-0">
            <Command>
              <CommandInput placeholder="Search icon..." />
              <CommandList>
                <CommandEmpty>No icons found.</CommandEmpty>
                <CommandGroup heading="Available Icons">
                  {availableIcons.map((icon) => (
                    <CommandItem
                      key={icon}
                      value={icon}
                      onSelect={() => setNewItem({ ...newItem, icon })}
                    >
                      <div className="flex items-center gap-2">
                        {iconMap[icon]}
                        <span>{icon}</span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <input
          type="number"
          placeholder="Order"
          value={newItem.order}
          onChange={(e) =>
            setNewItem({ ...newItem, order: parseInt(e.target.value) || 1 })
          }
          className="border border-emerald-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-emerald-400 outline-none transition"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-5 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
      >
        {loading ? "Adding..." : "Add Item"}
      </button>
    </form>
  </div>
</div>

  );
}

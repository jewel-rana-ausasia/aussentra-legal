"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface AboutData {
  title: string;
  subtitle?: string;
  description: string;
  listItems: string[];
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

export default function AboutSection() {
  const [about, setAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch("/api/admin/about")
      .then((res) => res.json())
      .then(setAbout)
      .catch(console.error);
  }, []);

  if (!about) return null;

  return (
    <section className="relative py-10 lg:py-16 px-2 lg:px-0 max-w-7xl mx-auto bg-white about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="text-2xl md:text-5xl font-bold text-center lg:text-left text-gray-900 leading-tight font-playfair">
              {about.title}{" "}
              {about.subtitle && (
                <span className="text-primary italic">{about.subtitle}</span>
              )}
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {about.description}
            </p>

            <ul className="space-y-3">
              {about.listItems.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div className="text-[#ac835d] mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <p className="text-gray-800 text-base lg:text-lg">{item}</p>
                </li>
              ))}
            </ul>

            <div className="flex justify-center lg:justify-start">
              <Link
                href={about.buttonLink}
                className="inline-block bg-gradient-to-r from-[#daa22d] via-[#d3a225] to-[#cf9d12] text-white px-5 lg:px-8 py-2 lg:py-3 rounded-full font-semibold relative overflow-hidden group transition-all duration-300"
              >
                {about.buttonText}
                <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-auto">
            <Image
              src={about.imageUrl}
              alt="About Image"
              width={800}
              height={600}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

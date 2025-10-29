"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// ✅ Define the interface for a case study item
interface CaseStudyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export default function CaseStudyBox() {
  const [items, setItems] = useState<CaseStudyItem[]>([]);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const res = await fetch("/api/admin/about-case-study");
      const data: CaseStudyItem[] = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Failed to fetch case studies", err);
    }
  };

  if (!items.length) {
    return (
      <section className="relative max-w-7xl mx-auto px-5 lg:px-0 py-8 case-study-box bg-white">
        <div className="text-center text-gray-500">Loading...</div>
      </section>
    );
  }

  return (
    <section className="relative max-w-7xl mx-auto px-5 lg:px-0 py-2 mb-8 lg:mb-0 lg:py-8 case-study-box bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8">
          {items.map((item) => (
            <div key={item.id} className="flex items-start space-x-4 lg:space-x-6 mt-5">
              <div className="flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain w-10 h-10 lg:w-12 lg:h-12"
                />
              </div>
              <div className="cont">
                <h5 className="text-[21px] font-semibold font-playfair text-gray-900 mb-2">
                  {item.title}
                </h5>
                <p className="text-[16px] text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

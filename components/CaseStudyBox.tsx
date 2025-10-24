"use client";

import { Scale, Gavel, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function CaseStudyBox() {
  const data = [
    {
      icon: "/legal-production.png",
      title: "Clarity & Simplicity",
      desc: "Clear, plain-language advice that simplifies complex legal processes for confident decision-making.",
    },
    {
      icon: "/private.png",
      title: "Trust & Respect",
      desc: "Building lasting relationships through personalized service, kindness, and dignity at every step.",
    },
    {
      icon: "/winning-awards.png",
      title: "Empowerment & Control",
      desc: "Providing the knowledge and support you need to feel in control of your legal journey.",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-5 lg:px-0 py-8 case-study-box bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="flex items-start space-x-6 mt-5">
              {/* ✅ PNG Icon */}
              <div className="flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain w-12 h-12"
                />
              </div>
              <div className="cont">
                <h5 className="text-[21px] font-semibold font-playfair text-gray-900 mb-2">
                  {item.title}
                </h5>
                <p className="text-[16px] text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Scale, Gavel, GraduationCap } from "lucide-react";

export default function CaseStudyBox() {
  const data = [
    {
      icon: <Gavel className="w-12 h-12 text-[#ac835d]" />,
      title: "Legal Production",
      desc: "Lorem ipsum amet quam miss nestibulum drana fermen.",
    },
    {
      icon: <Scale className="w-12 h-12 text-[#ac835d]" />,
      title: "Private",
      desc: "Lorem ipsum amet quam miss nestibulum drana fermen.",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-[#ac835d]" />,
      title: "Winning Awards",
      desc: "Lorem ipsum amet quam miss nestibulum drana fermen.",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto py-8 case-study-box bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 mt-5"
            >
              <div className="icon">{item.icon}</div>
              <div className="cont">
                <h5 className="text-[21px] font-semibold font-playfair text-gray-900 mb-2">
                  {item.title}
                </h5>
                <p className="text-[16px] text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

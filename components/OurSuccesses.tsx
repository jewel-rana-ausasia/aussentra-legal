"use client";

import React from "react";
import Image from "next/image";
import { FaGavel } from "react-icons/fa";

interface AwardItem {
  img: string;
  alt: string;
  href?: string;
}

const awards: AwardItem[] = [
  { img: "/awards/01.png", alt: "Award 1" },
  { img: "/awards/02.png", alt: "Award 2" },
  { img: "/awards/03.png", alt: "Award 3" },
  { img: "/awards/01.png", alt: "Award 4" },
];

const OurSuccesses: React.FC = () => {
  return (
    <section className="clients relative py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="section-subtitle flex items-center justify-center text-xl font-medium mb-3 font-playfair italic">
            <span className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full mr-2">
              <FaGavel className="w-6 h-6 text-white text-lg xl:text-xl" />
            </span>
            Our Successes
          </div>
          <h2 className="section-title text-2xl lg:text-4xl font-bold text-gray-900 font-playfair">
            Awards <span className="text-primary">&</span> Recognitions
          </h2>
        </div>

        {/* Awards Images */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10">
          {awards.map((award, index) => (
            <a
              key={index}
              href={award.href || "#0"}
              className="flex justify-center items-center"
            >
              <Image
                src={award.img}
                alt={award.alt}
                width={180}
                height={180}
                className="object-contain w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSuccesses;

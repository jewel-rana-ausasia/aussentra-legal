"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
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
    <section className="clients relative py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="section-subtitle flex items-center justify-center text-[#ac835d] text-xl font-medium mb-3">
            <span className="flex items-center justify-center w-12 h-12 bg-[#ac835d] rounded-full mr-2">
              <FaGavel className="w-6 h-6 text-white text-xl" />
            </span>
            Our Successes
          </div>
          <h2 className="section-title text-4xl font-bold text-gray-900">
            Awards <span className="text-[#ac835d]">&</span> Recognitions
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop
              slidesPerView={2}
              spaceBetween={40}
              breakpoints={{
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="flex items-center justify-center"
            >
              {awards.map((award, index) => (
                <SwiperSlide key={index}>
                  <div className="clients-logo flex justify-center items-center opacity-100 hover:opacity-100 transition-all duration-300">
                    <a href={award.href || "#0"}>
                      <Image
                        src={award.img}
                        alt={award.alt}
                        width={180}
                        height={180}
                        className="object-contain"
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSuccesses;

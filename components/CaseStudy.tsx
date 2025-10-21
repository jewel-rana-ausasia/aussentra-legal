"use client";

import Image from "next/image";
import { FaGavel, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const cases = [
  { title: "Criminal\nIssue", img: "/case/1.jpg" },
  { title: "Family\nViolence", img: "/case/2.jpg" },
  { title: "Car\nAccidents", img: "/case/3.jpg" },
  { title: "Marriage\n& Divorce", img: "/case/4.jpg" },
  { title: "Real Estate\n& Construction", img: "/case/5.jpg" },
  { title: "Bank\nProtected", img: "/case/6.jpg" },
];

export default function CaseStudy() {
  return (
    <section className="relative py-20 overflow-hidden case-study bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center text-[#ac835d] text-lg font-medium">
              <div className="mr-2 text-2xl">
                <FaGavel />
              </div>
              <span>Areas of practice</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Case <span className="text-[#ac835d]">Studies</span>
            </h2>
            <p className="text-gray-600">
              Lawyer sit amet risus ac duin auctor posuere fanish amet the acinia
              lecra fermen.
            </p>
            <a
              href="#"
              className="inline-block bg-[#ac835d] text-white px-8 py-3 rounded-md font-semibold relative overflow-hidden group transition-all duration-300"
            >
              Discover more
              <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          </div>

          {/* Right Carousel */}
          <div className="lg:col-span-2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={800} // smooth animation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {cases.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative overflow-hidden rounded-lg group">
                    <div className="relative">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full h-64 md:h-72 lg:h-64 transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                    </div>

                    {/* Text and Arrow */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="text-2xl md:text-3xl font-serif whitespace-pre-line">
                        {item.title}
                      </div>
                      <a
                        href="/case-study-page"
                        className="w-12 h-12 flex items-center justify-center bg-[#ac835d] rounded-full text-white transition-all duration-300 group-hover:bg-white group-hover:text-black"
                      >
                        <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  slug: string;
  image: string;
  link: string;
}

export default function ServiceSection() {
  const [services, setServices] = useState<Service[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/admin/services");
        const data = await res.json();
        setServices(data.filter((s: Service) => s.slug)); // only items with slugs
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };
    fetchServices();
  }, []);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesPerView; i++) {
      slides.push(services[(currentIndex + i) % services.length]);
    }
    return slides;
  };

  return (
    <section className="relative px-5 2xl:px-0 py-10 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-4xl text-center lg:text-left font-bold text-black leading-tight font-playfair">
              Our Legal{" "}
              <span className="italic text-primary">Practice Areas</span>
            </h2>

            <p className="text-black text-sm lg:text-base text-center lg:text-left">
              Our guiding principle is to advocate strongly for your legal
              needs, no matter the jurisdiction.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="/services"
                className="inline-block bg-gradient-to-r from-[#daa22d] via-[#d3a225] to-[#cf9d12] text-white px-5 lg:px-8 py-2 lg:py-3 rounded-full font-semibold hover:bg-[#7f5633] transition-all duration-300 hover:shadow-lg"
              >
                Discover more
              </Link>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="flex gap-4 mb-8">
                {services.length > 0 &&
                  getVisibleSlides().map((item, index) => (
                    <Link
                      href={`/services/${item.slug}`}
                      key={`${currentIndex}-${index}`}
                      className="relative overflow-hidden rounded-lg group flex-1 min-w-0 cursor-pointer"
                    >
                      {/* Service Image */}
                      <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-lg"></div>
                      </div>

                      {/* Text & Arrow */}
                      <div className="absolute bottom-6 left-3 right-3 flex items-end justify-between text-white z-10">
                        <div className="text-xl whitespace-pre-line leading-tight font-playfair">
                          {item.title}
                        </div>

                        <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-full text-white transition-all duration-300 hover:bg-white hover:text-[#ac835d] transform hover:scale-110 shrink-0">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2">
                {services.length > 0 &&
                  services
                    .slice(0, Math.ceil(services.length / slidesPerView))
                    .map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index * slidesPerView)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                          Math.floor(currentIndex / slidesPerView) === index
                            ? "bg-primary w-8"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  { title: "Conveyancing", img: "/services/conveyancing-banner.jpg" },
  { title: "Immigration\nLaw", img: "/services/immigration-law.jpg" },
  { title: "Debt\nRecovery", img: "/services/wills-banner.jpg" },
  { title: "Insolvency", img: "/services/insolvency.jpg" },
  { title: "Family\nLaw", img: "/services/family-law.jpg" },
  { title: "Wills", img: "/services/probate-and-estate.jpg" },
  {
    title: "Probate\n& Estate",
    img: "/services/probate-and-estate-banner.jpg",
  },
];

export default function ServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Handle responsive slide count
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
    <section className="relative px-10 lg:px-0 py-20 bg-white overflow-hidden transition-opacity duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center text-[#ac835d] text-lg font-medium font-playfair">
              <div className="w-12 h-12 rounded-full bg-[#ac835d] flex items-center justify-center mr-3">
                <Image
                  src="/balance-icon.svg"
                  alt="balance-icon"
                  width={30}
                  height={30}
                />
              </div>
              <span className="italic text-lg">Areas of Service</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight font-playfair">
              Our <span className="italic text-[#ac835d]">Services</span>
            </h2>
            <p className="text-gray-600">
              At Aussentra Legal, we provide expert guidance in Wills and Estate
              law to protect your family, home, and future with clarity and
              care.
            </p>
            <button className="bg-[#ac835d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#7f5633] transition-all duration-300 hover:shadow-lg">
              Discover more
            </button>
          </div>

          {/* Right Carousel */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="flex gap-4 mb-8">
                {getVisibleSlides().map((item, index) => (
                  <div
                    key={`${currentIndex}-${index}`}
                    className="relative overflow-hidden rounded-lg group flex-1 min-w-0"
                  >
                    <Image
                      src={item.img}
                      alt={item.title.replace("\n", " ")}
                      width={800}
                      height={500}
                      className="rounded-lg object-cover w-full h-64 md:h-72 lg:h-80 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-lg"></div>

                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white z-10">
                      <div className="text-2xl md:text-2xl whitespace-pre-line leading-tight font-playfair">
                        {item.title}
                      </div>
                      <a
                        href="/services"
                        className="w-12 h-12 flex items-center justify-center bg-[#ac835d] rounded-full text-white transition-all duration-300 hover:bg-white hover:text-[#ac835d] transform hover:scale-110 flex-shrink-0 ml-4"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center gap-2">
                {services
                  .slice(0, Math.ceil(services.length / slidesPerView))
                  .map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index * slidesPerView)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                        Math.floor(currentIndex / slidesPerView) === index
                          ? "bg-[#ac835d] w-8"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
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

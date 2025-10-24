"use client";

import Image from "next/image";
import React from "react";
import { FaGavel } from "react-icons/fa"; // from Font Awesome

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen flex justify-center items-center overflow-hidden header">
      {/* Video Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url('/home/all-people-are-equal-before-the-law.jpg')", // ✅ fallback image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <video
          className="w-full h-full object-cover"
          playsInline
          autoPlay
          loop
          muted
        >
          <source src="/home/lawyer-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>{" "}
        {/* Optional overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full v-middle font-playfair">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="text-center lg:w-7/12 md:w-full">
              <h5 className="flex items-center justify-center mb-2 text-white text-2xl italic font-normal">
                <span className="flex items-center justify-center w-12 h-12 bg-[#ac835d] rounded-full mr-2">
                  <Image
                    src="/balance-icon.svg"
                    alt="balance-icon"
                    width={30}
                    height={30}
                  />
                </span>
                Aussentra Legal
              </h5>
              <h3 className="text-white text-3xl md:text-5xl lg:text-7xl font-medium mb-10">
                We are here for the{" "}
                <span className="text-[#ac835d] italic font-bold">
                  voice of justice
                </span>
              </h3>
              <a
                href="/services"
                className="inline-block relative px-8 py-3 text-white font-medium border border-[#ac835d] rounded-full hover:bg-[#ac835d] transition duration-300 button-3"
              >
                Explore All Services
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

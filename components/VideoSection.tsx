"use client";

import { Play, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaGavel } from "react-icons/fa";

const VideoSection: React.FC = () => {
  return (
    <section
      className="w-full h-[220px]  lg:h-[420px] flex justify-center items-center section-padding video-wrapper relative lg:bg-fixed bg-center bg-contain lg:bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/home/law-firm-promo-video.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex justify-center">
          <div className="text-center mb-4 lg:mb-8">
            <div className="section-subtitle text-white flex justify-center items-center gap-2 text-lg font-medium tracking-wider font-playfair italic">
              <div className="flex items-center justify-center w-10 h-10 bg-[#ac835d] rounded-full mr-1">
                <Image
                  src="/balance-icon.svg"
                  alt="balance-icon"
                  width={30}
                  height={30}
                />{" "}
              </div>
              Watch law firm
            </div>
            <h2 className="section-title text-2xl lg:text-4xl font-bold text-white mt-2 font-playfair">
              Law Firm{" "}
              <span className="text-[#ac835d] italic">Promo Video</span>
            </h2>
          </div>
        </div>

        {/* Video Button */}
        <div className="flex justify-center">
          <a
            className="vid relative z-10"
            href="https://youtu.be/LK_Agkm-_wY"
            target="_blank"
            rel="noopener noreferrer"
          >
           <Youtube className="w-8 h-8 lg:w-12 lg:h-12 text-red-500"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

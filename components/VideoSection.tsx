"use client";

import React from "react";
import { FaGavel } from "react-icons/fa";

const VideoSection: React.FC = () => {
  return (
    <section
      className="w-full h-[420px] flex justify-center items-center section-padding video-wrapper relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/slider/2.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex justify-center">
          <div className="text-center mb-8">
            <div className="section-subtitle text-white flex justify-center items-center gap-2 text-lg font-medium uppercase tracking-wider">
              <div className="flex items-center justify-center w-10 h-10 bg-[#ac835d] rounded-full mr-1">
                <FaGavel className="w-5 h-5 text-white text-xl" />
              </div>
              Watch law firm
            </div>
            <h2 className="section-title text-4xl font-bold text-white mt-2">
              Law Firm <span className="text-[#ac835d]">Promo Video</span>
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
            <div className="vid-butn w-[90px] h-[90px] border-2 border-white rounded-full flex items-center justify-center transition-transform duration-500 hover:scale-90 hover:border-[#ac835d]">
              <span className="icon text-white text-4xl">&#9658;</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

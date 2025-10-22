"use client";

import React from "react";
import { FaGavel } from "react-icons/fa";

interface BannerHeaderProps {
  title: string;
  subtitle?: string;
  caption?: string;
  iconClass?: string;
  backgroundImage?: string;
  overlayDark?: number; // 0–9
}

const BannerHeader: React.FC<BannerHeaderProps> = ({
  title,
  subtitle,
  caption,
  iconClass,
  backgroundImage,
  overlayDark,
}) => {
  return (
    <div
      className="relative flex items-center justify-center h-[60vh] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      data-overlay-dark={overlayDark}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(0,0,0,${overlayDark * 0.1})`,
        }}
      />

      <div className="container relative z-10">
        <div className="row">
          <div className="col-md-12 caption mt-30  text-center">
            <h6 className="inline-flex items-center justify-center font-italic text-white mb-2 text-[21px]">
              <div className="flex items-center justify-center w-12 h-12 bg-[#ac835d] rounded-full mr-1">
                <FaGavel className="w-6 h-6 text-white text-xl" />
              </div>
              <div className="font-playfair italic text-2xl">{caption}</div>
            </h6>
            <h1 className="text-[48px] text-white relative font-playfair">
              {title}{" "}
              {subtitle && (
                <span className="italic text-[#ac835d]">{subtitle}</span>
              )}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;

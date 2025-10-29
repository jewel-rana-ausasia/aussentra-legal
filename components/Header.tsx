"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderData {
  videoUrl?: string;
  fallbackImage: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  iconUrl?: string;
}

const Header: React.FC = () => {
  const [data, setData] = useState<HeaderData | null>(null);

  useEffect(() => {
    fetch("/api/admin/header")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data)
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <header className="relative min-h-screen flex justify-center items-center overflow-hidden header">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${data.fallbackImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {data.videoUrl && (
          <video
            className="w-full h-full object-cover"
            playsInline
            autoPlay
            loop
            muted
          >
            <source src={data.videoUrl} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full v-middle font-playfair">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="w-full text-white text-2xl md:text-4xl  lg:text-5xl xl:text-7xl font-medium mb-6">
            {data.title} <br />
            <span className="text-[#daa22d] italic font-bold">
              {data.subtitle}
            </span>
          </h3>

          <p className="text-white text-sm md:text-lg mb-8 max-w-sm md:max-w-2xl px-2 lg:px-0 lg:max-w-5xl mx-auto leading-relaxed">
            {data.description}
          </p>

          <Link
            href={data.ctaLink}
            className="inline-block relative px-5 lg:px-8 py-2 lg:py-4 text-white font-medium bg-gradient-to-r from-[#daa22d] via-[#b38511] to-[#b0881a] border border-[#ac835d] rounded-full hover:bg-transparent hover:border-white transition duration-300 button-3"
          >
            {data.ctaText}
            <span></span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

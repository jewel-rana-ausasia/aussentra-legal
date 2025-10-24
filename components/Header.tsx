"use client";

import Image from "next/image";
import Link from "next/link";
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
      {/*  <div className="relative z-10 flex items-center justify-center h-full v-middle font-playfair">
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
              <Link
                href="/services"
                className="inline-block relative px-8 py-3 text-white font-medium border border-[#ac835d] rounded-full hover:bg-[#ac835d] transition duration-300 button-3"
              >
                Explore All Services
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full v-middle font-playfair">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="text-center md:w-full">
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

              <h3 className="w-full text-white text-3xl md:text-5xl lg:text-7xl font-medium mb-6">
                Protecting Your Family's
                <br />
                <span className="text-[#ac835d] italic font-bold">
                  Future with Care
                </span>
              </h3>

              <p className="text-white text- md:text-lg mb-8 max-w-sm px-2 lg:px-0 lg:max-w-5xl mx-auto leading-relaxed">
                Sorting out your affairs, managing an estate, or handling a Will
                dispute can be tough, emotional, and take a lot of time. Because
                we focus only on Wills and Estate law, we have the experience
                and knowledge to help you handle your situation smoothly and
                move forward with your life.
              </p>

              <Link
                href="/services"
                className="inline-block relative px-8 py-3 lg:py-4 text-white font-medium bg-[#ac835d] border border-[#ac835d] rounded-full hover:bg-transparent hover:border-white transition duration-300 button-3"
              >
                Explore Our Services
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

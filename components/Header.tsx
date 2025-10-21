"use client";

import React from "react";
import { FaGavel } from "react-icons/fa"; // from Font Awesome

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen flex justify-center items-center overflow-hidden header">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full video-fullscreen-video" data-overlay-dark="5">
        <video
          className="w-full h-full object-cover"
          playsInline
          autoPlay
          loop
          muted
        >
          <source src="https://duruthemes.com/demo/html/lawdit/video.mp4" type="video/mp4" />
          <source src="https://duruthemes.com/demo/html/lawdit/video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div> {/* Optional overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full v-middle">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="text-center lg:w-7/12 md:w-full">
              <h5 className="flex items-center justify-center mb-2 text-white text-xl italic font-normal">
                <span className="flex items-center justify-center w-12 h-12 bg-[#ac835d] rounded-full mr-2">
                  <FaGavel className="w-6 h-6 text-white text-xl" />
                </span>
                Realiable legal solution
              </h5>
              <h3 className="text-white text-5xl lg:text-6xl font-medium mb-8">
                We are here for the <span className="text-[#ac835d] italic font-bold">voice of justice</span>
              </h3>
              <a
                href="#"
                className="inline-block relative px-8 py-3 text-white font-medium border border-[#ac835d] rounded-full hover:bg-[#ac835d] transition duration-300 button-3"
              >
                Explore Company
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

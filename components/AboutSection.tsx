"use client";

import Image from "next/image";
import { FaGavel } from "react-icons/fa";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-20 max-w-7xl mx-auto bg-white about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Subtitle */}
            <div className="flex items-center text-lg font-medium font-playfair">
              <div className="mr-2 text-2xl">
                <span className="flex items-center justify-center w-12 h-12 bg-[#ac835d] rounded-full mr-2">
                  <FaGavel className="w-5 h-5 text-white text-xl" />
                </span>
              </div>
              <span className="italic text-2xl">About law firm</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-playfair">
              We are here to fight against{" "}
              <span className="text-[#ac835d] italic">any violance</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed">
              Lawyer sit amet risus ac duin auctor posuere fanish amet the
              acinia lecratusan risus facilis semper etiam fermen.
            </p>

            {/* List */}
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="text-[#ac835d] mt-1">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-gray-800 text-lg">
                  Full service corporate &amp; business law.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-[#ac835d] mt-1">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-gray-800 text-lg">
                  Reliable and innovative legal solutions.
                </p>
              </li>
            </ul>

            {/* Button */}
            <a
              href="#"
              className="inline-block bg-[#ac835d] text-white px-8 py-3 rounded-full font-semibold relative overflow-hidden group transition-all duration-300"
            >
              Discover more
              <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <motion.div
              className="absolute bottom-6 left-6 bg-white shadow-lg rounded-lg p-4 w-40 text-center overflow-hidden z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <div className="absolute top-[-60px] left-[-10px] w-36 h-36 bg-[#ac835d] rounded-full -z-10"></div>
              <div className="text-6xl font-bold text-white relative z-10">
                20
              </div>
              <div className="text-gray-900 font-serif italic text-lg relative z-10">
                Years of experience
              </div>
            </motion.div>

            <Image
              src="/about-01.jpg"
              alt="About Image"
              width={600}
              height={500}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

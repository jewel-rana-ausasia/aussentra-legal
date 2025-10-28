"use client";

import Image from "next/image";
import { FaGavel } from "react-icons/fa";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-20 px-5 lg:px-0 max-w-7xl mx-auto bg-white about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Title */}
            <h2 className="text-3xl md:text-5xl text-center lg:text-start font-bold text-gray-900 leading-tight font-playfair">
              We are here to fight against{" "}
              <span className="text-primary italic">any violance</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed">
              Aussentra Legal is a law firm focused on providing personal,
              practical, and easy-to-understand legal services for families,
              homebuyers, and business owners. We specialise in property
              transactions, estate planning, wills, probate, and banking law.
              <br />
              <br />
              We know legal matters can be confusing and stressful, so we’re
              here to make the process simple and clear. With fixed-fee pricing
              and straightforward advice, we help you make confident decisions
              without surprises.
              <br />
              <br />
              At Aussentra Legal, we listen carefully, respect your needs, and
              guide you with care every step of the way so you feel supported
              and in control of your legal journey. Our goal is to build lasting
              relationships based on trust, transparency, and respect. We are
              committed to helping you protect what matters most and plan for
              the future with peace of mind.
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
              className="inline-block bg-gradient-to-r from-[#daa22d] via-[#d3a225] to-[#cf9d12] text-white px-8 py-3 rounded-full font-semibold relative overflow-hidden group transition-all duration-300"
            >
              Discover more
              <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/about/about-section.jpg"
              alt="About Image"
              width={800}
              height={600}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

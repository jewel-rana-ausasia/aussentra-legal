"use client";

import Image from "next/image";
import { FaGavel } from "react-icons/fa";

export default function AboutSection2() {
  return (
    <section className="relative py-20 bg-[#1f1b16] about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/about-02.jpg"
              alt="About Image"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="text-white space-y-6">
            {/* Subtitle */}
            <div className="flex items-center text-[#ac835d] text-lg font-medium">
              <div className="mr-2 text-2xl bg-[#ac835d] h-12 w-12 flex justify-center items-center rounded-full">
                <FaGavel className="text-white size-6"/>
              </div>
              <span>People make the difference</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              We here for provide <br/>
              <span className="text-[#ac835d] italic">legal consultancy</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-300 leading-relaxed">
              All people are equal before the law. A good attorney is what makes
              a difference. Lorem aliquam sit amet auctor the done vitae risus
              duise in the miss ranish fermen.
            </p>

            {/* Signature Block */}
            <div className="flex items-center mt-8">
              <Image
                src="/signature.svg"
                alt="Signature"
                width={70}
                height={70}
                className="mr-5 w-[70px]"
              />
              <div>
                <div className="text-[18px] text-gray-400">
                  President &amp; Co-Founder
                </div>
                <div className="text-[18px] font-medium text-[#ac835d] font-sans">
                  Emily H. McGill
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

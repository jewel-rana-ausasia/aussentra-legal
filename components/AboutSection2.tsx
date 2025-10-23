"use client";

import Image from "next/image";
import { FaGavel } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutSection2() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative py-20 bg-[#1f1b16] about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-10 lg:p-0 gap-24">
          {/* Left Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <Image
              src="/about-02.jpg"
              alt="About Image"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="text-white space-y-6 font-playfair"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            {/* Subtitle */}
            <div className="flex items-center text-lg font-medium">
              <div className="mr-2 text-2xl bg-[#ac835d] h-12 w-12 flex justify-center items-center rounded-full">
                <FaGavel className="text-white size-6" />
              </div>
              <span className="italic text-xl">People make the difference</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              We here for provide <br />
              <span className="text-[#ac835d] italic">legal consultancy</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-400 leading-relaxed">
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
                <div className="text-[18px] text-gray-300">
                  President &amp; Co-Founder
                </div>
                <div className="text-[18px] font-medium text-[#ac835d] font-sans">
                  Emily H. McGill
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

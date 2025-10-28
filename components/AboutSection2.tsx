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
              src="/home/we-here-for-provide-legal-consultancy.jpg"
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
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
              Legal Help You Can
              <br />
              <span className="text-primary italic">Count On</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-400 leading-relaxed">
              Everyone deserves a fair go under the law. Navigating legal
              matters can be complex and overwhelming, but having the right
              lawyer by your side makes all the difference. Our experienced
              legal team is committed to providing clear, practical, and
              tailored guidance for every situation. We take the time to
              understand your unique circumstances, explain your options in
              plain language, and empower you to make informed decisions. With
              our support, you can move forward with confidence, knowing that
              your rights are protected and your interests are our priority.
            </p>

            {/* Signature Block */}
            {/*  <div className="flex items-center mt-8">
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
                <div className="text-[18px] font-medium text-primary font-sans">
                  Emily H. McGill
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

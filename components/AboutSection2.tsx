"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ✅ Interface for AboutSection2 data
interface AboutSection2Data {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export default function AboutSection2() {
  const [data, setData] = useState<AboutSection2Data | null>(null);

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

  useEffect(() => {
    fetchAboutSection();
  }, []);

  const fetchAboutSection = async () => {
    try {
      const res = await fetch("/api/admin/about-section-2");
      const json: AboutSection2Data = await res.json();
      setData(json);
    } catch (err) {
      console.error("Failed to fetch About Section 2", err);
    }
  };

  if (!data) {
    return (
      <div className="w-full h-60 flex items-center justify-center text-lg text-gray-500">
        Loading About Section...
      </div>
    );
  }

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
              src={data.imageUrl}
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
              {data.title}{" "}
              <span className="text-primary italic">{data.subtitle}</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-400 leading-relaxed">{data.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

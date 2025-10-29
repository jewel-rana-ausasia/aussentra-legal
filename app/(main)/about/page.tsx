"use client";

import AboutSection from "@/components/AboutSection";
import AboutSection2 from "@/components/AboutSection2";
import BannerHeader from "@/components/BannerHeader";
import CaseStudyBox from "@/components/CaseStudyBox";
import OurSuccesses from "@/components/OurSuccesses";
import Team from "@/components/TeamMember ";
import VideoSection from "@/components/VideoSection";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const about = {
    title: "Legal Support You Can",
    subtitle: "Rely On",
    description: `Sorting out your affairs, managing an estate, or handling a Will dispute can be tough, emotional, and take a lot of time. Because we focus only on Wills and Estate law, we have the experience and knowledge to help you handle your situation smoothly and move forward with your life.

Our team is also trained in dispute resolution, so we work hard to help you solve any disagreements quickly and in the most cost-effective way possible. At Aussentra Legal, we’re here to help you protect what matters most: your family, your home, and your future.

Whether you’re buying or selling a property, planning your Will, or managing a loved one’s estate, we provide clear and caring legal advice every step of the way. With our support, you can feel confident and at ease as you take important steps in life.`,
    listItems: [
      "Specialised in Wills and Estate law.",
      "Experienced in dispute resolution and estate planning.",
      "Clear, caring, and cost-effective legal advice.",
    ],
    buttonText: "Learn More",
    buttonLink: "/services",
    imageUrl: "/about/aussentra-legal-your-partner-in-justice.jpg",
  };

  const items = [
    {
      id: 1,
      icon: "/legal-production.png",
      title: "Transparent Costs",
      description:
        "We provide clear, competitive pricing for Wills and Estate services, helping you plan ahead without unexpected fees.",
    },
    {
      id: 2,
      icon: "/private.png",
      title: "Secure Your Family’s Future",
      description:
        "Our initiative supports families in securing their futures, offering guidance on estate planning, Wills, and asset protection.",
    },
    {
      id: 3,
      icon: "/winning-awards.png",
      title: "Estate Planning Support",
      description:
        "We help clients navigate estate matters, from preparing Wills to resolving disputes, ensuring your wishes and interests are protected.",
    },
  ];

  const data = {
    title: "Your Trusted Legal",
    subtitle: "Partners",
    description: `At Aussentra Legal, we believe that the right legal guidance can change outcomes. 
    We provide expert consultancy with fairness, integrity, and care at the heart of everything we do. 
    Every client is treated equally, and we are committed to supporting you through every step of your legal journey.`,
    imageUrl: "/about/legal-help-you-can-count-on.jpg", // update this with your actual image
  };


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
    <div>
      <BannerHeader
        title="About"
        subtitle="Aussentra Legal"
        caption="Who we are"
        iconClass="flaticon-courthouse"
        backgroundImage="/about/about-law-firm.jpg"
        overlayDark={5}
      />

      {/* <AboutSection /> */}
      <section className="relative py-20 px-5 lg:px-0 max-w-7xl mx-auto bg-white about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight font-playfair">
                {about.title}{" "}
                {about.subtitle && (
                  <span className="text-primary italic">{about.subtitle}</span>
                )}
              </h2>

              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {about.description}
              </p>

              <ul className="space-y-3">
                {about.listItems.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="text-[#ac835d] mt-1">
                      <Check className="w-5 h-5" />
                    </div>
                    <p className="text-gray-800 text-lg">{item}</p>
                  </li>
                ))}
              </ul>

              <a
                href={about.buttonLink}
                className="inline-block bg-gradient-to-r from-[#daa22d] via-[#d3a225] to-[#cf9d12] text-white px-8 py-3 rounded-full font-semibold relative overflow-hidden group transition-all duration-300"
              >
                {about.buttonText}
                <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src={about.imageUrl}
                alt="About Aussentra Legal"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-5 lg:px-0 py-8 case-study-box bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.id} className="flex items-start space-x-6 mt-5">
                <div className="flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-contain w-12 h-12"
                  />
                </div>
                <div className="cont">
                  <h5 className="text-[21px] font-semibold font-playfair text-gray-900 mb-2">
                    {item.title}
                  </h5>
                  <p className="text-[16px] text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
                {data.title}{" "}
                <span className="text-primary italic">{data.subtitle}</span>
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {data.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <CaseStudyBox /> */}
      {/* <AboutSection2 /> */}
      <OurSuccesses />
      <VideoSection />
      <Team />
    </div>
  );
};

export default About;

"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaArrowRight,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  const services = [
    "Conveyancing",
    "Immigration law",
    "Debt recovery",
    "Insolvency",
    "All services",
  ];

  const quickLinks = ["Home", "About Us", "Services", "Faq", "Contact"];

  // Function to get href for any navigation item
  const getHref = (label: string) => {
    switch (label) {
      case "Home":
        return "/";
      case "About Us":
        return "/about";
      case "Services":
        return "/services";
      case "Faq":
        return "/faq";
      case "Contact":
        return "/contact";
      case "Conveyancing":
        return "/services/conveyancing";
      case "Immigration law":
        return "/services/immigration-law";
      case "Debt recovery":
        return "/services/debt-recovery";
      case "Insolvency":
        return "/services/insolvency";
      case "All services":
        return "/services";
      default:
        // For other labels like services
        return "/";
    }
  };

  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <>
      {/* Get in Touch */}
      <section className="relative">
        <div
          className="lg:bg-fixed bg-cover  bg-center bg-no-repeat relative py-16 lg:py-20"
          style={{
            backgroundImage:
              "url('/home/all-people-are-equal-before-the-law.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="max-w-7xl mx-auto h-[80px] lg:h-[180px] flex justify-between items-center relative z-10 px-5 lg:px-0">
            <div className="flex flex-col justify-center mx-auto lg:grid lg:grid-cols-12 items-center gap-2">
              {/* Text */}
              <div className="lg:col-span-8 flex justify-center items-center text-white text-center lg:text-left">
                <h2 className="text-sm md:text-xl lg:text-4xl font-bold leading-snug font-playfair">
                  The law protects all, ensuring equal fairness.
                  <br />
                  <span className="text-primary italic">
                    A skilled solicitor
                  </span>
                  &nbsp;makes all the difference.
                </h2>
              </div>

              {/* Call Center */}
              <div className="lg:col-span-3 lg:col-start-10 flex items-center justify-center lg:justify-start lg:mt-0">
                <div className="flex items-center rounded-lg p-4 gap-4">
                  <div className="text-xl lg:text-3xl bg-primary w-10 h-10 lg:w-14 lg:h-14 rounded-full flex justify-center items-center">
                    <Phone className="text-white size-4 md:size-5 lg:size-6" />
                  </div>
                  <div className="text-white">
                    <p className="text-sm md:text-lg lg:text-xl font-playfair italic text-primary mb-1">
                      Get in touch
                    </p>
                    <a
                      href="tel:1234567890"
                      className="font-semibold text-sm md:text-lg lg:text-xl hover:underline"
                    >
                      +61 123 456 7890
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14100c] text-white px-5 lg:px-0">
        {/* Top */}
        <div className="max-w-7xl mx-auto py-10 lg:py-20 pb-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo + Description + Social */}
            <div className="space-y-4">
              <Link href="/" className="mb-5">
                <Image
                  src="/aussentra-legal-logo-white.png"
                  alt="Logo"
                  width={180}
                  height={80}
                />
              </Link>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                At Aussentra Legal, we provide expert legal services across
                Sydney. We’re here to protect your interests and guide you
                through life’s key decisions with confidence.
              </p>
              <div className="social-icons mt-4">
                <ul className="flex space-x-2">
                  <li className="w-10 h-10 flex items-center justify-center bg-primary rounded-full hover:translate-y-[-3px] transition-transform">
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="w-10 h-10 flex items-center justify-center bg-primary rounded-full hover:translate-y-[-3px] transition-transform">
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="w-10 h-10 flex items-center justify-center bg-primary rounded-full hover:translate-y-[-3px] transition-transform">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h3 className="text-lg lg:text-2xl mb-2">Contact</h3>
              <p className="text-gray-400 text-sm lg:text-base leading-loose">
                Sydney NSW, Australia
              </p>
              <div className="phone text-gray-400 text-sm lg:text-lg">
                <a href="tel:+61212345678">+61 123 567 8910</a>
              </div>
              <div className="mail text-gray-400 text-sm lg:text-lg">
                <a href="mailto:hello@aussentralegal.com.au">
                  info@aussentralegal.com.au
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-lg lg:text-2xl mb-2">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={getHref(service)}
                      className="text-gray-400 text-sm lg:text-base hover:text-primary transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg lg:text-2xl mb-2">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((label, index) => (
                  <li key={index}>
                    <Link
                      href={getHref(label)}
                      className="text-gray-400 text-sm lg:text-base hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#91765a33] py-6">
          <div className="container mx-auto px-4 flex justify-center">
            <p className="text-gray-400 text-xs lg:text-sm text-center">
              Copyright © {currentYear}{" "}
              <span className="text-white">Aussentra Legal</span> | Website by{" "}
              <span className="text-white">Aus Asia Online</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

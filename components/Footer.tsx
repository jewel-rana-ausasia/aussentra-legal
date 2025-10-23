"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
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
      default:
        // For other labels like services
        return "/";
    }
  };

  return (
    <>
      {/* Get in Touch */}
      <section className="relative">
        <div
          className="bg-fixed bg-contain lg:bg-cover  bg-center relative py-16 lg:py-20"
          style={{
            backgroundImage:
              "url('/home/all-people-are-equal-before-the-law.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="max-w-7xl mx-auto h-[180px] flex justify-between items-center relative z-10 px-8 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
              {/* Text */}
              <div className="lg:col-span-8 text-white text-center lg:text-left">
                <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-snug font-playfair">
                  All people are equal before the law.
                  <br />
                  <span className="text-[#ac835d] italic">A good attorney</span>
                  &nbsp;is what makes a difference.
                </h2>
              </div>

              {/* Call Center */}
              <div className="lg:col-span-3 lg:col-start-10 flex items-center justify-center lg:justify-start mt-6 lg:mt-0">
                <div className="flex items-center rounded-lg p-4 gap-4">
                  <div className="text-3xl bg-[#ac835d] w-14 h-14 rounded-full flex justify-center items-center">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div className="text-white">
                    <p className="text-sm md:text-xl font-playfair italic text-[#ac835d] mb-1">
                      Get in touch
                    </p>
                    <a
                      href="tel:1234567890"
                      className="font-semibold text-2xl md:text-xl hover:underline"
                    >
                      123 456 7890
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14100c] text-white px-10 lg:px-0">
        {/* Top */}
        <div className="max-w-7xl mx-auto py-[100px] pb-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo + Description + Social */}
            <div className="space-y-4">
              <div className="logo mb-5">
                <Image
                  src="/aussentra-legal-logo-white.png"
                  alt="Logo"
                  width={180}
                  height={80}
                />
              </div>
              <p className="text-gray-400 leading-loose">
                Lorem ipsum is simply dummy text of the rinte and type settin in
                the fermen.
              </p>
              <div className="social-icons mt-4">
                <ul className="flex space-x-2">
                  <li className="w-10 h-10 flex items-center justify-center bg-[#ac835d] rounded-full hover:translate-y-[-3px] transition-transform">
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="w-10 h-10 flex items-center justify-center bg-[#ac835d] rounded-full hover:translate-y-[-3px] transition-transform">
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="w-10 h-10 flex items-center justify-center bg-[#ac835d] rounded-full hover:translate-y-[-3px] transition-transform">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h3 className="text-2xl mb-2">Contact</h3>
              <p className="text-gray-400 leading-loose">
                0665 Broadway st.
                <br />
                10234 NY, USA
              </p>
              <div className="phone text-gray-400 text-lg">
                <a href="tel:+11235678910">+1 123 567 8910</a>
              </div>
              <div className="mail text-gray-400 text-lg">
                <a href="mailto:legal@lawdit.com">legal@lawdit.com</a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-2xl mb-2">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-400 hover:text-[#ac835d] transition-colors cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl mb-2">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((label, index) => (
                  <li key={index}>
                    <a
                      href={getHref(label)}
                      className="text-gray-400 hover:text-[#ac835d] transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#91765a33] py-6">
          <div className="container mx-auto px-4 flex justify-center">
            <p className="text-gray-400 text-sm text-center">
              Copyright © 2025 <span className="text-white">HR TOOLBOX</span> |
              Website by <span className="text-white">Aus Asia Online</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

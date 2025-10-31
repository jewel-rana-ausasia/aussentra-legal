"use client";

import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaArrowRight, FaGavel, FaPhoneAlt, FaUser } from "react-icons/fa";
import Image from "next/image";
import ContactCard from "./ContactCard";

const ContactSection = () => {
  return (
    <section className="py-20 lg:px-0">
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div>
            {/* Title */}
            <h2 className="text-2xl lg:text-4xl font-semibold mb-10 font-playfair mt-5">
              Do you need help?{" "}
              <span className="text-primary block mt-2 italic">
                Contact with us now!
              </span>
            </h2>

            {/* Address */}
            <div className="flex items-start mb-6">
              <div className="text-primary bg-[#f7f6f4] w-12 lg:w-[60px] h-12 lg:h-[60px] flex items-center justify-center rounded-full mr-4">
                <FaLocationDot className="text-lg lg:text-2xl" />
              </div>
              <div>
                <h5 className="text-[#14100c] text-lg lg:text-xl font-semibold font-playfair">
                  Address
                </h5>

                <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                  Sydney NSW, Australia
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start mb-6">
              <div className="text-primary bg-[#f7f6f4] w-12 lg:w-[60px] h-12 lg:h-[60px] flex items-center justify-center rounded-full mr-4">
                <FaPhone className="text-lg lg:text-2xl" />
              </div>
              <div>
                <h5 className="text-[#14100c] text-lg lg:text-xl font-playfair font-semibold">
                  Phone
                </h5>
                <p className="text-slate-600 text-sm lg:text-base">
                  <a href="tel:+11235678910" className="hover:underline">
                    +61 123 567 8910
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="text-primary bg-[#f7f6f4] w-12 lg:w-[60px] h-12 lg:h-[60px] flex items-center justify-center rounded-full mr-4">
                <FaEnvelope className="text-lg lg:text-2xl" />
              </div>
              <div>
                <h5 className="text-[#14100c] text-lg lg:text-xl font-playfair font-semibold">
                  E-Mail
                </h5>
                <p className="text-slate-600 text-sm lg:text-base">
                  info@aussentralegal.com.au
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <ContactCard />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

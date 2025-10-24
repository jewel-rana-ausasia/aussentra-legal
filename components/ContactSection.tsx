"use client";

import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaArrowRight, FaGavel, FaPhoneAlt, FaUser } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-20 lg:px-0">
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div>
            {/* Subtitle */}
            <div className="flex items-center gap-2 text-gray-800 text-xl mb-2 font-playfair italic">
              <span className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#ac835d] rounded-full">
                <FaGavel className="w-6 h-6 text-white" />
              </span>
              <span className="font-medium">Get in touch</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-semibold mb-10 font-playfair mt-5">
              Do you need help?{" "}
              <span className="text-[#ac835d] block mt-2 italic">
                Contact with us now!
              </span>
            </h2>

            {/* Address */}
            <div className="flex items-start mb-6">
              <div className="text-[#ac835d] bg-[#f7f6f4] w-[60px] h-[60px] flex items-center justify-center rounded-full mr-4">
                <FaLocationDot className="text-2xl" />
              </div>
              <div>
                <h5 className="text-[#14100c] text-xl font-semibold font-playfair">
                  Address
                </h5>
                <p className="text-slate-600">0665 Broadway NY, 10001 USA</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start mb-6">
              <div className="text-[#ac835d] bg-[#f7f6f4] w-[60px] h-[60px] flex items-center justify-center rounded-full mr-4">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <h5 className="text-[#14100c] text-xl font-playfair font-semibold">
                  Phone
                </h5>
                <p className="text-slate-600">
                  <a href="tel:+11235678910" className="hover:underline">
                    +1 123 567 8910
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="text-[#ac835d] bg-[#f7f6f4] w-[60px] h-[60px] flex items-center justify-center rounded-full mr-4">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h5 className="text-[#14100c] text-xl font-playfair font-semibold">
                  E-Mail
                </h5>
                <p className="text-slate-600">legal@lawdit.com</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-gray-200 font-playfair">
            <div className="mb-5">
              <h2 className="text-3xl font-bold  text-gray-900">
                Let's Get In Touch<span className="text-[#ac835d]">.</span>
              </h2>
            </div>

            <form className="space-y-6">
              {/* First + Last Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Enter your text.."
                  maxLength={300}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3.5 h-32 resize-none text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1.5">
                  Maximum 300 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#ac835d] text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#956f4d] shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Submit Form <FaArrowRight className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

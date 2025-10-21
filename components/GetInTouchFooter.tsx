"use client";

import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF, FaArrowRight, FaPhone } from "react-icons/fa";

export default function GetInTouchFooter() {
  return (
    <>
      {/* Get in Touch */}
      <section className="relative">
        <div
          className="bg-fixed bg-cover bg-center relative py-20"
          style={{ backgroundImage: "url('/img/slider/12.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
              {/* Text */}
              <div className="lg:col-span-8 text-white text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                  All people are equal before the law. <span className="text-[#ac835d]">A good attorney</span> is what makes a difference.
                </h2>
              </div>

              {/* Call Center */}
              <div className="lg:col-span-3 lg:col-start-10 flex items-center justify-center lg:justify-start mt-6 lg:mt-0">
                <div className="flex items-center bg-[#ac835d] rounded-lg p-4 gap-4">
                  <div className="text-3xl">
                    <FaPhone />
                  </div>
                  <div className="text-white">
                    <p className="text-sm md:text-base">Get in touch</p>
                    <a href="tel:1234567890" className="font-semibold text-lg md:text-xl hover:underline">
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
      <footer className="bg-[#14100c] text-white">
        {/* Top */}
        <div className="py-[100px] pb-5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Logo + Description + Social */}
              <div className="md:col-span-4">
                <div className="space-y-4">
                  <div className="logo mb-5">
                    <Image src="/img/logo.png" alt="Logo" width={150} height={50} />
                  </div>
                  <p className="text-gray-400">
                    Lorem ipsum is simply dummy text of the rinte and type settin in the fermen.
                  </p>
                  <div className="social-icons mt-4">
                    <ul className="flex space-x-2">
                      <li className="w-10 h-10 flex items-center justify-center bg-[#ac835d] rounded-full hover:translate-y-[-3px] transition-transform">
                        <a href="#"><FaInstagram /></a>
                      </li>
                      <li className="w-10 h-10 flex items-center justify-center bg-[#ac835d] rounded-full hover:translate-y-[-3px] transition-transform">
                        <a href="#"><FaTwitter /></a>
                      </li>
                      <li className="w-10 h-10 flex items-center justify-center bg-[#ac835d] rounded-full hover:translate-y-[-3px] transition-transform">
                        <a href="#"><FaFacebookF /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="md:col-span-3 md:col-start-6 space-y-3">
                <h3 className="text-2xl mb-2">Contact</h3>
                <p className="text-gray-400 leading-relaxed">
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

              {/* Subscribe */}
              <div className="md:col-span-4">
                <h3 className="text-2xl mb-2">Subscribe</h3>
                <p className="text-gray-400 mb-4">
                  Want to be notified about our services. Sign up and we'll send you a notification by email.
                </p>
                <div className="newsletter relative w-full">
                  <form className="relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full py-4 px-5 pr-[90px] rounded-full bg-transparent border border-[#91765a33] text-gray-400 placeholder-gray-400 outline-none"
                    />
                    <button
                      type="submit"
                      className="absolute top-1/2 -translate-y-1/2 right-1 w-12 h-12 rounded-full bg-[#ac835d] text-white flex items-center justify-center transition-transform duration-700 hover:rotate-[-45deg]"
                    >
                      <FaArrowRight />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#91765a33] py-6">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="links mb-4 lg:mb-0">
              <ul className="flex flex-wrap gap-4 text-white">
                <li><a href="index.html" className="hover:text-[#ac835d]">Home</a></li>
                <li><a href="about.html" className="hover:text-[#ac835d]">About</a></li>
                <li><a href="practice-areas.html" className="hover:text-[#ac835d]">Practice areas</a></li>
                <li><a href="team.html" className="hover:text-[#ac835d]">Attorneys</a></li>
                <li><a href="blog.html" className="hover:text-[#ac835d]">Blog</a></li>
              </ul>
            </div>
            <div className="text-gray-400 text-sm text-right">
              <p>
                Copyright 2025 by <a href="#" className="text-white hover:text-[#ac835d]">DuruThemes</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

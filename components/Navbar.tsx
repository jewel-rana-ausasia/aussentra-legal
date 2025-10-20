"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 bg-transparent transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center h-[120px] px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={135}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl focus:outline-none"
        >
          <i className="ti-menu"></i>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen
              ? "block absolute top-[120px] left-0 w-full bg-[#14100c] p-6"
              : "hidden"
          } lg:flex lg:items-center lg:static lg:w-auto lg:bg-transparent transition-all duration-300`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-6 text-white text-[18px]">
            {/* Home Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("home")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#ac835d]">
                Home <ChevronDown className="w-3 h-3" />
              </button>
              <ul
                className={`absolute left-0 mt-2 bg-[#14100c] rounded-md shadow-md w-[210px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
              >
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:text-[#ac835d]"
                  >
                    Home Image
                  </Link>
                </li>
                <li>
                  <Link
                    href="/index2"
                    className="block px-4 py-2 hover:text-[#ac835d]"
                  >
                    Home Slider
                  </Link>
                </li>
                <li>
                  <Link
                    href="/index3"
                    className="block px-4 py-2 hover:text-[#ac835d]"
                  >
                    Home Video
                  </Link>
                </li>
                <li>
                  <Link
                    href="/index4"
                    className="block px-4 py-2 hover:text-[#ac835d]"
                  >
                    Home Slideshow
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/about" className="hover:text-[#ac835d]">
                About
              </Link>
            </li>

            <li>
              <Link href="/practice-areas" className="hover:text-[#ac835d]">
                Practice areas
              </Link>
            </li>

            <li>
              <Link href="/case-study" className="hover:text-[#ac835d]">
                Case Study
              </Link>
            </li>

            <li>
              <Link href="/attorneys" className="hover:text-[#ac835d]">
                Attorneys
              </Link>
            </li>

            {/* Pages Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("pages")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#ac835d]">
                Pages <ChevronDown className="w-3 h-3" />
              </button>
              <ul
                className={`absolute left-0 mt-2 bg-[#14100c] rounded-md shadow-md w-[210px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
              >
                <li>
                  <Link href="/pricing" className="block px-4 py-2 hover:text-[#ac835d]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/testimonial" className="block px-4 py-2 hover:text-[#ac835d]">
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link href="/gallery-image" className="block px-4 py-2 hover:text-[#ac835d]">
                    Image Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/gallery-video" className="block px-4 py-2 hover:text-[#ac835d]">
                    Video Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="block px-4 py-2 hover:text-[#ac835d]">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/404" className="block px-4 py-2 hover:text-[#ac835d]">
                    404 Page
                  </Link>
                </li>
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("blog")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#ac835d]">
                Blog <ChevronDown className="w-3 h-3" />
              </button>
              <ul
                className={`absolute left-0 mt-2 bg-[#14100c] rounded-md shadow-md w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
              >
                <li>
                  <Link href="/blog" className="block px-4 py-2 hover:text-[#ac835d]">
                    Blog 1
                  </Link>
                </li>
                <li>
                  <Link href="/blog2" className="block px-4 py-2 hover:text-[#ac835d]">
                    Blog 2
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/contact" className="hover:text-[#ac835d]">
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Button */}
          <div className="mt-6 lg:mt-0 lg:ml-8">
            <Link
              href="/contact"
              className="border border-[#ac835d] text-white px-6 py-2 rounded-full hover:bg-[#ac835d] transition-all"
            >
              Free consultant
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

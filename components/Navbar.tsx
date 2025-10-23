"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Info, Briefcase, HelpCircle, Mail } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: <Home className="w-4 h-4 mr-2" /> },
  { label: "About Us", href: "/about", icon: <Info className="w-4 h-4 mr-2" /> },
  { label: "Services", href: "/services", icon: <Briefcase className="w-4 h-4 mr-2" /> },
  { label: "Faq", href: "/faq", icon: <HelpCircle className="w-4 h-4 mr-2" /> },
  { label: "Contact Us", href: "/contact", icon: <Mail className="w-4 h-4 mr-2" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? "fixed top-0 left-0 bg-[#14100c] shadow-md"
          : "absolute top-0 left-0 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[85px] px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/aussentra-legal-logo-white.png"
            alt="Logo"
            width={135}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen
              ? "block absolute top-[85px] left-0 w-full bg-[#14100c] p-6"
              : "hidden"
          } lg:flex lg:items-center lg:static lg:w-auto lg:bg-transparent transition-all duration-300`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-6 text-[18px]">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center hover:text-[#ac835d] ${
                    pathname === item.href ? "text-[#ac835d]" : "text-white"
                  }`}
                >
                  {/* Show icon only on mobile */}
                  {item.icon && <span className="block lg:hidden">{item.icon}</span>}
                  <span className="mb-0">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Button */}
          <div className="mt-6 lg:mt-0 lg:ml-8">
            <Link
              href="/contact"
              className="border border-[#ac835d] text-white px-5 py-3 text-sm rounded-full hover:bg-[#ac835d] transition-all"
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

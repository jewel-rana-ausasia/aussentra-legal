"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    submenu: [
      { label: "Conveyancing", href: "/services/conveyancing" },
      { label: "Immigration Law", href: "/services/immigration" },
      { label: "Debt Recovery", href: "/services/debt-recovery" },
      { label: "Family Law", href: "/services/family-law" },
      { label: "Wills & Estate", href: "/services/wills-estate" },
    ],
  },
  { label: "Faq", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[120px] px-4">
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
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`relative group`}
                onMouseEnter={() =>
                  item.submenu ? setActiveDropdown(item.label) : null
                }
                onMouseLeave={() =>
                  item.submenu ? setActiveDropdown(null) : null
                }
              >
                {item.submenu ? (
                  <>
                    <button className="flex items-center gap-1 hover:text-[#ac835d]">
                      {item.label} <ChevronDown className="w-3 h-3" />
                    </button>
                    <ul
                      className={`absolute left-0 mt-2 bg-[#14100c] rounded-md shadow-md w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
                    >
                      {item.submenu.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 hover:text-[#ac835d]"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href!} className="hover:text-[#ac835d]">
                    {item.label}
                  </Link>
                )}
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

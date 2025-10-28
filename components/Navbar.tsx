// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, Home, Info, Briefcase, HelpCircle, Mail } from "lucide-react";

// interface NavItem {
//   label: string;
//   href: string;
//   icon?: React.ReactNode;
// }

// const navItems: NavItem[] = [
//   { label: "Home", href: "/", icon: <Home className="w-4 h-4 mr-2" /> },
//   {
//     label: "About Us",
//     href: "/about",
//     icon: <Info className="w-4 h-4 mr-2" />,
//   },
//   {
//     label: "Services",
//     href: "/services",
//     icon: <Briefcase className="w-4 h-4 mr-2" />,
//   },
//   { label: "Faq", href: "/faq", icon: <HelpCircle className="w-4 h-4 mr-2" /> },
//   {
//     label: "Contact Us",
//     href: "/contact",
//     icon: <Mail className="w-4 h-4 mr-2" />,
//   },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();
//   const handleLinkClick = () => setIsOpen(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "fixed top-0 left-0 bg-[#14100c] shadow-md"
//           : "absolute top-0 left-0 bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center h-[85px] px-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/aussentra-legal-logo-white.png"
//             alt="Logo"
//             width={180}
//             height={80}
//             className="object-contain"
//           />
//         </Link>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-white text-2xl focus:outline-none"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Nav Links */}
//         <div
//           className={`${
//             isOpen
//               ? "block absolute top-[85px] left-0 w-full bg-[#14100c] p-6"
//               : "hidden"
//           } lg:flex lg:items-center lg:static lg:w-auto lg:bg-transparent transition-all duration-300`}
//         >
//           <ul className="flex flex-col lg:flex-row lg:items-center gap-6 text-[18px]">
//             {navItems.map((item) => (
//               <li key={item.label}>
//                 <Link
//                   href={item.href}
//                   onClick={handleLinkClick} // <- Add this
//                   className={`flex items-center hover:text-primary ${
//                     pathname === item.href ? "text-primary" : "text-white"
//                   }`}
//                 >
//                   {/* Show icon only on mobile */}
//                   {item.icon && (
//                     <span className="block lg:hidden">{item.icon}</span>
//                   )}
//                   <span className="mb-0">{item.label}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Right Button */}
//           <div className="mt-6 lg:mt-0 lg:ml-8">
//             <Link
//               href="/contact"
//               onClick={handleLinkClick} // <- Add this
//               className="border border-primary text-white px-5 py-3 text-sm rounded-full hover:bg-[#ac835d] transition-all"
//             >
//               Free consultant
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;










"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Info, Briefcase, HelpCircle, Mail } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  order: number;
}

interface NavbarData {
  logoUrl: string;
  ctaText: string;
  ctaLink: string;
  navItems: NavItem[];
}

const iconMap: { [key: string]: React.ReactNode } = {
  home: <Home className="w-4 h-4 mr-2" />,
  info: <Info className="w-4 h-4 mr-2" />,
  briefcase: <Briefcase className="w-4 h-4 mr-2" />,
  help: <HelpCircle className="w-4 h-4 mr-2" />,
  mail: <Mail className="w-4 h-4 mr-2" />,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState<NavbarData | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch navbar data from API
  useEffect(() => {
    fetch("/api/admin/navbar")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error(err));
  }, []);

  if (!data) return null; // render nothing while loading

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        scrolled ? "fixed top-0 left-0 bg-[#14100c] shadow-md" : "absolute top-0 left-0 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[85px] px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={data.logoUrl} alt="Logo" width={180} height={80} className="object-contain" />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? "block absolute top-[85px] left-0 w-full bg-[#14100c] p-6" : "hidden"
          } lg:flex lg:items-center lg:static lg:w-auto lg:bg-transparent transition-all duration-300`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-6 text-[18px]">
            {data.navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`flex items-center hover:text-primary ${
                    pathname === item.href ? "text-primary" : "text-white"
                  }`}
                >
                  {item.icon && <span className="block lg:hidden">{iconMap[item.icon]}</span>}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-6 lg:mt-0 lg:ml-8">
            <Link
              href={data.ctaLink}
              onClick={handleLinkClick}
              className="border border-primary text-white px-5 py-3 text-sm rounded-full hover:bg-[#ac835d] transition-all"
            >
              {data.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

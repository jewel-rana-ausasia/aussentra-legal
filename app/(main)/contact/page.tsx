"use client";

import AboutSection from "@/components/AboutSection";
import AboutSection2 from "@/components/AboutSection2";
import BannerHeader from "@/components/BannerHeader";
import CaseStudyBox from "@/components/CaseStudyBox";
import ContactSection from "@/components/ContactSection";
import OurSuccesses from "@/components/OurSuccesses";
import Team from "@/components/TeamMember ";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";
import { useEffect, useState } from "react";

const ContactPage: React.FC = () => {
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsXL(window.innerWidth >= 1280);

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const bannerImage = isXL
    ? "/about/lawyers-holding-books-law-library.jpg"
    : "/about/about-law-firm.jpg";
  return (
    <div>
      <BannerHeader
        title="Contact"
        subtitle="Us"
        caption="Get in touch"
        iconClass="flaticon-courthouse"
        backgroundImage={bannerImage}
        overlayDark={5}
      />

      <ContactSection />
    </div>
  );
};

export default ContactPage;

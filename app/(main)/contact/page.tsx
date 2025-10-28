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

const ContactPage: React.FC = () => {
  return (
    <div>
      <BannerHeader
        title="Contact"
        subtitle="Info"
        caption="Get in touch"
        iconClass="flaticon-courthouse"
        backgroundImage="/about/about-law-firm.jpg"
        overlayDark={5}
      />

    <ContactSection />
      

    </div>
  );
};

export default ContactPage;

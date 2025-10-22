"use client";

import AboutSection from "@/components/AboutSection";
import AboutSection2 from "@/components/AboutSection2";
import BannerHeader from "@/components/BannerHeader";
import CaseStudyBox from "@/components/CaseStudyBox";
import OurSuccesses from "@/components/OurSuccesses";
import Team from "@/components/TeamMember ";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div>
      <BannerHeader
        title="About"
        subtitle="Aussentra Legal"
        caption="Who we are"
        iconClass="flaticon-courthouse"
        backgroundImage="/slider/1.jpg"
        overlayDark={5}
      />

      <AboutSection />
      <CaseStudyBox />
      <AboutSection2 />
      <OurSuccesses />
      <VideoSection />
      <Team />

    </div>
  );
};

export default About;

import AboutSection from "@/components/AboutSection";
import AboutSection2 from "@/components/AboutSection2";
import CaseStudyBox from "@/components/CaseStudyBox";
import Header from "@/components/Header";
import ServiceSection from "@/components/ServiceSection";
import Team from "@/components/TeamMember ";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutSection />
      <CaseStudyBox />
      <AboutSection2 />
      <ServiceSection />
      <VideoSection />
      <Testimonials />
      <Team />
    </div>
  );
}

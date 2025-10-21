import AboutSection from "@/components/AboutSection";
import AboutSection2 from "@/components/AboutSection2";
import CaseStudy from "@/components/CaseStudy";
import CaseStudyBox from "@/components/CaseStudyBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ServiceSection from "@/components/ServiceSection";
import Team from "@/components/TeamMember ";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Header />
    <AboutSection />
    <CaseStudyBox />
    <AboutSection2 />
    <ServiceSection />
    <VideoSection />
    <Testimonials />
    <Team />
    <Footer />
   </div>
  );
}

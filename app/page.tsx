import AboutSection from "@/components/AboutSection";
import AboutSection2 from "@/components/AboutSection2";
import CaseStudy from "@/components/CaseStudy";
import CaseStudyBox from "@/components/CaseStudyBox";
import Footer from "@/components/Footer";
import GetInTouchFooter from "@/components/GetInTouchFooter";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
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
    <CaseStudy />
    <VideoSection />
    <Testimonials />
    <Team />
    {/* <GetInTouchFooter /> */}
    <Footer />
   </div>
  );
}

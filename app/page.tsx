import AboutSection from "@/components/AboutSection";
import AboutSection2 from "@/components/AboutSection2";
import CaseStudy from "@/components/CaseStudy";
import CaseStudyBox from "@/components/CaseStudyBox";
import Footer from "@/components/Footer";
import GetInTouchFooter from "@/components/GetInTouchFooter";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
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
    {/* <GetInTouchFooter /> */}
    <Footer />
   </div>
  );
}

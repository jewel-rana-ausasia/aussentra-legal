"use client";
import BannerHeader from "@/components/BannerHeader";
import ServiceDetailsContent from "@/components/ServiceDetailsContent";
import { conveyancingData } from "@/lib/data/services/conveyancing";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ConveyancingPage: React.FC = () => {
  
  return (
    <div>
      <BannerHeader
        title="Conveyancing"
        subtitle="Law"
        caption="Areas of Services"
        iconClass="flaticon-courthouse"
        backgroundImage="/services/conveyancing-banner.jpg"
        overlayDark={5}
      />

       <ServiceDetailsContent sections={conveyancingData.sections} />

     
    </div>
  );
};

export default ConveyancingPage;

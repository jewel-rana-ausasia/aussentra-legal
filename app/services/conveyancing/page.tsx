"use client";
import BannerHeader from "@/components/BannerHeader";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ConveyancingPage: React.FC = () => {
  
  return (
    <div>
      <BannerHeader
        title="Conveyancing"
        subtitle=""
        caption="Areas of Services"
        iconClass="flaticon-courthouse"
        backgroundImage="/case/7.jpg"
        overlayDark={4}
      />

     
    </div>
  );
};

export default ConveyancingPage;

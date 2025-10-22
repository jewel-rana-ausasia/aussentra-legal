"use client";
import BannerHeader from "@/components/BannerHeader";
import ServiceDetailsContent from "@/components/ServiceDetailsContent";
import { probateEstateData } from "@/lib/data/services/probateEstateData";

const WillsPage: React.FC = () => {
  
  return (
    <div>
      <BannerHeader
        title="Probate & Estate"
        subtitle="Law"
        caption="Areas of Services"
        iconClass="flaticon-courthouse"
        backgroundImage="/case/7.jpg"
        overlayDark={4}
      />

       <ServiceDetailsContent sections={probateEstateData.sections} />

     
    </div>
  );
};

export default WillsPage;

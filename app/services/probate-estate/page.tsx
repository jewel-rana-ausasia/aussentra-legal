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
        backgroundImage="/services/probate-and-estate-banner.jpg"
        overlayDark={5}
      />

       <ServiceDetailsContent sections={probateEstateData.sections} />

     
    </div>
  );
};

export default WillsPage;

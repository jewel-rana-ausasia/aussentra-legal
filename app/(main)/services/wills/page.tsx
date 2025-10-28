"use client";
import BannerHeader from "@/components/BannerHeader";
import ServiceDetailsContent from "@/components/ServiceDetailsContent";
import { willsData } from "@/lib/data/services/willsData";

const WillsPage: React.FC = () => {
  
  return (
    <div>
      <BannerHeader
        title="Wills"
        subtitle="Law"
        caption="Areas of Services"
        iconClass="flaticon-courthouse"
        backgroundImage="/services/wills.jpg"
        overlayDark={5}
      />

       <ServiceDetailsContent sections={willsData.sections} />

     
    </div>
  );
};

export default WillsPage;

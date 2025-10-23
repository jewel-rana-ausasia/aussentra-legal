"use client";
import BannerHeader from "@/components/BannerHeader";
import ServiceDetailsContent from "@/components/ServiceDetailsContent";
import { immigrationLawData } from "@/lib/data/services/immigration";

const ImmigrationLayPage: React.FC = () => {
  
  return (
    <div>
      <BannerHeader
        title="Immigration"
        subtitle="Law"
        caption="Areas of Services"
        iconClass="flaticon-courthouse"
        backgroundImage="/services/immigration-law-banner.jpg"
        overlayDark={5}
      />

       <ServiceDetailsContent sections={immigrationLawData.sections} />

     
    </div>
  );
};

export default ImmigrationLayPage;

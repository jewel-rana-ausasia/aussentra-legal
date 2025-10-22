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
        backgroundImage="/case/7.jpg"
        overlayDark={4}
      />

       <ServiceDetailsContent sections={immigrationLawData.sections} />

     
    </div>
  );
};

export default ImmigrationLayPage;

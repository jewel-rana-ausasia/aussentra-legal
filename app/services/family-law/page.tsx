"use client";
import BannerHeader from "@/components/BannerHeader";
import ServiceDetailsContent from "@/components/ServiceDetailsContent";
import { familyLawData } from "@/lib/data/services/family-law";

const FamilyLawPage: React.FC = () => {
  
  return (
    <div>
      <BannerHeader
        title="Family"
        subtitle="Law"
        caption="Areas of Services"
        iconClass="flaticon-courthouse"
        backgroundImage="/services/family-law.jpg"
        overlayDark={5}
      />

       <ServiceDetailsContent sections={familyLawData.sections} />

     
    </div>
  );
};

export default FamilyLawPage;

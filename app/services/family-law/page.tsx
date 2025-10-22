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
        backgroundImage="/case/7.jpg"
        overlayDark={4}
      />

       <ServiceDetailsContent sections={familyLawData.sections} />

     
    </div>
  );
};

export default FamilyLawPage;

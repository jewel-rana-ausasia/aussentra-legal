"use client";
import BannerHeader from "@/components/BannerHeader";
import ServiceDetailsContent from "@/components/ServiceDetailsContent";
import { debtRecoveryData } from "@/lib/data/services/debtRecoveryData";
import { familyLawData } from "@/lib/data/services/family-law";

const DebtRecoveryPage: React.FC = () => {
  
  return (
    <div>
      <BannerHeader
        title="Debt"
        subtitle="Recovery"
        caption="Areas of Services"
        iconClass="flaticon-courthouse"
        backgroundImage="/case/7.jpg"
        overlayDark={4}
      />

       <ServiceDetailsContent sections={debtRecoveryData.sections} />

     
    </div>
  );
};

export default DebtRecoveryPage;

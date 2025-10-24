"use client";
import BannerHeader from "@/components/BannerHeader";
import ServiceDetailsContent from "@/components/ServiceDetailsContent";
import { debtRecoveryData } from "@/lib/data/services/debtRecoveryData";
import { familyLawData } from "@/lib/data/services/family-law";

const DebtRecoveryPage: React.FC = () => {
  
  return (
    <div>
      <BannerHeader
        title="Debt Recovery"
        subtitle="Law"
        caption="Areas of Services"
        iconClass="flaticon-courthouse"
        backgroundImage="/services/insolvency.jpg"
        overlayDark={4}
      />

       <ServiceDetailsContent sections={debtRecoveryData.sections} />

     
    </div>
  );
};

export default DebtRecoveryPage;

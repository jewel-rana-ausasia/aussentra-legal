"use client";
import BannerHeader from "@/components/BannerHeader";
import ServiceDetailsContent from "@/components/ServiceDetailsContent";
import { immigrationLawData } from "@/lib/data/services/immigration";
import { insolvencyData } from "@/lib/data/services/insolvencyData";

const InsolvencyPage: React.FC = () => {
  
  return (
    <div>
      <BannerHeader
        title="Insolvency"
        subtitle="Law"
        caption="Areas of Services"
        iconClass="flaticon-courthouse"
        backgroundImage="/services/insolvency.jpg"
        overlayDark={5}
      />

       <ServiceDetailsContent sections={insolvencyData.sections} />

     
    </div>
  );
};

export default InsolvencyPage;

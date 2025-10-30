"use client";
import BannerHeader from "@/components/BannerHeader";
import ServiceDetailsContent from "@/components/ServiceDetailsContent";
import { insolvencyData } from "@/lib/data/services/insolvencyData";

const InsolvencyPage: React.FC = () => {
  
  return (
    <div>
      <BannerHeader
        title="Insolvency"
        subtitle="Law"
        caption="Areas of Services"
        iconClass="flaticon-courthouse"
        backgroundImage="/services/insolvency-banner.jpg"
        overlayDark={5}
      />

       <ServiceDetailsContent sections={insolvencyData.sections} />

     
    </div>
  );
};

export default InsolvencyPage;

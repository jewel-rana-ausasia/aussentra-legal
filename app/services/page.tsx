"use client";
import BannerHeader from "@/components/BannerHeader";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Conveyancing",
      img: "/case/4.jpg",
      link: "/services/conveyancing",
    },
    { title: "Immigration\nLaw", img: "/case/5.jpg", link: "/services/immigration-law" },
    { title: "Debt\nRecovery", img: "/case/6.jpg", link: "/services/debt-recovery" },
    { title: "Insolvency", img: "/case/3.jpg", link: "/services/insolvency" },
    { title: "Family\nLaw", img: "/case/1.jpg", link: "/services/family-law" },
    { title: "Wills", img: "/case/2.jpg", link: "/services/wills" },
    { title: "Probate\n& Estate", img: "/case/6.jpg", link: "/services/probate-estate" },
  ];
  return (
    <div>
      <BannerHeader
        title="Our"
        subtitle="Services"
        caption="Areas of Services"
        iconClass="flaticon-courthouse"
        backgroundImage="/slider/1.jpg"
        overlayDark={5}
      />

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((caseItem, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg cursor-pointer transition-transform duration-500 hover:scale-105"
            >
              {/* Image */}
              <div className="relative w-full h-64 sm:h-72 rounded-lg overflow-hidden">
                <Image
                  src={caseItem.img}
                  alt={caseItem.title}
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-10 left-5 right-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* Title */}
                <div className="text-white font-playfair text-2xl font-medium leading-snug whitespace-pre-line">
                  {caseItem.title}
                </div>

                {/* Arrow */}
                <a
                  href={caseItem.link}
                  className="w-12 h-12 bg-[#ac835d] rounded-full flex items-center justify-center text-white text-lg transition-colors duration-500 hover:bg-white hover:text-[#14100c]"
                >
                  <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

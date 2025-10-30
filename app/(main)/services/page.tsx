"use client";
import BannerHeader from "@/components/BannerHeader";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Service {
  title: string;
  slug: string;
  img: string;
  link: string;
}

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/admin/services");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServices();
  }, []);
  
  /* const services = [
    {
      title: "Conveyancing",
      img: "/services/conveyancing-banner.jpg",
      link: "/services/conveyancing",
    },
    {
      title: "Immigration\nLaw",
      img: "/services/immigration-law.jpg",
      link: "/services/immigration-law",
    },
    {
      title: "Debt\nRecovery",
      img: "/services/insolvency.jpg",
      link: "/services/debt-recovery",
    },
    {
      title: "Insolvency",
      img: "/services/insolvency-thum.jpg",
      link: "/services/insolvency",
    },
    {
      title: "Family\nLaw",
      img: "/services/family-law.jpg",
      link: "/services/family-law",
    },
    { title: "Wills", img: "/services/wills.jpg", link: "/services/wills" },
    {
      title: "Probate\n& Estate",
      img: "/services/probate-and-estate-banner.jpg",
      link: "/services/probate-estate",
    },
  ]; */

  return (
    <div>
      <BannerHeader
        title="Our"
        subtitle="Services"
        caption="Areas of Services"
        iconClass="flaticon-courthouse"
        backgroundImage="/about/about-law-firm.jpg"
        overlayDark={5}
      />

      <section className="w-full px-8 lg:px-0 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((caseItem, idx) => (
            <Link
              href={caseItem.link}
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
              <div className="absolute bottom-10 left-5 right-5 flex items-center justify-between transition-opacity duration-500 opacity-100">
                {/* Title */}
                <div className="text-white text-xl font-medium">
                  {caseItem.title}
                </div>

                {/* Arrow */}
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-lg transition-colors duration-500 hover:bg-white hover:text-[#14100c]">
                  <FaArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

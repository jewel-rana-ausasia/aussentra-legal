"use client";

import { Accordion } from "@/components/Accordion";
import BannerHeader from "@/components/BannerHeader";
import ContactCard from "@/components/ContactCard";
import { useEffect, useState } from "react";
import { FaArrowRight, FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";

interface AccordionItem {
  title: string;
  content: string;
}

const FaqPage: React.FC = () => {
  const [accordionData, setAccordionData] = useState<AccordionItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch FAQs from the API
  useEffect(() => {
    async function fetchFaqs() {
      try {
        const res = await fetch("/api/admin/faq");
        const data = await res.json();

        // Map to AccordionItem type
        const faqs: AccordionItem[] = data.map((faq: any) => ({
          title: faq.question,
          content: faq.answer,
        }));

        setAccordionData(faqs);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
        setLoading(false);
      }
    }

    fetchFaqs();
  }, []);

  return (
    <div>
      <BannerHeader
        title="Frequently Asked"
        subtitle="Questions"
        caption="Popular questions"
        iconClass="flaticon-courthouse"
        backgroundImage="/about/about-law-firm.jpg"
        overlayDark={5}
      />

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-5 lg:0 py-20 gap-20 items-center">
        <div className="lg:sticky lg:top-28 self-start">
          <ContactCard />
        </div>

        {/* Right Accordion */}
        <div>
          {loading ? (
            <p className="text-gray-500 text-center">Loading FAQs...</p>
          ) : (
            <Accordion items={accordionData} />
          )}
        </div>
      </section>
    </div>
  );
};

export default FaqPage;

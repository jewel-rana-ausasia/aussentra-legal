"use client";

import { useEffect, useState } from "react";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import ContactCard from "./ContactCard";

const iconMap: { [key: string]: any } = {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
};

interface ContactItem {
  id: number;
  label: string;
  value: string;
  icon?: string;
}

const ContactSection = () => {
  const [contacts, setContacts] = useState<ContactItem[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await fetch("/api/admin/contact-info");
      const data = await res.json();
      setContacts(data);
    };
    fetchContacts();
  }, []);

  const getType = (label: string) => {
    if (label.toLowerCase().includes("phone")) return "phone";
    if (label.toLowerCase().includes("email")) return "email";
    return "text";
  };

  return (
    <section className="py-10 xl:py-20">
      <div className="max-w-7xl mx-auto px-2 md:px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center">
          {/* Left Side */}
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-8 lg:mb-10 font-playfair mt-5">
              Do you need help?{" "}
              <span className="text-primary block mt-2 italic">
                Contact with us now!
              </span>
            </h2>

            {contacts.map((contact) => {
              const Icon = contact.icon ? iconMap[contact.icon] : null;
              const type = getType(contact.label);

              return (
                <div key={contact.id} className="flex items-start mb-6">
                  <div className="text-primary bg-[#f7f6f4] w-10 lg:w-[60px] h-10 lg:h-[60px] flex items-center justify-center rounded-full mr-4">
                    {Icon && <Icon className="text-lg lg:text-2xl" />}
                  </div>
                  <div>
                    <h5 className="text-[#14100c] lg:text-xl font-semibold font-playfair">
                      {contact.label}
                    </h5>
                    <p className="text-slate-900 text-xs md:text-sm lg:text-base break-words">
                      {type === "phone" ? (
                        <a
                          href={`tel:${contact.value}`}
                          className="hover:underline"
                        >
                          {contact.value}
                        </a>
                      ) : type === "email" ? (
                        <a
                          href={`mailto:${contact.value}?subject=Legal%20Inquiry&body=Hello%20Aussentra%20Legal%2C%20I%20would%20like%20to%20get%20in%20touch%20regarding...`}
                          className="hover:underline cursor-pointer"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        contact.value
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side */}
          <ContactCard />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

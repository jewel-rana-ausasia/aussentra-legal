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
    <section className="py-20 lg:px-0">
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-2xl lg:text-4xl font-semibold mb-10 font-playfair mt-5">
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
                  <div className="text-primary bg-[#f7f6f4] w-12 lg:w-[60px] h-12 lg:h-[60px] flex items-center justify-center rounded-full mr-4">
                    {Icon && <Icon className="text-lg lg:text-2xl" />}
                  </div>
                  <div>
                    <h5 className="text-[#14100c] text-lg lg:text-xl font-semibold font-playfair">
                      {contact.label}
                    </h5>
                    <p className="text-slate-600 text-sm lg:text-base break-words">
                      {type === "phone" ? (
                        <a
                          href={`tel:${contact.value}`}
                          className="hover:underline"
                        >
                          {contact.value}
                        </a>
                      ) : type === "email" ? (
                        <a
                          href={`mailto:${contact.value}?subject=Inquiry&body=Hello, I would like to get in touch.`}
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
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

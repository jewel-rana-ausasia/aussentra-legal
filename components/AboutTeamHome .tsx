"use client";

import {
  Scale,
  FileText,
  Home,
  ArrowRight,
  ChevronDown,
  Users,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function AboutTeamLanding() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const practiceAreas = {
    "Migration Law": [
      "Skilled Migration Visas",
      "Family Sponsorship",
      "Migration Appeals",
      "Visa Compliance",
    ],
    "Property & Conveyancing": [
      "Residential Conveyancing",
      "Commercial Property",
      "Property Disputes",
      "Land Titles",
    ],
    "Commercial & Civil Law": [
      "Contract Drafting",
      "Commercial Disputes",
      "Business Transactions",
      "Litigation Support",
    ],
  };

  const topAreas = [
    {
      title: "Migration Law",
      description: "Skilled visas, appeals & compliance",
      icon: Scale,
      color: "from-[#DAA22D] to-[#b68423]",
    },
    {
      title: "Property & Conveyancing",
      description: "Residential & commercial transfers",
      icon: Home,
      color: "from-[#DAA22D] to-[#b68423]",
    },
    {
      title: "Commercial & Civil Law",
      description: "Contracts, transactions & disputes",
      icon: FileText,
      color: "from-[#DAA22D] to-[#b68423]",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-yellow-50/20 to-slate-50 py-10 md:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden font-playfair">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-10 md:mb-16 text-center animate-fade-in px-2">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Your Trusted Legal{" "}
            <span className="bg-gradient-to-r from-[#DAA22D] to-[#b68423] bg-clip-text text-transparent">
              Partner
            </span>
          </h2>
          <p className="text-base md:text-lg text-black max-w-xl mx-auto">
            Delivering exceptional legal solutions with integrity and excellence
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-[#DAA22D] to-[#b68423] p-[1px]">
            <div className="bg-white rounded-xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-10 p-6 md:p-10 lg:p-12">

                {/* Left */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 flex-1 w-full">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#DAA22D] to-[#b68423] rounded-2xl blur-xl opacity-40" />
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-[#DAA22D] to-[#b68423] rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                      <Users className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-center sm:text-left space-y-3">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#DAA22D]">
                      Farhan Shakil
                    </h3>
                    <p className="text-lg md:text-xl text-slate-900 font-medium">
                      Principal Solicitor & Migration Specialist
                    </p>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-slate-900">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-5 h-5 text-[#DAA22D]" />
                        <span className="font-medium">Sydney, NSW</span>
                      </div>
                      <span className="hidden sm:block text-slate-300">•</span>
                      <span className="font-medium">Serving Australia-wide</span>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex mx-auto">
                  <div className="bg-gradient-to-br from-[#DAA22D] to-[#b68423] rounded-2xl px-5 py-3 lg:px-8 lg:py-6 text-center shadow-lg">
                    <p className="text-4xl md:text-5xl font-bold text-white">
                      17+
                    </p>
                    <p className="text-xs md:text-sm text-white font-semibold uppercase tracking-wide">
                      Years Experience
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "info@aussentralegal.com.au",
              href: "mailto:info@aussentralegal.com.au",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Suite 618/368 Sussex St, Sydney NSW 2000",
              href: "https://www.google.com/maps/search/?api=1&query=Suite+618%2F368+Sussex+St%2C+Sydney+NSW+2000",
            },
            {
              icon: Clock,
              label: "Availability",
              value: "Flexible appointments available",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-white border border-slate-300 rounded-2xl p-6 hover:shadow-xl hover:border-[#DAA22D] transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#DAA22D] to-[#b68423] rounded-xl shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-black uppercase mb-2">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        className="text-black font-semibold hover:text-[#DAA22D] break-words block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-black font-semibold break-words">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practice Areas */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Practice Areas
            </h3>
            <p className="text-black text-base md:text-lg max-w-2xl mx-auto">
              Comprehensive legal services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topAreas.map((area) => {
              const Icon = area.icon;
              const subServices =
                practiceAreas[area.title as keyof typeof practiceAreas];
              const isOpen = openDropdown === area.title;

              return (
                <div key={area.title} className="relative w-full">
                  {/* Main button */}
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : area.title)}
                    className="w-full bg-white border border-slate-300 rounded-2xl p-6 hover:border-[#DAA22D] hover:shadow-xl transition-all text-left"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-4 bg-gradient-to-br ${area.color} rounded-xl shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <ChevronDown
                        className={`w-5 h-5 transition-all ${
                          isOpen ? "rotate-180 text-[#DAA22D]" : "text-slate-900"
                        }`}
                      />
                    </div>

                    <h4 className="font-bold text-lg text-slate-900 mb-2">
                      {area.title}
                    </h4>
                    <p className="text-black font-medium text-sm">
                      {area.description}
                    </p>
                  </button>

                  {/* Dropdown */}
                  {isOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setOpenDropdown(null)}
                      />

                      <div className="absolute left-0 right-0 mt-2 z-20 animate-dropdown-in">
                        <div className="bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden">
                          <div className="p-2">
                            {subServices.map((service) => (
                              <button
                                key={service}
                                className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#DAA22D22] flex items-center gap-3"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#DAA22D]" />
                                <span className="text-slate-700 font-medium hover:text-[#DAA22D]">
                                  {service}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="relative group mt-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#DAA22D] to-[#b68423] rounded-2xl blur-xl opacity-40" />

          <div className="relative bg-gradient-to-r from-[#DAA22D] to-[#b68423] rounded-2xl p-6 md:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-xl">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl md:text-3xl font-bold mb-3 text-white">
                Ready to Discuss Your Legal Needs?
              </h3>
              <p className="text-white text-base md:text-lg font-medium">
                Get expert guidance tailored to your situation
              </p>
            </div>

            <a
              href="mailto:info@aussentralegal.com.au"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#DAA22D] px-6 py-3 rounded-xl font-bold hover:bg-[#FFF5E1] hover:shadow-xl transition-all w-full sm:w-auto"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dropdown-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-dropdown-in { animation: dropdown-in 0.25s ease-out; }
      `}</style>
    </section>
  );
}

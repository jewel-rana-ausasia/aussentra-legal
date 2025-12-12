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
      "Skilled, Partner, Employer-Sponsored & Business Visas",
      "Visa Appeals, Tribunal Representation & Judicial review",
      "Sponsorship Compliance & SBS Applications",
      "AHPRA Registration Support",
    ],
    "Property & Conveyancing": [
      "Residential & Commercial Conveyancing",
      "Title Transfers & Settlements",
      "Contract Review & Risk Mitigation",
    ],
    "Commercial & Civil Law": [
      "Debt Recovery & Insolvency",
      "Business Transactions & Contracts",
      "Family Law & Parenting Matters",
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
        <div className="mb-6 md:mb-10 text-center animate-fade-in px-2">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Your Trusted{" "}
            <span className="bg-gradient-to-r from-[#DAA22D] to-[#b68423] bg-clip-text text-transparent">
              Legal Partner
            </span>
          </h2>
          <p className="text-base md:text-lg text-black max-w-xl mx-auto">
            Delivering exceptional legal solutions with integrity and excellence
          </p>
        </div>

        {/* Full-Width Profile + Contact Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-12 w-full">
          <div className="bg-gradient-to-r from-[#DAA22D] to-[#b68423] p-[1px]">
            <div className="bg-white rounded-xl p-6 md:p-10 lg:p-12">
              {/* Top Section: Profile */}
              <div className="flex flex-col md:flex-row lg:items-center lg:justify-between gap-6 md:gap-10">
                {/* Left: Avatar + Info */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 flex-1 w-full">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#DAA22D] to-[#b68423] rounded-2xl blur-xl opacity-40" />
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-[#DAA22D] to-[#b68423] rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                      <Users className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                    </div>
                  </div>

                  {/* Info */}
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
                      <span className="font-medium">
                        Serving Australia-wide
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Experience */}
                <div className="flex-shrink-0 mx-auto lg:mx-0 mt-6 lg:mt-0">
                  <div className="bg-gradient-to-br from-[#DAA22D] to-[#b68423] rounded-2xl px-5 py-5 lg:px-8 lg:py-6 text-center shadow-lg">
                    <p className="text-4xl lg:text-5xl font-bold text-white">
                      17+
                    </p>
                    <p className="text-xs md:text-sm text-white font-semibold uppercase tracking-wide">
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-200 my-8"></div>

              {/* Contact Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                    value: "618/368 Sussex St, Sydney NSW 2000",
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
                      className="group bg-white shadow-sm rounded-lg p-6 hover:shadow-xl hover:border-[#DAA22D] transition-all duration-300 overflow-hidden"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-4 bg-gradient-to-br from-[#DAA22D] to-[#b68423] rounded-xl shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-primary uppercase mb-2">
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
            </div>
          </div>
        </div>

        {/* Practice Areas */}
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
          Legal Practice Areas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topAreas.map((area) => {
            const Icon = area.icon;
            const subServices =
              practiceAreas[area.title as keyof typeof practiceAreas];

            return (
              <div
                key={area.title}
                className="bg-white border border-slate-300 rounded-2xl p-6 hover:border-[#DAA22D] hover:shadow-xl transition-all"
              >
                {/* Icon + Title */}
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-4 bg-gradient-to-br ${area.color} rounded-xl shadow-lg flex-shrink-0`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h4 className="font-bold text-lg lg:text-xl text-primary">
                    {area.title}
                  </h4>
                </div>

                {/* <p className="text-black font-medium text-sm lg:text-base mb-4">
                  {area.description}
                </p> */}

                {/* STATIC LIST — always visible */}
                <div className="space-y-2 mt-4">
                  {subServices.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#DAA22D22] transition-all"
                    >
                      <span className="w-1.5 h-1.5 bg-[#DAA22D] rounded-full" />
                      <span className="text-black font-medium">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-Width Practice Areas Card */}

        {/*  <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10 mt-12 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
            Legal Practice Areas
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-8">
            {[
              "Migration Law",
              "Skilled, Partner, Employer-Sponsored & Business Visas",
              "Visa Appeals, Tribunal Representation & Judicial Review",
              "Sponsorship Compliance & SBS Applications",
              "AHPRA Registration Support",
              "Property & Conveyancing",
              "Residential & Commercial Conveyancing",
              "Title Transfers & Settlements",
              "Contract Review & Risk Mitigation",
              "Commercial & Civil Law",
              "Debt Recovery & Insolvency",
              "Business Transactions & Contracts",
              "Family Law & Parenting Matters",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 group">
                <span className="w-2 h-2 rounded-full bg-[#DAA22D] mt-2 group-hover:bg-[#b68423] transition-all"></span>
                <span className="text-slate-700 font-medium group-hover:text-[#DAA22D] transition-all">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div> */}

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

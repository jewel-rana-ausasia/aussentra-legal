"use client";

import React, { useState, useEffect } from "react";

const legalContent = [
  {
    id: "identity",
    title: "Legal Status",
    icon: "⚖",
    number: "01",
    tag: "Institutional Identity",
    content:
      "Aussentra Legal ABN 56 290 565 366 owns and manages this website. Legal information provided is relevant only to the jurisdictions specified. Aussentra Legal does not guarantee that its information is applicable to every jurisdiction from which the website may be accessed.",
  },
  {
    id: "scope",
    title: "General Information",
    icon: "ℹ",
    number: "02",
    tag: "Scope of Content",
    content:
      "These terms apply to all Aussentra Legal websites, including future sites. Content is intended to provide general, summarised information on legal topics. It is current at publication, but we do not guarantee its accuracy, completeness, or currency. Even if you receive tailored information through an application, it remains general information.",
  },
  {
    id: "disclaimer",
    title: "Legal Advice Disclaimer",
    icon: "🚫",
    number: "03",
    tag: "Critical Notice",
    highlight: true,
    content:
      "The content is not a substitute for legal advice and should not be relied upon as such. Aussentra Legal accepts no liability for reliance on this information. You should seek specific legal or professional advice for your circumstances. For free legal advice eligibility, please apply online via the Aussentra Legal website.",
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: "🛡",
    number: "04",
    tag: "Risk & Liability",
    content:
      "Use of the websites and their content is at your own risk. Aussentra Legal makes no warranties, express or implied. Liability is limited as permitted by the Australian Consumer Law, with a maximum specified limit of $1 where possible. We are not liable for any loss or damage arising from technical failures, viruses, or defects.",
  },
  {
    id: "relationship",
    title: "No Solicitor Relationship",
    icon: "🤝",
    number: "05",
    tag: "Relationship Boundaries",
    content:
      "Using the websites does not establish a client-solicitor relationship with Aussentra Legal. Receiving or sending material via the websites does not create such a relationship.",
  },
  {
    id: "responsibilities",
    title: "User Responsibilities",
    icon: "👤",
    number: "06",
    tag: "Conduct & Obligations",
    content:
      "You must provide accurate information. Pseudonyms may be used if we are informed, but may limit assistance. You must not defame, harm, or harass others, breach the law, post malicious code, or share prohibited content (hate speech, explicit, or violent material). We reserve the right to terminate accounts.",
  },
  {
    id: "external",
    title: "External Links",
    icon: "🔗",
    number: "07",
    tag: "Third-Party References",
    content:
      "Websites may contain links to external sites not controlled by Aussentra Legal. We do not endorse or guarantee the quality of external content and accept no liability for loss arising from accessing such sites.",
  },
  {
    id: "copyright",
    title: "Intellectual Property",
    icon: "©",
    number: "08",
    tag: "IP & Copyright",
    content:
      "Unless otherwise stated, Aussentra Legal owns the copyright in all materials. You may use materials for personal or non-commercial purposes within not-for-profit organisations, provided attribution is retained. Materials must not be published elsewhere without prior written consent. All trade marks belong to their respective owners.",
  },
  {
    id: "security",
    title: "Login & Cookies",
    icon: "🔑",
    number: "09",
    tag: "Digital Security",
    content:
      "You are responsible for keeping login details secure. Sharing login info may result in termination of access. The websites may use cookies as explained in our privacy policy. These terms incorporate the Aussentra Legal privacy policy, which may be updated periodically.",
  },
];

export default function PremiumLegalPage() {
  const [activeSection, setActiveSection] = useState("identity");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min((window.scrollY / docHeight) * 100, 100));

      legalContent.forEach((section) => {
        const element = document.getElementById(section.id);
        if (
          element &&
          element.offsetTop <= scrollPos &&
          element.offsetTop + element.offsetHeight > scrollPos
        ) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] min-h-screen font-serif selection:bg-[#DAA22D]/30">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#DAA22D] z-[1000] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-[#1B241B] px-8 py-32 lg:py-40 border-b border-[#DAA22D]/20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#476245]/20 to-transparent" />

        <div className="relative max-w-[1200px] mx-auto z-10">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#DAA22D] mb-12 font-sans font-bold">
            <span className="w-8 h-px bg-[#DAA22D]" />
            Aussentra Legal Institutional Framework
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-end">
            <div>
              <h1 className="text-white text-[clamp(48px,8vw,84px)] leading-[1.2] font-playfair font-normal mb-8 tracking-tighter">
                Legal{" "}
                <span className="italic font-light text-primary">
                  Governance
                </span>
                <br /> & Disclaimer
              </h1>
              <p className="text-white/60 text-lg max-w-[540px] leading-relaxed font-sans font-light">
                Our commitment to transparency. Review the professional
                standards and jurisdictional frameworks governing Aussentra
                Legal's digital presence and advisory services.
              </p>
            </div>

            <div className="hidden lg:grid grid-cols-1 gap-4 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-sm group hover:border-[#DAA22D]/50 transition-colors">
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">
                  Entity Registration
                </p>
                <p className="text-[#DAA22D] text-sm font-medium">
                  ABN: 56 290 565 366
                </p>
              </div>
              <div className="bg-[#DAA22D] p-6 rounded-sm shadow-xl">
                <p className="text-[#1B241B]/60 text-[10px] uppercase tracking-widest mb-1 font-bold">
                  Effective Date
                </p>
                <p className="text-[#1B241B] text-sm font-bold">
                  February 2026 Revision
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-[300px_1fr] gap-20">
          {/* Navigation Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div>
                <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#476245] font-bold mb-6">
                  Contents
                </h4>
                <nav className="flex flex-col border-l border-gray-200">
                  {legalContent.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`py-3 pl-6 text-[13px] font-sans transition-all border-l-2 -ml-[1.5px] ${
                        activeSection === section.id
                          ? "border-[#DAA22D] text-[#1A1A1A] font-bold"
                          : "border-transparent text-gray-600 hover:text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      <span className="mr-3 opacity-50 tabular-nums">
                        {section.number}
                      </span>
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="bg-[#476245] p-8 text-white rounded-sm">
                <h5 className="font-sans text-[11px] uppercase tracking-widest mb-4 opacity-70">
                  Client Support
                </h5>
                <p className="text-[13px] leading-relaxed mb-6 font-light opacity-90">
                  Require a formal legal assessment? Our partners are available
                  for consultation.
                </p>
                <a
                  href="mailto:info@aussentralegal.com.au"
                  className="inline-block border-b border-[#DAA22D] pb-1 text-[#DAA22D] text-sm font-sans hover:text-white transition-colors"
                >
                  Contact Solicitor
                </a>
              </div>
            </div>
          </aside>

          {/* Content Sections */}
          <section className="space-y-24">
            {/* Introductory Statement */}
            <div className="max-w-2xl">
              <span className="text-[#DAA22D] font-bold text-sm tracking-widest font-sans uppercase">
                00. Preamble
              </span>
              <h2 className="text-4xl mt-4 mb-6">User Acknowledgement</h2>
              <p className="text-slate-700 leading-relaxed text-lg italic">
                "By interacting with our digital assets, you formally consent to
                the terms outlined below. These clauses safeguard the integrity
                of our legal communications."
              </p>
            </div>

            {legalContent.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className={`group scroll-mt-32 transition-all duration-500`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-sans font-bold text-[#476245] bg-[#476245]/5 px-3 py-1 rounded">
                    {item.tag}
                  </span>
                  <div className="h-px flex-1 bg-gray-100 group-hover:bg-[#DAA22D]/20 transition-colors" />
                  <span className="font-sans text-[40px] font-light text-gray-100 group-hover:text-[#DAA22D]/10 transition-colors tabular-nums">
                    {item.number}
                  </span>
                </div>

                <div
                  className={`p-10 lg:p-14 rounded-sm border transition-all duration-300 ${
                    item.highlight
                      ? "bg-[#1B241B] border-[#DAA22D]/30 shadow-2xl"
                      : "bg-white border-gray-100 hover:border-[#DAA22D]/30 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                        item.highlight
                          ? "bg-[#DAA22D] text-[#1B241B]"
                          : "bg-[#476245]/10 text-[#476245]"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <h3
                      className={`text-3xl font-normal tracking-tight ${item.highlight ? "text-white" : "text-[#1A1A1A]"}`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    className={`text-lg leading-relaxed font-sans font-light ${
                      item.highlight ? "text-white/80" : "text-slate-900"
                    }`}
                  >
                    {item.content}
                  </p>

                  {item.highlight && (
                    <div className="mt-10 pt-8 border-t border-white/10 flex gap-4">
                      <div className="w-1 h-auto bg-[#DAA22D]" />
                      <p className="text-sm font-sans italic text-[#DAA22D]/80 leading-relaxed">
                        This is a critical regulatory disclosure. Failure to
                        adhere to these specific guidelines may result in
                        limited legal recourse under Commonwealth Law.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Premium Footer Contact */}
            <div className="bg-[#FAF9F6] border border-[#476245]/10 p-12 lg:p-20 text-center rounded-sm relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl mb-6">
                  Further Legal Inquiries
                </h2>
                <p className="text-gray-500 font-sans max-w-xl mx-auto mb-10 text-lg">
                  For clarification regarding our digital terms of service or
                  privacy framework, please contact our designated Privacy
                  Officer.
                </p>
                <a
                  href="mailto:info@aussentralegal.com.au"
                  className="inline-flex items-center gap-4 bg-[#476245] text-white px-10 py-5 font-sans font-bold text-sm tracking-widest uppercase hover:bg-[#DAA22D] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                >
                  Request Consultation
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

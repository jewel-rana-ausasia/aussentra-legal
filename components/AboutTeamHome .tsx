"use client";

import { Scale, FileText, Home, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function AboutTeamLanding() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

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
    },
    {
      title: "Property & Conveyancing",
      description: "Residential & commercial transfers",
      icon: Home,
    },
    {
      title: "Commercial & Civil Law",
      description: "Contracts, transactions & disputes",
      icon: FileText,
    },
  ];

  return (
    <section className="bg-background py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-playfair">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-center items-center">
          {/* <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Our Expertise
            </span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Expert Legal <span className="text-primary italic">Guidance</span>
          </h2>
        </div>

        {/* Professional Summary Card */}
        <div className="bg-card border border-border rounded-lg p-8 mb-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                Farhan Shakil
              </h3>
              <p className="text-primary font-semibold mb-3">
                Principal Solicitor & Migration Specialist
              </p>
              <p className="text-black text-sm leading-relaxed">
                Admitted solicitor with proven expertise in migration, property,
                and commercial law. Client-focused approach with strong drafting
                and advocacy skills.
              </p>
            </div>
            <div className="flex-shrink-0 text-left md:text-right bg-primary/5 rounded-lg p-6">
              <p className="text-4xl font-bold text-primary">17+</p>
              <p className="text-sm text-muted-foreground font-medium">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-serif font-bold text-foreground mb-6">
            Practice Areas
          </h3>

          {/* Practice Areas Grid with Dropdown Menu */}
          <div className="grid md:grid-cols-3 gap-4">
            {topAreas.map((area) => {
              const Icon = area.icon;
              const subServices =
                practiceAreas[area.title as keyof typeof practiceAreas] || [];

              return (
                <DropdownMenu key={area.title} modal={false}>
                  <DropdownMenuTrigger asChild>
                    <button
                      onMouseEnter={() => setHoveredArea(area.title)}
                      onMouseLeave={() => setHoveredArea(null)}
                      className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all group text-left cursor-pointer"
                    >
                      <Icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <h4 className="font-semibold text-foreground mb-2 flex items-center justify-between">
                        {area.title}
                        <ChevronDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-sm text-slate-950">
                        {area.description}
                      </p>
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuLabel className="font-semibold text-primary">
                      {area.title}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {subServices.map((service) => (
                      <DropdownMenuItem key={service} className="text-sm py-2">
                        <span className="text-primary mr-2">•</span>
                        {service}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl font-serif font-bold mb-2">
              Ready to Discuss Your Legal Needs?
            </h3>
            <p className="text-slate-950 text-sm">
              Get expert guidance tailored to your situation
            </p>
          </div>
          <a
            href="mailto:info@aussentralegal.com.au"
            className="inline-flex items-center gap-2 bg-primary-foreground text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow whitespace-nowrap"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

import { ServicePage } from "./types";

export const familyLawData: ServicePage = {
  id: "family-law",
  title: "Family Law Services",
  description:
    "Comprehensive family law services including divorce, child custody, property settlement, and mediation.",
  slug: "family-law",
  heroImage: "/images/services/family-law-hero.jpg",
  sections: [
    {
      title: "Understanding Family Law",
      paragraphs: [
        "Family law encompasses all legal matters related to family relationships, including marriage, divorce, child custody, property division, and financial support. These situations can be deeply personal and emotionally challenging, requiring both sensitivity and strong legal expertise.",
        "Our experienced family law attorneys provide compassionate, practical, and tailored guidance to help you resolve family disputes efficiently and protect your rights and interests."
      ],
      listItems: [
        { text: "Divorce and legal separation" },
        { text: "Child custody and visitation arrangements" },
        { text: "Child and spousal support (maintenance)" },
        { text: "Property and asset division" },
        { text: "Binding financial agreements and prenups" }
      ]
    },
    {
      title: "Our Key Family Law Services",
      paragraphs: [
        "We handle all aspects of family law with care and professionalism. Whether you are going through a separation, negotiating parenting arrangements, or resolving property matters, our team provides the legal guidance you need to make informed decisions."
      ],
      listItems: [
        { text: "Divorce applications and representation" },
        { text: "Parenting orders and child custody disputes" },
        { text: "De facto and same-sex relationship matters" },
        { text: "Domestic violence and intervention orders" },
        { text: "Property settlements and financial disputes" }
      ]
    },
    {
      title: "Why Choose Our Family Lawyers?",
      paragraphs: [
        "We understand that family law matters can be sensitive and complex. Our lawyers approach every case with empathy, professionalism, and a focus on achieving fair, practical outcomes. We work to minimize conflict and stress while protecting what matters most to you."
      ],
      listItems: [
        { text: "Client-focused and compassionate approach" },
        { text: "Extensive experience in all areas of family law" },
        { text: "Clear advice and transparent communication" },
        { text: "Strong negotiation and advocacy skills" },
        { text: "Dedicated to achieving the best possible results" }
      ]
    },
    {
      title: "How We Can Help You",
      paragraphs: [
        "From your first consultation, our family law team will listen to your situation, explain your legal options, and outline a strategy to resolve your matter efficiently. Whether through negotiation, mediation, or court representation, we are committed to supporting you every step of the way."
      ],
      listItems: [
        { text: "Tailored legal advice and strategy" },
        { text: "Support with mediation and dispute resolution" },
        { text: "Experienced court representation when needed" }
      ]
    }
  ],
  meta: {
    title: "Family Law Services | Divorce, Custody & Mediation Lawyers",
    description:
      "Trusted family law firm offering expert legal support for divorce, child custody, spousal support, and property settlement. Compassionate and results-driven lawyers.",
    keywords: [
      "family law",
      "divorce lawyer",
      "child custody",
      "spousal support",
      "property settlement",
      "family mediation"
    ]
  },
  cta: {
    text: "Get compassionate legal support for your family matters. Speak with one of our family law experts today.",
    buttonText: "Consult Our Family Lawyers",
    link: "/contact"
  }
};

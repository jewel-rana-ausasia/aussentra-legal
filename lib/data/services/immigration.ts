import { ServicePage } from "./types";

export const immigrationLawData: ServicePage = {
  id: "immigration-law",
  title: "Immigration Law Services",
  description:
    "Comprehensive legal assistance for visa applications, permanent residency, and immigration appeals.",
  slug: "immigration-law",
  heroImage: "/images/services/immigration-law-hero.jpg",
  sections: [
    {
      title: "What is Immigration Law?",
      paragraphs: [
        "Immigration law governs the process of entering, residing, and becoming a citizen of a country. It covers visa applications, permanent residency, citizenship, and appeals. Our experienced immigration lawyers guide individuals, families, and businesses through every stage of the migration process.",
        "Whether you are applying for a student visa, seeking permanent residency, sponsoring a family member, or facing a visa refusal, our team provides expert advice and professional representation to help you achieve your goals."
      ],
      listItems: [
        { text: "Visa and residency applications" },
        { text: "Family and partner sponsorships" },
        { text: "Visa refusals, cancellations, and appeals" }
      ]
    },
    {
      title: "Common Immigration Matters We Handle",
      paragraphs: [
        "Our firm assists with all types of migration matters, from temporary visas to complex appeal cases. We ensure your application meets all legal and procedural requirements, helping to minimize risks and delays."
      ],
      listItems: [
        { text: "Student, skilled, and business visa applications" },
        { text: "Permanent residency and citizenship applications" },
        { text: "Administrative Appeals Tribunal (AAT) cases" },
        { text: "Employer-sponsored visa and compliance" },
        { text: "Family and partner migration cases" }
      ]
    },
    {
      title: "Why Choose Our Immigration Lawyers?",
      paragraphs: [
        "Our immigration law team combines deep legal knowledge with a practical understanding of the migration system. We take pride in our transparent approach, clear communication, and high success rate across a wide range of visa and appeal cases."
      ],
      listItems: [
        { text: "Decades of experience in immigration law" },
        { text: "Tailored strategies for every client’s situation" },
        { text: "Transparent fees and reliable support" },
        { text: "High success rate in visa approvals and appeals" }
      ]
    },
    {
      title: "How to Get Started",
      paragraphs: [
        "Book a consultation with one of our immigration lawyers to discuss your specific situation. We will review your eligibility, guide you through the process, and help you take the next step toward achieving your migration goal."
      ]
    }
  ],
  meta: {
    title: "Immigration Law Services | Visa & Residency Lawyers",
    description:
      "Expert immigration lawyers providing professional advice and assistance with visa applications, permanent residency, and citizenship cases.",
    keywords: [
      "immigration law",
      "visa lawyer",
      "residency application",
      "migration lawyer",
      "citizenship",
      "visa appeal"
    ]
  },
  cta: {
    text: "Ready to start your immigration journey? Contact our immigration law team today for a confidential consultation.",
    buttonText: "Book Consultation",
    link: "/contact"
  }
};

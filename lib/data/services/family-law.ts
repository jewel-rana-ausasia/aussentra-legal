import { ServicePage } from "./types";

export const familyLawData: ServicePage = {
  id: "family-law",
  title: "Family Law Services",
  description:
    "Expert family law legal support for separation, divorce, child custody, and property matters with care and respect.",
  slug: "family-law",
  heroImage: "/images/services/family-law-hero.jpg",

  sections: [
    {
      title: "Understanding Family Law",
      paragraphs: [
        "When you're facing a family issue like separation, divorce, or child custody, things can feel overwhelming. At Aussentra Legal, we’re here to guide you through it with care, respect, and expert legal advice.",
        "Our experienced team of family lawyers in Sydney will take the time to understand your situation and help you make the best decisions for your future. Whether your case is simple or complicated, we’re ready to help."
      ]
    },
    {
      title: "Why Choose Aussentra Legal for Family Law?",
      paragraphs: [
        "We focus on providing expert guidance, protecting your rights, and making the legal process as smooth as possible."
      ],
      listItems: [
        { text: "Family Law Specialists You Can Trust – Skilled professionals who understand the law inside and out." },
        { text: "We Focus on You – Personalized advice tailored to your situation." },
        { text: "We Handle Complex Matters Too – International custody disputes or large property settlements." },
        { text: "Flexible Fees to Suit Your Budget – Affordable options without cutting corners." },
        { text: "Local and International Experience – Expertise in both domestic and overseas family law matters." }
      ]
    },
    {
      title: "Areas of Family Law We Cover",
      listItems: [
        { text: "Divorce and separation" },
        { text: "Child custody and parenting arrangements" },
        { text: "Property and financial settlements" },
        { text: "Spousal support" },
        { text: "De facto and same-sex relationships" },
        { text: "Family violence and intervention orders" }
      ],
      paragraphs: [
        "Our services cover all aspects of family law, ensuring you get the guidance and protection you need."
      ]
    },
    {
      title: "Support Through Every Step",
      paragraphs: [
        "At Aussentra Legal, we know how emotional and stressful family issues can be. That’s why we treat every client with kindness, care, and respect.",
        "We’ll guide you through the legal process and fight for what matters most to you."
      ]
    },
    {
      title: "Talk to a Family Lawyer Today",
      paragraphs: [
        "If you’re going through a family law issue or just need legal advice, don’t wait. Contact Aussentra Legal today to speak with one of our friendly family lawyers.",
        "Call us to book your free first consultation. Let’s talk about how we can support you and your family."
      ]
    }
  ],

  meta: {
    title: "Family Law Services | Expert Sydney Family Lawyers",
    description:
      "Aussentra Legal provides expert legal support for family law matters including divorce, child custody, property settlements, and family disputes.",
    keywords: [
      "family law",
      "divorce",
      "child custody",
      "property settlement",
      "spousal support",
      "family lawyers Sydney"
    ]
  },

  cta: {
    text: "Facing a family law issue? Contact our experienced family law team today.",
    buttonText: "Book Free Consultation",
    link: "/contact"
  }
};

import { ServicePage } from "./types";

export const conveyancingData: ServicePage = {
  id: "conveyancing",
  title: "Conveyancing Services",
  description:
    "Easy and stress-free conveyancing services to help you buy or sell property with confidence and clarity.",
  slug: "conveyancing",
  heroImage: "/images/services/conveyancing-hero.jpg",

  sections: [
    {
      title: "Easy and Stress-Free Conveyancing Services",
      paragraphs: [
        "We help you buy or sell property without the stress. Our team focuses only on conveyancing, which means we handle everything from start to finish quickly, safely, and clearly.",
        "Whether you're buying your first home, selling a property, or growing your investment portfolio, our team is here to guide you every step of the way.",
      ],
    },
    {
      title: "What Do Conveyancing Lawyers Do?",
      paragraphs: [
        "Conveyancing lawyers play a very important role in property transactions. They don’t just fill out paperwork; they protect your interests from start to finish.",
        "A good conveyancing lawyer will explain the contract in simple terms so you know exactly what you’re agreeing to. They’ll check for any legal risks or hidden issues that could cause problems later. They also take care of all the legal documents, work with banks and other parties, and make sure your settlement happens on time.",
        "Most importantly, they guide you through the entire process, answer your questions, and help you avoid mistakes. Having a skilled conveyancing lawyer means your property deal is safer, smoother, and less stressful.",
      ],
    },
    {
      title: "What You Get With Us",
      paragraphs: [], // 👈 add this
      listItems: [
        {
          text: "Fixed Legal Fees – No hidden costs. You know the price upfront.",
        },
        {
          text: "100% Online – No need to travel. Sign documents safely from home.",
        },
        {
          text: "Trusted by Thousands – Over 40,000 happy clients and counting.",
        },
        {
          text: "Smooth and Simple – We do the hard work so you don’t have to.",
        },
        {
          text: "Expert Advice – Lawyers and paralegals who care and know what they’re doing.",
        },
      ],
    },
    {
      title: "We Make It Easy From Start to Settlement",
      paragraphs: [
        "We take care of the full conveyancing process from contract to settlement so you don’t have to worry. Our lawyers review or prepare your contracts and explain everything in simple language.",
      ],
      listItems: [
        { text: "Fast contract reviews" },
        { text: "Easy-to-understand legal advice" },
        { text: "Help with preparing or reviewing the Contract of Sale" },
        { text: "Answers to your questions at every step" },
        { text: "We keep everything simple and stress-free." },
      ],
    },
    {
      title: "Who We Help",
      paragraphs: [
        "**First-Time Buyers:** Buying your first home? We know it can feel overwhelming. We’ll guide you through everything and explain all the steps in a way that’s easy to understand.",
        "**Busy Buyers and Sellers:** No time to deal with paperwork or make phone calls? We’ll handle it all for you, including dealing with banks and the other side’s lawyers.",
        "**Property Investors:** If you're building a property portfolio, we’ll assign someone to work closely with you to keep things running smoothly as your investments grow.",
        "**People Who Want Extra Protection:** Need more security in your deal? We can adjust your contract terms to protect your interests and make sure you fully understand your rights.",
        "**Urgent Contract Reviews:** In a hurry? If you send your contract before 2 PM, we can often review it the same day. Perfect for last-minute auctions or tight deadlines.",
      ],
    },
    {
      title: "Let’s Make Your Next Move Easy",
      paragraphs: [
        "Whether you're buying or selling, we’re ready to help you with your property journey. Our team of experts is friendly, fast, and focused on making your experience simple and secure.",
        "Get started today — request a free quote or reach out to our team for help. We’ll make sure your property deal is handled with care from start to finish.",
      ],
    },
  ],

  meta: {
    title: "Conveyancing Services | Expert Property Lawyers",
    description:
      "Get stress-free and transparent conveyancing services from expert property lawyers. We handle everything from contract to settlement for buyers, sellers, and investors.",
    keywords: [
      "conveyancing",
      "property lawyers",
      "contract review",
      "buying a house",
      "selling property",
      "settlement services",
    ],
  },

  cta: {
    text: "Ready to make your next move easy? Contact our conveyancing team today for a free quote.",
    buttonText: "Get Free Quote",
    link: "/contact",
  },
};

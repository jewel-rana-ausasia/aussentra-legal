import { ServicePage } from "./types";

export const insolvencyData: ServicePage = {
  id: "insolvency",
  title: "Insolvency Services",
  description:
    "Professional insolvency legal support to help businesses, directors, and creditors navigate financial difficulties.",
  slug: "insolvency",
  heroImage: "/images/services/insolvency-hero.jpg",

  sections: [
    {
      title: "Understanding Insolvency",
      paragraphs: [
        "Every year, thousands of businesses in Australia find themselves in financial trouble. If a business can’t pay its debts when they’re due, it may be facing insolvency.",
        "At Aussentra Legal, we understand how stressful this can be. That’s why we offer friendly, professional legal support to help you explore your options, protect your rights, and take the right steps forward whether you’re a business owner, company director, or creditor."
      ]
    },
    {
      title: "What Is Insolvency?",
      paragraphs: [
        "In simple terms, insolvency means your business can’t pay its bills on time. This can happen to companies (corporate insolvency) or individuals (personal insolvency).",
        "When a business becomes insolvent, it’s important to act fast. Waiting too long can make things worse and could put directors at risk of legal penalties."
      ]
    },
    {
      title: "Types of Insolvency Services We Offer",
      paragraphs: [
        "At Aussentra Legal, we help guide you through different types of insolvency processes, including:"
      ],
      listItems: [
        { text: "Voluntary Administration – Directors can appoint an external administrator to pause and restructure debts." },
        { text: "Creditors’ Voluntary Liquidation (CVL) – Properly close down a business and fairly pay creditors." },
        { text: "Court Liquidation – A creditor applies to court to shut down a company and a liquidator is appointed." },
        { text: "Receivership – A secured creditor appoints a receiver to sell assets and repay debt." },
        { text: "Simplified Liquidation – Quick, affordable closure of small businesses meeting criteria." },
        { text: "Small Business Restructuring – Create a payment plan with creditors while keeping owners in control." },
        { text: "Turnaround Management – Review, plan, and recover struggling businesses before closure." },
        { text: "Members’ Voluntary Liquidation (MVL) – Close solvent businesses and distribute remaining assets legally." },
        { text: "Voidable Transactions – Protect your rights if a liquidator tries to claw back payments." }
      ]
    },
    {
      title: "Early Warning Signs of Insolvency",
      listItems: [
        { text: "Constant cash flow problems" },
        { text: "Missed payments or unpaid invoices" },
        { text: "Overdue taxes or superannuation" },
        { text: "Creditors chasing money or threatening legal action" },
        { text: "Directors using personal funds to keep the business going" }
      ],
      paragraphs: [
        "If these sound familiar, it’s time to get legal advice."
      ]
    },
    {
      title: "Obligation-Free Consultation",
      paragraphs: [
        "At Aussentra Legal, we know how overwhelming financial difficulties can be. That’s why we offer clear, compassionate, and expert legal advice with no judgment and no jargon.",
        "Whether your business can be saved or needs a respectful, legal exit, our experienced team is here to help.",
        "Call us now for a free consultation or visit our website to learn more about how our Insolvency Services can support you or your clients."
      ]
    }
  ],

  meta: {
    title: "Insolvency Services | Expert Legal Support for Businesses",
    description:
      "Aussentra Legal provides professional insolvency advice and legal support for businesses, directors, and creditors facing financial difficulties.",
    keywords: [
      "insolvency",
      "corporate insolvency",
      "personal insolvency",
      "liquidation",
      "administration",
      "business restructuring"
    ]
  },

  cta: {
    text: "Facing financial difficulties? Contact our insolvency team today for a free consultation.",
    buttonText: "Get Free Consultation",
    link: "/contact"
  }
};

// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const services = [
    {
      id: "conveyancing",
      title: "Conveyancing",
      slug: "conveyancing",
      image: "/services/conveyancing-banner.jpg",
      page: {
        create: {
          title: "Conveyancing Services",
          description:
            "Easy and stress-free conveyancing services to help you buy or sell property with confidence and clarity.",
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
              paragraphs: [],
              listItems: [
                { text: "Fixed Legal Fees – No hidden costs. You know the price upfront." },
                { text: "100% Online – No need to travel. Sign documents safely from home." },
                { text: "Trusted by Thousands – Over 40,000 happy clients and counting." },
                { text: "Smooth and Simple – We do the hard work so you don’t have to." },
                { text: "Expert Advice – Lawyers and paralegals who care and know what they’re doing." },
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
        },
      },
    },

    {
      id: "debt-recovery",
      title: "Debt Recovery",
      slug: "debt-recovery",
      image: "/services/insolvency.jpg",
      page: {
        create: {
          title: "Debt Recovery Services",
          description:
            "Professional and stress-free debt recovery services for individuals, small businesses, and large companies.",
          heroImage: "/images/services/debt-recovery-hero.jpg",
          sections: [
            {
              title: "Debt Recovery Made Simple",
              paragraphs: [
                "At Aussentra Legal, we make debt recovery simple, professional, and stress-free. Whether you're an individual, a small business, or a large company, our experienced team helps you recover what you're owed quickly and effectively.",
                "We understand that unpaid debts can impact your cash flow and peace of mind. That’s why we use smart strategies and legal tools to get results without wasting your time or money.",
              ],
            },
            {
              title: "Why Choose Aussentra Legal for Debt Recovery?",
              paragraphs: [],
              listItems: [
                { text: "Expert legal team specialising in debt recovery" },
                { text: "No recovery, no commission" },
                { text: "Clear, honest advice before you commit" },
                { text: "Fast and effective communication" },
                { text: "Online portal to track and manage your case" },
                { text: "Legal support from start to finish" },
              ],
            },
            {
              title: "Our Debt Recovery Services",
              paragraphs: [
                "We help with all types of unpaid debts across a wide range of industries:",
              ],
              listItems: [
                {
                  text: "Personal Debt Recovery – Let us handle uncomfortable situations professionally and respectfully so you don’t have to.",
                },
                {
                  text: "Small Business Debt Recovery – We help tradespeople, professionals, and small business owners recover overdue invoices efficiently.",
                },
                {
                  text: "Commercial Debt Recovery – If you’re dealing with large or complex unpaid debts, our tailored approach gives you the best chance of recovery.",
                },
                {
                  text: "Legal Debt Recovery Support – When legal action is needed, our skilled lawyers manage the process and represent your interests every step of the way.",
                },
              ],
            },
            {
              title: "Our Debt Recovery Process",
              paragraphs: [],
              listItems: [
                {
                  text: "Demand for Payment – We contact the debtor through email, phone, or letter with a firm but fair request for payment.",
                },
                {
                  text: "Negotiation – If the debtor responds, we negotiate a payment or instalment plan on your behalf.",
                },
                {
                  text: "Legal Action – If required, our legal team steps in to take strong action backed by clear advice and full support.",
                },
              ],
            },
            {
              title: "Ready to Recover What You're Owed?",
              paragraphs: [
                "Let Aussentra Legal help you take control of your debt recovery. We’ll guide you through the process with care, honesty, and results that matter.",
                "Get in touch today for expert advice or to start your debt recovery journey with no recovery, no commission.",
              ],
            },
          ],
          meta: {
            title: "Debt Recovery Services | Expert Legal Support",
            description:
              "Get professional debt recovery services from Aussentra Legal. Recover debts efficiently and stress-free with our expert legal team.",
            keywords: [
              "debt recovery",
              "unpaid debts",
              "commercial debt",
              "legal recovery",
              "business debt recovery",
              "personal debt recovery",
            ],
          },
          cta: {
            text: "Ready to recover what you're owed? Contact our debt recovery team today.",
            buttonText: "Get Free Quote",
            link: "/contact",
          },
        },
      },
    },

    {
      id: "family-law",
      title: "Family Law",
      slug: "family-law",
      image: "/services/family-law.jpg",
      page: {
        create: {
          title: "Family Law Services",
          description:
            "Expert family law legal support for separation, divorce, child custody, and property matters with care and respect.",
          heroImage: "/images/services/family-law-hero.jpg",
          sections: [
            {
              title: "Understanding Family Law",
              paragraphs: [
                "When you're facing a family issue like separation, divorce, or child custody, things can feel overwhelming. At Aussentra Legal, we’re here to guide you through it with care, respect, and expert legal advice.",
                "Our experienced team of family lawyers in Sydney will take the time to understand your situation and help you make the best decisions for your future. Whether your case is simple or complicated, we’re ready to help.",
              ],
            },
            {
              title: "Why Choose Aussentra Legal for Family Law?",
              paragraphs: [
                "We focus on providing expert guidance, protecting your rights, and making the legal process as smooth as possible.",
              ],
              listItems: [
                { text: "Family Law Specialists You Can Trust – Skilled professionals who understand the law inside and out." },
                { text: "We Focus on You – Personalized advice tailored to your situation." },
                { text: "We Handle Complex Matters Too – International custody disputes or large property settlements." },
                { text: "Flexible Fees to Suit Your Budget – Affordable options without cutting corners." },
                { text: "Local and International Experience – Expertise in both domestic and overseas family law matters." },
              ],
            },
            {
              title: "Areas of Family Law We Cover",
              paragraphs: [
                "Our services cover all aspects of family law, ensuring you get the guidance and protection you need.",
              ],
              listItems: [
                { text: "Divorce and separation" },
                { text: "Child custody and parenting arrangements" },
                { text: "Property and financial settlements" },
                { text: "Spousal support" },
                { text: "De facto and same-sex relationships" },
                { text: "Family violence and intervention orders" },
              ],
            },
            {
              title: "Support Through Every Step",
              paragraphs: [
                "At Aussentra Legal, we know how emotional and stressful family issues can be. That’s why we treat every client with kindness, care, and respect.",
                "We’ll guide you through the legal process and fight for what matters most to you.",
              ],
            },
            {
              title: "Talk to a Family Lawyer Today",
              paragraphs: [
                "If you’re going through a family law issue or just need legal advice, don’t wait. Contact Aussentra Legal today to speak with one of our friendly family lawyers.",
                "Call us to book your free first consultation. Let’s talk about how we can support you and your family.",
              ],
            },
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
              "family lawyers Sydney",
            ],
          },
          cta: {
            text: "Facing a family law issue? Contact our experienced family law team today.",
            buttonText: "Book Free Consultation",
            link: "/contact",
          },
        },
      },
    },

    {
      id: "immigration-law",
      title: "Immigration Law",
      slug: "immigration-law",
      image: "/services/immigration-law.jpg",
      page: {
        create: {
          title: "Immigration Law Services",
          description:
            "Expert legal guidance for visas, citizenship, and immigration issues in Australia.",
          heroImage: "/images/services/immigration-law-hero.jpg",
          sections: [
            {
              title: "Immigration Law",
              paragraphs: [
                "Immigration rules can be confusing and change often. That’s why it's important to get clear, expert advice you can trust. Our team of immigration lawyers is here to guide you through every step, so you can live, work, study, or retire in Australia with confidence.",
                "We help with all types of visas, citizenship, detention cases, and appeals. Whether you're applying for the first time or dealing with a visa issue, we’re here to make the process easier and less stressful.",
              ],
            },
            {
              title: "What Is an Immigration Lawyer?",
              paragraphs: [
                "An immigration lawyer is a legal expert who helps people move to another country legally. They give advice, prepare important documents, and make sure everything is done the right way.",
                "Immigration lawyers help with things like visas, citizenship, appeals, and any problems that may come up along the way. Their job is to guide you, protect your rights, and make the process easier and less stressful.",
              ],
            },
            {
              title: "Our Services We Offer",
              paragraphs: [
                "We offer clear, reliable legal support for all kinds of immigration needs. Whether you’re coming to Australia to live, work, study, or join family, Aussentra Legal is here to help. Our team handles everything from paperwork to legal advice, making the whole process easier for you.",
              ],
              listItems: [
                { text: "Work and Business Visas – We help skilled workers, business owners, and employers apply for the right work visas and meet sponsorship rules." },
                { text: "Partner and Family Visas – Bringing your partner, children, or parents to live with you? We guide families through the application process with care and support." },
                { text: "Citizenship and Residency – Want to become an Australian citizen? We make the steps simple and help you apply for citizenship or permanent residency quickly." },
                { text: "Refugee and Humanitarian Visas – If you're seeking safety, we support you in applying for a protection visa and explain each step clearly." },
                { text: "Visa Appeals and Reviews – Had a visa refused or cancelled? We help with appeals and reviews at all legal levels and represent you professionally." },
                { text: "Complex Visa Problems – If personal or legal issues are affecting your visa, we’ll work with you to fix the problem and get back on track." },
                { text: "Other Visas – We assist with student, travel, temporary, and permanent visas, all with step-by-step guidance." },
              ],
            },
            {
              title: "Why Choose Aussentra Legal?",
              paragraphs: [
                "At Aussentra Legal, we do more than just complete forms; we help people build new lives with confidence and peace of mind.",
              ],
              listItems: [
                { text: "Friendly and qualified legal team" },
                { text: "Clear advice in simple language" },
                { text: "Support from start to finish" },
                { text: "Trusted by individuals, families, students, and professionals" },
                { text: "Affordable and transparent pricing" },
              ],
            },
            {
              title: "Let’s Get Started with Aussentra Legal",
              paragraphs: [
                "Need help with a visa, citizenship, or immigration issue? Whether you’re starting fresh or dealing with a difficult case, Aussentra Legal is ready to support you every step of the way.",
                "Contact Aussentra Legal today for expert advice and take the first step toward your future in Australia.",
              ],
            },
          ],
          meta: {
            title: "Immigration Law Services | Visa & Citizenship Lawyers in Australia",
            description:
              "Aussentra Legal provides expert help with visas, citizenship, appeals, and all immigration matters. Trusted lawyers for all your immigration needs.",
            keywords: [
              "immigration law",
              "visa lawyer",
              "citizenship lawyer",
              "immigration advice",
              "visa appeals",
              "australia immigration legal help",
            ],
          },
          cta: {
            text: "Need help with your visa or immigration case? Our expert team is ready to guide you.",
            buttonText: "Get Expert Advice",
            link: "/contact",
          },
        },
      },
    },

    {
      id: "insolvency",
      title: "Insolvency Services",
      slug: "insolvency",
      image: "/services/insolvency.jpg",
      page: {
        create: {
          title: "Insolvency Services",
          description:
            "Professional insolvency legal support to help businesses, directors, and creditors navigate financial difficulties.",
          heroImage: "/images/services/insolvency-hero.jpg",
          sections: [
            {
              title: "Understanding Insolvency",
              paragraphs: [
                "Every year, thousands of businesses in Australia find themselves in financial trouble. If a business can’t pay its debts when they’re due, it may be facing insolvency.",
                "At Aussentra Legal, we understand how stressful this can be. That’s why we offer friendly, professional legal support to help you explore your options, protect your rights, and take the right steps forward whether you’re a business owner, company director, or creditor.",
              ],
            },
            {
              title: "What Is Insolvency?",
              paragraphs: [
                "In simple terms, insolvency means your business can’t pay its bills on time. This can happen to companies (corporate insolvency) or individuals (personal insolvency).",
                "When a business becomes insolvent, it’s important to act fast. Waiting too long can make things worse and could put directors at risk of legal penalties.",
              ],
            },
            {
              title: "Types of Insolvency Services We Offer",
              paragraphs: [
                "At Aussentra Legal, we help guide you through different types of insolvency processes, including:",
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
                { text: "Voidable Transactions – Protect your rights if a liquidator tries to claw back payments." },
              ],
            },
            {
              title: "Early Warning Signs of Insolvency",
              paragraphs: ["If these sound familiar, it’s time to get legal advice."],
              listItems: [
                { text: "Constant cash flow problems" },
                { text: "Missed payments or unpaid invoices" },
                { text: "Overdue taxes or superannuation" },
                { text: "Creditors chasing money or threatening legal action" },
                { text: "Directors using personal funds to keep the business going" },
              ],
            },
            {
              title: "Obligation-Free Consultation",
              paragraphs: [
                "At Aussentra Legal, we know how overwhelming financial difficulties can be. That’s why we offer clear, compassionate, and expert legal advice with no judgment and no jargon.",
                "Whether your business can be saved or needs a respectful, legal exit, our experienced team is here to help.",
                "Call us now for a free consultation or visit our website to learn more about how our Insolvency Services can support you or your clients.",
              ],
            },
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
              "business restructuring",
            ],
          },
          cta: {
            text: "Facing financial difficulties? Contact our insolvency team today for a free consultation.",
            buttonText: "Get Free Consultation",
            link: "/contact",
          },
        },
      },
    },

    {
      id: "probate-estate-law",
      title: "Probate & Estate Administration Services",
      slug: "probate-estate-law",
      image: "/services/probate-estate.jpg",
      page: {
        create: {
          title: "Probate & Estate Administration Services",
          description:
            "Compassionate and professional legal assistance for executors, administrators, and beneficiaries in probate and estate administration matters.",
          heroImage: "/images/services/probate-estate-hero.jpg",
          sections: [
            {
              title: "Understanding Probate & Estate Law",
              paragraphs: [
                "Probate and estate law governs how a deceased person’s assets are managed, distributed, and finalized. It ensures that their will is legally validated, debts are settled, and beneficiaries receive their rightful inheritance.",
                "Our probate and estate lawyers provide supportive, step-by-step guidance through the entire process — from applying for probate to distributing assets and resolving estate disputes. We work closely with executors, administrators, and families during what is often a sensitive and emotional time.",
              ],
              listItems: [
                { text: "Probate applications and estate grants" },
                { text: "Executor and administrator guidance" },
                { text: "Estate distribution and settlement" },
              ],
            },
            {
              title: "What Is Probate?",
              paragraphs: [
                "Probate is the legal process of proving and registering a deceased person’s will in court. Once granted, it authorizes the executor to manage and distribute the estate according to the will’s terms.",
                "If the deceased did not leave a will, the process is known as **Letters of Administration**, where an eligible family member is appointed by the court to handle the estate.",
              ],
              listItems: [
                { text: "Applying for probate or letters of administration" },
                { text: "Collecting and valuing assets" },
                { text: "Paying debts and taxes" },
                { text: "Transferring or selling property and investments" },
                { text: "Final distribution to beneficiaries" },
              ],
            },
            {
              title: "Executor & Administrator Responsibilities",
              paragraphs: [
                "Being named as an executor or appointed as an administrator comes with significant legal duties and personal responsibilities. Our team can help you fulfill these obligations efficiently and correctly, minimizing the risk of errors or disputes.",
              ],
              listItems: [
                { text: "Identifying and securing estate assets" },
                { text: "Notifying beneficiaries and creditors" },
                { text: "Managing estate finances and accounts" },
                { text: "Preparing and lodging tax returns" },
                { text: "Ensuring proper distribution of assets" },
              ],
            },
            {
              title: "Estate Disputes & Will Contests",
              paragraphs: [
                "Sometimes disagreements arise over the validity of a will or how an estate is distributed. Our estate litigation lawyers can assist with disputes between beneficiaries, executors, and family members, always aiming for practical and respectful resolutions.",
              ],
              listItems: [
                { text: "Challenging or defending a will" },
                { text: "Claims for inadequate provision under family law" },
                { text: "Executor misconduct and removal proceedings" },
                { text: "Mediation and settlement negotiations" },
              ],
            },
            {
              title: "Why Choose Our Probate & Estate Lawyers?",
              paragraphs: [
                "We understand that managing an estate after a loved one’s passing can be overwhelming. Our lawyers combine compassion with legal expertise to ensure the process runs smoothly, efficiently, and with minimal stress for all parties involved.",
              ],
              listItems: [
                { text: "Experienced in both simple and complex estates" },
                { text: "Clear guidance through all legal and financial steps" },
                { text: "Support for executors, administrators, and beneficiaries" },
                { text: "Efficient handling of disputes and settlements" },
                { text: "Transparent communication and fixed-fee options" },
              ],
            },
            {
              title: "Start the Probate Process with Confidence",
              paragraphs: [
                "If you’ve been appointed as an executor or need help managing an estate, we’re here to help. Our team can assist with all aspects of probate and estate administration, ensuring every step is completed correctly and with care.",
              ],
            },
          ],
          meta: {
            title: "Probate & Estate Lawyers | Estate Administration & Will Disputes",
            description:
              "Experienced probate and estate lawyers helping executors and families manage estate administration, probate applications, and inheritance disputes.",
            keywords: [
              "probate lawyer",
              "estate administration",
              "executor duties",
              "letters of administration",
              "will disputes",
              "estate distribution",
              "inheritance lawyer",
            ],
          },
          cta: {
            text: "Need help with probate or estate administration? Speak with our experienced estate lawyers today for compassionate legal support.",
            buttonText: "Book a Consultation",
            link: "/contact",
          },
        },
      },
    },

    {
      id: "wills",
      title: "Wills & Estate Services",
      slug: "wills",
      image: "/services/wills.jpg",
      page: {
        create: {
          title: "Wills & Estate Services",
          description:
            "Create clear and legally sound Wills and estate plans to protect your family and assets with expert guidance from Aussentra Legal.",
          heroImage: "/images/services/wills-hero.jpg",
          sections: [
            {
              title: "Planning Your Will",
              paragraphs: [
                "Planning what happens to your assets and family after you pass away isn’t always easy to think about but it’s one of the most important things you can do for the people you care about.",
                "At Aussentra Legal, we help individuals and families across Sydney create clear, legally sound Wills and estate plans that give peace of mind, protect assets, and make life easier for loved ones during difficult times. Whether you need a basic Will or a complete estate plan, our team is here to support you every step of the way.",
              ],
            },
            {
              title: "What Is a Will and Why Do You Need One?",
              paragraphs: [
                "A Will is a legal document that explains what should happen to your belongings like your home, money, superannuation, and personal items after you pass away. It also lets you:",
              ],
              listItems: [
                { text: "Name the people (called beneficiaries) who will receive your assets" },
                { text: "Appoint a trusted person (called an executor) to carry out your wishes" },
                { text: "Choose guardians for your children if they’re under 18" },
                { text: "Give gifts, donations, or instructions that are important to you" },
              ],
            },
            {
              title: "Consequences of Not Having a Will",
              paragraphs: [
                "If you don’t have a Will, your estate is handled under intestacy laws. This means the law decides how your estate is divided, and it may not match what you would have wanted. It can also create unnecessary delays, costs, or disputes among family members.",
              ],
            },
            {
              title: "Wills & Estate Services at Aussentra Legal",
              paragraphs: [
                "We can assist with a wide range of estate planning needs, from creating new Wills to managing estates after someone passes.",
              ],
              listItems: [
                { text: "Writing or updating a Will" },
                { text: "Creating Powers of Attorney and Enduring Guardian appointments" },
                { text: "Superannuation advice in estate planning" },
                { text: "Setting up testamentary and special disability trusts" },
                { text: "Probate and Letters of Administration" },
                { text: "Managing and distributing a loved one’s estate" },
                { text: "Estate disputes (challenging or defending a Will)" },
                { text: "Removing an executor or resolving disputes between family members" },
              ],
            },
            {
              title: "Why Choose Aussentra Legal?",
              paragraphs: [
                "We provide clear, compassionate, and practical legal advice to make estate planning and Wills simple, secure, and stress-free.",
              ],
              listItems: [
                { text: "Clear advice without legal jargon" },
                { text: "Friendly and approachable lawyers" },
                { text: "Support with simple and complex estates" },
                { text: "Affordable, transparent pricing" },
                { text: "Local experience with Sydney and NSW laws" },
                { text: "Respectful support during emotional times" },
                { text: "Free secure storage of your Will" },
              ],
            },
            {
              title: "Let’s Make Planning Easier – Talk to Us Today",
              paragraphs: [
                "At Aussentra Legal, we believe everyone deserves to have their wishes respected and their family protected. Whether you’re making your first Will, updating one after a major life change, or need help with a loved one’s estate, we’re here to guide you with care, clarity, and compassion.",
                "Call us now or book a free consultation online. Let’s make your estate planning simple, personal, and stress-free.",
              ],
            },
          ],
          meta: {
            title: "Wills & Estate Services | Sydney Estate Planning Lawyers",
            description:
              "Aussentra Legal helps you create Wills and estate plans to protect your family and assets, offering expert advice for simple or complex estates.",
            keywords: [
              "wills",
              "estate planning",
              "Sydney lawyers",
              "executor",
              "beneficiaries",
              "probate",
              "estate disputes",
            ],
          },
          cta: {
            text: "Need help with a Will or estate plan? Contact our expert team today.",
            buttonText: "Book Free Consultation",
            link: "/contact",
          },
        },
      },
    },
  ];

  for (const s of services) {
    await prisma.service.upsert({
      where: { id: s.id },
      update: {},
      create: s,
    });
  }

  console.log("✅ All services seeded successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());

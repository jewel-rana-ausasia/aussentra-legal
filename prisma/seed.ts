// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcryptjs';

// const prisma = new PrismaClient();

// async function main() {
//   const email = 'admin@example.com';
//   const password = 'Admin@123'; // change in prod!
//   const passwordHash = await bcrypt.hash(password, 10);

//   await prisma.user.upsert({
//     where: { email },
//     update: { role: 'ADMIN', passwordHash },
//     create: {
//       email,
//       name: 'Site Admin',
//       role: 'ADMIN',
//       passwordHash,
//     },
//   });

//   console.log('\n✅ Admin seeded');
//   console.log('   Email   :', email);
//   console.log('   Password:', password, '\n');
// }

// main().finally(() => prisma.$disconnect());

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // -----------------------------
  // 1️⃣ Seed Admin User
  // -----------------------------
  const email = "admin@example.com";
  const password = "Admin@123"; // change in production
  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: { role: "ADMIN", passwordHash },
    create: {
      email,
      name: "Site Admin",
      role: "ADMIN",
      passwordHash,
    },
  });

  console.log("\n✅ Admin seeded");
  console.log("   Email   :", email);
  console.log("   Password:", password, "\n");

  // -----------------------------
  // 2️⃣ Seed Navbar + NavItems
  // -----------------------------
  const navbarExists = await prisma.navbar.findFirst();

  if (!navbarExists) {
    const navbar = await prisma.navbar.create({
      data: {
        logoUrl: "/aussentra-legal-logo-white.png",
        ctaText: "Free consultant",
        ctaLink: "/contact",
        navItems: {
          create: [
            { label: "Home", href: "/", icon: "home", order: 1 },
            { label: "About Us", href: "/about", icon: "info", order: 2 },
            {
              label: "Services",
              href: "/services",
              icon: "briefcase",
              order: 3,
            },
            { label: "Faq", href: "/faq", icon: "help", order: 4 },
            { label: "Contact Us", href: "/contact", icon: "mail", order: 5 },
          ],
        },
      },
      include: { navItems: true },
    });

    console.log("✅ Navbar seeded with default nav items");
    console.log("   Logo URL:", navbar.logoUrl);
    console.log("   CTA Text:", navbar.ctaText);
    console.log(
      "   Nav Items:",
      navbar.navItems.map((i) => i.label).join(", "),
      "\n"
    );
  } else {
    console.log("ℹ️ Navbar already exists, skipping seeding");
  }

  // -----------------------------
  // 3️⃣ Seed Header
  // -----------------------------
  const headerExists = await prisma.header.findUnique({
    where: { id: "default" },
  });

  if (!headerExists) {
    const header = await prisma.header.create({
      data: {
        id: "default",
        videoUrl: "/home/video-aussentra-legal.mp4",
        fallbackImage: "/home/all-people-are-equal-before-the-law.jpg",
        title: "Protecting Your Family's",
        subtitle: "Future with Care",
        description: `Managing an estate, preparing a Will, or resolving a Will
          dispute can be stressful, emotional, and time-consuming. With
          our exclusive focus on Wills and Estate law, Aussentra Legal has
          the expertise to guide you smoothly through the process, protect
          your interests, and help you move forward with confidence.`,
        ctaText: "Explore Our Services",
        ctaLink: "/services",
      },
    });

    console.log("✅ Header seeded");
    console.log("   Title:", header.title);
    console.log("   Subtitle:", header.subtitle);
    console.log("   CTA:", header.ctaText, "->", header.ctaLink, "\n");
  } else {
    console.log("ℹ️ Header already exists, skipping seeding");
  }

  // -----------------------------
  // 4️⃣ Seed About Section
  // -----------------------------
  const aboutExists = await prisma.aboutSection.findUnique({
    where: { id: "default" },
  });

  if (!aboutExists) {
    const about = await prisma.aboutSection.create({
      data: {
        id: "default",
        title: "Aussentra Legal Your Partner",
        subtitle: "in Justice",
        description: `Aussentra Legal is a law firm focused on providing personal, practical, and easy-to-understand legal services for families, homebuyers, and business owners. We specialise in property transactions, estate planning, wills, probate, and banking law.

We know legal matters can be confusing and stressful, so we’re here to make the process simple and clear. With fixed-fee pricing and straightforward advice, we help you make confident decisions without surprises.

At Aussentra Legal, we listen carefully, respect your needs, and guide you with care every step of the way so you feel supported and in control of your legal journey. Our goal is to build lasting relationships based on trust, transparency, and respect. We are committed to helping you protect what matters most and plan for the future with peace of mind.`,
        listItems: [
          "Full service corporate & business law.",
          "Reliable and innovative legal solutions.",
        ],
        buttonText: "Discover more",
        buttonLink: "#",
        imageUrl: "/about/about-section.jpg",
      },
    });

    console.log("✅ About Section seeded");
    console.log("   Title:", about.title);
    console.log("   Subtitle:", about.subtitle);
    console.log("   Button:", about.buttonText, "->", about.buttonLink, "\n");
  } else {
    console.log("ℹ️ About Section already exists, skipping seeding");
  }


  
  // -----------------------------
  // 5 Seed caseStudies Section
  // -----------------------------

  const caseStudies = [
    {
      icon: "/legal-production.png",
      title: "Clarity & Simplicity",
      description:
        "Straightforward, plain-English advice that makes complex legal matters easier to understand so you can make confident, informed decisions.",
      order: 1,
    },
    {
      icon: "/private.png",
      title: "Trust & Respect",
      description:
        "We build genuine, lasting relationships through personal service, honesty, and treating every client with care and dignity.",
      order: 2,
    },
    {
      icon: "/winning-awards.png",
      title: "Empowerment & Control",
      description:
        "Our goal is to give you the knowledge, guidance, and confidence to stay in control of your legal journey every step of the way.",
      order: 3,
    },
  ];

  for (const cs of caseStudies) {
    await prisma.aboutCaseStudy.upsert({
      where: { id: cs.icon }, // using icon as unique key for demo
      update: cs,
      create: cs,
    });
  }
  console.log("✅ About CaseStudy items seeded");

  // -----------------------------
  // 4️⃣ Seed About Section 2
  // -----------------------------
  
  const aboutsection2Exists = await prisma.aboutSection2.findUnique({
    where: { id: "default" },
  });

  if (!aboutsection2Exists) {
    const about = await prisma.aboutSection2.create({
      data: {
        id: "default",
        title: "Legal Help You Can",
        subtitle: "Count On",
        description: `Everyone deserves a fair go under the law. Navigating legal
          matters can be complex and overwhelming, but having the right
          lawyer by your side makes all the difference. Our experienced
          legal team is committed to providing clear, practical, and
          tailored guidance for every situation. We take the time to
          understand your unique circumstances, explain your options in
          plain language, and empower you to make informed decisions. With
          our support, you can move forward with confidence, knowing that
          your rights are protected and your interests are our priority.`,
        imageUrl: "/home/we-here-for-provide-legal-consultancy.jpg",
      },
    });

    console.log("✅ About Section 2 seeded");
    console.log("   Title:", about.title);
    console.log("   Subtitle:", about.subtitle, "\n");
  } else {
    console.log("ℹ️ About Section 2 already exists, skipping seeding");
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

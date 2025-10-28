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


import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // -----------------------------
  // 1️⃣ Seed Admin User
  // -----------------------------
  const email = 'admin@example.com';
  const password = 'Admin@123'; // change in production
  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: { role: 'ADMIN', passwordHash },
    create: {
      email,
      name: 'Site Admin',
      role: 'ADMIN',
      passwordHash,
    },
  });

  console.log('\n✅ Admin seeded');
  console.log('   Email   :', email);
  console.log('   Password:', password, '\n');

  // -----------------------------
  // 2️⃣ Seed Navbar + NavItems
  // -----------------------------
  const navbarExists = await prisma.navbar.findFirst();

  if (!navbarExists) {
    const navbar = await prisma.navbar.create({
      data: {
        logoUrl: '/aussentra-legal-logo-white.png',
        ctaText: 'Free consultant',
        ctaLink: '/contact',
        navItems: {
          create: [
            { label: 'Home', href: '/', icon: 'home', order: 1 },
            { label: 'About Us', href: '/about', icon: 'info', order: 2 },
            { label: 'Services', href: '/services', icon: 'briefcase', order: 3 },
            { label: 'Faq', href: '/faq', icon: 'help', order: 4 },
            { label: 'Contact Us', href: '/contact', icon: 'mail', order: 5 },
          ],
        },
      },
      include: { navItems: true },
    });

    console.log('✅ Navbar seeded with default nav items');
    console.log('   Logo URL:', navbar.logoUrl);
    console.log('   CTA Text:', navbar.ctaText);
    console.log('   Nav Items:', navbar.navItems.map((i) => i.label).join(', '), '\n');
  } else {
    console.log('ℹ️ Navbar already exists, skipping seeding');
  }

  
  // -----------------------------
  // 3️⃣ Seed Header
  // -----------------------------
  const headerExists = await prisma.header.findUnique({ where: { id: 'default' } });

  if (!headerExists) {
    const header = await prisma.header.create({
      data: {
        id: 'default',
        videoUrl: '/home/video-aussentra-legal.mp4',
        fallbackImage: '/home/all-people-are-equal-before-the-law.jpg',
        title: "Protecting Your Family's",
        subtitle: 'Future with Care',
        description: `Managing an estate, preparing a Will, or resolving a Will
          dispute can be stressful, emotional, and time-consuming. With
          our exclusive focus on Wills and Estate law, Aussentra Legal has
          the expertise to guide you smoothly through the process, protect
          your interests, and help you move forward with confidence.`,
        ctaText: 'Explore Our Services',
        ctaLink: '/services',
        iconUrl: '/balance-icon.svg',
      },
    });

    console.log('✅ Header seeded');
    console.log('   Title:', header.title);
    console.log('   Subtitle:', header.subtitle);
    console.log('   CTA:', header.ctaText, '->', header.ctaLink, '\n');
  } else {
    console.log('ℹ️ Header already exists, skipping seeding');
  }
  
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

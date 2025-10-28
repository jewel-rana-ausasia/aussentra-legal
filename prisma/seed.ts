import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@example.com';
  const password = 'Admin@123'; // change in prod!
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
}

main().finally(() => prisma.$disconnect());

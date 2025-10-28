import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const navbar = await prisma.navbar.findFirst({
    include: { navItems: { orderBy: { order: "asc" } } },
  });
  return NextResponse.json(navbar);
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const logo = formData.get("logo") as File | null;
  const ctaText = formData.get("ctaText") as string;
  const ctaLink = formData.get("ctaLink") as string;

  let logoUrl: string | undefined;

  if (logo) {
    const bytes = await logo.arrayBuffer();

    const buffer = Buffer.from(bytes);

    // ✅ Ensure uploads directory exists before writing
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, logo.name);
    await fs.writeFile(filePath, buffer);
    logoUrl = `/uploads/${logo.name}`;
  }

  const existing = await prisma.navbar.findFirst();
  const updated = await prisma.navbar.upsert({
    where: { id: existing?.id || "default" },
    update: { logoUrl: logoUrl || existing?.logoUrl, ctaText, ctaLink },
    create: { logoUrl: logoUrl || "/default-logo.png", ctaText, ctaLink },
  });

  return NextResponse.json(updated);
}

export async function PATCH(req: Request) {
  const data = await req.json();
  const navbar = await prisma.navbar.findFirst();

  if (!navbar)
    return NextResponse.json({ error: "Navbar not found" }, { status: 404 });

  const item = await prisma.navItem.create({
    data: {
      label: data.label,
      href: data.href,
      icon: data.icon,
      order: data.order,
      navbarId: navbar.id,
    },
  });

  return NextResponse.json(item);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.navItem.delete({ where: { id } });
  return NextResponse.json({ success: true });
}

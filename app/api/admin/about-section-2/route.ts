import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const section = await prisma.aboutSection2.findUnique({ where: { id: "default" } });
  return NextResponse.json(section);
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const image = formData.get("image") as File;
  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const description = formData.get("description") as string;

  let imageUrl: string | undefined = undefined;

  if (image) {
    const buffer = Buffer.from(await image.arrayBuffer());
    const filePath = path.join(process.cwd(), "public/uploads", image.name);
    await fs.writeFile(filePath, buffer);
    imageUrl = `/uploads/${image.name}`;
  }

  const updated = await prisma.aboutSection2.upsert({
    where: { id: "default" },
    update: {
      ...(imageUrl && { imageUrl }),
      title,
      subtitle,
      description,
    },
    create: {
      id: "default",
      imageUrl: imageUrl ?? "/home/we-here-for-provide-legal-consultancy.jpg",
      title,
      subtitle,
      description,
    },
  });

  return NextResponse.json(updated);
}

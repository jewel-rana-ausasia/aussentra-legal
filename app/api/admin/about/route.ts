import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from "fs";

export async function GET() {
  const about = await prisma.aboutSection.findFirst(); // get first record
  return NextResponse.json(about);
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const description = formData.get("description") as string;
  const listItems = formData.getAll("listItems") as string[];
  const buttonText = formData.get("buttonText") as string;
  const buttonLink = formData.get("buttonLink") as string;
  const image = formData.get("image") as File;

  let imageUrl: string | undefined = undefined;

  if (image) {
    const buffer = Buffer.from(await image.arrayBuffer());
    const filePath = path.join(process.cwd(), "public/uploads", image.name);
    await fs.writeFile(filePath, buffer);
    imageUrl = `/uploads/${image.name}`;
  }

  const updated = await prisma.aboutSection.upsert({
    where: { id: 'default' },
    update: {
      title,
      subtitle,
      description,
      listItems,
      buttonText,
      buttonLink,
      ...(imageUrl && { imageUrl }),
    },
    create: {
      id: 'default',
      title,
      subtitle,
      description,
      listItems,
      buttonText,
      buttonLink,
      imageUrl: imageUrl ?? "/about/about-section.jpg",
    },
  });

  return NextResponse.json(updated);
}

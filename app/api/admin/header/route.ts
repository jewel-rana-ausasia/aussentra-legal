// app/api/header/route.ts
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from "fs";


export async function GET() {
  const header = await prisma.header.findUnique({ where: { id: 'default' } });
  return new Response(JSON.stringify(header), { status: 200 });
}


export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const video = formData.get("video") as File;
  const fallbackImage = formData.get("fallbackImage") as File;
  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const description = formData.get("description") as string;
  const ctaText = formData.get("ctaText") as string;
  const ctaLink = formData.get("ctaLink") as string;

  let videoUrl = undefined;
  let fallbackUrl = undefined;

  if (video) {
    const buffer = Buffer.from(await video.arrayBuffer());
    const filePath = path.join(process.cwd(), "public/uploads", video.name);
    await fs.writeFile(filePath, buffer);
    videoUrl = `/uploads/${video.name}`;
  }

  if (fallbackImage) {
    const buffer = Buffer.from(await fallbackImage.arrayBuffer());
    const filePath = path.join(process.cwd(), "public/uploads", fallbackImage.name);
    await fs.writeFile(filePath, buffer);
    fallbackUrl = `/uploads/${fallbackImage.name}`;
  }

  const updated = await prisma.header.upsert({
    where: { id: "default" },
    update: {
      ...(videoUrl && { videoUrl }),
      ...(fallbackUrl && { fallbackImage: fallbackUrl }),
      title,
      subtitle,
      description,
      ctaText,
      ctaLink,
    },
    create: {
      id: "default",
      videoUrl: videoUrl ?? "/home/video-aussentra-legal.mp4",
      fallbackImage: fallbackUrl ?? "/home/all-people-are-equal-before-the-law.jpg",
      title,
      subtitle,
      description,
      ctaText,
      ctaLink,
    },
  });

  return NextResponse.json(updated);
}
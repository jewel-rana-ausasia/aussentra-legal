//api/admin/services

import { prisma } from "@/lib/prisma"; // your prisma client
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      include: {
        page: {
          select: {
            heroImage: true,
          },
        },
      },
    });

    const formatted = services.map((s) => ({
      title: s.title,
      slug: s.slug,
      image: s.image || "/placeholder.jpg",
      link: `/services/${s.slug}`,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
  }
}



// POST create a new service
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Basic service info
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;

    // Image files
    const heroFile = formData.get("heroImage") as File;
    const imageFile = formData.get("image") as File;

    let heroUrl: string | undefined;
    let imageUrl: string | undefined;

    if (heroFile) {
      const buffer = Buffer.from(await heroFile.arrayBuffer());
      const filePath = path.join(process.cwd(), "public/uploads", heroFile.name);
      await fs.writeFile(filePath, buffer);
      heroUrl = `/uploads/${heroFile.name}`;
    }

    if (imageFile) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const filePath = path.join(process.cwd(), "public/uploads", imageFile.name);
      await fs.writeFile(filePath, buffer);
      imageUrl = `/uploads/${imageFile.name}`;
    }

    // Nested data: sections, CTA, meta
    const sectionsStr = formData.get("sections") as string | null;
    const sections = sectionsStr ? JSON.parse(sectionsStr) : [];

    const ctaStr = formData.get("cta") as string | null;
    const cta = ctaStr ? JSON.parse(ctaStr) : null;

    const metaStr = formData.get("meta") as string | null;
    const meta = metaStr ? JSON.parse(metaStr) : null;

    // Create service with nested page
    const service = await prisma.service.create({
      data: {
        id: crypto.randomUUID(),
        title,
        slug,
        image: imageUrl,
        page: {
          create: {
            title,
            description,
            heroImage: heroUrl,
            sections: {
              create: sections.map((sec: any) => ({
                title: sec.title,
                paragraphs: {
                  create: sec.paragraphs?.map((p: any) => ({ text: p.text })) || [],
                },
                listItems: {
                  create: sec.listItems?.map((l: any) => ({ text: l.text })) || [],
                },
              })),
            },
            cta: cta ? { create: cta } : undefined,
            meta: meta ? { create: meta } : undefined,
          },
        },
      },
      include: {
        page: {
          include: {
            sections: { include: { paragraphs: true, listItems: true } },
            cta: true,
            meta: true,
          },
        },
      },
    });

    return NextResponse.json(service);
  } catch (error) {
    console.error("POST /api/services error:", error);
    return NextResponse.json({ error: "Failed to create service" }, { status: 500 });
  }
}
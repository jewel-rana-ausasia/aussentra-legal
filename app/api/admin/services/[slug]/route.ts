//  /api/admin/services/[slug]

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const service = await prisma.service.findUnique({
      where: { slug },
      include: {
        page: {
          include: {
            sections: {
              include: {
                paragraphs: true,
                listItems: true,
              },
            },
            meta: true,
            cta: true,
          },
        },
      },
    });

    if (!service || !service.page) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(service);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


// ✅ PUT /api/admin/services/[slug]
export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  try {
    const body = await req.json();
    const { title, slug, image, heroImage, description } = body;

    const existing = await prisma.service.findUnique({
      where: { slug: params.slug },
      include: { page: true },
    });

    if (!existing) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    const updated = await prisma.service.update({
      where: { slug: params.slug },
      data: {
        title,
        slug,
        image,
        page: {
          update: {
            title,
            description,
            heroImage,
          },
        },
      },
      include: { page: true },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT /api/admin/services/[slug] error:", error);
    return NextResponse.json({ error: "Failed to update service" }, { status: 500 });
  }
}

// ✅ DELETE /api/admin/services/[slug]
export async function DELETE(_: Request, { params }: { params: { slug: string } }) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug: params.slug },
      include: { page: true },
    });

    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    // Cascade manually delete related content (Page → Sections → Paragraphs/ListItems)
    if (service.page) {
      const pageId = service.page.id;

      const sections = await prisma.section.findMany({ where: { pageId } });
      for (const section of sections) {
        await prisma.paragraph.deleteMany({ where: { sectionId: section.id } });
        await prisma.listItem.deleteMany({ where: { sectionId: section.id } });
      }

      await prisma.section.deleteMany({ where: { pageId } });
      await prisma.meta.deleteMany({ where: { pageId } });
      await prisma.cTA.deleteMany({ where: { pageId } });
      await prisma.page.delete({ where: { id: pageId } });
    }

    await prisma.service.delete({ where: { slug: params.slug } });

    return NextResponse.json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/admin/services/[slug] error:", error);
    return NextResponse.json({ error: "Failed to delete service" }, { status: 500 });
  }
}
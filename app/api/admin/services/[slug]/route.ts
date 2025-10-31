//  /api/admin/services/[slug]

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
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
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// ✅ PUT /api/admin/services/[slug]
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const image = formData.get("image") as string;
    const pageData = JSON.parse(formData.get("page") as string);

    // 1️⃣ Find existing service
    const existingService = await prisma.service.findUnique({
      where: { slug },
      include: { page: { include: { sections: true } } },
    });

    if (!existingService) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    const pageId = existingService.page?.id;

    // 2️⃣ Delete old sections and children (paragraphs, listItems)
    if (pageId) {
      const sections = await prisma.section.findMany({
        where: { pageId },
        select: { id: true },
      });
      const sectionIds = sections.map((s) => s.id);

      await prisma.paragraph.deleteMany({
        where: { sectionId: { in: sectionIds } },
      });
      await prisma.listItem.deleteMany({
        where: { sectionId: { in: sectionIds } },
      });
      await prisma.section.deleteMany({ where: { id: { in: sectionIds } } });
    }

    // 3️⃣ Update service and nested page
    const updatedService = await prisma.service.update({
      where: { slug },
      data: {
        title,
        image,
        page: {
          update: {
            title: pageData.title,
            description: pageData.description,
            heroImage: pageData.heroImage,
            cta: pageData.cta,
            meta: pageData.meta,
            sections: {
              create: pageData.sections.map((section: any) => ({
                title: section.title,
                paragraphs: {
                  create: section.paragraphs.map((p: any) => ({
                    text: p.text,
                  })),
                },
                listItems: {
                  create: section.listItems.map((l: any) => ({ text: l.text })),
                },
              })),
            },
          },
        },
      },
      include: {
        page: {
          include: {
            sections: { include: { paragraphs: true, listItems: true } },
          },
        },
      },
    });

    return NextResponse.json(updatedService);
  } catch (error) {
    console.error("PUT /api/admin/services/[slug] error:", error);
    return NextResponse.json(
      { error: "Failed to update service" },
      { status: 500 }
    );
  }
}

// ✅ DELETE /api/admin/services/[slug]
export async function DELETE(
  _: Request,
  { params }: { params: { slug: string } }
) {
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
    return NextResponse.json(
      { error: "Failed to delete service" },
      { status: 500 }
    );
  }
}

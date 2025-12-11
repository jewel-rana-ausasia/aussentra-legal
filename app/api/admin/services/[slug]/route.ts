//  /api/admin/services/[slug]/route.ts

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
    const pageRaw = formData.get("page") as string | null;
    const pageData = pageRaw ? JSON.parse(pageRaw) : null;

    const existingService = await prisma.service.findUnique({
      where: { slug },
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

    if (!existingService) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    // Update service basic info
    const updatedService = await prisma.service.update({
      where: { slug },
      data: {
        title: title || existingService.title,
        image: image || existingService.image,
      },
    });

    // If page exists, update it; else create
    let pageId = existingService.page?.id;
    if (!pageData) {
      return NextResponse.json(updatedService);
    }

    if (pageId) {
      // Update existing page
      await prisma.page.update({
        where: { id: pageId },
        data: {
          title: pageData.title || "",
          description: pageData.description || "",
          heroImage: pageData.heroImage || "",
        },
      });
    } else {
      // Create new page
      const newPage = await prisma.page.create({
        data: {
          title: pageData.title || "",
          description: pageData.description || "",
          heroImage: pageData.heroImage || "",
          serviceId: existingService.id,
        },
      });
      pageId = newPage.id;
    }

    // 1️⃣ Handle sections
    for (const section of pageData.sections || []) {
      if (section.id) {
        // Existing section → update
        await prisma.section.update({
          where: { id: section.id },
          data: {
            title: section.title,
          },
        });

        // Paragraphs
        for (const para of section.paragraphs || []) {
          if (para.id) {
            await prisma.paragraph.update({
              where: { id: para.id },
              data: { text: para.text },
            });
          } else {
            await prisma.paragraph.create({
              data: { text: para.text, sectionId: section.id },
            });
          }
        }

        // ListItems
        for (const item of section.listItems || []) {
          if (item.id) {
            await prisma.listItem.update({
              where: { id: item.id },
              data: { text: item.text },
            });
          } else {
            await prisma.listItem.create({
              data: { text: item.text, sectionId: section.id },
            });
          }
        }
      } else {
        // New section → create
        const newSection = await prisma.section.create({
          data: {
            title: section.title,
            pageId,
            paragraphs: {
              create: (section.paragraphs || []).map((p: any) => ({
                text: p.text,
              })),
            },
            listItems: {
              create: (section.listItems || []).map((l: any) => ({
                text: l.text,
              })),
            },
          },
        });
      }
    }

    // 2️⃣ Handle CTA
    if (pageData.cta) {
      const existingCTA = await prisma.cTA.findUnique({ where: { pageId } });
      if (existingCTA) {
        await prisma.cTA.update({
          where: { id: existingCTA.id },
          data: pageData.cta,
        });
      } else {
        await prisma.cTA.create({ data: { ...pageData.cta, pageId } });
      }
    }

    // 3️⃣ Handle Meta
    if (pageData.meta) {
      const existingMeta = await prisma.meta.findUnique({ where: { pageId } });
      if (existingMeta) {
        await prisma.meta.update({
          where: { id: existingMeta.id },
          data: pageData.meta,
        });
      } else {
        await prisma.meta.create({ data: { ...pageData.meta, pageId } });
      }
    }

    // ✅ Return updated service with nested page
    const fullService = await prisma.service.findUnique({
      where: { slug },
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

    return NextResponse.json(fullService);
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

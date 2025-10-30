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

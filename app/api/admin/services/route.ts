import { prisma } from "@/lib/prisma"; // your prisma client
import { NextResponse } from "next/server";

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

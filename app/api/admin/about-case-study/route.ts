import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const items = await prisma.aboutCaseStudy.findMany({
    orderBy: { order: "asc" },
  });
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  // Expect data: { id?, icon, title, description, order }
  if (!data.icon || !data.title || !data.description) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const updated = data.id
    ? await prisma.aboutCaseStudy.update({
        where: { id: data.id },
        data,
      })
    : await prisma.aboutCaseStudy.create({ data });

  return NextResponse.json(updated);
}

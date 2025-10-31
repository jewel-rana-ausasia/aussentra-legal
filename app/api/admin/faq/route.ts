import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: fetch all FAQs
export async function GET() {
  try {
    const faqs = await prisma.faq.findMany({
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json(faqs);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to fetch FAQs" }, { status: 500 });
  }
}

// POST: create a new FAQ
export async function POST(request: Request) {
  try {
    const { question, answer } = await request.json();

    if (!question || !answer) {
      return NextResponse.json(
        { message: "Question and answer are required" },
        { status: 400 }
      );
    }

    const newFaq = await prisma.faq.create({
      data: { question, answer },
    });

    return NextResponse.json(newFaq, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to create FAQ" }, { status: 500 });
  }
}

// PUT: update an existing FAQ
export async function PUT(request: Request) {
  try {
    const { id, question, answer } = await request.json();

    if (!id || !question || !answer) {
      return NextResponse.json(
        { message: "ID, question and answer are required" },
        { status: 400 }
      );
    }

    const updatedFaq = await prisma.faq.update({
      where: { id },
      data: { question, answer },
    });

    return NextResponse.json(updatedFaq);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to update FAQ" }, { status: 500 });
  }
}

// DELETE: remove an FAQ
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await prisma.faq.delete({ where: { id } });

    return NextResponse.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to delete FAQ" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    const submission = await prisma.contactSubmission.create({
      data: { firstName, lastName, email, phone, message },
    });

    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to save submission" }, { status: 500 });
  }
}

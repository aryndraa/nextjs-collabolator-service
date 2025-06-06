import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
  const groups = await prisma.group.findMany();
  return NextResponse.json(groups, { status: 201 });
}

const groupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullable(),
  deadlineProject: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
});

export async function POST(req: Request) {
  const body = await req.json();
  const result = groupSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        errors: result.error.flatten().fieldErrors,
        message: "Validation failed",
      },
      { status: 400 }
    );
  }

  const { name, description, deadlineProject } = result.data;

  const group = await prisma.group.create({
    data: {
      name,
      description,
      deadlineProject: new Date(deadlineProject),
    },
  });

  return NextResponse.json(group, { status: 201 });
}

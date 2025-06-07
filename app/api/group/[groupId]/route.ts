import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(
  _: Request,
  { params }: { params: { groupId: string } }
) {
  const group = await prisma.group.findUnique({
    where: { id: Number(params.groupId) },
    include: {
      participants: true,
    },
  });

  if (!group) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(group);
}

const groupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullable(),
  deadlineProject: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  userId: z.number(),
});

export async function PUT(
  req: Request,
  { params }: { params: { groupId: string } }
) {
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

  const { name, description, deadlineProject, userId } = result.data;

  const isAdmin = await prisma.groupParticipant.findFirst({
    where: {
      groupId: Number(params.groupId),
      userId: Number(userId),
      role: "ADMIN",
    },
  });

  if (isAdmin) {
    const updated = await prisma.group.update({
      where: { id: Number(params.groupId) },
      data: {
        name,
        description,
        deadlineProject: new Date(deadlineProject),
      },
    });

    return NextResponse.json(updated);
  }

  return NextResponse.json(
    { message: "Unauthorized: Only admin can update this group" },
    { status: 403 }
  );
}

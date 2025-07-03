import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";
import { ShowGroupResource } from "../../_resources/group/ShowGroupResource";
import { getAuthUserId } from "@/lib/helpers/getAuthUserId";

export async function GET(
  _: Request,
  { params }: { params: { groupId: string } }
) {
  const group = await prisma.group.findUnique({
    where: { id: parseInt(params.groupId as string) },
  });

  if (!group) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(ShowGroupResource.toJson(group));
}

const groupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullable(),
  deadlineProject: z.string().min(1, "Deadline is required"),
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

  const { name, description, deadlineProject } = result.data;

  const userId = await getAuthUserId();

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

export async function DELETE(
  req: Request,
  { params }: { params: { groupId: string } }
) {
  const body = await req.json();
  const { userId } = body;

  const isAdmin = await prisma.groupParticipant.findFirst({
    where: {
      groupId: Number(params.groupId),
      userId: Number(userId),
      role: "ADMIN",
    },
  });

  if (isAdmin) {
    await prisma.group.delete({
      where: { id: Number(params.groupId) },
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { message: "Unauthorized: Only admin can update this group" },
    { status: 403 }
  );
}

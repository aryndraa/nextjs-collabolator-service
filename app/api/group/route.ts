import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";
import { getAuthUserId } from "@/lib/helpers/getAuthUserId";

export async function GET() {
  const userId = await getAuthUserId();

  const groups = await prisma.group.findMany({
    where: {
      participants: {
        some: {
          userId,
        },
      },
    },
    include: {
      messageRecipients: {
        orderBy: {
          message: {
            createdAt: "desc",
          },
        },
        take: 1,
        include: {
          message: true,
        },
      },
    },
  });

  const sortedGroups = groups.sort((a, b) => {
    const aDate = a.messageRecipients[0]?.message?.createdAt ?? new Date(0);
    const bDate = b.messageRecipients[0]?.message?.createdAt ?? new Date(0);
    return bDate.getTime() - aDate.getTime();
  });

  return NextResponse.json(sortedGroups, {
    status: 201,
  });
}

const groupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullable(),
  deadlineProject: z.string().min(1, "Deadline is required"),
  // deadlineProject: z
  //   .string()
  //   .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
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

  const userId = await getAuthUserId();

  const { name, description, deadlineProject } = result.data;

  const group = await prisma.group.create({
    data: {
      name,
      description,
      deadlineProject: new Date(deadlineProject),
    },
  });

  const admin = await prisma.groupParticipant.create({
    data: {
      userId,
      groupId: group.id,
      role: "ADMIN",
    },
  });

  return NextResponse.json({ group, admin }, { status: 201 });
}

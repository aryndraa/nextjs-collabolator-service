import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await (await supabase).auth.getUser();

  if (error || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const dbUser = await prisma.user.findFirst({
    where: {
      authUserId: user.id,
    },
  });

  const groups = await prisma.group.findMany({
    where: {
      participants: {
        some: {
          userId: dbUser?.id,
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
  deadlineProject: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  userId: z.number(),
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

  const { name, description, deadlineProject, userId } = result.data;

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

import { GetParticipantResource } from "@/app/api/_resources/participant/GetParticipantResource";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(
  req: Request,
  { params }: { params: { groupId: string } }
) {
  const participants = await prisma.groupParticipant.findMany({
    where: {
      groupId: parseInt(params.groupId as string),
    },
    include: {
      user: true,
    },
  });

  return NextResponse.json(GetParticipantResource.collection(participants));
}

const addParticipant = z.object({
  userId: z.number(),
});

export async function POST(
  req: Request,
  { params }: { params: { groupId: string } }
) {
  const body = await req.json();
  const result = addParticipant.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten() },
      { status: 400 }
    );
  }

  const { userId } = result.data;
  const groupId = Number(params.groupId);
  const existing = await prisma.groupParticipant.findFirst({
    where: {
      userId,
      groupId,
    },
  });

  if (existing) {
    return NextResponse.json(
      { message: "User sudah tergabung dalam grup ini." },
      { status: 409 }
    );
  }

  const participant = await prisma.groupParticipant.create({
    data: {
      userId,
      groupId,
    },
  });

  return NextResponse.json(participant, { status: 201 });
}

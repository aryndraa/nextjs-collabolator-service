import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { groupId: string } }
) {
  const participants = await prisma.groupParticipant.findMany({
    where: {
      groupId: Number(params.groupId),
    },
    include: {
      user: true,
    },
  });

  return NextResponse.json(participants);
}

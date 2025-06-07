import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

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

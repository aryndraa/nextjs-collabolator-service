import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { userId: string; friendId: string } }
) {
  const { status } = await req.json();

  const friend = await prisma.friend.findUnique({
    where: { id: Number(params.friendId) },
  });

  if (!friend) {
    return new Response("Friend request not found", { status: 404 });
  }

  const updated = await prisma.friend.update({
    where: {
      id: Number(params.friendId),
    },
    data: { status },
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  { params }: { params: { userId: string; friendId: string } }
) {
  await prisma.friend.delete({
    where: { id: Number(params.friendId) },
  });

  return new Response(null, { status: 204 });
}

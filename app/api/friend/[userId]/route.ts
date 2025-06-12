import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const userId = Number(params.userId);

  const friends = await prisma.friend.findMany({
    where: {
      OR: [{ senderId: userId }, { receiverId: userId }],
    },
    include: {
      sender: true,
      receiver: true,
    },
  });

  if (friends.length === 0) {
    return NextResponse.json({ message: "No friends found." }, { status: 200 });
  }

  return NextResponse.json(friends);
}

export async function POST(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { receiverId } = await req.json();
  const senderId = Number(params.userId);

  if (senderId === receiverId) {
    return NextResponse.json(
      { message: "Tidak bisa menambahkan diri sendiri sebagai teman" },
      { status: 400 }
    );
  }

  const existing = await prisma.friend.findFirst({
    where: {
      receiverId,
      senderId,
      OR: [
        {
          status: "ACCEPTED",
        },
        {
          status: "PENDING",
        },
      ],
    },
  });

  if (existing) {
    return NextResponse.json(
      { message: "User sudah menjadi teman" },
      { status: 409 }
    );
  }

  const friend = await prisma.friend.create({
    data: {
      receiverId,
      senderId,
      status: "PENDING",
    },
  });

  return NextResponse.json(friend, { status: 201 });
}

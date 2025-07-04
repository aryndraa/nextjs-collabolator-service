import { GetFriendResource } from "@/app/api/_resources/friend/GetFriendResource";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const userId = Number(params.userId);

  const friends = await prisma.friend.findMany({
    where: {
      OR: [
        { senderId: userId, status: "ACCEPTED" },
        { receiverId: userId, status: "ACCEPTED" },
      ],
    },
    include: {
      sender: true,
      receiver: true,
    },
  });

  if (friends.length === 0) {
    return NextResponse.json({ message: "No friends found." }, { status: 200 });
  }

  return NextResponse.json(GetFriendResource.collection(friends, userId));
}

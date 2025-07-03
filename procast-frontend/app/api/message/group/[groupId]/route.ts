import { GetMessageResource } from "@/app/api/_resources/message/GetMessageResource";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { groupId: string } }
) {
  const groupId = Number(params.groupId);

  const messages = await prisma.messageRecipient.findMany({
    where: {
      groupId,
    },
    include: {
      message: {
        include: {
          user: true,
        },
      },
    },
  });

  return NextResponse.json(GetMessageResource.collection(messages));
}

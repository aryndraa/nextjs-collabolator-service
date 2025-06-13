import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { GetMessageResource } from "../../_resources/message/GetMessageResource";

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

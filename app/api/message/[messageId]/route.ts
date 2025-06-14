import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { string, z } from "zod";

const messageSchema = z.object({
  text: string().optional().nullable(),
});

export async function PATCH(
  req: Request,
  { params }: { params: { messageId: string } }
) {
  const body = await req.json();
  const result = messageSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        errors: result.error.flatten().fieldErrors,
        message: "Validation failed",
      },
      { status: 400 }
    );
  }

  const { text } = result.data;

  const message = await prisma.message.update({
    where: {
      id: Number(params.messageId),
    },
    data: {
      text,
    },
  });

  await prisma.messageRecipient.update({
    where: {
      messageId: message.id,
    },
    data: {
      isEdit: true,
    },
  });

  return NextResponse.json(
    { message: "Pesan berhasil diedit", data: message },
    { status: 201 }
  );
}

export async function DELETE(
  req: Request,
  { params }: { params: { messageId: string } }
) {
  const messageId = Number(params.messageId);

  await prisma.messageRecipient.delete({
    where: {
      messageId,
    },
  });

  await prisma.message.delete({
    where: {
      id: messageId,
    },
  });

  return NextResponse.json({ success: true });
}

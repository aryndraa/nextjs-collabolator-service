import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { number, string, z } from "zod";

const messageSchema = z.object({
  userId: number(),
  text: string().optional().nullable(),
  type: z.enum(["TEXT", "IMAGE", "FILE", "LINK"]).default("TEXT"),
  fileType: string().nullable().optional(),
  fileSize: number().nullable().optional(),
  fileUrl: string().nullable().optional(),
});

export async function POST(
  req: Request,
  { params }: { params: { groupId: string } }
) {
  const groupId = Number(params.groupId);
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

  const { userId, text, type, fileType, fileSize, fileUrl } = result.data;

  const message = await prisma.message.create({
    data: {
      userId,
      text,
      type,
      fileType,
      fileSize,
      fileUrl,
    },
  });

  await prisma.messageRecipient.create({
    data: {
      groupId,
      messageId: message.id,
      isEdit: false,
      isPin: false,
    },
  });

  return NextResponse.json(
    { message: "Pesan berhasil dikirim", data: message },
    { status: 201 }
  );
}

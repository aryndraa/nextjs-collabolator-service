import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";

export async function getAuthUserId() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await (await supabase).auth.getUser();

  if (error || !user) {
    throw new Error("Unauthorized");
  }

  const { id: userId } = await prisma.user.findFirstOrThrow({
    where: { authUserId: user.id },
  });

  return userId;
}

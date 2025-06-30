import prisma from "../prisma";

export async function getCurrentUser(supabaseUserId: string) {
  const user = await prisma.user.findFirst({
    where: {
      authUserId: supabaseUserId,
    },
  });

  return user;
}

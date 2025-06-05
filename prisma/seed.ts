import { PrismaClient } from "@prisma/client";
import { createUserData } from "./factories/user.factory";
import { createGroupData } from "./factories/group.factory";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 5; i++) {
    await prisma.user.create({ data: createUserData() });
    await prisma.user.create({ data: createGroupData() });
  }
}

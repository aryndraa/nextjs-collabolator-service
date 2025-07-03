import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 5; i++) {
    await prisma.user.create({
      data: {
        displayName: faker.person.fullName(),
        avatarUrl: faker.image.avatar(),
      },
    });

    await prisma.group.create({
      data: {
        name: faker.commerce.department(),
        description: faker.word.words(20),
        deadlineProject: faker.date.future(),
      },
    });
  }
}

main()
  .then(() => {
    console.log("🌱 Seeder selesai.");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

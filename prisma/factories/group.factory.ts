import { faker } from "@faker-js/faker";

export function createGroupData() {
  return {
    name: faker.commerce.department(),
    description: faker.word.words(20),
    deadlineProject: faker.date.future(),
  };
}

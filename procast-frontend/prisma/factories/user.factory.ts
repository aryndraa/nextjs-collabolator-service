import { faker } from "@faker-js/faker";

export function createUserData() {
  return {
    displayName: faker.person.fullName(),
    avatarUrl: faker.image.avatar(),
  };
}

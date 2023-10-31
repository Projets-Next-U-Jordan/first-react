import { faker } from "@faker-js/faker";
import { User } from "../models/User";
export const createFakeUser = (count: Number): User[] =>
    Array.from(Array(count).keys()).map((id) => ({
        id: new Date().getTime()+id,
        avatar: faker.image.avatar(),
        name: (Math.random() < 0.05 ? "Théophane Chambe":faker.person.fullName()),
    }));

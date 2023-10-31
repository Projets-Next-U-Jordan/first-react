import { faker } from "@faker-js/faker";
import { createFakeUser } from "./createFakeUsers";
import { Post } from "../models/Post";
export const createFakePost = (count:number): Post[] =>
    Array.from(Array(count).keys()).map((id) => ({
        id: new Date().getTime()+id,
        user: createFakeUser(1)[0],
        content: faker.lorem.paragraphs(2),
    }));
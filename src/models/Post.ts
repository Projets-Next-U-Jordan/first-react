import { User } from "./User";

export type Post = {
    id: number;
    user: User
    content: string;
};
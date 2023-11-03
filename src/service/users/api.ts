import { InputUser } from "./types";

export const fetchUsers = async () => {
    const response = await fetch('https://dummyjson.com/users')
    const users = await response.json()
    return users;
};
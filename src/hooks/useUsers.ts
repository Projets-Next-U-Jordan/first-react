import { User } from "../models/User";
import { useEffect, useState } from "react";
import { fetchUsers } from "../service/users/api";
import { InputUser } from "../service/users/types";
import { transformUser } from "../service/users/utils";

export const useUsers = () => {
    const [users , setUsers] = useState<User[]>([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        (async ()=>{
            const result = await fetchUsers();
            setUsers(result.users.map((user: InputUser) => transformUser(user)));
            setLoading(false);
        })()
    }, []);

    const deleteUser = (id: number) => {
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
    };

    return {users, loading, setUsers, deleteUser};
}
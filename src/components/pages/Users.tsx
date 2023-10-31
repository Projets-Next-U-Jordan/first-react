import { useEffect, useMemo, useState } from "react";
import { createFakeUser } from "../../service/createFakeUsers";
import styled from "@emotion/styled";
import UserItem from "../common/user/UserList";
import { User } from "../../models/User";
import Button from "../common/Button";
import TextArea from "../common/TextArea";
import UserToolBox from "../common/user/UserToolBox";

function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);
    const shownUsers = useMemo(()=>{
      if (!filter) return users;
      return users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase())) 
    },[users, filter]);
    
    const createUser = () => {
        const newUser = createFakeUser(1);
        setUsers([...users, ...newUser]);
    };

    const deleteUser = (id: number) => {
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
    };

    useEffect(() => {
        setTimeout(() => {
            setUsers(createFakeUser(10));
            setLoading(false);
        }, 1000);
    }, []);
    if (loading) return <h1>Chargement...</h1>;
    return (
        <>
            <div>
                <UserToolBox>
                    <Button onClick={createUser}>Nouvel Utilisateur</Button>
                    <TextArea
                        placeholder="Search..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </UserToolBox>
                {shownUsers.length > 0 ?
                <ListContainer>
                    {shownUsers.map((user ) => (
                              <UserItem
                                  key={user.id}
                                  user={user}
                                  onClick={() => deleteUser(user.id)}
                              />
                          ))}
                </ListContainer>
                : <h1>Aucun utilisateur trouvé</h1>
                }
            </div>
        </>
    );
}

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export default Users;

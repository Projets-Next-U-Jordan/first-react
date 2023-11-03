import { useMemo, useState } from "react";
import { createFakeUser } from "../../service/createFakeUsers";
import styled from "@emotion/styled";
import UserItem from "../common/user/UserList";
import Button from "../common/Button";
import TextArea from "../common/TextArea";
import UserToolBox from "../common/user/UserToolBox";
import { useUsers } from "../../hooks/useUsers";

function Users() {

    const {users, loading, setUsers, deleteUser} = useUsers();

    const [filter, setFilter] = useState("");
    const shownUsers = useMemo(()=>{
      if (!filter) return users;
      return users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase())) 
    },[users, filter]);
    
    const createUser = () => {
        const newUser = createFakeUser(1);
        setUsers([...users, ...newUser]);
    };

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

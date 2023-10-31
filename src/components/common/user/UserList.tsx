import styled from "@emotion/styled";
import Avatar from "./Avatar";
import { User } from "../../../models/User";

type Props = {
    user: User;
    onClick: () => void;
}

const UserItem = ({user, onClick}: Props) => (
    <UserContainer onClick={onClick}>
        <Avatar size={3} src={user.avatar}/>
        <span style={{fontSize: "2rem"}}>{user.name}</span>
    </UserContainer>
);

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #555555;
    }
`;

export default UserItem;
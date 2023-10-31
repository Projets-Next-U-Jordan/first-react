import styled from "@emotion/styled";
import Avatar from "../user/Avatar";
import { Post } from "../../../models/Post";

type Props = {
    post: Post
    onClick: () => void;
}

const PostItem = ({post, onClick}: Props) => (
    <PostContainer onClick={onClick}>
        <AvatarContainer>
            <Avatar size={3} src={post.user.avatar}/>
            <span>{post.user.name}</span>
        </AvatarContainer>
        <div>
            <span>{post.content}</span>
        </div>
    </PostContainer>
);

const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.25rem;
`;

const PostContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    flex-direction: column;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #555555;
    }
`;

export default PostItem;
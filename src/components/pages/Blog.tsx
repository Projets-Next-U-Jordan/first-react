import { useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import Button from "../common/Button";
import TextArea from "../common/TextArea";
import { Post } from "../../models/Post";
import { createFakePost } from "../../service/createFakePost";
import PostItem from "../common/posts/PostList";
import PostToolBox from "../common/posts/PostToolBox";

function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);
    const shownPosts = useMemo(()=>{
      if (!filter) return posts;
      return posts.filter((post) => post.content.toLowerCase().includes(filter.toLowerCase())); 
    },[posts, filter]);
    
    const createPost = () => {
        const newPosts = createFakePost(1);
        setPosts([...posts, ...newPosts]);
    };

    const deletePost = (id: number) => {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
    };

    useEffect(() => {
        setTimeout(() => {
            setPosts(createFakePost(10));
            setLoading(false);
        }, 1000);
    }, []);
    if (loading) return <h1>Chargement...</h1>;
    return (
        <>
            <PostToolBox>
                <Button onClick={createPost}>Nouveau Post</Button>
                <TextArea
                    placeholder="Search..."
                    onChange={(e) => setFilter(e.target.value)}
                />
            </PostToolBox>
            <div>
                {shownPosts.length > 0 ?
                <ListContainer>
                    {shownPosts.map((post) => (
                              <PostItem
                                  key={post.id}
                                  post={post}
                                  onClick={() => deletePost(post.id)}
                              />
                          ))}
                </ListContainer>
                : <h1>Aucun posts trouvé</h1>
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

export default Blog;

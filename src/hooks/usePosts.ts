import { useEffect, useState } from "react";
import { Post } from "../models/Post";
import { createFakePost } from "../service/createFakePost";

export const usePosts = () => {
    
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPosts(createFakePost(10));
            setLoading(false);
        }, 1000);
    }, []);

    const deletePost = (id: number) => {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
    };

    return {posts, loading, setPosts, deletePost};
}
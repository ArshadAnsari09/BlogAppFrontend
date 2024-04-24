import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import PostCard from "../component/PostCard";

function Post() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/posts`
    );
    console.log("response", response.data);
    setPosts(response.data);
  };

  const handlePostClick = (post) => {
    navigate(`/post/${post._id}`, { state: { post } });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Blog Posts
      </Typography>
      {posts.length > 0 &&
        posts.map((post) => (
          <PostCard
            key={post._id}
            data={post}
            onClick={() => handlePostClick(post)}
          />
        ))}
    </Container>
  );
}

export default Post;

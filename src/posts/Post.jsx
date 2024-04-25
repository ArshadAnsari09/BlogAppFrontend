import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Typography, CircularProgress } from "@mui/material";
import PostCard from "../component/PostCard";

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/posts`
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
    setLoading(false);
  };

  const handlePostClick = (post) => {
    navigate(`/post/${post._id}`, { state: { post } });
  };

  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom color="primary">
          Check Latest Blogs
        </Typography>
        {loading ? (
          <CircularProgress
            color="secondary"
            size={100}
            style={{ display: "block", margin: "auto" }}
          />
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <PostCard
              key={post._id}
              data={post}
              onClick={() => handlePostClick(post)}
            />
          ))
        ) : (
          <Typography variant="body1">No posts found.</Typography>
        )}
      </Container>
    </div>
  );
}

export default Post;

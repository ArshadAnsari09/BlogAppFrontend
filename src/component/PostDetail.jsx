import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import PostCard from "../component/PostCard";

function PostDetail() {
  const location = useLocation();
  const post = location.state?.post;
  const navigate = useNavigate();

  if (!post) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="sm">
      <Button
        onClick={() => navigate(-1)}
        sx={{ marginBottom: 2, marginTop: 5 }}
      >
        Back
      </Button>
      <PostCard data={post} showFullContent={true} />
    </Container>
  );
}

export default PostDetail;

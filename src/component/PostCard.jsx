import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  useTheme,
} from "@mui/material";

const PostCard = (props) => {
  const theme = useTheme();
  const date = new Date(props.data.date);

  // Convert the date to a string in IST timezone
  const dateInIST = date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div>
      <Card
        key={props.data._id}
        sx={{
          //   width: { sm: "100%", md: theme.breakpoints.values.md },
          marginBottom: "20px",
          backgroundColor: theme.palette.background.paper, // Using theme color for background
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.12)", // Subtle shadow
          borderColor: theme.palette.divider,
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: "10px", // Rounded corners
          "&:hover": {
            boxShadow: "0 6px 10px 3px rgba(0, 0, 0, 0.2)", // More prominent shadow on hover
          },
        }}
        {...props}
      >
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="h2" sx={{ color: "#C65BCF" }}>
              {props.data.title}
            </Typography>
            {/* #5BBCFF */}
            <Typography color="#9B3922">{dateInIST}</Typography>
            <Typography variant="body2" component="p">
              {props.showFullContent === true
                ? props.data.content
                : `${props.data.content.substring(0, 100)}...more`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default PostCard;

import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelUrl, demoChannelTitle } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

export default ({
  channelDetails: {
    id: { channelId },
    snippet,
  },
}: any) => {
  console.log(JSON.stringify(snippet));
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        height: 320,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url || demoChannelUrl}
          sx={{
            width: 170,
            height: 170,
            borderRadius: "50%",
            margin: "auto",
            objectFit: "cover",
          }}
        />
      </Link>
      <CardContent>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
            sx={{ textAlign: "center" }}
          >
            {snippet?.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}{" "}
            <CheckCircle sx={{ color: "gray", ml: "5px", fontSize: 12 }} />
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
            sx={{ textAlign: "center" }}
          >
            {snippet?.description.slice(0, 60) || demoChannelTitle.slice(0, 60)}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

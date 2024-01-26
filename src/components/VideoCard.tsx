import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

export default ({
  videoDetails: {
    id: { videoId },
    snippet,
  },
}: any) => {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        height: 300,
        backgroundColor: "#0f0f0f",
        boxShadow: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle1" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 15) || demoVideoTitle.slice(0, 15)}{" "}
            <CheckCircle sx={{ color: "gray", ml: "5px", fontSize: 12 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

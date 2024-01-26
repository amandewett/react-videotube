import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelUrl, demoChannelTitle } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

export default ({
  channelDetails: {
    id: { channelId },
    snippet,
    statistics,
  },
  marginTop,
}: any) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: 300,
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            component="img"
            image={snippet?.thumbnails?.high?.url || demoChannelUrl}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              margin: "auto",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />

          <Typography
            variant="h6"
            fontWeight="bold"
            color="#fff"
            sx={{ textAlign: "center", fontSize: 14 }}
          >
            {snippet?.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}{" "}
            <CheckCircle sx={{ color: "gray", ml: "5px", fontSize: 12 }} />
          </Typography>
          {statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(statistics?.subscriberCount).toLocaleString("en-US")}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Card>
  );
};

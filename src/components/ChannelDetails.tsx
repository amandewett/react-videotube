import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { CHANNED_VIDEOS, CHANNEL_DETAILS } from "../utils/demo-channel-details";

const ChannelDetails = () => {
  const { id: channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState<any>({});
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      fetchFromAPI(`channel?part=snippet&id=${channelId}`).then((data) =>
        setChannelDetails(data?.items[0])
      );

      fetchFromAPI(
        `search?channelId=${channelId}&part=snippet&order=date`
      ).then((data) => setVideos(data?.items));
    };
    // fetchResults();
    setChannelDetails(CHANNEL_DETAILS.items[0]);
    setVideos(CHANNED_VIDEOS.items);
  }, [channelId, CHANNEL_DETAILS, CHANNED_VIDEOS]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,121,9,1) 25%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard
          channelDetails={{
            ...channelDetails,
            id: { channelId: channelDetails.id },
          }}
          marginTop="-93px"
        />
        <Box p={2} display="flex">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetails;

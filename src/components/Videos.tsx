import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

export default ({ videos, direction }: any) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item: any, idx: number) => {
        return (
          <Box key={idx}>
            {item.id.videoId ? (
              <VideoCard videoDetails={item} />
            ) : (
              <ChannelCard channelDetails={item} />
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

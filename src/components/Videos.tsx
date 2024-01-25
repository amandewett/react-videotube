import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

export default ({ videos }: any) => {
  return (
    <>
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item: any, idx: number) => (
          <>
            <Box key={idx}>
              {item.id.videoId && <VideoCard videoDetails={item} />}
              {item.id.channelId && <ChannelCard channelDetails={item} />}
            </Box>
          </>
        ))}
      </Stack>
    </>
  );
};

import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { videos as demoVideos } from "../utils/demo-videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState(`NodeJS`);
  const [videos, setVideos] = useState<any>([]);

  useEffect(() => {
    async function getVideos() {
      const data = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      setVideos(data.items);
    }
    getVideos();
    // setVideos(demoVideos);
  }, [fetchFromAPI, selectedCategory, demoVideos]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography variant="body2" sx={{ color: "white", mt: 1.5 }}>
          Copyright 2024 VideoTube
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#f31503" }}> Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;

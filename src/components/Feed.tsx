import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar } from "./index";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography variant="body2" sx={{ color: "white", mt: 1.5 }}>
          Copyright 2024 VideoTube
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;

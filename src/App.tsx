import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  NavBar,
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchFeed,
} from "./components";

export default () => (
  <BrowserRouter /* basename={"/samples/videotube"} */>
    <Box sx={{ backgroundColor: "#000" }}>
      <NavBar />
      <Box sx={{ pt: 10 }}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </Box>
  </BrowserRouter>
);

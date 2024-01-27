import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
// import { videos as demoVideos } from "../utils/demo-videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

export default () => {
  const [videoz, setVideoz] = useState<any[]>([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const result = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
      setVideoz(
        result.items.filter((i: any) => i.id.kind !== "youtube#playlist")
      );
    };
    fetchResults();
    // setVideoz(demoVideos);
  }, [searchTerm /* demoVideos */]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<Videos videos={videoz} />}
      </Box>
    </Box>
  );
};

import { Stack, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
// import { logo } from "../utils/constants";
import appLogo from "../assets/logo.png";
import SearchBar from "./SearchBar";

export const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "fixed",
        background: "#000",
        top: 0,
      }}
    >
      <NavLink
        to={"/"}
        style={{
          display: "flex",
          alignItems: "center",
          background: "#000",
        }}
      >
        <img src={appLogo} alt="logo" height={45} />
        <Box
          sx={{
            color: "white",
            ml: 1.5,
          }}
        >
          <Typography variant="h4">VideoTube</Typography>
        </Box>
      </NavLink>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar />
      </Box>
    </Stack>
  );
};

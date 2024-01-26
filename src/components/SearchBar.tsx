import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Input } from "@mui/material";
import { Search } from "@mui/icons-material";

export default () => (
  <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      borderRadius: 20,
      color: "#0f0f0f",
      border: "none",
      p: 0,
      pl: 2,
      boxShadow: "none",
      mr: { sm: 5 },
    }}
  >
    <Input
      className="search-bar"
      placeholder="Search..."
      disableUnderline
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        console.log(e.target.value)
      }
      sx={{
        width: { xl: 500, l: 450, md: 400 },
        outline: "none",
        border: "none",
      }}
    />
    <IconButton
      type="submit"
      sx={{
        width: 60,
        p: "12px",
        color: "white",
        border: "none",
        background: "#0f0f0f",
        borderRadius: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        mr: -1,
        ":hover": {
          backgroundColor: "#0f0f0f",
        },
      }}
    >
      <Search />
    </IconButton>
  </Paper>
);

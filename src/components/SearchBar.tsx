import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Input } from "@mui/material";
import { Search } from "@mui/icons-material";

export default () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleOnSubmit(event: any) {
    event.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleOnSubmit}
      sx={{
        borderRadius: 20,
        color: "#0f0f0f",
        background: "#212121",
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
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
        sx={{
          width: { xl: 500, l: 450, md: 400 },
          outline: "none",
          background: "#212121",
          border: "none",
          color: "white",
          input: {
            "&::placeholder": {
              color: "white",
            },
          },
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
};

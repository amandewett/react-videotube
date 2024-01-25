import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { createElement } from "react";
const selectedCategory = "New";

export default () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category: any) => {
        const iconElement = createElement(category.icon);
        return (
          <button
            className="category-btn"
            style={{
              background:
                category.name === selectedCategory ? "#FC1503" : "white",
            }}
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {iconElement}
            </span>
            <span
              style={{
                opacity: category.name == selectedCategory ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

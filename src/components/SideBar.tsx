import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { createElement } from "react";

export default ({ selectedCategory, setSelectedCategory }: any) => {
  const handleSetCategory = (cat: string) => setSelectedCategory(cat);

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
            onClick={() => handleSetCategory(category.name)}
            style={{
              backgroundColor:
                category.name === selectedCategory ? "#FC1503" : "#212121",
              color: "white",
            }}
            key={category.name}
          >
            <span
              style={{
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

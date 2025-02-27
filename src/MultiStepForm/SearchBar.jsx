import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ value, onChange, label = "Search...", className = "", ...props }) => {
  return (
    <TextField
      // fullWidth
      variant="outlined"
      size="small"
      value={value}
      onChange={onChange}
      label={label}
      className={className}
      InputProps={{
        sx: { height: "40px" }, // Matches dropdown height
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ fontSize: 20, color: "gray" }} />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default SearchBar;

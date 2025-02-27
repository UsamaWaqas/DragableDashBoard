import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectReuseAble = ({
  label = "Select an option",
  options = [],
  value = "",
  onChange,
  // fullWidth,
  size = "small",
  variant = "outlined",
  className="",
  ...props
}) => {
  return (
    <FormControl  size={size} variant={variant} className={className}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} label={label} {...props}>
        {options.length > 0 ? (
          options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>No options available</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default SelectReuseAble;

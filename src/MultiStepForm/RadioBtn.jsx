import React from "react";
import { Radio } from "@mui/material";

export default function RadioBtn({ checked, onChange }) {
  return (
    <Radio
      sx={{ transform: "scale(0.8)" }}
      checked={checked}
      onChange={onChange}
    />
  );
}

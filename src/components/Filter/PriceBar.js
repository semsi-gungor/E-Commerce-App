import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './PriceBar.css';

function valuetext(value) {
  return `${value}`;
}

export default function PriceBar({ maxValue }) {
  const [value, setValue] = useState([0, maxValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        min={0}
        max={2000}
        step={100}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}

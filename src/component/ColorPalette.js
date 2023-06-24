import React, { useState } from 'react';

const ColorPalette = ({ colors, onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    if (selectedColor === color) {
      // If the clicked color is already selected, unselect it
      setSelectedColor(null);
      onSelectColor(null);
    } else {
      setSelectedColor(color);
      onSelectColor(color);
    }
  };

  return (
    <div className="color-palette">
      {colors.map((color) => (
        <div
          key={color}
          className={`color-box ${selectedColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        >
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;

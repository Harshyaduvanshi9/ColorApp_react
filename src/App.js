import React from 'react';
import ColorPalette from './component/ColorPalette';
import './cruc.css';

const App = () => {
  const handleColorSelect = (color) => {
    console.log('Selected color:', color);
    // Do something with the selected color
  };

  const colors = ['#FF0000', '#00FF00', '#0000FF','#FFFF00', 
  '#FF00FF', 
  '#00FFFF', '#37D67A','#697689','#555555'];

  return (
    <div>
      <h1>Color Palette</h1>
      <ColorPalette colors={colors} onSelectColor={handleColorSelect} />
    </div>
  );
};

export default App;

import React from 'react';
import { SketchPicker } from 'react-color';

const ColorPickerComponent = () => {
  const [selectedColor, setSelectedColor] = React.useState('#ffffff');

  const handleChangeColor = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <SketchPicker
      color={selectedColor}
      onChange={handleChangeColor}
    />
  );
};

export default ColorPickerComponent;

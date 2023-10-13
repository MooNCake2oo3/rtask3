import React from 'react';
import './App.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);

  const handleClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-picker">
      <button>Pick a color</button>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <button style={{ backgroundColor: color }} onClick={() => handleClick(color)} />
          </li>
        ))}
      </ul>
      <p>Selected color: {selectedColor}</p>
    </div>
  );
};

const App = () => {
  const colors = ['red', 'green', 'blue', 'fuchsia', 'teal', 'indigo', 'orange', 'yellow', 'purple', 'lime', 'cyan', 'magenta', 'gray', 'white'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
};


export default App;








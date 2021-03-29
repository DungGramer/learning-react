import { useState } from 'react';
import './ColorBox.scss';

function getRandomColor() {
  const COLOR_LIST = [
    'deepblue',
    'deeppink',
    'tomato',
    'darkgreen',
    'grey',
    'brown',
  ];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

const ColorBox = (props) => {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deppink';
    return initColor;
  });

  function handleClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color', newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
};

export default ColorBox;

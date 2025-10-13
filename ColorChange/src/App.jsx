import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#4f46e5");

  const randomColor = () => {
    const newColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setColor(newColor);
  };

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <h1>Color Changer</h1>
      <p>Current Color: <b>{color}</b></p>
      <button onClick={randomColor}>Change Color</button>
    </div>
  );
}

export default App;

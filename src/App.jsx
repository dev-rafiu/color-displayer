import { useState, useRef } from "react";

function App() {
  const [color, setColor] = useState("white");
  const inputRef = useRef(null);

  function handleColor() {
    const { value } = inputRef.current;
    if (value == null) {
      return;
    }
    setColor(value);
  }

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <input
        type="text"
        ref={inputRef}
        placeholder="add your color without space"
      />
      <button onClick={handleColor}>Display Color</button>
    </div>
  );
}

export default App;

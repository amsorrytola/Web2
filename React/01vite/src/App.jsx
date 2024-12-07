import { useState } from "react";
import Button from "./components/Button";

function App() {
  const Colors = [
    "slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", 
    "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", 
    "indigo", "violet", "purple", "fuchsia", "pink", "rose"
  ];
  const [bgcolor, setcolor] = useState("red");

  const PupdateState = (newState) => {
    setcolor(newState);
  };

  return (
    <div 
      className="w-screen h-screen flex items-center justify-center transition-colors duration-300" 
      style={{ backgroundColor: bgcolor }}
    >
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 p-4">
        {Colors.map((color, index) => (
          <Button key={index} color={color} updatestate={PupdateState} />
        ))}
      </div>
    </div>
  );
}

export default App;

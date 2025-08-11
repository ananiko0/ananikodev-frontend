import { useState } from "react";
import drawing from "/drawing.svg";
import "./App.css";
import VirtuesDiagram from "./assets/Octagon";
import AnimatedVirtuesDiagram from "./assets/AnimatedVirtuesDiagram";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={drawing} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <VirtuesDiagram strokeColor="#9b0606ff" strokeWidth={2} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        // 1. Auto-start animation (default)
        <AnimatedVirtuesDiagram />
        // 2. Manual control with buttons
        <AnimatedVirtuesDiagram
          animationType="manual"
          elementDelay={0.5}
          elementDuration={1.5}
        />
        // 3. Trigger on scroll into view
        <AnimatedVirtuesDiagram
          animationType="scroll"
          animationOrder={[
            "love",
            "patience",
            "kindness",
            "humility",
            "temperance",
            "justice",
            "diligence",
            "charity",
            "hope",
          ]}
        />
        // 4. Trigger on hover
        <AnimatedVirtuesDiagram
          animationType="hover"
          elementDelay={0.2}
          elementDuration={0.8}
        />
        // 5. Custom order with faster animation
        <AnimatedVirtuesDiagram
          animationType="auto"
          animationOrder={[
            "love",
            "hope",
            "charity",
            "justice",
            "diligence",
            "patience",
            "kindness",
            "temperance",
            "humility",
          ]}
          elementDelay={0.1}
          elementDuration={0.5}
        />
        // 6. With callbacks and custom styling
        <AnimatedVirtuesDiagram
          animationType="manual"
          strokeColor="#FF6B6B"
          strokeWidth={2}
          elementDelay={0.4}
          elementDuration={1.2}
          animationOrder={[
            "patience",
            "kindness",
            "love",
            "humility",
            "hope",
            "charity",
            "temperance",
            "justice",
            "diligence",
          ]}
          onAnimationStart={() => console.log("Animation started!")}
          onAnimationComplete={() => console.log("Animation complete!")}
        />
        <AnimatedVirtuesDiagram
          drawMode="lines"
          elementDuration={2} // Each rectangle takes 2 seconds total (0.5s per side)
        />
        // Using path drawing (smooth continuous drawing)
        <AnimatedVirtuesDiagram drawMode="path" elementDuration={1} />
        // Line mode with custom order and timing
        <AnimatedVirtuesDiagram
          drawMode="lines"
          animationType="manual"
          animationOrder={["love", "patience", "kindness", "humility"]}
          elementDelay={0.5}
          elementDuration={1.6} // Each side takes 0.4 seconds
        />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

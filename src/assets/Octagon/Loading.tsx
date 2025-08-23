import React from "react";
import { motion } from "framer-motion";

interface VirtuesLoadingProps {
  size?: number; // Size in pixels
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number; // Duration for each shape to draw
  delayBetweenShapes?: number; // Delay between each shape starting
  pauseBeforeReverse?: number; // Pause when fully drawn before reversing
}

const VirtuesLoading: React.FC<VirtuesLoadingProps> = ({
  size = 200,
  strokeColor = "#000000",
  strokeWidth = 2,
  duration = 3, // Slower drawing
  delayBetweenShapes = 1,
  pauseBeforeReverse = 2,
}) => {
  // Simple draw and reverse animation
  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  // Helper to convert rect to path
  const rectToPath = (
    x: number,
    y: number,
    width: number,
    height: number
  ): string => {
    return `M ${x} ${y} L ${x + width} ${y} L ${x + width} ${
      y + height
    } L ${x} ${y + height} Z`;
  };

  // All 9 shapes with their paths
  const shapes = [
    // Love (octagon)
    {
      d: "M 91.869213,50.898126 91.671534,88.951184 64.624178,115.71898 26.57112,115.5213 -0.19667464,88.473944 0.00100485,50.420886 27.048361,23.653091 l 38.053058,0.19768 z",
      transform:
        "matrix(1.9586479,-0.00669184,0.00669184,1.9586479,14.756559,12.316323)",
      strokeWidth: 0.723965,
      name: "love",
    },
    // Humility
    {
      d: rectToPath(68.179382, 58.557209, 73.784874, 73.78447),
      name: "humility",
    },
    // Temperance
    {
      d: rectToPath(120.9129, 111.85594, 73.784874, 73.78447),
      name: "temperance",
    },
    // Kindness
    {
      d: rectToPath(67.880394, 164.58694, 73.784874, 73.78447),
      name: "kindness",
    },
    // Patience
    {
      d: rectToPath(15.164192, 111.42274, 73.784874, 73.78447),
      name: "patience",
    },
    // Diligence (rotated)
    {
      d: rectToPath(-67.497978, 89.78022, 73.720474, 73.719765),
      transform: "matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)",
      name: "diligence",
    },
    // Justice (rotated)
    {
      d: rectToPath(-14.611883, 142.43987, 73.720474, 73.719765),
      transform: "matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)",
      name: "justice",
    },
    // Charity (rotated)
    {
      d: rectToPath(-67.055756, 194.72874, 73.720474, 73.719765),
      transform: "matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)",
      name: "charity",
    },
    // Hope (rotated)
    {
      d: rectToPath(-119.79039, 142.29362, 73.720474, 73.719765),
      transform: "matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)",
      name: "hope",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        minHeight: size,
      }}
    >
      <svg
        width={size}
        height={size * 1.414} // Maintain aspect ratio (297/210 ≈ 1.414)
        viewBox="0 0 210 297"
        style={{ overflow: "visible" }}
      >
        {shapes.map((shape, index) => (
          <motion.path
            key={shape.name}
            d={shape.d}
            transform={shape.transform}
            stroke={strokeColor}
            strokeWidth={shape.strokeWidth || strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={drawVariants}
            initial="hidden"
            animate="visible"
            transition={{
              pathLength: {
                delay: index * delayBetweenShapes,
                duration: duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay:
                  index === shapes.length - 1 ? pauseBeforeReverse * 2 : 0,
              },
              opacity: {
                delay: index * delayBetweenShapes,
                duration: 0.01,
              },
            }}
          />
        ))}
      </svg>

      {/* Optional loading text */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          fontSize: "14px",
          color: strokeColor,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      ></div>
    </div>
  );
};

export default VirtuesLoading;

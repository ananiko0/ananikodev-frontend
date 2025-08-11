import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";

type AnimationType = "auto" | "manual" | "scroll" | "hover";
type ShapeId =
  | "love"
  | "humility"
  | "temperance"
  | "kindness"
  | "patience"
  | "diligence"
  | "justice"
  | "charity"
  | "hope";

interface AnimatedVirtuesDiagramProps {
  animationType?: AnimationType;
  animationOrder?: ShapeId[];
  elementDelay?: number;
  elementDuration?: number;
  width?: string;
  height?: string;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  fillOpacity?: number;
  drawMode?: "path" | "lines"; // Choose between drawing as path or separate lines
  onAnimationComplete?: () => void;
  onAnimationStart?: () => void;
}

const AnimatedVirtuesDiagram: React.FC<AnimatedVirtuesDiagramProps> = ({
  animationType = "auto",
  animationOrder = [
    "love",
    "humility",
    "temperance",
    "kindness",
    "patience",
    "diligence",
    "justice",
    "charity",
    "hope",
  ],
  elementDelay = 0.3,
  elementDuration = 1,
  width = "210mm",
  height = "297mm",
  strokeColor = "#000000",
  strokeWidth = 1.39153,
  drawMode = "lines", // Default to lines for better effect
  onAnimationComplete,
  onAnimationStart,
}) => {
  const controls = useAnimation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const svgRef = useRef(null);
  const isInView = useInView(svgRef, { once: true, amount: 0.3 });

  // Drawing animation variants
  const drawVariants: Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
    },
  };

  // Create transition for each element
  const getTransition = (customDelay: number) => ({
    pathLength: {
      delay: customDelay,
      duration: elementDuration,
      ease: "easeInOut" as const,
    },
    opacity: {
      delay: customDelay,
      duration: 0.01,
    },
  });

  // Calculate animation delay for each element
  const getElementDelay = (id: ShapeId) => {
    const index = animationOrder.indexOf(id);
    return index === -1 ? 0 : index * elementDelay;
  };

  // Helper function to convert rectangle to path
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

  // Helper to create four separate lines for a rectangle
  const createRectangleLines = (
    x: number,
    y: number,
    width: number,
    height: number,
    id: string,
    baseDelay: number,
    transform?: string
  ) => {
    const lineDelay = elementDuration / 4; // Divide duration by 4 sides

    // Define the four lines of the rectangle
    const lines = [
      `M ${x} ${y} L ${x + width} ${y}`, // top
      `M ${x + width} ${y} L ${x + width} ${y + height}`, // right
      `M ${x + width} ${y + height} L ${x} ${y + height}`, // bottom
      `M ${x} ${y + height} L ${x} ${y}`, // left
    ];

    return lines.map((pathData, index) => (
      <motion.path
        key={`${id}-line-${index}`}
        d={pathData}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
        transform={transform}
        variants={drawVariants}
        initial="hidden"
        animate={controls}
        transition={getTransition(baseDelay + index * lineDelay)}
      />
    ));
  };

  // Start animation based on type
  useEffect(() => {
    if (animationType === "auto") {
      controls.start("visible");
      setIsPlaying(true);
      setHasStarted(true);
      onAnimationStart?.();
    } else if (animationType === "scroll" && isInView) {
      controls.start("visible");
      setIsPlaying(true);
      setHasStarted(true);
      onAnimationStart?.();
    }
  }, [animationType, controls, isInView, onAnimationStart]);

  // Manual controls
  const handlePlay = () => {
    if (!hasStarted) {
      onAnimationStart?.();
      setHasStarted(true);
    }
    controls.start("visible");
    setIsPlaying(true);
  };

  const handlePause = () => {
    controls.stop();
    setIsPlaying(false);
  };

  const handleRestart = () => {
    controls.set("hidden");
    controls.start("visible");
    setIsPlaying(true);
    if (!hasStarted) {
      onAnimationStart?.();
      setHasStarted(true);
    }
  };

  // Hover handlers
  const handleHoverStart = () => {
    if (animationType === "hover") {
      controls.start("visible");
      setIsPlaying(true);
      if (!hasStarted) {
        onAnimationStart?.();
        setHasStarted(true);
      }
    }
  };

  const handleHoverEnd = () => {
    if (animationType === "hover") {
      controls.start("hidden");
      setIsPlaying(false);
    }
  };

  // Octagon path
  const octagonPath =
    "M 91.869213,50.898126 91.671534,88.951184 64.624178,115.71898 26.57112,115.5213 -0.19667464,88.473944 0.00100485,50.420886 27.048361,23.653091 l 38.053058,0.19768 z";

  // Shape components based on draw mode
  const shapes: Record<ShapeId, React.ReactNode | React.ReactNode[]> = {
    love: (
      <motion.path
        key="love"
        d={octagonPath}
        stroke={strokeColor}
        strokeWidth={0.723965}
        fill="none"
        transform="matrix(1.9586479,-0.00669184,0.00669184,1.9586479,14.756559,12.316323)"
        variants={drawVariants}
        initial="hidden"
        animate={controls}
        transition={getTransition(getElementDelay("love"))}
      />
    ),
    humility:
      drawMode === "lines" ? (
        createRectangleLines(
          68.179382,
          58.557209,
          73.784874,
          73.78447,
          "humility",
          getElementDelay("humility")
        )
      ) : (
        <motion.path
          key="humility"
          d={rectToPath(68.179382, 58.557209, 73.784874, 73.78447)}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          transition={getTransition(getElementDelay("humility"))}
        />
      ),
    temperance:
      drawMode === "lines" ? (
        createRectangleLines(
          120.9129,
          111.85594,
          73.784874,
          73.78447,
          "temperance",
          getElementDelay("temperance")
        )
      ) : (
        <motion.path
          key="temperance"
          d={rectToPath(120.9129, 111.85594, 73.784874, 73.78447)}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          transition={getTransition(getElementDelay("temperance"))}
        />
      ),
    kindness:
      drawMode === "lines" ? (
        createRectangleLines(
          67.880394,
          164.58694,
          73.784874,
          73.78447,
          "kindness",
          getElementDelay("kindness")
        )
      ) : (
        <motion.path
          key="kindness"
          d={rectToPath(67.880394, 164.58694, 73.784874, 73.78447)}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          transition={getTransition(getElementDelay("kindness"))}
        />
      ),
    patience:
      drawMode === "lines" ? (
        createRectangleLines(
          15.164192,
          111.42274,
          73.784874,
          73.78447,
          "patience",
          getElementDelay("patience")
        )
      ) : (
        <motion.path
          key="patience"
          d={rectToPath(15.164192, 111.42274, 73.784874, 73.78447)}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          transition={getTransition(getElementDelay("patience"))}
        />
      ),
    diligence:
      drawMode === "lines" ? (
        createRectangleLines(
          -67.497978,
          89.78022,
          73.720474,
          73.719765,
          "diligence",
          getElementDelay("diligence"),
          "matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)"
        )
      ) : (
        <motion.path
          key="diligence"
          d={rectToPath(-67.497978, 89.78022, 73.720474, 73.719765)}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          transform="matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          transition={getTransition(getElementDelay("diligence"))}
        />
      ),
    justice:
      drawMode === "lines" ? (
        createRectangleLines(
          -14.611883,
          142.43987,
          73.720474,
          73.719765,
          "justice",
          getElementDelay("justice"),
          "matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)"
        )
      ) : (
        <motion.path
          key="justice"
          d={rectToPath(-14.611883, 142.43987, 73.720474, 73.719765)}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          transform="matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          transition={getTransition(getElementDelay("justice"))}
        />
      ),
    charity:
      drawMode === "lines" ? (
        createRectangleLines(
          -67.055756,
          194.72874,
          73.720474,
          73.719765,
          "charity",
          getElementDelay("charity"),
          "matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)"
        )
      ) : (
        <motion.path
          key="charity"
          d={rectToPath(-67.055756, 194.72874, 73.720474, 73.719765)}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          transform="matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          transition={getTransition(getElementDelay("charity"))}
        />
      ),
    hope:
      drawMode === "lines" ? (
        createRectangleLines(
          -119.79039,
          142.29362,
          73.720474,
          73.719765,
          "hope",
          getElementDelay("hope"),
          "matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)"
        )
      ) : (
        <motion.path
          key="hope"
          d={rectToPath(-119.79039, 142.29362, 73.720474, 73.719765)}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          transform="matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)"
          variants={drawVariants}
          initial="hidden"
          animate={controls}
          transition={getTransition(getElementDelay("hope"))}
        />
      ),
  };

  // Render shapes in the specified order
  const renderShapes = () => {
    return animationOrder
      .map((id) => {
        const shape = shapes[id];
        return Array.isArray(shape) ? shape : shape;
      })
      .flat()
      .filter(Boolean);
  };

  return (
    <div>
      {/* Manual Controls */}
      {animationType === "manual" && (
        <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
          <button onClick={handlePlay} disabled={isPlaying}>
            Play
          </button>
          <button onClick={handlePause} disabled={!isPlaying}>
            Pause
          </button>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}

      {/* SVG Container */}
      <motion.svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox="0 0 210 297"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onAnimationComplete={onAnimationComplete}
      >
        {renderShapes()}
      </motion.svg>
    </div>
  );
};

export default AnimatedVirtuesDiagram;

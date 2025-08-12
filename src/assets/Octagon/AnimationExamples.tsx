import AnimatedVirtuesDiagram from "./AnimatedVirtuesDiagram";

function AnimationExamples() {
  return (
    <>
      {" "}
      // 1. One-time scroll animation (draws once when scrolled into view)
      <AnimatedVirtuesDiagram
        animationType="scroll"
        scrollThreshold={0.3} // Triggers when 30% visible
      />
      // 2. Reversible scroll animation (draws on scroll in, reverses on scroll
      out)
      <AnimatedVirtuesDiagram
        animationType="scroll-reverse"
        scrollThreshold={0.5} // Triggers when 50% visible
        elementDuration={0.8}
        elementDelay={0.2}
      />
      // 3. With line drawing mode and reversible scroll
      <AnimatedVirtuesDiagram
        animationType="scroll-reverse"
        drawMode="lines"
        scrollThreshold={0.2} // More sensitive trigger
        elementDuration={1.2}
      />
    </>
  );
}

export default AnimationExamples;

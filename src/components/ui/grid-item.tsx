import { GlowingEffect } from "./glowing-effect";
import type { ReactNode } from "react";
// Keep your existing glowing effect imports/logic

interface GridItemProps {
  children: ReactNode;
  borderWidth?: number;
  className?: string;
}

const GridItem = ({
  children,
  className = "",
  borderWidth = 1,
}: GridItemProps) => {
  // Keep existing glowing effect logic here

  return (
    <li className={`list-none ${className}`}>
      <div className="relative h-full border p-2 md:p-3 rounded-[5px]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={borderWidth}
        />
        {/* Project content */}
        {children}
      </div>
    </li>
  );
};

export default GridItem;

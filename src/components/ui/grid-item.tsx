import { GlowingEffect } from "./glowing-effect";
import type { ReactNode } from "react";
// Keep your existing glowing effect imports/logic

interface GridItemProps {
  children: ReactNode;
  className?: string;
}

const GridItem = ({ children, className = "" }: GridItemProps) => {
  // Keep existing glowing effect logic here

  return (
    <li className={`min-h-[14rem] list-none ${className}`}>
      <div className="relative h-full border p-2 md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        {/* Project content */}
        {children}
      </div>
    </li>
  );
};

export default GridItem;

import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const words = [
    { text: "Building" },
    { text: "modern" },
    { text: "web" },
    { text: "experiences", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 w-full max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Hi, I'm Your Name 👋
        </h1>

        <p className="text-neutral-600 dark:text-neutral-200 text-sm md:text-base mb-2">
          Full-Stack Developer
        </p>

        <TypewriterEffectSmooth words={words} />

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Button asChild size="lg">
            <Link to="/projects">View My Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

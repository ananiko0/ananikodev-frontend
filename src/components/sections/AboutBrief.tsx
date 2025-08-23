import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Code2, Palette, Sparkles } from "lucide-react";
import GridItem from "../ui/grid-item";

const AboutBrief = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 flex justify-center">
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Your Story */}
          <div>
            <p className="text-lg text-muted-foreground mb-4">
              I'm a{" "}
              <span className="text-foreground font-semibold">
                curious, self-taught developer
              </span>{" "}
              with a strong physics and mathematics background, which helps me
              tackle abstract concepts and complex problems with ease.
            </p>
            <p className="text-muted-foreground mb-6">
              Currently building with React, TypeScript, and Node.js, while
              constantly expanding my toolkit through Udemy courses and
              real-world projects. My goal? Becoming a versatile full-stack
              developer who creates elegant solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              Speaking 4 languages has taught me that whether it's Georgian,
              English, Russian, or code - it's all about communication and
              problem-solving.
            </p>
            <Button asChild variant="ghost" className="group">
              <Link to="/about">
                Discover My Full Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Right side - Quick Highlights */}
          <div className="space-y-4">
            {/* <div className="p-4 border rounded-lg flex items-start gap-3"> */}
            <GridItem className="min-h-[0]">
              <div className="flex items-start gap-3">
                <Brain className="h-5 w-5 text-primary mt-1" />
                <div>
                  <div className="font-semibold">Physics & Math Background</div>
                  <div className="text-sm text-muted-foreground">
                    Strong foundation in abstract thinking
                  </div>
                </div>
              </div>
            </GridItem>
            {/* </div> */}
            {/* <div className="p-4 border rounded-lg flex items-start gap-3"> */}
            <GridItem className="min-h-[0]">
              <div className="flex items-start gap-3">
                <Code2 className="h-5 w-5 text-primary mt-1" />
                <div>
                  <div className="font-semibold">Tech Stack</div>
                  <div className="text-sm text-muted-foreground">
                    React • TypeScript • Node.js • NestJS • PostgreSQL
                  </div>
                </div>
              </div>
            </GridItem>
            {/* </div> */}

            {/* <div className="p-4 border rounded-lg flex items-start gap-3"> */}
            <GridItem className="min-h-[0]">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary mt-1" />
                <div>
                  <div className="font-semibold">Always Learning</div>
                  <div className="text-sm text-muted-foreground">
                    Self-taught through Udemy & building projects
                  </div>
                </div>
              </div>
            </GridItem>
            {/* </div> */}

            <GridItem className="min-h-[0]">
              <div className="flex items-start gap-3">
                <Palette className="h-5 w-5 text-primary mt-1" />{" "}
                <div>
                  <div className="font-semibold">Beyond Code</div>
                  <div className="text-sm text-muted-foreground">
                    Piano • Drawing • Psychology • Flow State
                  </div>
                </div>
              </div>
            </GridItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrief;

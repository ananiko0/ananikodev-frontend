import { cn } from "@/lib/utils";
import { Badge } from "../badge";
import techClassNames from "@/data/techList";

interface ProjectTechProps {
  tech: string[];
}

function ProjectTech({ tech }: ProjectTechProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item) => (
        <Badge
          key={item}
          variant="secondary"
          className={cn(
            "text-xs transition-opacity duration-500 ease-in-out",
            techClassNames[item] || "bg-muted"
          )}
        >
          {item}
        </Badge>
      ))}
    </div>
  );
}

export default ProjectTech;

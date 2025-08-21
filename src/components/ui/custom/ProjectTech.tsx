import { Badge } from "../badge";

interface ProjectTechProps {
  tech: string[];
}

function ProjectTech({ tech }: ProjectTechProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item) => (
        <Badge key={item} variant="secondary" className="text-xs">
          {item}
        </Badge>
      ))}
    </div>
  );
}

export default ProjectTech;

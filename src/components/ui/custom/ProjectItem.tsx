import { ArrowUpRight } from "lucide-react";
import { Badge } from "../badge";
import ProjectLinks from "./ProjectLinks";

interface ProjectItemProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  detailsUrl: string;
}

function ProjectItem({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  detailsUrl,
}: ProjectItemProps) {
  return (
    <div className="relative p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      <p className="text-muted-foreground mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <Badge key={item} variant="secondary" className="text-xs">
            {item}
          </Badge>
        ))}
      </div>

      <ProjectLinks
        liveUrl={liveUrl}
        githubUrl={githubUrl}
        detailsUrl={detailsUrl}
      />
    </div>
  );
}

export default ProjectItem;

import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "../badge";

interface ProjectItemProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

function ProjectItem({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
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

      <div className="flex gap-4 text-sm">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </a>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-4 w-4" />
          Code
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;

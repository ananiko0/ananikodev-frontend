import { ExternalLink, Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectLinkProps {
  liveUrl: string;
  githubUrl: string;
  detailsUrl: string;
}

function ProjectLinks({ liveUrl, githubUrl, detailsUrl }: ProjectLinkProps) {
  return (
    <div className="flex gap-4 text-sm">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-muted-foreground hover:text-gray-500 transition-colors"
      >
        <ExternalLink className="h-4 w-4" />
        Live Demo
      </a>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-muted-foreground hover:text-gray-500 transition-colors"
      >
        <Github className="h-4 w-4" />
        Code
      </a>
      <Link
        to={`/projects#${detailsUrl}`}
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-muted-foreground hover:text-gray-500 transition-colors"
      >
        <FileText className="h-4 w-4" />
        Details
      </Link>
    </div>
  );
}

export default ProjectLinks;

import ProjectLinks from "./ProjectLinks";
import ProjectTech from "./ProjectTech";

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
      </div>

      <p className="text-muted-foreground mb-4">{description}</p>

      <ProjectTech tech={tech} />

      <ProjectLinks
        liveUrl={liveUrl}
        githubUrl={githubUrl}
        detailsUrl={detailsUrl}
      />
    </div>
  );
}

export default ProjectItem;

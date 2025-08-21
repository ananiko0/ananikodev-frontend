import projects from "@/data/Projects";
import ProjectItem from "../ui/custom/ProjectItem";
import GridItem from "../ui/grid-item";

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mb-12 flex justify-center">
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GridItem>
              <ProjectItem
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                detailsUrl={project.detailsUrl}
              />
            </GridItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

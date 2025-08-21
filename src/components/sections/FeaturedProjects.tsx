import ProjectItem from "../ui/custom/ProjectItem";
import GridItem from "../ui/grid-item";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time inventory management",
      longDescription:
        "Built a scalable e-commerce solution handling 1000+ products...",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      features: ["Real-time updates", "Payment integration", "Admin dashboard"],
      liveUrl: "https://project.com",
      githubUrl: "https://github.com/...",
      image: "/project1.png",
      detailsUrl: "/projects",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates",
      longDescription: "Developed a comprehensive task management solution...",
      tech: ["React", "TypeScript", "NestJS", "Redis"],
      features: ["Real-time collaboration", "Drag-and-drop", "Analytics"],
      liveUrl: "https://project2.com",
      githubUrl: "https://github.com/...",
      image: "/project2.png",
      detailsUrl: "/projects",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with animations and responsive design",
      longDescription: "The website you're currently viewing...",
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      features: ["Responsive design", "Dark mode", "Animations"],
      liveUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/...",
      image: "/project3.png",
      detailsUrl: "/projects",
    },
  ];

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

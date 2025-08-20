import { Card } from "@/components/ui/card";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
      image: "/project1.png", // optional
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time inventory management",
      longDescription:
        "Built a scalable e-commerce solution handling 1000+ products...",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      features: ["Real-time updates", "Payment integration", "Admin dashboard"],
      liveUrl: "https://project.com",
      githubUrl: "https://github.com/...",
      image: "/project1.png", // optional
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time inventory management",
      longDescription:
        "Built a scalable e-commerce solution handling 1000+ products...",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      features: ["Real-time updates", "Payment integration", "Admin dashboard"],
      liveUrl: "https://project.com",
      githubUrl: "https://github.com/...",
      image: "/project1.png", // optional
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
            <Card
              key={index}
              className="group relative overflow-hidden border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

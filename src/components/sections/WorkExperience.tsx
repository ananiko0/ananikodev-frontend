import { Badge } from "../ui/badge";
import GridItem from "../ui/grid-item";

function WorkExperience() {
  return (
    <section className="py-1 max-w-5xl mx-auto">
      <div className="mb-12 flex justify-center">
        <h2 className="text-3xl font-bold">Work Experience</h2>
      </div>
      <div className="space-y-6">
        <GridItem>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
              <Badge variant="outline">2023-2024</Badge>
            </div>
            <p className="text-muted-foreground mb-3">[Startup Name]</p>

            <p className="mb-4">
              Developed and maintained core features for a SaaS platform serving
              500+ users.
            </p>

            <div className="space-y-2 mb-4">
              <p className="text-sm">
                • Built RESTful APIs with NestJS handling 10k+ daily requests
              </p>
              <p className="text-sm">
                • Implemented real-time notifications using WebSockets
              </p>
              <p className="text-sm">
                • Reduced page load time by 40% through optimization
              </p>
              <p className="text-sm">
                • Collaborated with team of 5 developers using Agile
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["React", "NestJS", "PostgreSQL", "Redis"].map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* No demo/code links needed - it's understood proprietary */}
            <p className="text-xs text-muted-foreground mt-4">
              * Proprietary codebase
            </p>
          </div>
        </GridItem>
      </div>
    </section>
  );
}

export default WorkExperience;

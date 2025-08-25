import { Badge } from "../ui/badge";
import GridItem from "../ui/grid-item";
import ProjectTech from "../ui/custom/ProjectTech";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

function WorkExperience() {
  return (
    <section className="py-1 max-w-5xl mx-auto">
      <div className="mb-12 flex justify-center">
        <h2 className="text-3xl font-bold">Work Experience</h2>
      </div>
      <div className="space-y-6">
        <GridItem borderWidth={3}>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">React Developer</h3>
              <Badge variant="outline">2023-2024</Badge>
            </div>
            <p className="text-muted-foreground mb-3">D4E</p>

            <div className="space-y-2 mb-4">
              <p className="text-sm">
                • Built multiple web applications using React.js, TypeScript,
                and SCSS
              </p>
              <p className="text-sm">
                • Integrated Firebase and backend APIs for authentication, data
                storage, and dynamic content management
              </p>
              <p className="text-sm">
                • Developed an admin panel for platform management with features
                like leaderboards and account control
              </p>
              <p className="text-sm">
                • Designed an interactive quiz platform with authentication,
                authorization, and real-time communication via WebSocket
              </p>
              <p className="text-sm">
                • Focused on scalable architecture, clean UI design, and smooth
                user experience
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <ProjectTech
                tech={[
                  "React",
                  "TypeScript",
                  "SCSS",
                  "Firebase",
                  "WebSocket",
                  "Backend API",
                  "Horizon UI",
                ]}
              />
            </div>

            {/* No demo/code links needed - it's understood proprietary */}

            <Link
              to={`/projects#d4e`}
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-muted-foreground hover:text-black transition-colors"
            >
              <FileText className="h-4 w-4" />
              Details
            </Link>
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

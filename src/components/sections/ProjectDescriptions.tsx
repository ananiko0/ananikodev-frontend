import { Timeline } from "@/components/ui/timeline";
import ProjectTech from "../ui/custom/ProjectTech";
import projects from "@/data/projects";
import ProjectLinks from "../ui/custom/ProjectLinks";

export function ProjectDescriptions() {
  const data = [
    {
      title: "Portfolio",
      content: (
        <div id={projects[2].detailsUrl}>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            This website is my personal portfolio — built both as a{" "}
            <strong>practice project</strong> and a way to showcase my work. I
            built it using <strong>React</strong>, <strong>Vite</strong>, and{" "}
            <strong>TypeScript</strong>, exploring routing, responsive design,
            and engaging animations powered by <strong> Aceternity </strong>
            and
            <strong> shadcn/ui</strong>.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Through this project, I{" "}
            <strong>refreshed and reinforced my React knowledge</strong>,
            experimenting with components, layout, and interactivity in a fully
            self-directed project.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The website is ready to be connected to <strong>GitHub</strong> for
            automatic deployment — I’m exploring free hosting options like
            <strong>Vercel</strong> or <strong>Netlify</strong> to enable
            seamless CI/CD, so every push to the main branch updates the live
            site automatically...
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            After that I am planning to refractor my code
          </p>
          <ProjectTech tech={projects[2].tech} />
          <ProjectLinks
            liveUrl={projects[2].liveUrl}
            githubUrl={projects[2].githubUrl}
            detailsUrl={projects[2].detailsUrl}
          />
        </div>
      ),
    },
    {
      title: "Token Auth",
      content: (
        <div id={projects[1].detailsUrl}>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <strong>NestJS Authentication API</strong> is a multi-factor
            authentication system with a flexible identity-based architecture,
            allowing users to log in via <strong>email/password</strong> or{" "}
            <strong>phone/OTP</strong>.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The system separates <strong>users</strong> (account holders) from{" "}
            <strong>identities</strong> (authentication methods). Each user can
            have multiple identities, register with one method, and add others
            later seamlessly.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            {" "}
            Built with <strong>NestJS</strong>, <strong>TypeORM</strong>,{" "}
            <strong>PostgreSQL</strong>, and <strong>Redis</strong>, it
            implements a robust{" "}
            <strong>three-token authentication system</strong> (access, refresh,
            ID tokens), device-specific sessions, and refresh token rotation.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Security features include <strong>Bcrypt password hashing</strong>,
            OTP validation, rate-limiting, and Redis-backed token blacklisting
            for instant logout. All critical operations use{" "}
            <strong>database transactions</strong> to ensure consistency.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Advanced capabilities allow users to manage multiple authentication
            methods, track sessions per device, and securely refresh tokens. The
            API exposes endpoints for registration, login, OTP verification,
            token refresh, logout, and identity management.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            This project strengthened my expertise in{" "}
            <strong>backend architecture</strong>,{" "}
            <strong>security best practices</strong>, and designing scalable
            authentication systems.
          </p>
          <ProjectTech tech={projects[1].tech} />
          <ProjectLinks
            liveUrl={projects[1].liveUrl}
            githubUrl={projects[1].githubUrl}
            detailsUrl={projects[1].detailsUrl}
          />
        </div>
      ),
    },
    {
      title: "D4E",
      content: (
        <div>
          <h3>Informative Website About the Game</h3>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A simple <strong>informative website</strong> built with{" "}
            <strong>React.js</strong> and <strong>SCSS</strong>. It features a
            single <strong>user form</strong> that connects to a{" "}
            <strong>Firebase database</strong> to collect information.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The website supports <strong>multiple languages</strong>, with all
            text dynamically loaded from Firebase, allowing content updates
            without redeploying.
          </p>
          <h3>Admin Panel for the Game</h3>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            An <strong>admin panel</strong> built with{" "}
            <strong>Horizon UI React</strong> and <strong>TypeScript</strong>,
            integrated with the game's backend.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            It allows admins to <strong>create leaderboards</strong>,{" "}
            <strong>manage user accounts</strong>, and{" "}
            <strong>update website content</strong> dynamically, providing full
            control over the platform's data and interface.
          </p>
          <h3>Quizverse Website</h3>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A <strong>Quizverse website</strong> designed for interactive
            quizzes with <strong>authentication and authorization</strong>. I
            connected it to the backend to manage user sessions and gameplay.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The project integrates <strong>WebSocket</strong> for real-time quiz
            interactions, allowing users to play live quizzes. This project is
            ongoing and showcases my work on <strong>real-time features</strong>{" "}
            and user management.
          </p>
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
          <p className="text-xs text-muted-foreground mt-4">
            * Proprietary codebase
          </p>
        </div>
      ),
    },
    {
      title: "To-Do",
      content: (
        <div id={projects[0].detailsUrl}>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A <strong>single-page task management application</strong> built
            with <strong>React.js</strong>. This project was my{" "}
            <strong>first independent React project</strong> and served as a
            hands-on practice to strengthen my frontend skills.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The app includes a <strong>fake sign-in system</strong> and allows
            users to <strong>add, edit, and remove tasks</strong>, as well as{" "}
            <strong>create multiple task lists</strong>. All tasks are stored in{" "}
            <strong>React Context</strong>, simulating backend functionality.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            {" "}
            While there is no real backend yet, I plan to integrate one in the
            future to extend the app’s functionality and persist data. This
            project helped me learn <strong>state management</strong>,{" "}
            <strong>component structure</strong>, and{" "}
            <strong>user interactions</strong> in React.
          </p>
          <ProjectTech tech={projects[0].tech} />
          <ProjectLinks
            liveUrl={projects[0].liveUrl}
            githubUrl={projects[0].githubUrl}
            detailsUrl={projects[0].detailsUrl}
          />
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline
        data={data}
        mainTitle="Project Descriptions"
        introTextArray={[
          "Here’s a closer look at some of the projects I’ve built over the years.",
        ]}
      />
    </div>
  );
}

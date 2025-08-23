import { Timeline } from "@/components/ui/timeline";
import ProjectLinks from "../ui/custom/ProjectLinks";
import ProjectTech from "../ui/custom/ProjectTech";
import projects from "@/data/projects";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[10px]">
            <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Creating this portfolio website you’re looking at.
            </p>
            <ProjectTech tech={projects[2].tech} />
            <ProjectLinks
              liveUrl={projects[2].liveUrl}
              githubUrl={projects[2].githubUrl}
              detailsUrl={projects[2].detailsUrl}
            />
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Refreshing my <strong>React</strong> and frontend knowledge.
          </p>
          <div className="flex flex-col gap-[10px]">
            <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Learned <strong>NestJS</strong> and built a{" "}
              <strong>token-based </strong>
              authentication system
            </p>
            <ProjectTech tech={projects[0].tech} />
            <ProjectLinks
              liveUrl={projects[0].liveUrl}
              githubUrl={projects[0].githubUrl}
              detailsUrl={projects[0].detailsUrl}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex flex-col gap-[40px]">
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Finished an experimental school project on learning by doing. It
            didn’t feel quite right, so I decided to pause and focus on my own
            learning — I’ll return to teaching when I’m older and wiser.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Visited Vernebi, village in high mountains of Atchara with my
            student as part of a school-organized village exchange program, and
            started working on a new experimental project.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The startup I worked at failed, but I’m grateful for the lessons and
            experience.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Continued working hard for the startup until then.
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
      title: "2023",
      content: (
        <div className="flex flex-col gap-[40px]">
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started working at a startup — exciting but a little overwhelming at
            first.
          </p>
          <div className="flex flex-col gap-[10px]">
            <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Built my first independent <strong>React</strong> project: a to-do
              app
            </p>
            <ProjectTech tech={projects[1].tech} />
            <ProjectLinks
              liveUrl={projects[1].liveUrl}
              githubUrl={projects[1].githubUrl}
              detailsUrl={projects[1].detailsUrl}
            />
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Went skiing and broke my leg
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="flex flex-col gap-[40px]">
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Studied <strong>Node.js</strong> through <strong>Udemy</strong>{" "}
            courses.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Studied <strong>React</strong> through <strong>Udemy</strong> as
            well.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built my first simple website for the International Olympiad of
            Astronomy 2022, which I also co-organized — my first taste of using
            programming for a real project.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Paused my Physics master’s degree.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Participated in Planck’s Olympiad (for hardcore physics students).
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started learning <strong>HTML</strong>, <strong>CSS</strong> and{" "}
            <strong>Javascript.</strong>
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Began working at school.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline
        data={data}
        mainTitle="Changelog from my journey"
        introTextArray={[
          "Three years ago, I started exploring programming as a hobby while teaching physics and math at school — a role I was deeply passionate about. Along the way, I also had the chance to work at a startup, which gave me a taste of the fast-paced tech world and taught me the value of collaboration and adaptability.",
          "What began as curiosity gradually grew into a clear direction: I want to fully focus on programming and software development. This timeline is a look back at the path I’ve taken so far — and a glimpse of where I’m heading next.",
        ]}
      />
    </div>
  );
}

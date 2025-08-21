import { Timeline } from "@/components/ui/timeline";
import portfolio from "../../assets/images/portfolio.png";
import authapi from "../../assets/images/authapi.png";
import ProjectLinks from "../ui/custom/ProjectLinks";

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
            <ProjectLinks liveUrl="/" githubUrl="/" detailsUrl="/" />
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Refreshing my React and frontend knowledge.
          </p>
          <div className="flex flex-col gap-[10px]">
            <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Learned NestJS and built a token-based authentication system
            </p>
            <ProjectLinks liveUrl="/" githubUrl="/" detailsUrl="/" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={portfolio}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={authapi}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
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
            The startup I worked at failed due to lack of organization, but I’m
            grateful for the lessons and experience.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Continued working hard for the startup until then.
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
              Built my first independent React project: a to-do app
            </p>
            <ProjectLinks liveUrl="/" githubUrl="/" detailsUrl="/" />
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Went skiing and broke my leg
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={portfolio}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={authapi}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="flex flex-col gap-[40px]">
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Studied Node.js through Udemy courses.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Studied React through Udemy as well.
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
            Started learning HTML, CSS and Javascript.
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

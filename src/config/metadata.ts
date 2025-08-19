interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  image?: string;
}

export type PageName =
  | "home"
  | "about"
  | "projects"
  | "blog"
  | "gallery"
  | "roadmap"
  | "calendar";

//? where shoul this data be used?
//TODO: write real info
export const siteMetadata = {
  siteName: "AnaNiko",
  siteUrl: "https://yourportfolio.com",
  defaultImage: "/images/default-preview.png",
  twitterHandle: "@yourhandle",
};

//TODO: write real descriptions
export const pagesMetadata: Record<PageName, PageMeta> = {
  home: {
    title: `${siteMetadata.siteName} - Full-Stack Developer`,
    description:
      "Full-stack developer specializing in React, TypeScript, and modern web technologies. Building elegant solutions to complex problems.",
    keywords:
      "full-stack developer, web developer, React, TypeScript, portfolio",
    image: "/images/home-preview.png",
  },
  about: {
    title: `About | ${siteMetadata.siteName}`,
    description:
      "Learn about my journey as a developer, my skills, experience, and what drives my passion for creating digital experiences.",
    keywords: "about me, developer story, skills, experience",
    image: "/images/about-preview.png",
  },
  projects: {
    title: `Projects | ${siteMetadata.siteName}`,
    description:
      "Explore my latest web development projects, from full-stack applications to open-source contributions.",
    keywords:
      "portfolio projects, web development, React projects, full-stack applications",
    image: "/images/projects-preview.png",
  },
  blog: {
    title: `Blog | ${siteMetadata.siteName}`,
    description:
      "Thoughts on web development, programming tutorials, and technology insights from my development journey.",
    keywords:
      "tech blog, web development blog, programming tutorials, React articles",
    image: "/images/blog-preview.png",
  },
  gallery: {
    title: `Gallery | ${siteMetadata.siteName}`,
    description:
      "Visual showcase of my work, including UI designs, project screenshots, and development process.",
    keywords: "design gallery, UI showcase, portfolio gallery, visual work",
    image: "/images/gallery-preview.png",
  },
  roadmap: {
    title: `Roadmap | ${siteMetadata.siteName}`,
    description:
      "My learning journey and future goals. See what I'm currently learning and what's next on my development path.",
    keywords:
      "learning roadmap, development goals, future plans, skill progression",
    image: "/images/roadmap-preview.png",
  },
  calendar: {
    title: `Calendar | ${siteMetadata.siteName}`,
    description:
      "Check my availability for meetings, collaborations, and project discussions.",
    keywords: "availability, schedule, meetings, calendar",
    image: "/images/calendar-preview.png",
  },
};

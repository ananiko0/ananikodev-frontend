import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";
import { ProjectDescriptions } from "@/components/sections/ProjectDescriptions";
import PageTransition from "@/layouts/PageTransition";

function Projects() {
  const meta = pagesMetadata.projects;
  return (
    <PageTransition>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div className="max-w-5xl mx-auto">
        <ProjectDescriptions />
      </div>
    </PageTransition>
  );
}

export default Projects;

import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";

function Projects() {
  const meta = pagesMetadata.projects;
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div>Projects</div>
    </>
  );
}

export default Projects;

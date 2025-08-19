import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";

function About() {
  const meta = pagesMetadata.about;
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div>About Page</div>
    </>
  );
}

export default About;

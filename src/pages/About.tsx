import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";
import { TimelineDemo } from "@/components/sections/Timeline";
import PageTransition from "@/layouts/PageTransition";

function About() {
  const meta = pagesMetadata.about;
  return (
    <PageTransition>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div className="max-w-5xl mx-auto">
        <TimelineDemo />
      </div>
    </PageTransition>
  );
}

export default About;

import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";
import { TimelineDemo } from "@/components/sections/Timeline";
import PageTransition from "@/layouts/PageTransition";
import { ScrollFadeUp } from "@/layouts/ScrollRevealVariants";
import Contact from "@/components/sections/Contact";

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
      <ScrollFadeUp>
        <Contact />
      </ScrollFadeUp>
    </PageTransition>
  );
}

export default About;

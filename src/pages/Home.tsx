import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";
import Hero from "@/components/sections/Hero";
import AboutBrief from "@/components/sections/AboutBrief";
import WorkExperience from "@/components/sections/WorkExperience";
import Contact from "@/components/sections/Contact";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import PageTransition from "@/layouts/PageTransition";

function Home() {
  const meta = pagesMetadata.home;
  return (
    <PageTransition>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div>
        <Hero />
        <AboutBrief />
        <FeaturedProjects />
        <WorkExperience />
        <Contact />
      </div>
    </PageTransition>
  );
}

export default Home;

import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";
import Hero from "@/components/sections/Hero";
import AboutBrief from "@/components/sections/AboutBrief";
import WorkExperience from "@/components/sections/WorkExperience";
import Contact from "@/components/sections/Contact";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import PageTransition from "@/layouts/PageTransition";
import { ScrollFadeUp } from "@/layouts/ScrollRevealVariants";

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
        <ScrollFadeUp>
          <AboutBrief />
        </ScrollFadeUp>
        <ScrollFadeUp>
          <FeaturedProjects />
        </ScrollFadeUp>
        <ScrollFadeUp>
          <WorkExperience />
        </ScrollFadeUp>
        <ScrollFadeUp>
          <Contact />
        </ScrollFadeUp>
      </div>
    </PageTransition>
  );
}

export default Home;

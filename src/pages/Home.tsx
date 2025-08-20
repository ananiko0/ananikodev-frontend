import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";
import Hero from "@/components/sections/Hero";

function Home() {
  const meta = pagesMetadata.home;
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div>
        <Hero />
        <div className="bg-red-500 text-white p-4">
          <h1 className="text-3xl font-bold bg-red-500">
            Tailwind is working!
          </h1>
        </div>
        Home Page
      </div>
    </>
  );
}

export default Home;

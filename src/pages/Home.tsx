import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";

function Home() {
  const meta = pagesMetadata.home;
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div>Home Page</div>
    </>
  );
}

export default Home;

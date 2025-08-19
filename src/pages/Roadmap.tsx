import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";

function Roadmap() {
  const meta = pagesMetadata.roadmap;
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div>Roadmap Page</div>
    </>
  );
}

export default Roadmap;

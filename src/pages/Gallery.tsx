import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";

function Gallery() {
  const meta = pagesMetadata.gallery;
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div>Gallery Page</div>
    </>
  );
}

export default Gallery;

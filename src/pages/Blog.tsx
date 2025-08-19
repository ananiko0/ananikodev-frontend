import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";

function Blog() {
  const meta = pagesMetadata.blog;
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div>Blog Page</div>
    </>
  );
}

export default Blog;

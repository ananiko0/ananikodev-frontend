import { Helmet } from "react-helmet-async";

function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div>Oops! Page not found</div>
    </>
  );
}

export default ErrorPage;

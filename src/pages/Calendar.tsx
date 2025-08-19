import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";

function Calendar() {
  const meta = pagesMetadata.calendar;
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div>Calendar Page</div>
    </>
  );
}

export default Calendar;

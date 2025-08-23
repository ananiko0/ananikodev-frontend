import { Helmet } from "react-helmet-async";
import { pagesMetadata } from "../config/metadata";
import VirtuesLoading from "@/assets/Octagon/Loading";

function Calendar() {
  const meta = pagesMetadata.calendar;
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <>
        <VirtuesLoading />
      </>
    </>
  );
}

export default Calendar;

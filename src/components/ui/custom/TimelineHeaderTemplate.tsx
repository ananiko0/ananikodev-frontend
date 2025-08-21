interface TimelineHeaderTemplateProps {
  mainTitle: string;
  introTextArray: string[];
}

function TimelineHeaderTemplate({
  mainTitle,
  introTextArray,
}: TimelineHeaderTemplateProps) {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
        {mainTitle}
      </h2>
      {introTextArray.map((paragraph) => (
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-xl mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default TimelineHeaderTemplate;

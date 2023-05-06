import React from 'react';

type TTimelineItemProps = {
  title: string;
  subtitle?: string;
  image?: string;
  time?: string;
  detail?: string;
};

function TimelineItem({ title, subtitle, time, detail }: TTimelineItemProps) {
  return (
    <>
      <span className="absolute -ml-9 flex h-6 w-6 items-center justify-center rounded-full bg-primary-300 ring-8 ring-primary-100 dark:bg-primary-600 dark:ring-primary-800">
        <svg
          className="h-3 w-3 text-primary-600 dark:text-primary-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"></path>
        </svg>
      </span>
      <div className="mb-1 flex-col">
        <h3 className="mb-1 text-base font-semibold text-primary-800 dark:text-primary-50 md:text-xl">
          {title}
        </h3>
        <h4 className="text-sm font-normal text-primary-700 md:text-base">{subtitle}</h4>
      </div>
      <time className="mb-2 block font-mono text-xs leading-none text-bland-600 dark:text-primary-300 md:text-sm">
        {time}
      </time>
      <p className="mb-4 font-mono text-xs font-light text-bland-500 dark:text-primary-300 md:text-sm">
        {detail}
      </p>
    </>
  );
}

export default TimelineItem;

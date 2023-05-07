import Link from '@docusaurus/Link';
import React from 'react';

type TTimelineItemProps = {
  title: string;
  url?: string;
  subtitle?: string;
  image?: string;
  time?: string;
  detail?: string[];
};

function TimelineItem({ title, url, subtitle, time, detail }: TTimelineItemProps) {
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

      <div className="mb-4 flex-col">
        <Link href={url} target="_blank">
          <h3 className="mb-1 text-base font-semibold text-primary-800 dark:text-primary-200 md:text-xl">
            {title}
          </h3>
        </Link>
        <div className="flex items-center space-x-2 divide-x divide-primary-500">
          <h4 className="text-sm m-0 font-normal text-primary-700 dark:text-primary-500 md:text-base">
            {subtitle}
          </h4>

          <time className="pl-2 text-sm leading-none text-primary-500 dark:text-primary-600 md:text-base">
            {time}
          </time>
        </div>
      </div>

      {detail?.map((detailItem, key) => (
        <p
          key={key}
          className="mb-2 font-mono text-xs font-light text-bland-600 dark:text-bland-300 md:text-sm">
          {detailItem}
        </p>
      ))}
    </>
  );
}

export default TimelineItem;

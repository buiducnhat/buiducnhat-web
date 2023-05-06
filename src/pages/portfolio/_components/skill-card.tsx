import Link from '@docusaurus/Link';
import React from 'react';
import { usePalette } from 'react-palette';

export default function SkillCard({ img, name, url }: { img: string; name: string; url: string }) {
  const { data, loading, error } = usePalette(img);

  return (
    !!data.vibrant &&
    !loading &&
    !error && (
      <Link
        href={url}
        className={`relative m-1 flex h-11 w-11 items-center justify-center rounded-xl bg-white md:h-20 md:w-20`}>
        <div
          style={{ backgroundColor: data.lightVibrant }}
          className={`absolute top-0 h-full w-full rounded-xl opacity-30 hover:opacity-50`}
        />
        <img className="h-10 w-10 md:h-16 md:w-16" src={img} alt={name} />
      </Link>
    )
  );
}

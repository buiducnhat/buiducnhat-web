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
        className={`bg-white relative w-11 h-11 md:w-20 md:h-20 flex justify-center items-center m-1 rounded-xl`}>
        <div
          style={{ backgroundColor: data.lightVibrant }}
          className={`absolute top-0 opacity-30 hover:opacity-50 w-full h-full rounded-xl`}
        />
        <img className="w-10 h-10 md:w-16 md:h-16" src={img} alt={name} />
      </Link>
    )
  );
}

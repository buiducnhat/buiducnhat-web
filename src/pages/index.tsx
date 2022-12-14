import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import Translate from '@docusaurus/Translate';
import { Button, OutlinedButton } from '@site/src/components/button';

const socials = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/buiducnhat',
    iconUrl: 'https://img.icons8.com/fluent/48/000000/facebook-new.png',
  },
  {
    name: 'github',
    url: 'https://github.com/buiducnhat47',
    iconUrl: 'https://img.icons8.com/fluent/48/000000/github.png',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/nhat-bui-a97373158/',
    iconUrl: 'https://img.icons8.com/fluent/48/000000/linkedin.png',
  },
  {
    name: 'email',
    url: 'mailto:nhaths4701@gmail.com',
    iconUrl: 'https://img.icons8.com/fluent/48/000000/email.png',
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home page"
      description="Personal website of Bùi Đức Nhật, a developer, sharing about programming, technology, and life.">
      <main className="min-h-[70vh] bg-gradient-to-br md:bg-gradient-to-tr from-primary-300 to-gray-50 dark:from-primary-800 dark:to-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-20">
          <div className="justify-self-center mx-3 md:justify-self-end flex flex-col shadow-2xl bg-primary-200 dark:bg-primary-900">
            <div className="flex flex-col px-10 pt-10 justify-center items-center">
              <img
                className="rounded-full w-56 h-56 md:w-64 md:h-64 mb-10"
                src="https://github.com/buiducnhat.png"
                alt="cover"
              />
              <h1 className="text-center mb-5 text-primary-900 dark:text-primary-50">
                {siteConfig.title}
              </h1>
              <span className="w-1/5 p-0.5 bg-primary-600 dark:bg-primary-100 mb-5"></span>
              <p className="text-center tracking-[.25em]">{siteConfig.tagline}</p>
            </div>

            <div className="w-full flex justify-evenly py-1 space-x-3 mt-5 bg-white dark:bg-gray-800">
              {socials.map((social, index) => (
                <Link key={index} href={social.url}>
                  <img className="w-8 h-8 rounded-full" src={social.iconUrl} alt={social.name} />
                </Link>
              ))}
            </div>
          </div>

          <div className="p-5 md:p-10 max-w-md justify-self-center md:justify-self-start">
            <p className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary-900 dark:text-primary-50">
              <Translate>Hello</Translate>
            </p>
            <p className="text-lg md:text-2xl">
              <Translate>{`Here's who I am & what I do`}</Translate>
            </p>

            <div className="py-3 mb-5 flex space-x-3">
              <Link href="/blogs">
                <Button className="rounded-full w-28">
                  <Translate>Blogs</Translate>
                </Button>
              </Link>
              <Link href="/portfolio">
                <OutlinedButton className="rounded-full w-28">
                  <Translate>Projects</Translate>
                </OutlinedButton>
              </Link>
            </div>

            <p className="text-md md:text-lg tracking-wide">
              <Translate>
                I am a developer from Viet Nam, I enjoy sharing about programming, technology, and
                life.
              </Translate>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

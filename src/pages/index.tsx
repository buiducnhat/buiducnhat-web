import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { twMerge } from 'tailwind-merge';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';
import { Button, OutlinedButton } from '@site/src/components/button';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home page"
      description="Personal website of Bùi Đức Nhật, a developer, sharing about programming, technology, and life.">
      <main className={twMerge('min-h-[70vh]', styles.main)}>
        <div className="grid grid-cols-2 py-20">
          <div className="justify-self-end flex flex-col shadow-2xl bg-purple-200 dark:bg-purple-900">
            <div className="px-10 flex flex-col  pt-10 justify-center items-center">
              <img
                className="rounded-full w-64 h-64 mb-10"
                src="https://github.com/buiducnhat.png"
                alt="cover"
              />
              <h1 className="text-center mb-5 text-purple-900 dark:text-pink-50">
                {siteConfig.title}
              </h1>
              <span className="w-full p-0.5 bg-pink-600 dark:bg-pink-100 lg:w-1/5 mb-5"></span>
              <p className="text-center tracking-[.25em]">{siteConfig.tagline}</p>
            </div>

            <div className="w-full flex justify-evenly py-1 space-x-3 mt-5 bg-white dark:bg-gray-900">
              <a href=" https://www.facebook.com/buiducnhat" target="_blank" rel="noreferrer">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                  alt="facebook"
                />
              </a>
              <a href="https://www.linkedin.com/in/buiducnhat/" target="_blank" rel="noreferrer">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href="https://github.com/buiducnhat" target="_blank" rel="noreferrer">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://img.icons8.com/fluent/48/000000/github.png"
                  alt="github"
                />
              </a>
            </div>
          </div>

          <div className="p-10 max-w-md">
            <p className="text-9xl font-bold text-purple-900 dark:text-pink-50">
              <Translate>Hello</Translate>
            </p>
            <p className="text-2xl">
              <Translate>{`Here's who I am & what I do`}</Translate>
            </p>

            <div className="py-3 mb-5 flex space-x-3">
              <Button className="rounded-full w-28">
                <Translate>Blogs</Translate>
              </Button>
              <OutlinedButton className="rounded-full w-28">
                <Translate>Projects</Translate>
              </OutlinedButton>
            </div>

            <p className="text-lg tracking-wide">
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

import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.scss';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home page"
      description="Personal website of Bùi Đức Nhật, a developer, sharing about programming, technology, and life.">
      <main className={styles.main}>
        <div className={clsx('row', styles.profile)}>
          <div className={clsx('item shadow--tl col', styles['__card'])}>
            <img
              className={styles['__avatar']}
              src="https://github.com/buiducnhat.png"
              alt="cover"
            />
            <h1 style={{ marginBottom: '2rem' }}>{siteConfig.title}</h1>
            <p style={{ letterSpacing: '0.25em' }}>{siteConfig.tagline}</p>
          </div>

          <div className={clsx('col', styles['--intro'])}>
            <h2>Hello</h2>
            <p>I am Bùi Đức Nhật, a developer, sharing about programming, technology, and life.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

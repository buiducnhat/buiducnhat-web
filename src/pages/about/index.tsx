import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import React from 'react';
import TimelineItem from './_components/timeline-item';
import { EDUCATION_DATA } from './_data/education';
import { CAREER_DATA } from './_data/career';

function AboutPage() {
  return (
    <Layout
      title="About"
      description="Trang web cá nhân của Bùi Đức Nhật, nơi viết lách, chia sẻ kiến thức IT, công nghệ hay cuộc sống">
      <div className="bg-primary-grad min-h-[70vh]">
        <div className="container py-5">
          <h1 className="h1-primary hidden">
            <Translate>About me</Translate>
          </h1>

          <div className="tw-border-solid grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
            <div className="col-span-1">
              <h2 className="h2-primary">
                <Translate>Education</Translate>
              </h2>

              <div className="relative ml-2 border-l border-primary-200 dark:border-primary-800">
                {EDUCATION_DATA.vi.map((item, key) => (
                  <div key={key} className="mb-10 ml-6">
                    <TimelineItem {...item} />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-1">
              <h2 className="h2-primary">
                <Translate>Career</Translate>
              </h2>

              <div className="relative ml-2 border-l border-primary-200 dark:border-primary-800">
                {CAREER_DATA.vi.map((item, key) => (
                  <div key={key} className="mb-10 ml-6">
                    <TimelineItem {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;

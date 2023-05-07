import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import React from 'react';

import SkillCard from './_components/skill-card';
import { technicalSkills } from './_data/technical-skills';

function PortfolioPage() {
  return (
    <Layout
      title="Portfolio"
      description="Trang web cá nhân của Bùi Đức Nhật, nơi viết lách, chia sẻ kiến thức IT, công nghệ hay cuộc sống">
      <div className="bg-primary-grad min-h-[70vh]">
        <div className="container py-5">
          <div className="rounded-xl p-5">
            <h2 className="h2-primary text-center">
              <Translate>Technical skills</Translate>
            </h2>

            <div className="flex w-full justify-center">
              <div className="flex max-w-3xl flex-wrap justify-center">
                {technicalSkills
                  .sort(() => Math.random() - 0.5)
                  .map((x, index) => {
                    return <SkillCard key={index} img={x.img} name={x.name} url={x.url} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PortfolioPage;

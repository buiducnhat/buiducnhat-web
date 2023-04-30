import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import React from 'react';

function AboutPage() {
  return (
    <Layout
      title="About"
      description="Trang web cá nhân của Bùi Đức Nhật, nơi viết lách, chia sẻ kiến thức IT, công nghệ hay cuộc sống">
      <div className="min-h-[70vh] bg-gradient-to-br md:bg-gradient-to-tr from-primary-50 to-gray-50 dark:from-primary-900 dark:to-gray-900">
        <div className="container py-5">
          <h1 className="text-bold text-primary-900 dark:text-primary-50">
            <Translate>About me</Translate>
          </h1>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;

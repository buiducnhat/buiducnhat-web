import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import React from 'react';

function SeriesPage() {
  const listSeries = [
    {
      title: 'Các Stack Docker hữu ích',
      description: 'Các stack Docker hữu ích cho các dev',
      url: '/series/cac-stack-docker-huu-ich/tong-quan',
    },
  ];

  return (
    <Layout
      title="Series"
      description="Trang web cá nhân của Bùi Đức Nhật, nơi viết lách, chia sẻ kiến thức IT, công nghệ hay cuộc sống">
      <div className="min-h-[70vh] bg-gradient-to-br md:bg-gradient-to-tr from-primary-50 to-gray-50 dark:from-primary-900 dark:to-gray-900">
        <div className="container py-5">
          <h1 className="text-bold text-primary-900 dark:text-primary-50">
            <Translate>List Series</Translate>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {listSeries.map((item) => (
              <div key={item.url} className="p-5 rounded-md bg-sky-100 dark:bg-primary-900">
                <h2 className="text-primary-900 dark:text-primary-50">{item.title}</h2>
                <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                <a
                  href={item.url}
                  className="text-primary-500 dark:text-primary-400 hover:underline">
                  <Translate>Read more</Translate>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SeriesPage;

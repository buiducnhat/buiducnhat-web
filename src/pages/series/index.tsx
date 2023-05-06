import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import React from 'react';

function SeriesPage() {
  const listSeries = [
    {
      title: 'Chạy mọi thứ với Docker',
      description: 'Cài đặt các services, môi trường chưa bao giờ dễ đến thế...',
      url: '/series/chay-moi-thu-voi-docker/tong-quan',
    },
  ];

  return (
    <Layout
      title="Series"
      description="Trang web cá nhân của Bùi Đức Nhật, nơi viết lách, chia sẻ kiến thức IT, công nghệ hay cuộc sống">
      <div className="bg-primary-grad min-h-[70vh]">
        <div className="container py-5">
          <h1 className="text-bold h1-primary mb-10">
            <Translate>List Series</Translate>
          </h1>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {listSeries.map((item) => (
              <div key={item.url} className="rounded-xl bg-white p-5 shadow-xl dark:bg-bland-900">
                <a href={item.url} className="highligh-link hover:underline">
                  <h2 className="h2-primary">{item.title}</h2>
                </a>
                <p className="text-bland-500 dark:text-bland-400">{item.description}</p>
                <a href={item.url} className="highligh-link hover:underline">
                  <Translate>Read now</Translate>
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

import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaFacebook as FacebookIcon,
  FaEnvelope as EmailIcon,
} from 'react-icons/fa';
import HomeButton from './_components/button';

const socialData = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/buiducnhat47',
    Icon: FacebookIcon,
  },
  {
    name: 'github',
    url: 'https://github.com/buiducnhat',
    Icon: GithubIcon,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/nhat-bui-a97373158/',
    Icon: LinkedinIcon,
  },
  {
    name: 'email',
    url: 'mailto:nhaths4701@gmail.com',
    Icon: EmailIcon,
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Home page',
      })}
      description="Trang web cá nhân của Bùi Đức Nhật, nơi viết lách, chia sẻ kiến thức IT, công nghệ hay cuộc sống">
      <main className="bg-bland-grad min-h-[70vh]">
        <div className="grid grid-cols-1 py-10 md:grid-cols-2 md:py-20">
          <div className="mx-3 flex flex-col justify-self-center bg-bland-200 shadow-2xl dark:bg-bland-900/80 md:justify-self-end">
            <div className="flex flex-col items-center justify-center px-10 pt-10">
              <img
                className="mb-10 h-56 w-56 rounded-full duration-200 hover:ring-2 hover:ring-primary-600 md:h-64 md:w-64"
                src="/img/avatar.jpeg"
                alt="cover"
              />
              <h1 className="mb-5 select-none text-center text-bland-900 duration-200 hover:text-primary-600 dark:text-bland-50 dark:hover:text-primary-500">
                {siteConfig.title}
              </h1>
              <span className="mb-5 w-1/5 bg-bland-600 p-0.5 dark:bg-bland-100"></span>
              <p className="select-none text-center tracking-[.25em] hover:text-primary-600 dark:hover:text-primary-500">
                {siteConfig.tagline}
              </p>
            </div>

            <div className="mt-5 flex w-full justify-evenly space-x-3 bg-white py-1 dark:bg-gray-800">
              {socialData.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="group flex items-center justify-center rounded-full p-2 duration-200 hover:bg-primary-600">
                  <social.Icon className="h-6 w-6 text-bland-500 duration-200 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          <div className="max-w-md justify-self-center p-5 md:justify-self-start md:p-10">
            <p className="select-none text-6xl font-bold text-bland-600 duration-200 hover:text-primary-600 dark:text-bland-100 dark:hover:text-primary-500 md:text-8xl lg:text-9xl">
              <Translate>Hello</Translate>
            </p>
            <p className="select-none text-lg md:text-2xl">
              <Translate>{`What do you wanna find here?`}</Translate>
            </p>

            <div className="mb-5 flex space-x-3 py-3">
              <Link href="/blogs" className="hover:no-underline">
                <HomeButton mode="filled">
                  <Translate>Blogs</Translate>
                </HomeButton>
              </Link>
              <Link href="/portfolio" className="hover:no-underline">
                <HomeButton mode="outlined">
                  <Translate>Projects</Translate>
                </HomeButton>
              </Link>
            </div>

            <p className="text-md select-none tracking-wide text-bland-700 dark:text-bland-400 md:text-lg">
              <Translate>
                {`I'm Nhat, a Software Engineer from Vietnam, with strong passion for IT. I love to share my knowledge, experience about technology, work, learning and also to write anything.`}
              </Translate>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

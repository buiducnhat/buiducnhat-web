import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import { Button, OutlinedButton } from '@site/src/components/button';
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaFacebook as FacebookIcon,
  FaEnvelope as EmailIcon,
} from 'react-icons/fa';

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
      <main className="min-h-[70vh] bg-bland-grad">
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-20">
          <div className="justify-self-center mx-3 md:justify-self-end flex flex-col shadow-2xl bg-bland-200 dark:bg-bland-900">
            <div className="flex flex-col px-10 pt-10 justify-center items-center">
              <img
                className="rounded-full w-56 h-56 md:w-64 md:h-64 mb-10"
                src="/img/avatar.jpeg"
                alt="cover"
              />
              <h1 className="text-center mb-5 text-bland-900 dark:text-bland-50">
                {siteConfig.title}
              </h1>
              <span className="w-1/5 p-0.5 bg-bland-600 dark:bg-bland-100 mb-5"></span>
              <p className="text-center tracking-[.25em]">{siteConfig.tagline}</p>
            </div>

            <div className="w-full flex justify-evenly py-1 space-x-3 mt-5 bg-white dark:bg-gray-800">
              {socialData.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="flex justify-center items-center p-2 hover:bg-bland-500 rounded-full group">
                  <social.Icon className="w-6 h-6 text-bland-500 group-hover:text-bland-50" />
                </Link>
              ))}
            </div>
          </div>

          <div className="p-5 md:p-10 max-w-md justify-self-center md:justify-self-start">
            <p className="text-6xl md:text-8xl lg:text-9xl font-bold text-bland-900 dark:text-bland-50">
              <Translate>Hello</Translate>
            </p>
            <p className="text-lg md:text-2xl">
              <Translate>{`What do you wanna find here?`}</Translate>
            </p>

            <div className="py-3 mb-5 flex space-x-3">
              <Link href="/blogs" className="hover:no-underline">
                <Button className="rounded-full w-28 bg-bland-600 dark:bg-bland-500 hover:bg-bland-700 dark:hover:bg-bland-400 dark:hover:text-bland-700">
                  <Translate>Blogs</Translate>
                </Button>
              </Link>
              <Link href="/portfolio" className="hover:no-underline">
                <OutlinedButton className="rounded-full w-28 text-bland-600 dark:text-bland-400 hover:text-white dark:hover:text-bland-700 hover:bg-bland-700 dark:hover:bg-bland-400 ring-bland-700 dark:ring-bland-400">
                  <Translate>Projects</Translate>
                </OutlinedButton>
              </Link>
            </div>

            <p className="text-md md:text-lg tracking-wide">
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

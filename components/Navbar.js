import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import cn from 'classnames';

function NavItem({ href, text }) {
    const router = useRouter();
    const isActive = router.asPath === href;
  
    return (
      <NextLink href={href}>
        <a
          className={cn(
            isActive
              ? 'font-semibold text-gray-200'
              : 'font-normal text-gray-400',
            'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-800 transition-all'
          )}
        >
          <span className="capsize">{text}</span>
        </a>
      </NextLink>
    );
  }

  export default function Container(props) {
    
    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
      title: 'Nawed Ali – Full Stack Developer',
      description: `Love for Open-Source, Hackathons and Web3.0.`,
      image: 'https://pbs.twimg.com/profile_images/1541300431623598080/QNrH1wh1_400x400.jpg',
      type: 'website',
      ...customMeta
    };
  
    return (
      <div className="bg-gray-900 bg-opacity-80 mb-8">
        <Head >
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta property="og:url" content={`https://nawedali.tech${router.asPath}`} />
          <link rel="canonical" href={`https://nawedali.tech${router.asPath}`} />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Nawed Ali" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@nawed2611" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
        </Head>
        <div className="flex flex-col justify-center h-20 items-center px-8">
          <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-700 mx-auto p-16 sm:pb-16  text-gray-900 ">
            <div className=" border-gray-700 rounded-lg ml-[-0.60rem]">
              <NavItem href="/" text="Home" />
              <NavItem href="https://nawedali.hashnode.dev/" text="Blog" />
              <NavItem href="/experiences" text="Experiences" />
              <NavItem href="/projects" text="Projects" />
              <NavItem href="https://github.com/nawed2611" text="GitHub" />
              <NavItem href="mailto:nawed2611@gmail.com" text="Email Me" />
            </div>
           
          </nav>
        </div>
      </div>
    );
  }
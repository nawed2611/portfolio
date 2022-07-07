import React from 'react'
import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mt-10 mb-8">
      <hr className="w-full border-1 border-gray-200 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <ExternalLink href="https://nawedali.hashnode.dev/">
            Blog
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/nawed2611">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/nawed2611">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCYh_EBFHBW-v1RAeuy_eHxQ">
            YouTube
          </ExternalLink>

        </div>
        <p className='text-gray-500'>Created by Nawed Ali Inspired by <a className='hover:underline hover:text-gray-600' href="https://leerob.io">Lee Robinson</a></p>
      </div>
    </footer>
  )
}

export default Footer
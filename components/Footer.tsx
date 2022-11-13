import React from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

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
  const sendEmail = (e) => {

    e.preventDefault();
    toast('Sending Message...', {
      duration: 500
    });

    emailjs.sendForm('service_r0q4rt7', 'template_p3cwgaf', e.target, 'user_UotiSKXhrIbrot5hLTjYs')
      .then((result) => {
        console.log(result.text);
        toast.success('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        toast.error('Email not sent :((');
      });

    e.target.reset();
  };

  return (
    <footer className="flex p-2 flex-col justify-center items-start max-w-2xl mx-auto w-full mt-10 mb-8">
      <Toaster />
      <hr className="w-full border-1 border-gray-200 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-4">
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
        <form onSubmit={sendEmail} className="mx-2 w-44 text-gray-400 text-sm flex flex-col">
          <label>
            <h4>Name</h4>
            <input required className='focus:outline-none p-1 bg-black border text-slate-100 w-full rounded-md my-2' type="text" name="name" />
          </label>

          <label>
            <h4>Email ID</h4>
            <input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className='focus:outline-none p-1 bg-black border text-slate-100 w-full rounded-md my-2' type="email" name="email" />
          </label>

          <label>
            <h4>Description</h4>
            <input required className='focus:outline-none p-1 bg-black border text-slate-100 w-full rounded-md my-2' type="text" name="description" placeholder="Any Feedback helps:)" />
          </label>

          <input id="submit" className='focus:outline-none border rounded-md w-full hover:cursor-pointer hover:bg-slate-600 p-1' type="submit" value="Send" />
        </form>
      </div>
    </footer>
  )
}

export default Footer
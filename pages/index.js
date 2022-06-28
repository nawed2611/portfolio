import { Suspense } from 'react';
import Link from 'next/link';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AboutCards from '../components/AboutCards';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Navbar />

      <div className="flex flex-col mt-10 justify-center items-start max-w-2xl border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">
              Nawed Ali
            </h1>
            <h2 className="text-gray-200 mb-4">
              Full Stack Developer building{' '}
              <span className="font-semibold">TweepsBook</span>
            </h2>
            <p className="text-gray-400 mb-16">
              Building awesome stuff via Open-Source, Web 3.0 and Hackathons.
              Developer, Learner and Writer
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <img src="https://pbs.twimg.com/profile_images/1541300431623598080/QNrH1wh1_400x400.jpg"
              height={176}
              width={176}
              sizes="30vw"
              priority
              className="rounded-full filter"
            />
          </div>

        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-white">
          About Me
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
            <AboutCards
              title="I'm a sophomore studying Computer Science and Engineering and exploring the worlds of Web.3 and Open-Source"
              
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <AboutCards
              title="I'm an Open-Source advocate and a part of the GirlScript Summer of Code'22 Team"

              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <AboutCards
              title="I like to code with React.js, Next.js and Node.js with database support from MongoDB and SQL"

              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
          </div>
  
        <Footer />
      </div>
    </Suspense>
  )
}

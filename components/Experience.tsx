import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col max-w-3xl items-start justify-center mx-auto mt-12 experiences'>
      <h1 className="font-bold text-xl mx-2 md:text-5xl tracking-tight mb-1 text-white">
        My Experiences
      </h1>
      <div className="container mx-auto h-full">

        <div className="relative wrap overflow-hidden p-4 h-full">
          <div className="mb-8 flex justify-between items-center w-full">
            <div className="order-1 sm:w-1/4"></div>
            <div className="z-20 mx-2 hidden sm:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-100 drop-shadow-xl rounded-lg shadow-xl w-full sm:w-1/2 px-6 py-4">
              <h3 className="mb-2 font-bold text-gray-800 text-xl">Front-End Developer</h3>
              <h4 className="mb-2 font-semibold text-gray-800 text-sm italic">10xfs <span className='px-2 font-light text-xs'>June 2022 - Present</span></h4>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                A private workspace to help founders get the most out of their investors, advisors, friends and network
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
            <div className="order-1 sm:w-1/4"></div>
            <div className="z-20 mx-2 hidden sm:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-gray-900 drop-shadow-xl rounded-lg shadow-xl w-full sm:w-1/2 px-6 py-4">
              <h3 className="mb-2 font-bold text-white text-xl">MLH Prep Fellow</h3>
              <h4 className="mb-2 font-bold text-white text-sm italic">Major League Hacking <span className='px-2 font-light text-xs'>Aug 2022</span></h4>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Part of the Aug Prep Fellowship Batch where I got to work on open-source projects with fellow pod mates
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full">
            <div className="order-1 sm:w-1/4"></div>
            <div className="z-20 hidden sm:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-100 drop-shadow-xl rounded-lg shadow-xl w-full sm:w-1/2 px-6 py-4">
              <h3 className="mb-2 font-bold text-gray-800 text-xl">Full-Stack Developer</h3>
              <h4 className="mb-2 font-semibold text-gray-800 text-sm italic">TweepsBook <span className='px-2 font-light text-xs'>June 2022 - Aug 2022</span></h4>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                TweepsBook, an enhanced bookmarking tool to power Twitter users that helps you
                streamline the clutter by adding different tags and organize tweets based on your liking
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 sm:w-1/4"></div>
            <div className="z-20 hidden sm:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-gray-900 drop-shadow-xl rounded-lg shadow-xl w-full sm:w-1/2 px-6 py-4">
              <h3 className="mb-2 font-bold text-white text-xl">Hacker</h3>
              <h4 className="mb-2 font-bold text-white text-sm italic">Major League Hacking <span className='px-2 font-light text-xs'>Feb 2022 - Present</span></h4>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Took part in more than 20 Hackathons hosted and sponsored by MLH as a hacker and as a mentor. Won prizes like "Most Creative Use of Twilio", "Best use of DeSo" and much more</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 sm:w-1/4"></div>
            <div className="z-20 hidden sm:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
            </div>
            <div className="order-1 bg-gray-100 drop-shadow-xl rounded-lg shadow-xl w-full sm:w-1/2 px-6 py-4">
              <h3 className="mb-2 font-bold text-gray-800 text-xl">Organising Team and Mentor</h3>
              <h4 className="mb-2 font-semibold text-gray-800 text-sm italic">GirlScript Summer of Code'2022 <span className='px-2 font-light text-xs'>June 2022 - Present</span></h4>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Part of the Organising team as a writer and as a mentor for over 5k contributors who took part in the program
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 sm:w-1/4"></div>
            <div className="z-20 hidden sm:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">6</h1>
            </div>
            <div className="order-1 bg-gray-900 drop-shadow-xl rounded-lg shadow-xl w-full sm:w-1/2 px-6 py-4">
              <h3 className="mb-2 font-bold text-white text-xl">Web Dev Mentor</h3>
              <h4 className="mb-2 font-bold text-white text-sm italic">Google Developer Student Clubs MAIT, CodeIn Community & GirlCodeIT MAIT <span className='px-2 font-light text-xs'>Feb 2022 - Present</span></h4>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Mentor for the Web Dev Bootcamp conducted by these communities</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Experience
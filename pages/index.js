import { Suspense } from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';

export default function Index() {
  return (
    <Suspense fallback={null}>
      <Navbar />

      <Home />

      <About />

      <div className='flex flex-col max-w-3xl items-start justify-center mx-auto mt-12 experiences'>
        <h1 className="font-bold text-xl md:text-5xl tracking-tight mb-1 text-white">
          My Experiences
        </h1>
        <div className="container mx-auto h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-1/4"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">1</h1>
              </div>
              <div className="order-1 bg-gray-900 drop-shadow-xl rounded-lg shadow-xl w-full sm:w-1/2 px-6 py-4">
                <h3 className="mb-2 font-bold text-white text-xl">Mentor</h3>
                <h4 className="mb-2 font-bold text-white text-sm italic">Front End Foxes <span className='px-2 font-light text-xs'>Upcoming Sep'22 Cohort</span></h4>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  Will be mentoring students around the globe in the Front End Foxes' C3 September 2022 cohort.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-1/4"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
              </div>
              <div className="order-1 bg-gray-100 drop-shadow-xl rounded-lg shadow-xl w-full sm:w-1/2 px-6 py-4">
                <h3 className="mb-2 font-bold text-gray-800 text-xl">Full Stack Developer</h3>
                <h4 className="mb-2 font-semibold text-gray-800 text-sm italic">TweepsBook <span className='px-2 font-light text-xs'>June 2022 - Present</span></h4>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  TweepsBook, an enhanced bookmarking tool to power Twitter users that helps you
                  streamline the clutter by adding different tags and organize tweets based on your liking
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-1/4"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">3</h1>
              </div>
              <div className="order-1 bg-gray-900 drop-shadow-xl rounded-lg shadow-xl w-full sm:w-1/2 px-6 py-4">
                <h3 className="mb-2 font-bold text-white text-xl">Hacker</h3>
                <h4 className="mb-2 font-bold text-white text-sm italic">Major League Hacking <span className='px-2 font-light text-xs'>Feb 2022 - Present</span></h4>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Took part in more than 20 Hackathons hosted and sponsored by MLH as a hacker and as a mentor. Won prizes like "Most Creative Use of Twilio", "Best use of DeSo" and much more</p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-1/4"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
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
              <div className="order-1 w-1/4"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">5</h1>
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

      <div className='flex flex-col max-w-3xl items-start mx-auto mt-12 projects'>
        <h1 className="font-bold text-xl md:text-5xl tracking-tight mb-1 text-white">
          My Projects
        </h1>
        <p>Check out My <a className="hover:underline hover:opacity-80" href="https://github.com/nawed2611">GitHub</a> and <a className="hover:underline hover:opacity-80" href="https://devpost.com/nawed2611">Devpost</a> for more projects!</p>


        <div className="rounded-md container mt-10 mx-auto p-4 md:p-0 hover:scale-110">
          <a href="https://devpost.com/software/mental-peace">
            <div className="shadow-lg rounded-md flex flex-wrap w-full mx-auto">
              <div className="w-full md:w-1/3 h-64 md:h-auto relative">
                <img className='object-contain rounded-md' src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/002/010/032/datas/gallery.jpg" />
              </div>

              <div className="bg-slate-900 rounded-md w-full md:w-2/3">
                <div className="rounded-md h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                  <div className="rounded-md bg-slate-800 lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                    <div className="w-2/5 text-center md:text-left">
                      <h3 className='text-xl font-bold'>Get Sanity</h3>
                      <p className="mb-0 mt-3 text-gray-400 text-sm italic">Holistic Mental Health Diagnosing Platform</p>
                    </div>

                    <div className="w-3/5 px-3">
                      <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                        Web app built for Mental Health Hacks2.0 that informs users about their mental health status through our ML model and provides them with tools to help them understand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="rounded-md container mt-10 mx-auto p-4 md:p-0 hover:scale-110">
          <a href="https://devpost.com/software/bill-aver">
            <div className="shadow-lg rounded-md flex flex-wrap w-full mx-auto">
              <div className="w-full md:w-1/3 h-64 md:h-auto relative">
                <img className='object-contain h-40 ml-16 rounded-md' src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/915/350/datas/gallery.jpg" />
              </div>
              <div className="bg-slate-900 rounded-md w-full md:w-2/3">
                <div className="rounded-md h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                  <div className="rounded-md bg-slate-800 lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                    <div className="w-2/5 text-center md:text-left">
                      <h3 className='text-xl font-bold'>Bill Saver</h3>
                      <p className="mb-0 mt-3 text-gray-400 text-sm italic">Say hello to Savings!</p>
                    </div>

                    <div className="w-3/5 px-3">
                      <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                        It is an app that allows a user to see previously-stored bills be it receipts or your taxes. The app stores it in the blockchain, so it can't be tampered with at any time so that the information remains secure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="rounded-md container mt-10 mx-auto p-4 md:p-0 hover:scale-110">
          <a href="https://github.com/nawed2611/News-Centre">
            <div className="shadow-lg rounded-md flex flex-wrap w-full mx-auto">
              <div className="w-full md:w-1/3 h-64 md:h-auto relative">
                <img className='object-fit h-40 rounded-md' src="https://user-images.githubusercontent.com/83456083/168167208-e5ab276c-9f7d-417d-9767-66c0c0583fce.png" />
              </div>

              <div className="bg-slate-900 rounded-md w-full md:w-2/3">
                <div className="rounded-md h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                  <div className="rounded-md bg-slate-800 lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                    <div className="w-2/5 text-center md:text-left">
                      <h3 className='text-xl font-bold'>News Centre</h3>
                      <p className="mb-0 mt-3 text-gray-400 text-sm italic">News on your fingertips!</p>
                    </div>

                    <div className="w-3/5 px-3">
                      <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                        News Centre is built with React.js and NewsAPI. It provides you with "Top Headlines" from India and also has the functionality of searching any news query. News Centre also is an voice enabled AI app powered by Alan AI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="rounded-md container mt-10 mx-auto p-4 md:p-0 hover:scale-110">
          <a href="https://devpost.com/software/heartly-heaven">
          <div className="shadow-lg rounded-md flex flex-wrap w-full mx-auto">
            <div className="w-full md:w-1/3 h-64 md:h-auto relative">
              <img className='object-fit h-40 rounded-md' src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/832/731/datas/gallery.jpg" />
            </div>

            <div className="bg-slate-900 rounded-md w-full md:w-2/3">
              <div className="rounded-md h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                <div className="rounded-md bg-slate-800 lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  <div className="w-2/5 text-center md:text-left">
                    <h3 className='text-xl font-bold'>Heartly Heaven</h3>
                    <p className="mb-0 mt-3 text-gray-400 text-sm italic">Need help with finding love and a date? We got you!</p>
                  </div>

                  <div className="w-3/5 px-3">
                    <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                      It is a web application that allows two people to create a chatroom, an option to schedule a date and play various games like Wordle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </a>
        </div>

      </div>

      <Footer />

    </Suspense >
  )
}

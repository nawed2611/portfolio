import React from 'react'

const data = [
  {
    index: 1,
    title: "Software Engineer",
    company: "Listnr.AI",
    duration: "December 2023 - Present",
    link: "https://listnr.ai/",
    imageSource: "https://ph-files.imgix.net/e92dffcb-c365-44f7-b8e6-390ddf290d7e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=2",
    description: "Listnr helps users create realistic AI content, choose from over 900+ voices in 142 languages. We serve more than 1.2 million users across the world"
  },
  {
    index: 2,
    title: "Full-Stack Developer Intern",
    company: "Logizip LLC",
    duration: "October 2022 - November 2023",
    link: "https://logizip.io/",
    imageSource: "https://github.com/nawed2611/nawed2611/assets/83456083/74851f65-23f0-4cc6-b709-a78c77af9ac2",
    description: "Trucking logistics solutions platform to automate transport workflows. Scaled the backend service with optimizations and implemented sockets with cached search. Engineered the full-stack code along with onboarding private alpha users with an increase of 200% in web app traction."
  },
  {
    index: 3,
    title: "MLH Fellow and Hackathon Mentor",
    company: "Major League Hacking",
    duration: "August 2022 - Present",
    link: "https://fellowship.mlh.io/",
    imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTIDnxbCy8IDqJjQyMBFVddwTrBRgVYFTuQ&usqp=CAU",
    description: "Part of the Aug Prep Fellowship Batch where I got to work on open-source projects with fellow pod mates. Mentoring first-party hackathons hosted by MLH"
  },
  {
    index: 4,
    title: "Program Manager",
    company: "GirlScript Summer of Code'23",
    duration: "April 2023 - September 2023",
    link: "https://gssoc.girlscript.tech/",
    imageSource: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210406180435/What-is-GirlScript-Summer-of-Code-and-How-to-Participate.png",
    description: "Serving as the Program Manager for GirlScript Summer of Code'23, a 3-month long Open Source program for students to get involved in Open Source. Assisting over 12000+ participants and 200+ mentors to make their first contribution to Open Source."
  },
  {
    index: 5,
    title: "Auth0 Ambassador",
    company: "Auth0",
    duration: "October 2022 - March 2023",
    link: "https://auth0.com/ambassador-program",
    imageSource: "https://res.cloudinary.com/practicaldev/image/fetch/s--3Iy2AV-M--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zdzw2bojjz0s9yj5am6o.jpg",
    description: "Serving as an Auth0 Ambassador to help developers build secure applications using Auth0"
  },
  {
    index: 6,
    title: "Core Team Member",
    company: "Web3 Conf India, GirlScript Foundation, GirlScript Summer of Code, Google Developer Student Clubs MAIT",
    duration: "February 2022 - March 2023",
    link: "https://www.linkedin.com/company/girlscript-foundation/?originalSubdomain=in",
    imageSource: "https://dcmsblog.uk/wp-content/uploads/2020/07/GIRLSCRIPT.TECH_.png",
    description: "Mentoring students through programs conducted by these communities"
  }
]
const Experience = () => {
  return (
    <div className='flex flex-col max-w-5xl items-start justify-center mx-auto mt-12 experiences'>
      <h1 className="font-bold text-xl mx-2 md:text-5xl tracking-tight mb-1 text-white">
        My Experiences
      </h1>
      <div className="container flex flex-wrap justify-center gap-4 py-4 h-full">
        {
          data.map((item) => (
            <div onClick={(e) => window.open(`${item.link}`)} className="order-1 bg-gray-100 drop-shadow-xl rounded-lg hover:cursor-pointer shadow-xl w-full sm:w-[45%] px-6 py-4">
              <img src={item.imageSource} className="w-full h-auto rounded-lg mb-2" />
              <h3 className="mb-2 font-bold text-gray-800 text-xl">{item.title}</h3>
              <h4 className="mb-2 font-semibold text-gray-800 text-sm italic">{item.company} <span className='px-2 font-light text-xs'>{item.duration}</span></h4>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{item.description}</p>
            </div>
          ))
        }

      </div>
    </div >
  )
}

export default Experience
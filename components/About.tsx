
import React from "react";
import AboutCards from "./AboutCards";

const About = () => {
  return (
    <div className="flex flex-col mx-auto items-start justify-center max-w-5xl">
      <div className="flex gap-3 w-full flex-col md:flex-row">
        <AboutCards
          title="Computer Science & Engineering student exploring the worlds of Web3.0 and Open-Source. Participated in over 20 Hackathons as a hacker, mentor and as an organizer."
          gradient="from-[#D8B4FE] to-[#818CF8]"
        />
        <AboutCards
          title="An Open-Source advocate and an active contributor to communities like MLH, GSoC Orgs (eg: Jitsi, GitLab, Zulip etc), GSSoC and more!"
          gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
        />
        <AboutCards
          title="Experienced with TypeScript/JavaScript based technologies like React, NodeJS, Express.js, NextJS also familiar with Python and Flask."
          gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
        />
        <AboutCards
          title="Adept in working with tools like Git, Auth0, Socket.io, Firebase, Twilio, API's and more."
          gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
        />
      </div>
    </div>
  );
};

export default About;

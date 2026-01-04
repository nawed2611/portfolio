import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import WorkCard from "../components/WorkCard";
import ShaderBackground from "../components/ShaderBackground";
import AsciiArt from "../components/AsciiArt";

interface MousePosition {
  x: number;
  y: number;
}

const workExperience = [
  {
    title: "Clueso",
    role: "Software Engineer",
    period: "Jan 2025 — Present",
    videoSrc: "/videos/Clueso.mp4",
    link: "https://clueso.io"
  },
  {
    title: "PaperBrain",
    role: "Co-Founder",
    period: "Jul 2024 — Aug 2024",
    videoSrc: "/videos/PaperBrain.mp4",
    link: "https://paperbrain.org"
  },
  {
    title: "Listnr AI",
    role: "Software Engineer Associate",
    period: "Dec 2023 — Dec 2024",
    videoSrc: "/videos/Listnr.mp4",
    link: "https://listnr.ai"
  },
 
  {
    title: "TweepsBook",
    role: "Intern",
    period: "Jul 2024 — Aug 2024",
    videoSrc: "/videos/TweepsBook.mp4",
    link: "https://github.com/nawed2611"
  }
];


export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'text-[#e0e0e0]' 
        : 'text-[#1a1a1a]'
    }`}>
      <Head>
        <title>Nawed Ali - Software Engineer</title>
        <meta name="description" content="Nawed Ali is a Software Engineer at Clueso (YC W23). Building products that matter." />
        <meta name="keywords" content="Nawed Ali, Software Engineer, Clueso, Developer, Full Stack, React, Next.js" />
        <meta name="author" content="Nawed Ali" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nawedali.com/" />
        <meta property="og:title" content="Nawed Ali" />
        <meta property="og:description" content="Building..." />
        <meta property="og:image" content="https://nawedali.com/profile.png" />
        <meta property="og:site_name" content="Nawed Ali" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nawed2611" />
        <meta name="twitter:creator" content="@nawed2611" />
        <meta name="twitter:title" content="Nawed Ali" />
        <meta name="twitter:description" content="Building..." />
        <meta name="twitter:image" content="https://nawedali.com/profile.png" />
        
        {/* Theme */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://nawedali.com/" />
      </Head>

      {/* Shader background */}
      <ShaderBackground isDarkMode={isDarkMode} />

      <div 
        className="fixed pointer-events-none z-0 transition-opacity duration-500"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: 400,
          height: 400,
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0,0,0,0.025) 0%, transparent 70%)',
          opacity: scrollY > 100 ? 0.5 : 1
        }}
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="flex flex-col align-center px-8 h-[50vh] justify-center md:px-16 lg:px-24 relative"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
      >
        <div className="w-full flex items-center justify-between ">

        <AsciiArt isDarkMode={isDarkMode}/>
        
          {/* Main intro */}
          <div className="space-y-4 flex flex-col justify-between w-full">
            <h1 className={`text-4xl md:text-5xl lg:text-[8rem] font-light tracking-tighter leading-tight ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              <span className="relative inline-block font-semibold">
              I'm{' '}
                Nawed Ali
                <span 
                  className={`absolute bottom-1 left-0 w-full h-[2px] ${
                    isDarkMode ? 'bg-white' : 'bg-black'
                  }`}
                  style={{
                    transform: `scaleX(${Math.min(1, scrollY / 100 + 0.2)})`,
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease-out'
                  }}
                />
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl font-light ${
              isDarkMode ? 'text-[#888]' : 'text-[#666]'
            }`}>
              Software Engineer at{' '}
              <a 
                href="https://clueso.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`relative inline-block transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-white hover:text-[#ccc]' 
                    : 'text-black hover:text-[#444]'
                }`}
              >
                Clueso
                <span className={`ml-1 text-xs font-mono ${
                  isDarkMode ? 'text-[#555]' : 'text-[#999]'
                }`}>
                  YC W23
                </span>
              </a>
            </p>

            {/* Contact Links */}
            <div className={`flex items-center gap-6 text-sm font-mono ${
              isDarkMode ? 'text-[#666]' : 'text-[#888]'
            }`}>
              <a 
                href="mailto:nawed2611@gmail.com"
                className={`transition-colors duration-300 hover:underline ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-black'
                }`}
              >
                nawed2611@gmail.com
              </a>
              <span className={isDarkMode ? 'text-[#333]' : 'text-[#ccc]'}>·</span>
              <a 
                href="https://twitter.com/nawed2611"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 hover:underline ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-black'
                }`}
              >
                @nawed2611
              </a>
            </div>
          </div>

          {/* Animated ASCII Art - Hidden on mobile */}
         
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="px-8 md:px-16 lg:px-24 py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <span className={`text-xs font-mono tracking-widest uppercase ${
              isDarkMode ? 'text-[#444]' : 'text-[#999]'
            }`}>
              01 / Work
            </span>
            <h2 className={`text-2xl md:text-3xl font-light mt-4 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Experience
            </h2>
          </div>

          {/* Work cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {workExperience.map((work, index) => (
              <div 
                key={work.title}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
                className="animate-fadeInUp"
              >
                <WorkCard
                  title={work.title}
                  role={work.role}
                  period={work.period}
                  videoSrc={work.videoSrc}
                  link={work.link}
                  isDarkMode={isDarkMode}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

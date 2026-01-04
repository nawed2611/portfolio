import { useRef, useState } from 'react';

interface WorkCardProps {
  title: string;
  role: string;
  period: string;
  videoSrc?: string;
  thumbnailSrc?: string;
  link?: string;
  isDarkMode: boolean;
}

export default function WorkCard({
  title,
  role,
  period,
  videoSrc,
  thumbnailSrc,
  link,
  isDarkMode
}: WorkCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const cardStyle = isHovered ? {
    transform: `perspective(1000px) rotateY(${mousePosition.x * 8}deg) rotateX(${-mousePosition.y * 8}deg) scale(1.02)`,
    transition: 'transform 0.1s ease-out'
  } : {
    transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
    transition: 'transform 0.4s ease-out'
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`relative overflow-hidden rounded-lg border ${
          isDarkMode 
            ? 'bg-[#0a0a0a] border-[#222]' 
            : 'bg-white border-[#e5e5e5]'
        }`}
        style={cardStyle}
      >
        {/* Video/Image Container */}
        <div className="relative aspect-video overflow-hidden">
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              loop
              playsInline
              className={`w-full h-full object-cover transition-all duration-500 ${
                isHovered ? 'scale-105 grayscale-0' : 'scale-100 grayscale'
              }`}
              poster={thumbnailSrc}
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${
              isDarkMode ? 'bg-[#111]' : 'bg-[#f5f5f5]'
            }`}>
              <span className={`text-6xl font-light ${
                isDarkMode ? 'text-[#333]' : 'text-[#ddd]'
              }`}>
                {title.charAt(0)}
              </span>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-20'
          } ${isDarkMode ? 'bg-black' : 'bg-white'}`} />
          
          {/* Scan line effect on hover */}
          {isHovered && (
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(
                  180deg,
                  transparent 0%,
                  ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 50%,
                  transparent 100%
                )`,
                backgroundSize: '100% 4px',
                animation: 'scanline 8s linear infinite'
              }}
            />
          )}
        </div>

        {/* Content */}
        <div className={`p-5 border-t ${
          isDarkMode ? 'border-[#222]' : 'border-[#e5e5e5]'
        }`}>
          <div className="flex items-start justify-between">
            <div>
              <h3 className={`text-base font-medium tracking-tighter ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                {title}
              </h3>
              <p className={`text-sm mt-1 ${
                isDarkMode ? 'text-[#666]' : 'text-[#888]'
              }`}>
                {role}
              </p>
            </div>
            <span className={`text-xs font-mono ${
              isDarkMode ? 'text-[#444]' : 'text-[#bbb]'
            }`}>
              {period}
            </span>
          </div>
          
          {/* Arrow indicator */}
          <div className={`mt-4 flex items-center space-x-2 transition-all duration-300 ${
            isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
          }`}>
            <span className={`text-xs font-mono ${
              isDarkMode ? 'text-[#666]' : 'text-[#888]'
            }`}>
              View →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}


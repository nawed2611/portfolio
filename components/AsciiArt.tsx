import { useEffect, useRef, useState } from 'react';

interface AsciiArtProps {
  isDarkMode: boolean;
}

export default function AsciiArt({ isDarkMode }: AsciiArtProps) {
  const [frame, setFrame] = useState<string[]>([]);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  const chars = '.,:;i1✧';
  const width = 12;
  const height = 8;

  useEffect(() => {
    const animate = () => {
      const time = (Date.now() - startTimeRef.current) / 1000;
      const lines: string[] = [];

      for (let y = 0; y < height; y++) {
        let line = '';
        for (let x = 0; x < width; x++) {
          // Normalized coordinates
          const nx = x / width;
          const ny = y / height;

          // Multiple wave layers for organic movement
          const wave1 = Math.sin(nx * 4 + time * 0.8) * Math.cos(ny * 3 + time * 0.6);
          const wave2 = Math.sin((nx + ny) * 3 - time * 0.5) * 0.5;
          const wave3 = Math.cos(nx * 5 - ny * 4 + time * 0.7) * 0.3;
          
          // Radial pulse from center
          const dx = nx - 0.5;
          const dy = ny - 0.5;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pulse = Math.sin(dist * 8 - time * 2) * 0.4;

          // Combine all effects
          const value = (wave1 + wave2 + wave3 + pulse) / 2;
          
          // Map to character
          const normalized = (value + 1) / 2; // 0 to 1
          const charIndex = Math.floor(normalized * (chars.length - 1));
          const clampedIndex = Math.max(0, Math.min(chars.length - 1, charIndex));
          
          line += chars[clampedIndex];
        }
        lines.push(line);
      }

      setFrame(lines);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="hidden lg:block absolute max-w-screen opacity-30">
      <pre
        className={`font-mono text-[10rem] select-none transition-colors duration-500 ${
          isDarkMode ? 'text-[#333]' : 'text-[#ccc]'
        }`}
        style={{
          letterSpacing: '0.1em',
        }}
      >
        {frame.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </pre>
    </div>
  );
}


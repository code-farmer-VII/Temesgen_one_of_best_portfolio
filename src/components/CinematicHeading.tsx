import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface CinematicHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function CinematicHeading({ title, subtitle, align = 'center' }: CinematicHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [sheenPos, setSheenPos] = useState({ x: '50%', y: '50%' });
  const [ambientDust, setAmbientDust] = useState<{ id: number; left: number; top: number; size: number; delay: number; duration: number }[]>([]);

  // Motion Values for mouse-based coordinates
  const mouseX = useMotionValue(0); // Normalized -0.5 to 0.5
  const mouseY = useMotionValue(0); // Normalized -0.5 to 0.5

  // Smooth springs to avoid jerky movements
  const springConfig = { damping: 20, stiffness: 100, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transformations for heading tilting
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  
  // Parallax translations for spatial depth
  const textX = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const textY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  // Generate ambient dust offsets in a safe client-side useEffect
  useEffect(() => {
    const list = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 80 + 10,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 8 + 6,
    }));
    setAmbientDust(list);
  }, [title]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);

    setSheenPos({ x: `${x * 100}%`, y: `${y * 100}%` });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setSheenPos({ x: '50%', y: '50%' });
    setIsHovered(false);
  };

  // Split text into words and letters for interactive 3D stagger entrance
  const words = title.split(' ');
  let letterOffsetCount = 0; // Ensure proper staggering indexes across distinct words

  const isLeft = align === 'left';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none max-w-4xl py-6 md:py-10 mb-12 md:mb-16 perspective-[1000px] ${
        isLeft ? 'text-left' : 'text-center mx-auto'
      }`}
    >
      {/* Background Volumetric Glow & Aurora Backlight */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          opacity: isHovered ? 0.35 : 0.2,
        }}
        className={`absolute -inset-8 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/20 blur-3xl rounded-full mix-blend-screen pointer-events-none transition-opacity duration-500`}
      />

      {/* Embedded Ambient Moving Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {ambientDust.map((dust) => (
          <motion.div
            key={dust.id}
            className="absolute rounded-full bg-primary/45 mix-blend-screen"
            style={{
              left: `${dust.left}%`,
              top: `${dust.top}%`,
              width: dust.size,
              height: dust.size,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              opacity: [0.15, 0.75, 0.15],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: dust.duration,
              delay: dust.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Line Indicator */}
      <div className={`flex items-center gap-2.5 mb-5 ${isLeft ? 'justify-start' : 'justify-center'}`}>
        <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-accent" />
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
        <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-accent" />
      </div>

      {/* Main Responsive Cinematic Heading Wrapper */}
      <motion.h2
        style={{
          rotateX,
          rotateY,
          x: textX,
          y: textY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 block font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.05] tracking-tight text-white cursor-pointer"
      >
        {/* Rear projection depth layers for 3D extrusion with color mix shading */}
        <span 
          style={{ transform: 'translateZ(-15px)' }}
          className="absolute inset-0 block select-none pointer-events-none text-accent/60 mix-blend-screen opacity-70 blur-[3px]"
        >
          {title}
        </span>
        <span 
          style={{ transform: 'translateZ(-25px)' }}
          className="absolute inset-0 block select-none pointer-events-none text-primary/45 mix-blend-screen opacity-55 blur-[8px]"
        >
          {title}
        </span>

        {/* Floating cinematic entrance characters */}
        <span 
          className="relative block"
          style={{ 
            transform: 'translateZ(10px)',
            transformStyle: 'preserve-3d'
          }}
        >
          {words.map((word, wordIndex) => {
            const letters = word.split('');
            return (
              <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
                {letters.map((char, charIndex) => {
                  const currentIndex = letterOffsetCount++;
                  return (
                    <motion.span
                      key={charIndex}
                      initial={{ 
                        opacity: 0, 
                        y: 45, 
                        rotateX: 85, 
                        filter: 'blur(10px) brightness(0)' 
                      }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0, 
                        rotateX: 0, 
                        filter: 'blur(0px) brightness(1)' 
                      }}
                      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                      transition={{
                        duration: 1.1,
                        delay: currentIndex * 0.035,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        display: 'inline-block',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <motion.span
                        style={{
                          display: 'inline-block',
                          background: `linear-gradient(135deg, var(--accent) 0%, var(--foreground) 50%, var(--primary) 100%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                        animate={{
                          y: [0, -3, 0],
                          rotateY: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 4.5,
                          delay: currentIndex * 0.15,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="cinematic-letter inline-block"
                      >
                        {char}
                      </motion.span>
                    </motion.span>
                  );
                })}
              </span>
            );
          })}
        </span>

        {/* Dynamic sweeping specular shine flare overlay */}
        <motion.span
          className="absolute inset-y-0 left-0 w-full mix-blend-overlay pointer-events-none select-none z-25 text-white bg-clip-text"
          style={{
            backgroundImage: `radial-gradient(ellipse 200px 100px at ${sheenPos.x} ${sheenPos.y}, rgba(255, 255, 255, 0.8), transparent 80%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transform: 'translateZ(15px)',
          }}
        >
          {title}
        </motion.span>

        {/* Floating Film Grain Overlay mask specific to building textured characters */}
        <span
          className="absolute inset-0 block select-none pointer-events-none bg-blend-overlay z-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.33'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
            mixBlendMode: 'overlay',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transform: 'translateZ(11px)',
          }}
        >
          {title}
        </span>
      </motion.h2>

      {/* Elegant Cinematic Subhead Indicator */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, filter: 'blur(5px)', y: 15 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base text-text-secondary font-normal tracking-wide leading-relaxed max-w-2xl mt-4 mx-auto block z-20 relative px-4 text-center"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Tiny coordinates or metric watermark to ground the experimental visual */}
      <div className={`mt-3 flex items-center gap-1.5 justify-center opacity-40 text-[9px] font-mono select-none tracking-widest uppercase`}>
        <span>PERSPECTIVE TILT CHRONO SYSTEM INT</span>
        <span>•</span>
        <span>{title.replaceAll(' ', '_').toUpperCase()}</span>
      </div>
    </div>
  );
}

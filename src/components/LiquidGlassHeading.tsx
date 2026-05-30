import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface LiquidGlassHeadingProps {
  title: string;
  subtitle?: string;
}

export default function LiquidGlassHeading({ title, subtitle }: LiquidGlassHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: '50%', y: '50%' });
  const [particles, setParticles] = useState<{ id: number; left: number; top: number; size: number; delay: number; duration: number; speedY: number }[]>([]);

  // Mouse coordinate state
  const mouseX = useMotionValue(0); 
  const mouseY = useMotionValue(0);

  // Smooth physical spring settings
  const springConfig = { damping: 25, stiffness: 80, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax translation layers & 3D tilts
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  
  const textX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const textY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  // Clientside generation of floating premium glass ice-crystals
  useEffect(() => {
    const list = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 90 + 5,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 4,
      duration: Math.random() * 10 + 6,
      speedY: Math.random() * -30 - 20,
    }));
    setParticles(list);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);

    // Dynamic light sweep coordination
    setGlarePos({ x: `${x * 100}%`, y: `${y * 100}%` });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setGlarePos({ x: '50%', y: '50%' });
    setIsHovered(false);
  };

  const words = title.split(' ');
  let letterIndex = 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative select-none max-w-5xl py-8 md:py-14 w-full text-center mx-auto perspective-[1200px]"
    >
      {/* Liquid Crystal Aurora Refraction Backdrop */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          opacity: isHovered ? 0.45 : 0.25,
        }}
        className="absolute -inset-12 bg-gradient-to-tr from-cyan-400/25 via-blue-500/15 to-purple-600/30 blur-[90px] rounded-full mix-blend-screen pointer-events-none transition-opacity duration-700"
      />

      {/* Floating Crystal Shard Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-sm bg-white/30 backdrop-blur-[2px] border border-white/20 shadow-sm mix-blend-screen"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size * (1.2 + Math.random()),
              transform: 'rotate(45deg)',
            }}
            animate={{
              y: [0, p.speedY, 0],
              x: [-15, 15, -15],
              rotate: [45, 225, 45],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Liquid Glass Container Layer */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: textX,
          y: textY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 block cursor-default"
      >
        {/* Soft chromatic shadow projection underneath the glass */}
        <span
          style={{ 
            transform: 'translateZ(-18px) scale(0.98)',
          }}
          className="absolute inset-0 block select-none pointer-events-none text-cyan-500/20 mix-blend-screen filter blur-[15px]"
        >
          {title}
        </span>
        <span
          style={{ 
            transform: 'translateZ(-30px) scale(0.96)',
          }}
          className="absolute inset-0 block select-none pointer-events-none text-purple-600/30 mix-blend-color-burn filter blur-[20px]"
        >
          {title}
        </span>

        {/* Liquid Jelly Glass SVG Distortion Filter */}
        <svg className="hidden">
          <defs>
            <filter id="liquid-glass-disp">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.015"
                numOctaves="3"
                result="noise"
                seed="1"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.012;0.018;0.012"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={isHovered ? "14" : "8"}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        {/* Volumetric Liquid Typo Core */}
        <h1
          style={{
            filter: 'url(#liquid-glass-disp)',
            transform: 'translateZ(15px)',
            transformStyle: 'preserve-3d',
          }}
          className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.1] tracking-tight py-4"
        >
          {words.map((word, wIdx) => {
            const letters = word.split('');
            return (
              <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
                {letters.map((char, cIdx) => {
                  const currentIdx = letterIndex++;
                  return (
                    <motion.span
                      key={cIdx}
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                        rotateX: -70,
                        y: 50,
                        filter: 'blur(12px) brightness(0)',
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotateX: 0,
                        y: 0,
                        filter: 'blur(0px) brightness(1)',
                      }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={{
                        duration: 1.3,
                        delay: currentIdx * 0.04,
                        ease: [0.19, 1, 0.22, 1], // Custom cinematic bezier curve
                      }}
                      style={{
                        display: 'inline-block',
                        transformStyle: 'preserve-3d',
                      }}
                      className="liquid-glass-letter"
                    >
                      {/* Nested breathing and morphing scale to feel active */}
                      <motion.span
                        style={{
                          display: 'inline-block',
                          // Dynamic frosted glass gradients
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(200,240,255,0.85) 45%, rgba(240,200,255,0.7) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                        animate={{
                          skewY: isHovered ? [0, 3, -3, 0] : [0, 1.5, -1.5, 0],
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 4.8,
                          delay: currentIdx * 0.12,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="inline-block relative"
                      >
                        {char}
                      </motion.span>
                    </motion.span>
                  );
                })}
              </span>
            );
          })}
        </h1>

        {/* Moving glare/specular gloss simulation overlay */}
        <motion.span
          className="absolute inset-y-0 left-0 w-full mix-blend-color-dodge pointer-events-none select-none z-25 text-white bg-clip-text font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.1] tracking-tight py-4"
          style={{
            backgroundImage: `radial-gradient(circle 220px at ${glarePos.x} ${glarePos.y}, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.1) 60%, transparent 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'url(#liquid-glass-disp)',
            transform: 'translateZ(25px)',
          }}
        >
          {title}
        </motion.span>

        {/* Chromatic distortion edge overlay (Cyan-magenta bleed layer) */}
        <span
          className="absolute inset-0 block select-none pointer-events-none z-15 font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.1] tracking-tight py-4 text-cyan-400 mix-blend-screen opacity-40"
          style={{
            filter: 'url(#liquid-glass-disp) blur(1.5px)',
            transform: 'translateZ(10px) translateX(-1px) translateY(1px)',
            background: 'none',
            WebkitTextFillColor: 'currentcolor',
          }}
        >
          {title}
        </span>
        <span
          className="absolute inset-0 block select-none pointer-events-none z-15 font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.1] tracking-tight py-4 text-magenta-accent mix-blend-screen opacity-40 ml-[1.5px] mt-[-1px]"
          style={{
            filter: 'url(#liquid-glass-disp) blur(1.5px)',
            transform: 'translateZ(10px) translateX(1px) translateY(-1px)',
            background: 'none',
            WebkitTextFillColor: '#ec4899', // Beautiful pink accent glow bleed
          }}
        >
          {title}
        </span>
      </motion.div>

      {/* Subtitle with premium blur focus transition */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mt-5 mx-auto block z-20 relative px-4"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Futuristic liquid calibration tag */}
      <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-mono select-none tracking-[0.15em] text-cyber-teal/65">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>FLUID DISPERSION SHADER // LQD_GLS_ACTIVE</span>
      </div>
    </div>
  );
}

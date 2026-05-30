import React from 'react';
import { motion } from 'motion/react';
import { resolveAsset } from '../utils';

interface RotatingImagesProps {
  image: string; // resolved or unresolved path to profile
}

const techIcons = [
  '/images/rotateImage/React.png',
  '/images/rotateImage/expo.png',
  '/images/rotateImage/laravel.png',
  '/images/rotateImage/mongdb.png',
  '/images/rotateImage/nest.png',
  '/images/rotateImage/next.png',
  '/images/rotateImage/node.png',
  '/images/rotateImage/postgress.png',
];

export default function RotatingImages({ image }: RotatingImagesProps) {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto flex items-center justify-center">
      {/* Immersive Pulse Rings */}
      <div className="absolute inset-0 rounded-full border border-cyber-purple/10 animate-[ping_8s_cubic-bezier(0,0,0.2,1)_infinite]" />
      <div className="absolute w-[80%] h-[80%] rounded-full border border-cyber-teal/5 animate-pulse-glow" />
      
      {/* Central Profile Shield */}
      <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-[2px] bg-gradient-to-tr from-cyber-purple via-cyber-teal to-accent-pink shadow-2xl shadow-indigo-500/10 animate-float z-20">
        <div className="w-full h-full rounded-full overflow-hidden bg-bg-dark border border-bg-dark/50">
          <img
            src={resolveAsset(image)}
            alt="Temesgen Gonfa Profile"
            className="w-full h-full object-cover object-top scale-102"
            onError={(e) => {
              // Fallback placeholder
              (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1500&auto=format&fit=crop');
            }}
          />
        </div>
      </div>

      {/* Orbit Container Track */}
      <div className="absolute w-[85%] h-[85%] rounded-full border border-dashed border-cyber-purple/10 pointer-events-none z-10" />

      {/* Infinite Orbital Platform */}
      <div className="absolute inset-0 animate-rotate-slow z-30">
        {techIcons.map((icon, index) => {
          const angle = (index / techIcons.length) * 2 * Math.PI; // angle calculations
          const radius = 43; // percentage of parent container
          const x = `${50 + radius * Math.cos(angle)}%`;
          const y = `${50 + radius * Math.sin(angle)}%`;

          return (
            <motion.div
              key={icon}
              className="absolute w-10 h-10 md:w-12 md:h-12 rounded-xl p-[1px] bg-card-dark border border-cyber-purple/15 hover:border-cyber-teal/50 shadow-lg shadow-black/80 flex items-center justify-center cursor-crosshair group-hover:scale-110 select-none pointer-events-auto"
              style={{
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)',
              }}
              whileHover={{ scale: 1.15, zIndex: 40 }}
            >
              <div className="w-full h-full rounded-[11px] bg-card-dark flex items-center justify-center p-1 md:p-1.5 overflow-hidden">
                <img
                  src={resolveAsset(icon)}
                  alt={`technology marker ${index}`}
                  className="w-full h-full object-contain filter group-hover:brightness-110"
                  onError={(e) => {
                    // Fail gracefully
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentNode;
                    if (parent) {
                      const tag = document.createElement('span');
                      tag.className = 'text-[8px] font-mono text-cyber-teal font-black';
                      tag.innerText = 'DEV';
                      parent.appendChild(tag);
                    }
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { skills } from '../constants';
import { resolveAsset } from '../utils';
import { Sparkles, Terminal } from 'lucide-react';

export default function SkillSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {skills.map((skill, index) => {
        // Diversify border glow colors based on index for rhythm
        const accentColor = index % 3 === 0 
          ? 'rgba(139, 92, 246, 0.4)' // purple
          : index % 3 === 1 
            ? 'rgba(6, 182, 212, 0.4)' // cyan
            : 'rgba(16, 185, 129, 0.4)'; // emerald

        return (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: `0 10px 30px -10px ${accentColor}`,
              borderColor: accentColor
            }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-950/75 border border-cyber-purple/15 p-6 md:p-8 backdrop-blur-xl hover:backdrop-blur-2xl cursor-pointer transition-all duration-300"
          >
            {/* Ambient Background Spot Glow */}
            <div 
              className="absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl transition-all duration-500 opacity-20 group-hover:opacity-45"
              style={{
                background: index % 3 === 0 
                  ? 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' 
                  : index % 3 === 1 
                    ? 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' 
                    : 'radial-gradient(circle, #10B981 0%, transparent 70%)'
              }}
            />

            {/* Glowing Side Border Highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 bg-gradient-to-b from-cyber-purple to-cyber-teal" />

            <div className="relative z-10 space-y-5">
              {/* Icon Frame */}
              <div className="relative w-14 h-14 rounded-xl flex items-center justify-center bg-card-dark/80 border border-cyber-purple/15 flex-shrink-0 group-hover:bg-bg-dark transition-colors duration-300 overflow-hidden shadow-inner shadow-black/40">
                <img
                  src={resolveAsset(skill.icon)}
                  alt={skill.name}
                  className="w-10 h-10 object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentNode;
                    if (parent) {
                      const iconFallback = document.createElement('div');
                      iconFallback.className = 'text-cyber-teal font-mono font-bold text-lg';
                      iconFallback.innerText = '</>';
                      parent.appendChild(iconFallback);
                    }
                  }}
                />
              </div>

              {/* Text Header */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted flex items-center gap-1.5 font-bold group-hover:text-cyber-teal transition-colors">
                  <Terminal className="w-3 h-3" /> CATEGORY // 0{skill.id}
                </span>
                <h4 className="font-display font-bold text-lg text-text-primary tracking-wide group-hover:text-cyber-teal transition-colors duration-300">
                  {skill.name}
                </h4>
              </div>

              {/* Description Body */}
              <p className="text-sm text-text-secondary leading-relaxed group-hover:text-slate-300 transition-colors">
                {skill.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

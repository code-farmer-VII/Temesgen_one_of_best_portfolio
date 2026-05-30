import React from 'react';
import { motion } from 'motion/react';
import CinematicHeading from './CinematicHeading';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  const isLeft = align === 'left';
  const targetTitles = [
    'My Works', 
    'Value Proposition', 
    'Creative Skills', 
    'Frequently Asked Questions',
    'Milestones of My Career',
    'My Creative Portfolio'
  ];
  const isGrainy3D = targetTitles.some(t => title.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(title.toLowerCase()));

  if (isGrainy3D) {
    return <CinematicHeading title={title} subtitle={subtitle} align={align} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 md:mb-16 space-y-4 ${isLeft ? 'text-left' : 'text-center mx-auto'}`}
    >
      <div className={`flex items-center gap-2 ${isLeft ? 'justify-start' : 'justify-center'}`}>
        <span className="w-8 h-[2px] rounded-full bg-cyber-purple" />
        <span className="w-2.5 h-2.5 rounded-full bg-cyber-teal animate-pulse" />
        <span className="w-2.5 h-[2px] rounded-full bg-cyber-purple" />
      </div>

      <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-none py-2 select-none text-text-primary">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm md:text-base text-text-secondary leading-relaxed font-normal max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Star, Layers, Laptop, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import PortfolioItem from './PortfolioItem';
import { portfolios } from '../constants';

interface PortfolioViewProps {
  onSelectProject: (id: number) => void;
}

const filterCategories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Full-Stack', value: 'full-stack' },
  { label: 'Laravel / PHP', value: 'laravel' },
  { label: 'Mobile / React Native', value: 'mobile' },
  { label: 'Single Pages / Landing', value: 'landing' },
];

export default function PortfolioView({ onSelectProject }: PortfolioViewProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter projects depending on active filter tab selection
  const filteredPortfolios = portfolios.filter((item) => {
    if (activeFilter === 'all') return true;
    
    const techs = item.technologies.map((t) => t.toLowerCase());
    const title = item.title.toLowerCase();
    
    if (activeFilter === 'full-stack') {
      return techs.includes('next.js') || techs.includes('nestjs') || techs.includes('nest.js') || techs.includes('graphql') || item.id === 1 || item.id === 3 || item.id === 11;
    }
    if (activeFilter === 'laravel') {
      return techs.includes('laravel') || item.id === 4 || item.id === 5 || item.id === 6;
    }
    if (activeFilter === 'mobile') {
      return techs.includes('react native') || techs.includes('expo') || item.id === 2;
    }
    if (activeFilter === 'landing') {
      return item.id === 7 || item.id === 8 || item.id === 9 || item.id === 10;
    }
    return true;
  });

  return (
    <div className="space-y-16 pt-24 pb-12">
      
      {/* 1. Header Banner */}
      <section className="relative max-width overflow-hidden">
        {/* Background spotlights */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] blur-spotlight-purple opacity-20 pointer-events-none" />

        <div className="box text-center flex flex-col items-center gap-4 border-cyber-purple/15 p-10 md:p-12 shadow-2xl bg-card-dark/45 select-none">
          <div className="w-14 h-14 rounded-2xl bg-cyber-purple/10 border border-cyber-purple/30 flex items-center justify-center mb-2 animate-bounce">
            <Star className="w-6 h-6 text-cyber-teal" fill="currentColor" />
          </div>
          
          <SectionHeading 
            title="My Creative Portfolio" 
            subtitle="Explore my portfolio showcasing a diverse range of web development projects. Each project reflects my skills in both front-end and back-end development, emphasizing user experience and innovative design. Dive in to see how I turn ideas into functional and visually appealing applications!"
          />

          <div className="flex items-center gap-2 pt-2 text-[10px] font-mono text-accent-green uppercase tracking-widest font-bold">
            <ShieldCheck className="w-4 h-4" /> Live Builds Verified // {portfolios.length} Entries Active
          </div>
        </div>
      </section>

      {/* 2. Modular Filter Bar controls */}
      <section className="max-width">
        <div className="flex flex-wrap items-center justify-center gap-3 py-4 border-b border-cyber-purple/15">
          {filterCategories.map((category) => {
            const isSelected = activeFilter === category.value;
            return (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`py-2 px-5 text-xs font-mono font-bold tracking-wide rounded-full border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyber-purple text-white border-cyber-purple shadow shadow-cyber-purple/50 scale-102'
                    : 'bg-card-dark/50 border-cyber-purple/10 text-text-secondary hover:border-cyber-purple/35 hover:text-text-primary'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Infinite Grid displaying corresponding products */}
      <section className="max-width min-h-[500px]">
        {filteredPortfolios.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
            <Layers className="w-16 h-16 text-text-muted animate-pulse" />
            <h4 className="font-display font-bold text-lg text-text-primary">No Matching Codebases</h4>
            <p className="text-sm text-text-secondary">Try selection of an alternate category slice above.</p>
          </div>
        ) : (
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPortfolios.map((portfolio) => (
                <motion.div
                  key={portfolio.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <PortfolioItem
                    portfolio={portfolio}
                    onSelectProject={onSelectProject}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

    </div>
  );
}

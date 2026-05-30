import React, { useState } from 'react';
import { ArrowUpRight, Folder, Smartphone, Database, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { Portfolio } from '../types';
import { resolveAsset } from '../utils';

interface PortfolioItemProps {
  portfolio: Portfolio;
  onSelectProject?: (id: number) => void;
}

export default function PortfolioItem({ portfolio, onSelectProject }: PortfolioItemProps) {
  const [currentImg, setCurrentImg] = useState(portfolio.images[0]);

  // Dynamic icon depending on techs
  const getProjectIcon = (techs: string[]) => {
    const LowerTechs = techs.map(t => t.toLowerCase());
    if (LowerTechs.includes('react native') || LowerTechs.includes('expo') || LowerTechs.includes('mobile')) {
      return <Smartphone className="w-4 h-4 text-cyber-teal" />;
    }
    if (LowerTechs.includes('postgresql') || LowerTechs.includes('mysql') || LowerTechs.includes('supabase') || LowerTechs.includes('mongodb')) {
      return <Database className="w-4 h-4 text-cyber-teal" />;
    }
    return <Globe className="w-4 h-4 text-cyber-purple" />;
  };

  const handleCardClick = () => {
    if (onSelectProject) {
      onSelectProject(portfolio.id);
    } else {
      window.location.hash = `#/project/${portfolio.id}`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl bg-card-dark/45 border border-cyber-purple/10 hover:border-cyber-purple/35 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-2xl shadow-black/30"
    >
      {/* Top Banner with Micro details */}
      <div className="p-5 pb-3 border-b border-cyber-purple/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getProjectIcon(portfolio.technologies || [])}
          <h4 className="font-display font-bold text-sm text-text-primary tracking-wide group-hover:text-cyber-purple transition-colors duration-300 truncate max-w-[180px]">
            {portfolio.title}
          </h4>
        </div>
        
        <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple uppercase tracking-widest font-bold">
          CODEBASE
        </span>
      </div>

      {/* Main Image View with overlay button */}
      <div className="relative w-full h-[220px] bg-slate-950 overflow-hidden cursor-pointer group/image">
        <img
          src={resolveAsset(currentImg)}
          alt={portfolio.title}
          className="w-full h-full object-cover object-center group-hover/image:scale-105 transition-transform duration-700 ease-out"
          onError={(e) => {
            (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop');
          }}
        />
        
        {/* Sleek Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent opacity-60 pointer-events-none" />

        {/* Hover overlay button */}
        <div 
          onClick={handleCardClick}
          className="absolute inset-0 bg-bg-dark/80 backdrop-blur-[2px] opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex flex-col gap-2 items-center justify-center p-4 text-center z-10"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyber-purple to-cyber-teal p-[1px] shadow-lg shadow-cyber-purple/20 hover:scale-110 transition-transform">
            <div className="flex items-center justify-center w-full h-full bg-card-dark rounded-[11px] text-text-primary">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <span className="font-mono text-xs text-text-primary uppercase tracking-widest font-semibold pt-1">Explore Project Details</span>
          <span className="text-[10px] text-text-muted">Overview, Tech Stack & Architecture</span>
        </div>
      </div>

      {/* Thumbnail Switchers Grid */}
      <div className="p-4 bg-bg-dark/25 border-y border-cyber-purple/5 grid grid-cols-3 gap-2">
        {portfolio.images.slice(0, 3).map((img, index) => {
          const isSelected = currentImg === img;
          return (
            <div
              key={index}
              onClick={() => setCurrentImg(img)}
              className={`relative h-14 rounded-lg overflow-hidden cursor-pointer border transition-all duration-300 ${
                isSelected ? 'border-cyber-teal scale-[1.03] shadow shadow-cyber-teal/30' : 'border-cyber-purple/10 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={resolveAsset(img)}
                alt={`${portfolio.title} preview ${index}`}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop');
                }}
              />
              <div className={`absolute inset-0 bg-cyber-teal/15 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          );
        })}
      </div>

      {/* Footer Content & Badges */}
      <div className="p-5 flex flex-col h-full justify-between gap-4">
        {/* Technologies List */}
        <div className="flex flex-wrap gap-1.5">
          {portfolio.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-card-subtle text-text-secondary border border-cyber-purple/5"
            >
              {tech}
            </span>
          ))}
          {portfolio.technologies.length > 3 && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-teal/10 text-cyber-teal font-bold border border-cyber-teal/10">
              +{portfolio.technologies.length - 3} More
            </span>
          )}
        </div>

        {/* CTA link details */}
        <div className="flex items-center justify-between pt-2 border-t border-cyber-purple/5">
          <button
            onClick={handleCardClick}
            className="text-xs font-mono font-bold text-cyber-teal group-hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Folder className="w-3.5 h-3.5 text-cyber-purple" />
            DOCS & SOURCE
          </button>
          
          <button
            onClick={handleCardClick}
            className="w-8 h-8 rounded-lg bg-card-dark border border-cyber-purple/15 text-text-secondary group-hover:text-cyber-teal group-hover:border-cyber-teal/40 flex items-center justify-center transition-all cursor-pointer"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

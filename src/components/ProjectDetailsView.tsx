import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Calendar, Code2, ShieldCheck, Mail, Cpu, Award } from 'lucide-react';
import { portfolios } from '../constants';
import { resolveAsset } from '../utils';

interface ProjectDetailsViewProps {
  projectId: number;
}

export default function ProjectDetailsView({ projectId }: ProjectDetailsViewProps) {
  const project = portfolios.find((p) => p.id === projectId) || portfolios[0];
  const [activeImage, setActiveImage] = useState(project.images[0]);

  // Sync active image with current project change
  useEffect(() => {
    setActiveImage(project.images[0]);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [project]);

  return (
    <div className="pt-24 pb-16 space-y-12">
      
      {/* 1. Back button Navigation */}
      <section className="max-width">
        <a
          href="#/portfolio"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card-dark border border-cyber-purple/15 hover:border-cyber-purple/45 hover:text-white font-mono text-xs text-text-secondary transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-cyber-teal group-hover:-translate-x-1 transition-transform" />
          RETURN TO PORTFOLIO
        </a>
      </section>

      {/* 2. Top Header and Overview pane */}
      <section className="max-width grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column image viewer controls */}
        <div className="lg:col-span-7 space-y-6">
          <div className="box p-4 bg-card-dark/45 border-cyber-purple/15 space-y-4">
            {/* Main Stage Image */}
            <div className="relative w-full h-[280px] sm:h-[400px] bg-slate-950 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={resolveAsset(activeImage)}
                alt={project.title}
                className="w-full h-full object-cover object-center animate-fade-in"
                onError={(e) => {
                  (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay title caption */}
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center text-xs font-mono bg-bg-dark/85 backdrop-blur-md border border-cyber-teal/20 px-4 py-2.5 rounded-xl">
                <span className="text-text-primary uppercase tracking-wider font-bold">PROJECT SYSTEM INTERFACE</span>
                <span className="text-cyber-teal font-black">ACTIVE ACCENT</span>
              </div>
            </div>

            {/* Thumbnail Selection Subgallery */}
            <div className="grid grid-cols-3 gap-3">
              {project.images.map((img, index) => {
                const isSelected = activeImage === img;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative h-16 sm:h-24 rounded-lg overflow-hidden cursor-pointer border transition-all duration-300 ${
                      isSelected 
                        ? 'border-cyber-teal scale-[1.02] shadow-md shadow-cyber-teal/20' 
                        : 'border-cyber-purple/10 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={resolveAsset(img)}
                      alt={`${project.title} screenshot ${index}`}
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
          </div>

          {/* Project Motivation info panel */}
          <div className="box p-6 md:p-8 space-y-4 border-cyber-purple/10 bg-card-dark/45 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 blur-2xl radial-gradient-circle bg-cyber-teal opacity-10 pointer-events-none" />
            <div className="flex items-center gap-3 pb-3 border-b border-cyber-purple/5">
              <div className="w-9 h-9 rounded-lg bg-cyber-teal/10 flex items-center justify-center text-cyber-teal">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <h4 className="font-display font-bold text-base text-text-primary">Behind The Project</h4>
            </div>
            
            <p className="text-sm text-text-secondary leading-relaxed font-normal">
              {project.motivation}
            </p>
          </div>
        </div>

        {/* Right column text descriptors */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Title Metadata Card */}
          <div className="box p-6 md:p-8 space-y-5 border-cyber-purple/20 bg-black shadow-2xl">
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-cyber-teal uppercase tracking-widest font-bold flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5" /> ARCHITECTURAL BLUEPRINT
              </span>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              {project.overview}
            </p>

            <div className="pt-4 border-t border-cyber-purple/5 flex gap-4 flex-wrap">
              <a 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-green gap-2 text-xs font-mono tracking-wider w-full sm:w-auto"
              >
                PROD CODE EXPLAINED
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* System Architecture Specifications */}
          <div className="box p-6 md:p-8 space-y-4 border-cyber-purple/15 bg-card-dark/45">
            <h4 className="font-display font-bold text-sm text-text-primary uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-teal" /> Core Framework Details
            </h4>
            
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-normal">
              {project.architecture}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-card-dark text-text-primary border border-cyber-purple/15 hover:border-cyber-teal/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Future Improvements & Contacts panel */}
          <div className="box p-6 md:p-8 space-y-5 border-cyber-purple/15 bg-card-dark/45">
            <h4 className="font-display font-bold text-sm text-text-primary uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-purple" /> Iteration Plan & Milestones
            </h4>

            <ul className="space-y-2.5 text-xs md:text-sm text-text-secondary">
              {project.futureImprovements.map((imp, idx) => (
                <li key={idx} className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-4 h-4 text-cyber-teal mt-0.5 flex-shrink-0" />
                  <span>{imp}</span>
                </li>
              ))}
            </ul>

            {/* Direct contact info snippet */}
            <div className="p-4 rounded-xl bg-bg-dark border border-cyber-purple/5 flex items-center justify-between gap-2 mt-4 text-[11px] font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyber-purple" />
                <span className="text-text-muted truncate max-w-[120px] md:max-w-none">{project.contactInfo}</span>
              </div>
              <span className="text-cyber-teal font-black uppercase">Direct Query</span>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

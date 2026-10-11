import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, Sparkles, CheckCircle, Cpu, Star, Kanban, Layers, Users, Timer } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SkillSection from './Skills';
import SmoothSlider from './Slider';
import PortfolioItem from './PortfolioItem';
import RotatingImages from './RotatingImages';
import FaqSection from './FaqSection';
import { benefits, portfolios } from '../constants';

interface HomeViewProps {
  onTabChange: (tab: string) => void;
  onSelectProject: (id: number) => void;
}

export default function HomeView({ onTabChange, onSelectProject }: HomeViewProps) {
  return (
    <div className="space-y-24 md:space-y-36 pt-24 pb-12">
      
      {/* 1. Impactful Hero Section */}
      <section className="relative max-width flex flex-col-reverse lg:flex-row items-center gap-16 overflow-hidden">
        {/* Spotlight Backlights */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 blur-spotlight-purple opacity-30 pointer-events-none" />
        
        {/* Left Columns - Copywriting */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-xs font-mono text-cyber-purple uppercase font-bold"
          >
            <Sparkles className="w-3.5 h-3.5" /> Hello, There 😊
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-tight pb-2"
          >
            <span className="chrome-text">
              Temesgen Gonfa <br /> Welcomes You!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-white/95 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            I am a software engineer and a full-stack developer with a passion for creating seamless web applications. I enjoy solving complex problems and delivering efficient, user-friendly solutions. Whether it’s designing intuitive front-end interfaces or building robust back-end systems, I thrive on turning ideas into reality.
          </motion.p>

          {/* Call to actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a href="#/contact" className="btn btn-green gap-2.5 px-6 py-3.5 w-full sm:w-auto">
              <Phone className="w-4 h-4" />
              Contact Now
            </a>
            <a href="#/portfolio" className="btn btn-secondary gap-2 px-6 py-3.5 w-full sm:w-auto">
              View Portfolio
              <ArrowRight className="w-4 h-4 text-cyber-teal" />
            </a>
          </motion.div>

          {/* Fancy Animated Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 mt-6">
            
            {/* Stat Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-5 rounded-2xl bg-gradient-to-b from-card-dark/60 to-slate-950/40 border border-cyber-purple/15 hover:border-cyber-teal/35 transition-all duration-300 relative overflow-hidden text-left shadow-lg"
            >
              {/* Subtle absolute gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex items-center justify-between pb-3">
                <p className="font-display font-black text-3.5xl text-cyber-teal tracking-tight">
                  70<span className="text-white/60 text-xl font-bold">+</span>
                </p>
                <div className="w-8 h-8 rounded-lg bg-cyber-teal/10 flex items-center justify-center text-cyber-teal border border-cyber-teal/10">
                  <Layers className="w-4 h-4" />
                </div>
              </div>
              <h6 className="font-mono text-[10px] text-text-muted uppercase tracking-[0.15em] font-bold">Projects Built</h6>
              <p className="text-[10px] text-text-muted mt-1 group-hover:text-text-secondary transition-colors font-medium">Successfully completed</p>
            </motion.div>
            
            {/* Stat Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-5 rounded-2xl bg-gradient-to-b from-card-dark/60 to-slate-950/40 border border-cyber-purple/15 hover:border-cyber-purple/35 transition-all duration-300 relative overflow-hidden text-left shadow-lg"
            >
              {/* Subtle absolute gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex items-center justify-between pb-3">
                <p className="font-display font-black text-3.5xl text-cyber-purple tracking-tight">
                  500<span className="text-white/60 text-xl font-bold">+</span>
                </p>
                <div className="w-8 h-8 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple border border-cyber-purple/10">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <h6 className="font-mono text-[10px] text-text-muted uppercase tracking-[0.15em] font-bold">LinkedIn Sync</h6>
              <p className="text-[10px] text-text-muted mt-1 group-hover:text-text-secondary transition-colors font-medium">Connected peers</p>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-5 rounded-2xl bg-gradient-to-b from-card-dark/60 to-slate-950/40 border border-cyber-purple/15 hover:border-cyber-teal/35 transition-all duration-300 relative overflow-hidden text-left shadow-lg"
            >
              {/* Subtle absolute gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex items-center justify-between pb-3">
                <p className="font-display font-black text-3.5xl text-cyber-teal tracking-tight">
                  3<span className="text-cyber-purple font-bold">+</span>
                </p>
                <div className="w-8 h-8 rounded-lg bg-cyber-teal/10 flex items-center justify-center text-cyber-teal border border-cyber-teal/10">
                  <Timer className="w-4 h-4" />
                </div>
              </div>
              <h6 className="font-mono text-[10px] text-text-muted uppercase tracking-[0.15em] font-bold">Years Practice</h6>
              <p className="text-[10px] text-text-muted mt-1 group-hover:text-text-secondary transition-colors font-medium">Industry exposure</p>
            </motion.div>

          </div>
        </div>

        {/* Right Columns - Rotating Orbital Orbs */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[350px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 blur-spotlight-teal opacity-20 pointer-events-none" />
          <RotatingImages image="/images/me/temesgen-gonfa.png" />
        </div>
      </section>

      {/* 2. Infinite Continuous Slider Section */}
      <SmoothSlider />

      {/* 3. Creative Skills section */}
      <section className="w-full section-padding relative overflow-hidden my-8">
        
        {/* Futuristic Techno Color Background Grid & Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {/* Deep techno grid pattern with gradient mesh */}
          <div className="absolute inset-0 bg-techno-grid opacity-35" />
          
          {/* Central neon cyber glow spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] techno-glow-center opacity-45 animate-pulse duration-[8000ms]" />
          
          {/* Horizontal and vertical fade-out mask grids to blend seamlessly with the canvas background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-90" />
        </div>

        <div className="max-width relative z-10 px-4 md:px-8">
          <SectionHeading
            title="Creative Skills"
            subtitle="With a keen eye for design and a passion for innovation, I excel at blending creativity with technical expertise to bring ideas to life through seamless web applications."
          />
          <SkillSection />
        </div>
      </section>

      {/* 3.5 Full-Width Infinite Tech Marquee Section */}
      <section className="w-full border-y border-border py-16 bg-slate-950/25 overflow-hidden relative">
        <div className="flex flex-col items-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-text-muted mb-10 block text-center">
            TECH I LOVE
          </span>
          
          <div 
            className="w-full overflow-hidden relative"
            style={{
              maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <div className="flex w-max gap-12 whitespace-nowrap marquee">
              {[
                "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "NestJS", "PostgreSQL",
                "Laravel", "Supabase", "Docker", "GitLab CI/CD", "Redis", "Prisma ORM", "Expo",
                "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "NestJS", "PostgreSQL",
                "Laravel", "Supabase", "Docker", "GitLab CI/CD", "Redis", "Prisma ORM", "Expo"
              ].map((tech, idx) => (
                <span 
                  key={idx} 
                  className="font-display font-bold text-3xl sm:text-4xl text-text-muted/60 hover:text-cyber-teal transition-all duration-300 cursor-default select-none tracking-tight"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Glass Benefits grid section */}
      <section className="relative max-width section-padding overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 blur-spotlight-teal opacity-10 pointer-events-none" />
        
        <SectionHeading
          title="Value Proposition"
          subtitle="Discover the architectural advantages of using my software services, including highly efficient systems, tight collaboration feeds, and beautiful aesthetic interfaces."
        />

        {/* Dynamic grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const isPurple = index % 2 === 0;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="box relative overflow-hidden group/benefit p-8 cursor-pointer flex flex-col justify-between"
              >
                {/* Light accent header */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isPurple ? 'bg-cyber-purple/10 text-cyber-purple' : 'bg-cyber-teal/10 text-cyber-teal'
                  }`}>
                    {isPurple ? <Cpu className="w-5 h-5" /> : <Star className="w-5 h-5" />}
                  </div>
                  <span className="font-mono text-xs text-text-muted">BENEFIT // 0{benefit.id}</span>
                </div>

                <div className="space-y-3">
                  <h4 className={`font-display font-bold text-lg text-text-primary tracking-wide group-hover/benefit:text-cyber-teal transition-colors`}>
                    {benefit.name}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>

                {/* Micro corner indicators */}
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full opacity-0 group-hover/benefit:opacity-100 transition-opacity bg-cyber-teal" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. Highlight Project Cards */}
      <section className="max-width section-padding relative">
        <SectionHeading
          title="My Works"
          subtitle="Explore a curated collection of my full-stack applications and landing pages, highlighting my commitment to engineering excellence, scalability, and gorgeous design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.slice(0, 3).map((portfolio) => (
            <div key={portfolio.id}>
              <PortfolioItem
                portfolio={portfolio}
                onSelectProject={onSelectProject}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center pt-8">
          <button
            onClick={() => onTabChange('portfolio')}
            className="btn btn-green gap-2 text-sm font-mono tracking-widest uppercase cursor-pointer py-4 px-8"
          >
            Browse All Codebases
            <ArrowRight className="w-4 h-4 text-white hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 6. In-place Frequently Asked Questions */}
      <FaqSection />

    </div>
  );
}

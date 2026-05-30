import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, GraduationCap, Briefcase, Calendar, MapPin, Award, Layers, Users, Timer, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProfileFrame from './ProfileFrame';
import { timeline } from '../constants';

export default function AboutView() {
  return (
    <div className="space-y-24 md:space-y-36 pt-24 pb-12">
      
      {/* 1. Introductory Bio with Fancy Animations & Stylized Statistics */}
      <section className="relative max-width flex flex-col lg:flex-row items-center gap-16 overflow-hidden py-8">
        {/* Dynamic spot-glow behind biography */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] blur-spotlight-teal opacity-10 pointer-events-none animate-pulse duration-[6000ms]" />
        <div className="absolute top-1/3 right-10 w-[280px] h-[280px] blur-spotlight-purple opacity-10 pointer-events-none animate-pulse duration-[8000ms]" />

        {/* Profile Frame with Entrance Slide & Fade */}
        <motion.div 
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[350px]"
        >
          {/* Accent decorative ring around photo frame */}
          <div className="absolute inset-0 border border-cyber-purple/5 rounded-full scale-[1.12] pointer-events-none" />
          <ProfileFrame image="/images/me/temu.png" />
        </motion.div>

        {/* Description & Counts with Staggered Elements */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left relative z-10">
          
          {/* Animated Eyebrow Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-xs font-mono text-cyber-purple uppercase font-bold tracking-wider shadow-inner shadow-cyber-purple/5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyber-teal animate-spin-slow" />
            Core Biography
          </motion.div>

          {/* Heading with Elegant Text Animation */}
          <div className="space-y-3">
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-none"
            >
              I'm Temesgen <span className="text-gradient bg-gradient-to-r from-cyber-teal via-emerald-400 to-cyber-purple bg-clip-text text-transparent">Gonfa</span>
            </motion.h1>
          </div>

          {/* Elegant Bio Text paragraph with micro fade-in delay */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-white/95 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0"
          >
            I am a software engineer and a full-stack developer with a passion for creating seamless web applications. I enjoy solving complex problems and delivering efficient, user-friendly solutions. Whether it’s designing intuitive front-end interfaces or building robust back-end systems, I thrive on turning ideas into reality.
          </motion.p>

          {/* Fancy Animated Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
            
            {/* Stat Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-5 rounded-2xl bg-gradient-to-b from-card-dark/60 to-slate-950/40 border border-cyber-purple/10 hover:border-cyber-teal/35 transition-all duration-300 relative overflow-hidden text-left shadow-lg"
            >
              {/* Subtle absolute gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex items-center justify-between pb-3">
                <p className="font-display font-black text-3.5xl text-cyber-teal tracking-tight">
                  40<span className="text-white/60 text-xl font-bold">+</span>
                </p>
                <div className="w-8 h-8 rounded-lg bg-cyber-teal/10 flex items-center justify-center text-cyber-teal border border-cyber-teal/10">
                  <Layers className="w-4 h-4" />
                </div>
              </div>
              <h6 className="font-mono text-[10px] text-text-muted uppercase tracking-[0.15em] font-bold">Slick Deliveries</h6>
              <p className="text-[10px] text-text-muted mt-1 group-hover:text-text-secondary transition-colors font-medium">Production projects shipped</p>
            </motion.div>
            
            {/* Stat Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-5 rounded-2xl bg-gradient-to-b from-card-dark/60 to-slate-950/40 border border-cyber-purple/10 hover:border-cyber-purple/35 transition-all duration-300 relative overflow-hidden text-left shadow-lg"
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
              <p className="text-[10px] text-text-muted mt-1 group-hover:text-text-secondary transition-colors font-medium">Connected professionals</p>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-5 rounded-2xl bg-gradient-to-b from-card-dark/60 to-slate-950/40 border border-cyber-purple/10 hover:border-cyber-teal/35 transition-all duration-300 relative overflow-hidden text-left shadow-lg"
            >
              {/* Subtle absolute gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex items-center justify-between pb-3">
                <p className="font-display font-black text-3.5xl text-cyber-teal tracking-tight">
                  1<span className="text-cyber-purple font-bold">+</span>
                </p>
                <div className="w-8 h-8 rounded-lg bg-cyber-teal/10 flex items-center justify-center text-cyber-teal border border-cyber-teal/10">
                  <Timer className="w-4 h-4" />
                </div>
              </div>
              <h6 className="font-mono text-[10px] text-text-muted uppercase tracking-[0.15em] font-bold">Industry Year</h6>
              <p className="text-[10px] text-text-muted mt-1 group-hover:text-text-secondary transition-colors font-medium">Corporate experience</p>
            </motion.div>

          </div>
        </div>
      </section>
 
      {/* 2. Journey Experience Timeline Section */}
      <section className="max-width py-24 relative">
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 blur-spotlight-purple opacity-15 pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyber-teal mb-3 block">
            JOURNEY
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-text-primary tracking-tight">
            Experience timeline
          </h2>
          <p className="text-sm md:text-base text-text-secondary mt-4 font-normal">
            A structured timeline representing my transition from an academic student to a practical software engineer delivering robust products.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative">
          {/* Vertical center line running top-to-bottom of the timeline */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-cyber-purple/15 -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const isEducation = item.type === 'education';

              return (
                <div 
                  key={item.id} 
                  className="relative pl-12 md:pl-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 items-start"
                >
                  {/* Timeline Dot with pulsing/ping glowing rings */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                    className="absolute left-4 md:left-1/2 top-7 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-gradient-to-br from-cyber-teal to-cyber-purple"
                  >
                    <span className="absolute -inset-1.5 rounded-full bg-cyber-teal/30 animate-pulse pointer-events-none" />
                    <span className="absolute -inset-3 rounded-full bg-cyber-teal/15 animate-ping pointer-events-none" />
                  </motion.div>

                  {/* Left Side Content (Card) - Shown on desktop for even-index items */}
                  {isEven ? (
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="w-full text-left"
                    >
                      {/* Glass Card */}
                      <div className="box p-6 rounded-2xl relative bg-card-dark/40 hover:bg-card-subtle/65 hover:-translate-y-1 hover:border-cyber-teal/45 border border-cyber-purple/10 backdrop-blur-md transition-all duration-300 shadow-xl">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyber-purple/10 mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              isEducation ? 'bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20' : 'bg-cyber-teal/10 text-cyber-teal border border-cyber-teal/20'
                            }`}>
                              {isEducation ? <GraduationCap className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-base md:text-lg text-text-primary tracking-wide">
                                {item.title}
                              </h4>
                              {item.institution && (
                                <p className="text-xs font-semibold text-cyber-teal mt-0.5">
                                  @ {item.institution}
                                </p>
                              )}
                            </div>
                          </div>
                          
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950 border border-cyber-purple/15 text-[11px] font-mono font-medium text-cyber-teal/90 w-fit">
                            <Calendar className="w-3 h-3 text-cyber-purple" />
                            {item.duration}
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-normal mb-3">
                          {item.description}
                        </p>

                        {/* Bullets details */}
                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="space-y-2 pl-1.5 border-l border-cyber-teal/15 py-0.5">
                            {item.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="text-xs text-text-muted flex gap-2 leading-relaxed">
                                <span className="w-1 h-1 rounded-full bg-cyber-teal/50 mt-[7px] flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className="pt-3 mt-4 border-t border-cyber-purple/10 flex items-center gap-4 text-[10px] font-mono text-text-muted">
                          <span className="flex items-center gap-1 uppercase tracking-wider">
                            <Award className="w-3 h-3 text-cyber-teal" /> Verified
                          </span>
                          <span className="text-cyber-purple uppercase tracking-wider font-semibold">
                            {isEducation ? "Academic" : "Experience"}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="hidden md:block" />
                  )}

                  {/* Right Side Content (Card) - Shown on desktop for odd-index items */}
                  {!isEven ? (
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="w-full text-left"
                    >
                      {/* Glass Card */}
                      <div className="box p-6 rounded-2xl relative bg-card-dark/40 hover:bg-card-subtle/65 hover:-translate-y-1 hover:border-cyber-teal/45 border border-cyber-purple/10 backdrop-blur-md transition-all duration-300 shadow-xl">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyber-purple/10 mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              isEducation ? 'bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20' : 'bg-cyber-teal/10 text-cyber-teal border border-cyber-teal/20'
                            }`}>
                              {isEducation ? <GraduationCap className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-base md:text-lg text-text-primary tracking-wide">
                                {item.title}
                              </h4>
                              {item.institution && (
                                <p className="text-xs font-semibold text-cyber-teal mt-0.5">
                                  @ {item.institution}
                                </p>
                              )}
                            </div>
                          </div>
                          
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950 border border-cyber-purple/15 text-[11px] font-mono font-medium text-cyber-teal/90 w-fit">
                            <Calendar className="w-3 h-3 text-cyber-purple" />
                            {item.duration}
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-normal mb-3">
                          {item.description}
                        </p>

                        {/* Bullets details */}
                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="space-y-2 pl-1.5 border-l border-cyber-teal/15 py-0.5">
                            {item.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="text-xs text-text-muted flex gap-2 leading-relaxed">
                                <span className="w-1 h-1 rounded-full bg-cyber-teal/50 mt-[7px] flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className="pt-3 mt-4 border-t border-cyber-purple/10 flex items-center gap-4 text-[10px] font-mono text-text-muted">
                          <span className="flex items-center gap-1 uppercase tracking-wider">
                            <Award className="w-3 h-3 text-cyber-teal" /> Verified
                          </span>
                          <span className="text-cyber-purple uppercase tracking-wider font-semibold">
                            {isEducation ? "Academic" : "Experience"}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

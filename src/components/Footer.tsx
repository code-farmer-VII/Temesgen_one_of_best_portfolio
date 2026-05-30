import React from 'react';
import { contactDetails, navLinks, socialLinks } from '../constants';
import { Terminal, ArrowUp, Send, Cpu } from 'lucide-react';
import { resolveAsset } from '../utils';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-cyber-purple/15 bg-bg-dark/60 backdrop-blur-sm pt-16 pb-8 overflow-hidden">
      {/* Grid Pattern and Gradient Highlights */}
      <div className="absolute inset-0 bg-mesh-grid opacity-60 z-0pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 -translate-x-1/2 w-96 h-96 blur-spotlight-purple opacity-30 z-0 pointer-events-none" />

      <div className="max-width relative z-10">
        
        {/* Top brand callout & Scroll indicator */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 border-b border-cyber-purple/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyber-purple to-cyber-teal flex items-center justify-center font-bold font-display text-text-primary text-base">
              T
            </div>
            <div>
              <h4 className="font-display font-black text-xl text-text-primary tracking-tight">
                Temesgen <span className="text-cyber-teal">Gonfa.</span>
              </h4>
              <p className="font-mono text-[10px] text-text-secondary mt-0.5 uppercase tracking-widest">Full-Stack / Software Engineer</p>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 group flex items-center gap-2 px-4 py-2 rounded-full bg-card-dark border border-cyber-purple/15 hover:border-cyber-purple/40 text-[11px] font-mono hover:text-white text-text-secondary transition-all cursor-pointer"
          >
            Back To Top 
            <ArrowUp className="w-3.5 h-3.5 text-cyber-teal group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Central columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
          
          {/* Bio statement */}
          <div className="space-y-4">
            <h5 className="font-display font-bold text-sm text-text-primary tracking-wide uppercase">Core Philosophy</h5>
            <p className="text-sm text-text-secondary leading-relaxed">
              Engineering with absolute pixel-perfection, structural security, and intuitive design. Turning standard functional logic into premium software that thrives at scale.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-card-dark border border-cyber-purple/15 flex items-center justify-center text-text-secondary hover:text-cyber-teal hover:border-cyber-teal/40 transition-all shadow-md shadow-black/30 hover:scale-105"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Sinks Quick Nav */}
          <div className="space-y-4">
            <h5 className="font-display font-bold text-sm text-text-primary tracking-wide uppercase">Navigation</h5>
            <nav>
              <ul className="grid grid-cols-2 gap-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="text-sm text-text-secondary hover:text-cyber-purple hover:underline transition-colors block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="bg-card-dark/50 border border-cyber-purple/10 rounded-xl p-4 mt-6 flex items-center gap-3">
              <Cpu className="w-8 h-8 text-cyber-purple flex-shrink-0 animate-pulse" />
              <div>
                <p className="text-xs font-mono text-text-primary">Obsidian Engine v4.0</p>
                <p className="text-[10px] text-text-muted mt-0.5">Secure production stack active</p>
              </div>
            </div>
          </div>

          {/* Contact coordinates */}
          <div className="space-y-4">
            <h5 className="font-display font-bold text-sm text-text-primary tracking-wide uppercase">Direct Coordinates</h5>
            <div className="space-y-3">
              {contactDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-text-secondary p-2.5 rounded-xl bg-card-dark/40 border border-cyber-purple/5"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple">
                    <detail.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm hover:underline hover:text-text-primary transition-colors truncate">
                    {detail.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Legal & Stamp block */}
        <div className="border-t border-cyber-purple/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-text-muted">
            Copyright © {new Date().getFullYear()} Temesgen Gonfa. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-[10px] font-mono text-cyber-purple uppercase">
              ETHIOPIA, Addis Ababa
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-teal animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-teal" />
              <span className="font-mono text-[10px] text-text-secondary">SSL CERTIFIED</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

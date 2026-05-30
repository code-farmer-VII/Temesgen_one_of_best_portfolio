import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Sparkles, Send, Globe, Heart } from 'lucide-react';
import SectionHeading from './SectionHeading';
import FaqSection from './FaqSection';
import LiquidGlassHeading from './LiquidGlassHeading';
import { socialLinks, contactDetails } from '../constants';

export default function ContactView() {
  return (
    <div className="space-y-16 pt-24 pb-12">
      
      {/* 1. Header Coordinates Intro Banner */}
      <section className="relative max-width overflow-hidden">
        <LiquidGlassHeading 
          title="I'd Love to Hear from You!"
          subtitle="Whether you have questions about my services or want to discuss your project ideas, feel free to reach out. I'm excited to connect and explore how I can help you achieve your goals!"
        />
      </section>

      {/* 2. Central Layout Grid containing Info and Interactive Form */}
      <section className="max-width grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            {contactDetails.map((detail) => {
              const isEmail = detail.text.includes('@');
              const isPhone = detail.text.includes('+') || detail.text.includes('09');
              
              let label = "Location Address";
              let href = "";
              if (isEmail) {
                label = "Direct Email Link";
                href = `mailto:${detail.text}`;
              } else if (isPhone) {
                label = "Direct Voice Call";
                href = `tel:${detail.text.replace(/\s+/g, '')}`;
              }

              return (
                <div
                  key={detail.id}
                  className="box p-5 md:p-6 flex items-center gap-4 border-cyber-purple/10 bg-card-dark/25 hover:border-cyber-purple/30 transition-all cursor-pointer group/card"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyber-purple/10 flex items-center justify-center text-cyber-purple group-hover/card:bg-cyber-purple group-hover/card:text-white transition-all">
                    <detail.icon className="w-5 h-5" />
                  </div>
                  
                  <div className="truncate">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted">{label}</p>
                    {href ? (
                      <a href={href} className="font-display font-bold text-sm md:text-base text-text-primary hover:text-cyber-teal hover:underline transition-colors mt-0.5 block truncate">
                        {detail.text}
                      </a>
                    ) : (
                      <h6 className="font-display font-bold text-sm md:text-base text-text-primary mt-0.5 truncate">
                        {detail.text}
                      </h6>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social icons block */}
          <div className="box p-6 border-cyber-purple/10 bg-card-dark/25 space-y-4 text-center sm:text-left">
            <h6 className="font-mono text-[10px] uppercase tracking-wider text-text-muted font-bold flex items-center gap-2 justify-center sm:justify-start">
              <Globe className="w-4 h-4 text-cyber-purple" /> Connect Social Networks
            </h6>
            
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {socialLinks.map((link) => (
                <a
                  href={link.url}
                  key={link.id}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-card-dark hover:bg-cyber-purple/10 border border-cyber-purple/15 text-text-secondary hover:text-cyber-teal hover:border-cyber-teal/40 flex items-center gap-2 text-xs font-mono font-bold tracking-wide rounded-xl transition-all"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column contact form */}
        <div className="lg:col-span-7">
          <div className="box p-6 md:p-8 border-cyber-purple/15 bg-card-dark/45 space-y-6 relative overflow-hidden">
            {/* Ambient neon spot highlight inside card corners */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 blur-2xl radial-gradient-circle bg-cyber-teal opacity-10 pointer-events-none" />

            <div className="pb-4 border-b border-cyber-purple/5">
              <h4 className="font-display font-bold text-lg text-text-primary">Send Secure Transmission</h4>
              <p className="text-xs text-text-secondary">Connected directly via Formspree API endpoint</p>
            </div>

            <form
              action="https://formspree.io/f/xjkbnkrg"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-text-muted">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="e.g. Temu"
                    className="w-full p-3.5 bg-bg-dark border border-cyber-purple/10 rounded-xl focus:border-cyber-teal text-sm text-text-primary transition-colors focus:ring-1 focus:ring-cyber-teal focus:outline-none placeholder-text-muted"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="e.g. Gonfa"
                    className="w-full p-3.5 bg-bg-dark border border-cyber-purple/10 rounded-xl focus:border-cyber-teal text-sm text-text-primary transition-colors focus:ring-1 focus:ring-cyber-teal focus:outline-none placeholder-text-muted"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="temesgen@domain.com"
                    className="w-full p-3.5 bg-bg-dark border border-cyber-purple/10 rounded-xl focus:border-cyber-teal text-sm text-text-primary transition-colors focus:ring-1 focus:ring-cyber-teal focus:outline-none placeholder-text-muted"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+251 92..."
                    className="w-full p-3.5 bg-bg-dark border border-cyber-purple/10 rounded-xl focus:border-cyber-teal text-sm text-text-primary transition-colors focus:ring-1 focus:ring-cyber-teal focus:outline-none placeholder-text-muted"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Message Payload</label>
                <textarea
                  name="message"
                  required
                  placeholder="Describe your project, timeline requirements, or service terms in detail..."
                  className="w-full p-3.5 bg-bg-dark border border-cyber-purple/10 rounded-xl focus:border-cyber-teal text-sm text-text-primary transition-colors focus:ring-1 focus:ring-cyber-teal focus:outline-none min-h-[160px] placeholder-text-muted resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full btn btn-green py-4 gap-2 text-sm font-mono tracking-widest uppercase cursor-pointer shadow-lg shadow-emerald-500/20 group hover:gap-3"
              >
                Send Message
                <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </div>
        </div>

      </section>

      {/* 3. Associated FAQs below contact section */}
      <FaqSection />

    </div>
  );
}

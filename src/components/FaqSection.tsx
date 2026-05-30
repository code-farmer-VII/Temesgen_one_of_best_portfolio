import React from "react";
import Accordion from "./Accordion";
import { faqs } from "../constants";
import { MessageSquare, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function FaqSection() {
  return (
    <section className="relative max-width section-padding overflow-hidden">
      {/* Dynamic Background Spotlights */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] blur-spotlight-teal opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] blur-spotlight-purple opacity-10 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Heading, Subtitle & Support CTA */}
        <div className="grid grid-cols-1 lg:col-span-5 gap-6 lg:sticky lg:top-24">
          <div>
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="Got questions about my engineering stack, deployment schedules, or remote working terms? Here are direct answers to help understand how we can collaborate."
              align="left"
            />
          </div>

          {/* Premium "Still have questions?" Glass CTA */}
          <div className="relative group overflow-hidden rounded-2xl p-5 border border-cyber-purple/15 bg-card-dark/45 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-cyber-teal/35 hover:shadow-2xl hover:shadow-cyber-teal/5">
            {/* Hover ambient color sweep */}
            <div className="absolute -inset-10 bg-gradient-to-r from-cyber-purple/10 to-cyber-teal/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-cyber-teal/10 border border-cyber-teal/20 text-cyber-teal flex-shrink-0 animate-pulse">
                <MessageSquare className="w-6 h-6" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-display font-semibold text-text-primary tracking-wide">
                  Still have questions?
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Get directly in touch to build something unique together.
                </p>
              </div>

              <a 
                href="#/contact" 
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyber-purple/10 border border-cyber-purple/20 text-xs font-mono text-accent hover:bg-cyber-purple/20 hover:border-cyber-purple/40 transition-all font-bold group/btn self-stretch sm:self-auto justify-center"
              >
                Open Ticket 
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive FAQ Accordion Cards */}
        <div className="lg:col-span-7 w-full">
          <Accordion data={faqs} />
        </div>

      </div>
    </section>
  );
}


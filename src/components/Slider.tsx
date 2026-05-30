import React from 'react';
import { resolveAsset } from '../utils';

const marqueeData = [
  { path: '/images/bank ---------1.png', title: 'CBE Student Budget' },
  { path: '/images/squared2.png', title: 'Squared Tech Agency' },
  { path: '/images/blog-1.png', title: 'Modern Blog Platform' },
  { path: '/images/RAS-1.png', title: 'Reverse Auction Procurement' },
  { path: '/images/school-1.png', title: 'School Core ERP' },
  { path: '/images/EPRMS 1.png', title: 'EPRMS Medical Records' },
  { path: '/images/dashboard-1.png', title: 'Helix Admin Dashboard' },
  { path: '/images/task 1.png', title: 'AAU Faculty Task Manager' },
  { path: '/images/restorant 3.png', title: 'Epicurean Restaurant Site' },
  { path: '/images/landing page.png', title: 'Hibret Corporate Banking' },
];

export default function SmoothSlider() {
  // Duplicate for seamless infinite marquee scroll
  const items = [...marqueeData, ...marqueeData, ...marqueeData];

  return (
    <section className="relative py-12 bg-bg-dark/45 border-y border-cyber-purple/10 overflow-hidden select-none">
      {/* Horizontal Vignettes for Endless Depth visual style */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

      {/* Intro Label */}
      <div className="max-width mb-6 flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest text-text-muted">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-teal animate-pulse" />
          SYSTEM METRIC // SCREENSHOT FEED
        </div>
        <span>AUTOROLL ACTIVE // H-3000</span>
      </div>

      {/* Scrollable Track */}
      <div className="flex w-max relative overflow-hidden">
        <div className="flex animate-[scroll_50s_linear_infinite] gap-6 px-3 hover:[animation-play-state:paused] cursor-pointer">
          {items.map((item, index) => (
            <div 
              key={index}
              className="relative w-[300px] md:w-[380px] h-[180px] md:h-[220px] rounded-xl overflow-hidden bg-slate-950 border border-cyber-purple/10 group shadow-md shadow-black/40"
            >
              <img
                src={resolveAsset(item.path)}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                onError={(e) => {
                  (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop');
                }}
              />
              
              {/* Lower panel detail on hover */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent pt-12 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-sm text-text-primary leading-none">{item.title}</p>
                  <p className="font-mono text-[9px] text-cyber-teal tracking-wider uppercase mt-1">Slick Stack Product</p>
                </div>
                <div className="text-[10px] bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 px-2 py-0.5 rounded-full font-mono uppercase font-black">
                  VIEWABLE
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styled inline animation keyframes specifically for this component slider */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * 10 - 24px * 10));
          }
        }
        @media (min-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-380px * 10 - 24px * 10));
            }
          }
        }
      `}</style>
    </section>
  );
}

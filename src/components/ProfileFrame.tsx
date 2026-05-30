import React from 'react';
import { motion } from 'motion/react';
import { resolveAsset } from '../utils';
import { User, ShieldCheck } from 'lucide-react';

interface ProfileFrameProps {
  image: string;
}

export default function ProfileFrame({ image }: ProfileFrameProps) {
  const finalSrc = resolveAsset(image);

  return (
    <div className="relative group max-w-sm w-full mx-auto aspect-[4/5] rounded-3xl p-[1px] bg-gradient-to-b from-cyber-purple/35 via-cyber-teal/20 to-transparent shadow-3xl">
      {/* Decorative Outer ambient shadow glows */}
      <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-cyber-purple/20 to-cyber-teal/20 blur-2xl opacity-40 group-hover:opacity-65 transition-opacity duration-500 pointer-events-none" />
      
      {/* Absolute Backdrop Glass Card container */}
      <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-slate-950/85 backdrop-blur-xl border border-white/5 flex flex-col items-center justify-center p-3">
        
        {/* Artistic inner border with glowing corner ticks */}
        <div className="absolute inset-2.5 rounded-[18px] border border-white/5 pointer-events-none z-10" />
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyber-purple/60 rounded-tl-sm pointer-events-none z-10" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyber-teal/60 rounded-br-sm pointer-events-none z-10" />
        
        {/* The Portrait Image wrapper */}
        <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-[#0a0f1d] flex items-center justify-center">
          <img
            src={finalSrc}
            alt="Temesgen Gonfa Portrait"
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
            onError={(e) => {
              // High-resolution premium abstract placeholder representing professional profile if the custom file isn't uploaded yet
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop";
            }}
          />

          {/* Vignette shadow overlay to frame the portrait perfectly */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30 opacity-70 pointer-events-none" />

          {/* Quick interactive stamp of status */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-white uppercase">AVAILABLE</span>
            </div>

            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-cyber-purple/20 backdrop-blur-md border border-cyber-purple/30 text-cyber-purple shadow-lg">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="text-[9px] font-mono font-black tracking-widest uppercase">SOFTWARE ENG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

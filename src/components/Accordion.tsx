import React, { useState } from "react";
import { Plus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ } from "../types";

interface AccordionProps {
  data: FAQ[];
}

export default function Accordion({ data }: AccordionProps) {
  const [currentActive, setCurrentActive] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setCurrentActive((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => {
        const isOpen = currentActive === item.id;
        const formattedIndex = String(index + 1).padStart(2, '0');
        
        return (
          <div
            key={item.id}
            className={`group relative transition-all duration-300 rounded-2xl overflow-hidden border backdrop-blur-md ${
              isOpen 
                ? "bg-card-subtle/80 border-cyber-purple/45 shadow-xl shadow-cyber-purple/5" 
                : "bg-card-dark/45 border-cyber-purple/10 hover:border-cyber-purple/30 hover:bg-card-dark/65"
            }`}
          >
            {/* Subtle glow edge inside card */}
            <div className={`absolute top-0 left-0 w-[3px] h-full transition-all duration-300 ${
              isOpen ? "bg-gradient-to-b from-cyber-purple to-cyber-teal" : "bg-transparent group-hover:bg-cyber-purple/40"
            }`} />

            {/* Header Trigger */}
            <button
              className="flex items-center justify-between w-full text-left cursor-pointer p-5 md:p-6 relative z-10"
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-4 pr-4">
                {/* Index Indicator */}
                <span className={`font-mono text-xs font-bold transition-all duration-300 select-none ${
                  isOpen ? "text-cyber-purple" : "text-text-muted group-hover:text-cyber-teal"
                }`}>
                  {formattedIndex}
                </span>

                <div className="space-y-1">
                  <h6 className="font-display font-semibold text-sm md:text-base text-text-primary tracking-wide transition-colors group-hover:text-white">
                    {item.question}
                  </h6>
                </div>
              </div>
              
              {/* Plus/Minus Interactive Circle Glass */}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 flex-shrink-0 ${
                isOpen 
                  ? "bg-cyber-purple/20 border-cyber-purple text-cyber-purple rotate-45" 
                  : "bg-card-dark border-cyber-purple/15 text-text-muted group-hover:border-cyber-purple/30 group-hover:text-text-secondary"
              }`}>
                <Plus className="w-4 h-4 transition-transform duration-300" />
              </div>
            </button>

            {/* Content Drawer */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-5 md:px-6 pb-6 pt-1 border-t border-cyber-purple/5 text-sm leading-relaxed text-text-secondary">
                    <div className="pl-8 flex gap-3">
                      <div className="w-[1.5px] rounded-full bg-cyber-purple/20 self-stretch my-1 flex-shrink-0" />
                      <p className="text-text-muted group-hover:text-text-secondary transition-colors leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}


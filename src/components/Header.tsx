import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Terminal, Sparkles } from 'lucide-react';
import { navLinks } from '../constants';

interface HeaderProps {
  currentTab: string;
}

export default function Header({ currentTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll tracking for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 bg-bg-dark/85 backdrop-blur-md border-b border-cyber-purple/15 shadow-lg shadow-purple-950/10' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-width flex items-center justify-between">
        {/* Logo */}
        <a href="#/" className="group flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyber-purple to-cyber-teal p-[1px] shadow-md shadow-cyber-purple/20">
            <div className="flex items-center justify-center w-full h-full rounded-[11px] bg-bg-dark transition-colors group-hover:bg-card-dark">
              <Terminal className="w-5 h-5 text-cyber-teal group-hover:text-white transition-colors" />
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-lg text-text-primary tracking-wide group-hover:text-cyber-purple transition-colors">
              Temesgen <span className="text-cyber-teal">Gonfa.</span>
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-teal"></span>
              </span>
              <span className="text-[10px] font-mono font-medium tracking-wider text-cyber-teal uppercase">Available for Hire</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentTab === link.url.replace('#/', '') || (link.url === '#/' && currentTab === '');
              return (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-cyber-teal ${
                      isActive ? 'text-cyber-teal font-bold' : 'text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-cyber-purple to-cyber-teal" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          
          <a href="#/contact" className="btn btn-green gap-2 text-sm">
            <Phone className="w-4 h-4" />
            Let's Talk
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-white rounded-xl bg-bg-dark/40 border border-cyber-purple/10 cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-bg-dark/95 backdrop-blur-xl border-l border-cyber-purple/20 p-8 shadow-2xl flex flex-col justify-between">
          <div className="space-y-8 mt-16">
            <div className="pb-4 border-b border-cyber-purple/10 mb-6">
              <p className="font-mono text-[11px] text-cyber-teal uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Navigation
              </p>
            </div>
            
            <ul className="space-y-6">
              {navLinks.map((link) => {
                const isActive = currentTab === link.url.replace('#/', '') || (link.url === '#/' && currentTab === '');
                return (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 text-lg font-display font-semibold tracking-wide border-b border-transparent hover:border-cyber-teal/30 hover:text-cyber-teal transition-colors ${
                        isActive ? 'text-cyber-teal text-xl font-bold' : 'text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-6 border-t border-cyber-purple/10 pt-6">
            <a
              href="#/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-green w-full gap-2 py-3"
            >
              <Phone className="w-4 h-4" />
              Contact Now
            </a>
            <p className="text-center font-mono text-[10px] text-text-muted">
              Temesgen Gonfa © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

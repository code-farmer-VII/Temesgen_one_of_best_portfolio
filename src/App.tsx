import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import PortfolioView from './components/PortfolioView';
import ContactView from './components/ContactView';
import ProjectDetailsView from './components/ProjectDetailsView';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  // Synchronize state with URL Hash for advanced SPA history support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash; // e.g. '#/about', '#/project/1'
      
      if (!hash || hash === '#/' || hash === '#') {
        setCurrentTab('');
        setSelectedProjectId(null);
      } else if (hash.startsWith('#/project/')) {
        const idStr = hash.substring(10);
        const idNum = parseInt(idStr, 10);
        if (!isNaN(idNum)) {
          setCurrentTab('project-details');
          setSelectedProjectId(idNum);
        } else {
          setCurrentTab('');
          setSelectedProjectId(null);
          window.location.hash = '#/';
        }
      } else {
        const tabStr = hash.replace('#/', '');
        setCurrentTab(tabStr);
        setSelectedProjectId(null);
      }
    };

    // Run once on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Instantly reset viewport scroll to the top of the page on content/tab/project swaps
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentTab, selectedProjectId]);

  const handleTabChange = (tab: string) => {
    if (tab === 'home' || tab === '') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${tab}`;
    }
  };

  const handleSelectProject = (id: number) => {
    window.location.hash = `#/project/${id}`;
  };

  // Render proper child coordinates
  const renderContent = () => {
    switch (currentTab) {
      case 'about':
        return <AboutView />;
      case 'portfolio':
        return <PortfolioView onSelectProject={handleSelectProject} />;
      case 'contact':
        return <ContactView />;
      case 'project-details':
        return <ProjectDetailsView projectId={selectedProjectId || 1} />;
      case '':
      default:
        return (
          <HomeView
            onTabChange={handleTabChange}
            onSelectProject={handleSelectProject}
          />
        );
    }
  };

  return (
    <div className="bg-bg-dark text-text-primary min-h-screen relative flex flex-col justify-between selection:bg-cyber-purple selection:text-white overflow-x-hidden">
      {/* Custom Animated Cursor */}
      <CustomCursor />

      {/* 1. Global Background Mesh and ambient glowing spotlight blooms */}
      <div className="absolute inset-0 bg-mesh-grid opacity-40 mix-blend-color-dodge pointer-events-none z-0" />
      
      {/* Ambient spotlights drifting behind the main glass cards */}
      <div className="absolute top-20 left-10 w-96 h-96 blur-spotlight-purple opacity-30 pointer-events-none z-0" />
      <div className="absolute top-[35%] right-20 w-[600px] h-[600px] blur-spotlight-teal opacity-20 pointer-events-none z-0" />
      <div className="absolute bottom-24 left-1/4 w-[500px] h-[500px] blur-spotlight-purple opacity-25 pointer-events-none z-0" />

      {/* 2. Sticky Glass Header Nav */}
      <Header currentTab={currentTab} />

      {/* 3. Render Area With Smooth Fade Stagger Animation */}
      <main className="relative z-10 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Elegant Cybernetic Contacts Footer */}
      <Footer />
    </div>
  );
}

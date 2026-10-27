import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { FloatingDock } from '../components/common/FloatingDock';
import { SearchModal } from '../components/common/SearchModal';
import { ProjectQuoteModal } from '../components/common/ProjectQuoteModal';
import { StoryVideoModal } from '../components/common/StoryVideoModal';

export const MainLayout: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const location = useLocation();

  // Scroll to top automatically when navigation occurs
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-ink selection:bg-electric selection:text-white">
      {/* Global Navbar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenQuote={() => setQuoteOpen(true)}
      />

      {/* Floating Right Dock */}
      <FloatingDock />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet
          context={{
            onOpenQuote: () => setQuoteOpen(true),
            onOpenStory: () => setStoryOpen(true),
          }}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ProjectQuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <StoryVideoModal isOpen={storyOpen} onClose={() => setStoryOpen(false)} />
    </div>
  );
};


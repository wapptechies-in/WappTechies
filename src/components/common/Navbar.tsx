import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/navigation';
import { Search, ArrowRight, Menu, X, Sparkles, Phone, MessageCircle, Mail, Instagram } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(currentScroll > 15);
      if (totalScroll > 0) {
        setScrollProgress(Math.min(Math.max(currentScroll / totalScroll, 0), 1));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Smooth scroll to top when clicking Logo or Home if already on home page
  const handleHomeClick = (e: React.MouseEvent, href = '/') => {
    if (href === '/' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 px-4 md:px-8 ${
          isScrolled
            ? 'bg-ivory-100/95 backdrop-blur-md border-b border-borderLight shadow-sm'
            : 'bg-ivory-100/85 backdrop-blur-md border-b border-borderLight/60'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Mark & Wordmark */}
          <Link
            to="/"
            onClick={(e) => handleHomeClick(e, '/')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-xl p-1"
            aria-label="Wapp Techies Home"
          >
            <div className="relative w-10 h-10 rounded-xl p-0.5 shadow-md group-hover:scale-105 transition-all overflow-hidden bg-white border border-borderLight/80">
              <img
                src="/images/wapp-techies-icon.png"
                alt="Wapp Techies Logo"
                className="w-full h-full rounded-[9px] object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-lg leading-tight transition-colors text-ink group-hover:text-electric">
                WAPP <span className="text-electric">TECHIES</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.22em] uppercase transition-colors flex items-center gap-1.5 text-ink-muted">
                <span>IDEAS INTO IMPACT</span>
                <span className="w-1 h-1 rounded-full bg-coral inline-block shadow-xs" />
              </span>
            </div>
          </Link>

          {/* Centered Desktop Nav Pill */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1 bg-white/90 backdrop-blur-xl border border-borderLight px-3 py-1.5 rounded-full shadow-soft"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={(e) => handleHomeClick(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-electric text-white shadow-sm'
                      : 'text-ink-muted hover:text-ink hover:bg-ivory-200/60'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-mint text-ink-deep">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="ml-2 w-8 h-8 rounded-full bg-ivory flex items-center justify-center text-ink-muted hover:text-electric hover:bg-electric-subtle transition-all"
              title="Search services, products and work (Ctrl+K)"
              aria-label="Search website"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenQuote}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-md button-spring bg-ink text-white hover:bg-electric"
            >
              <span>Let's Build Together</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Compact Utility Button */}
            <button
              onClick={onOpenSearch}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all button-spring bg-white hover:bg-ivory-200 text-ink border border-borderLight"
              title="Quick Finder"
              aria-label="Quick Finder"
            >
              <Sparkles className="w-4 h-4 text-electric" />
            </button>
          </div>

          {/* Mobile Hamburger & Search Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-white border border-borderLight text-ink-muted shadow-2xs"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-xs transition-colors bg-white border border-borderLight text-ink"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-coral" /> : <Menu className="w-5 h-5 text-ink" />}
            </button>
          </div>
        </div>

        {/* Global Reading Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-200/50 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-electric via-coral to-amber-500 origin-left transition-transform duration-100 ease-out"
            style={{
              transform: `scaleX(${scrollProgress})`,
            }}
          />
        </div>
      </header>

      {/* Mobile Glass Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-end">
          {/* Backdrop with Blur */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-ink/60 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
          />

          {/* Slide-Up Drawer Content */}
          <div className="relative z-50 bg-white rounded-t-4xl px-6 pt-5 pb-8 shadow-2xl border-t border-borderLight max-h-[85vh] overflow-y-auto animate-[heroWordFadeUp_0.35s_cubic-bezier(0.16,1,0.3,1)]">
            
            {/* Drawer Drag Pill */}
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-5" />

            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-borderLight mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white p-0.5 border border-borderLight shadow-2xs">
                  <img
                    src="/images/wapp-techies-icon.png"
                    alt="Wapp Techies"
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-black text-ink block">WAPP TECHIES</span>
                  <span className="text-[10px] text-ink-muted">Ideas Into Impact</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-ivory flex items-center justify-center text-ink-muted hover:text-ink"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Links with Stagger Visual */}
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item, idx) => {
                const isActive =
                  item.href === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleHomeClick(e, item.href);
                    }}
                    style={{ animationDelay: `${idx * 40}ms` }}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-electric text-white shadow-sm translate-x-1'
                        : 'text-ink hover:bg-ivory-100 hover:translate-x-1'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-coral'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-mint text-ink-deep">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Primary Action Button */}
            <div className="mt-5 pt-4 border-t border-borderLight space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-coral to-rose-500 text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-glow-coral button-spring"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Direct Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://wa.me/918300176274?text=Hello%20Wapp%20Techies,%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25D366]" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="tel:+918300176274"
                  className="p-2.5 rounded-2xl bg-electric-subtle hover:bg-electric-subtle/80 border border-electric/30 text-electric text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Studio</span>
                </a>
              </div>

              {/* Email & Instagram Handles */}
              <div className="flex items-center justify-between text-[11px] text-ink-muted pt-2 px-1">
                <a
                  href="mailto:wapptechies@gmail.com"
                  className="flex items-center gap-1.5 hover:text-ink font-semibold"
                >
                  <Mail className="w-3.5 h-3.5 text-coral" />
                  <span>wapptechies@gmail.com</span>
                </a>
                <a
                  href="https://www.instagram.com/wapptechies/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-pink-600 font-semibold"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-500" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

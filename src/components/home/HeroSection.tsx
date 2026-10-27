import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Globe,
  Smartphone,
  Bot,
  MapPin,
  Instagram,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onOpenStory?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const scrollToServicesStrip = () => {
    const el = document.getElementById('services-strip');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero-section" className="relative bg-ivory text-ink select-none overflow-hidden">
      {/* ============================================================== */}
      {/* WARM LIGHT EDITORIAL HERO (CINEMATIC VIDEO SHOWCASE)           */}
      {/* ============================================================== */}
      <section
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Dynamic Warm Ambient Light Blooms */}
        <div className="absolute top-16 right-10 w-[520px] h-[520px] bg-gradient-to-br from-amber-200/40 via-coral/20 to-transparent rounded-full blur-3xl pointer-events-none animate-float-slow -z-10" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-amber-200/30 via-coral/15 to-transparent rounded-full blur-3xl pointer-events-none animate-float-medium -z-10" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-coral/10 rounded-full blur-2xl pointer-events-none -z-10" />

        {/* Top/Main Grid: Left Editorial Typography & Right Video Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 flex-grow my-auto">
          
          {/* Left Column (7 cols): Editorial Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Label with category info and shimmer effect */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-borderLight shadow-xs">
              <span className="text-coral animate-pulse">❖</span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-ink">
                CREATIVE • TECH • IMPACT ›
              </span>
              <span className="text-electric font-mono text-[10px] hidden sm:inline font-bold">
                [PREMIUM DIGITAL EXPERIENCES]
              </span>
              <span className="font-script text-sm normal-case tracking-normal text-amber-600 font-bold ml-1 hidden md:inline">
                ✦ Studio craft
              </span>
            </div>

            {/* Grand Editorial Headline with Pinterest-Inspired Hollow Stroke & Gradient Text */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] text-ink">
              <span className="block mb-1">
                <span className="inline-block animate-hero-word">WE</span>{' '}
                <span
                  className="inline-block text-stroke-ink hover:text-ink transition-colors duration-300 animate-hero-word"
                  style={{ animationDelay: '80ms' }}
                >
                  BUILD
                </span>
              </span>
              <span className="block">
                <span
                  className="inline-block text-gradient-electric animate-hero-word"
                  style={{ animationDelay: '160ms' }}
                >
                  DIGITAL
                </span>{' '}
                <span
                  className="inline-block text-gradient-coral animate-hero-word"
                  style={{ animationDelay: '240ms' }}
                >
                  EXPERIENCES.
                </span>
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl font-medium">
              Wapp Techies turns ideas into digital products through thoughtful design, modern engineering and practical technology. Explore our interactive studio showcase and proprietary platforms.
            </p>

            {/* Action Buttons: Start Project + Explore Capabilities */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-1">
              <button
                onClick={onOpenQuote}
                className="group relative w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-coral via-rose-500 to-coral text-white text-xs sm:text-sm font-extrabold tracking-wide flex items-center justify-center gap-3 shadow-glow-coral animate-glow-coral button-spring"
              >
                <span>Start Your Project</span>
                <div className="w-5 h-5 rounded-full bg-slate-950/80 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-ivory-200 border border-borderLight text-ink text-xs sm:text-sm font-bold shadow-xs transition-all button-spring"
              >
                <Sparkles className="w-4 h-4 text-electric" />
                <span>Explore Capabilities →</span>
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Cinematic Video Showcase Container */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Container with Video Showcase */}
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-4xl overflow-hidden shadow-2xl border-2 border-white bg-slate-950 group"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
                transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
              }}
            >
              {/* Landing Video Loop from E:\Landing !.mp4 */}
              <video
                src="/videos/landing-hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Subtle Warm Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-transparent to-transparent pointer-events-none" />

              {/* Top HUD Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs z-20 pointer-events-none">
                <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 text-white shadow-xs">
                  STUDIO WORKSPACE
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE DEMO
                </span>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs z-20 pointer-events-none">
                <span className="text-xs font-black tracking-wide text-white drop-shadow-sm">
                  WAPP TECHIES LAB
                </span>
                <span className="font-mono text-[10px] text-slate-300">
                  TAMIL NADU, INDIA
                </span>
              </div>
            </div>

            {/* Floating Glass Capability Card 1: Web Development (Top Left) */}
            <div
              className="hidden sm:flex absolute -top-6 -left-4 sm:-left-8 p-3 rounded-2xl glass-card border border-white/90 shadow-float items-center gap-3 animate-float-slow z-20"
              style={{
                transform: `translate3d(${-mouseOffset.x * 0.6}px, ${-mouseOffset.y * 0.6}px, 0)`,
              }}
            >
              <div className="w-9 h-9 rounded-xl bg-electric text-white flex items-center justify-center shadow-xs">
                <Globe className="w-4 h-4" />
              </div>
              <div className="text-left pr-2">
                <span className="text-[11px] font-bold text-ink block leading-tight">Web Development</span>
                <span className="text-[9px] text-ink-muted">Modern React & SaaS Architecture</span>
              </div>
            </div>

            {/* Floating Glass Capability Card 2: Mobile Apps (Top Right) */}
            <div
              className="hidden sm:flex absolute top-8 -right-3 sm:-right-6 p-3 rounded-2xl glass-card border border-white/90 shadow-float items-center gap-3 animate-float-medium z-20"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.7}px, ${mouseOffset.y * 0.7}px, 0)`,
              }}
            >
              <div className="w-9 h-9 rounded-xl bg-coral text-white flex items-center justify-center shadow-xs">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="text-left pr-2">
                <span className="text-[11px] font-bold text-ink block leading-tight">Mobile Apps</span>
                <span className="text-[9px] text-ink-muted">iOS, Android & GPS Dispatch</span>
              </div>
            </div>

            {/* Floating Glass Capability Card 3: AI & Automation (Bottom Right) */}
            <div
              className="hidden sm:flex absolute -bottom-5 right-2 sm:right-6 p-3 rounded-2xl glass-card border border-white/90 shadow-float items-center gap-3 animate-float-slow z-20"
              style={{
                transform: `translate3d(${-mouseOffset.x * 0.5}px, ${-mouseOffset.y * 0.5}px, 0)`,
              }}
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div className="text-left pr-2">
                <span className="text-[11px] font-bold text-ink block leading-tight">AI & Workflows</span>
                <span className="text-[9px] text-ink-muted">Face Recognition & WhatsApp Bots</span>
              </div>
            </div>

            {/* Floating Glass Capability Card 4: GIS Spatial (Bottom Left) */}
            <div
              className="hidden sm:flex absolute bottom-8 -left-6 p-2.5 rounded-2xl glass-card border border-white/90 shadow-float items-center gap-2.5 animate-float-medium z-20"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.5}px, ${-mouseOffset.y * 0.5}px, 0)`,
              }}
            >
              <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left pr-1">
                <span className="text-[10px] font-bold text-ink block leading-tight">GIS & Spatial</span>
                <span className="text-[9px] text-ink-muted">Vector Maps & GeoJSON</span>
              </div>
            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* BOTTOM EDITORIAL STRIP (Directly Inspired by Pinterest Layout)  */}
        {/* 3 Discipline Columns + Center Spotlight Prompt + Quick Contacts */}
        {/* ============================================================== */}
        <div className="w-full pt-8 sm:pt-10 border-t border-borderLight/80 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left: 3 Editorial Capabilities Columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-electric block tracking-wider">
                01. PLATFORMS
              </span>
              <h4 className="text-xs font-bold text-ink leading-tight">Web & Mobile</h4>
              <p className="text-[10px] text-ink-muted leading-relaxed line-clamp-1">
                Custom React, iOS & Android
              </p>
            </div>

            <div className="space-y-1 sm:border-l border-borderLight/80 sm:pl-4 pt-2 sm:pt-0 border-t sm:border-t-0">
              <span className="text-[10px] font-mono font-bold text-coral block tracking-wider">
                02. AUTOMATION
              </span>
              <h4 className="text-xs font-bold text-ink leading-tight">AI & Integrations</h4>
              <p className="text-[10px] text-ink-muted leading-relaxed line-clamp-1">
                Face Recognition & APIs
              </p>
            </div>

            <div className="space-y-1 sm:border-l border-borderLight/80 sm:pl-4 pt-2 sm:pt-0 border-t sm:border-t-0">
              <span className="text-[10px] font-mono font-bold text-emerald-600 block tracking-wider">
                03. STUDIO LAB
              </span>
              <h4 className="text-xs font-bold text-ink leading-tight">Proprietary Tech</h4>
              <p className="text-[10px] text-ink-muted leading-relaxed line-clamp-1">
                SnapFind, Ull Oor & Dine Easy
              </p>
            </div>
          </div>

          {/* Center: Warm Interactive Spotlight Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              onClick={scrollToServicesStrip}
              className="group px-4 py-2 rounded-2xl bg-amber-100/80 hover:bg-amber-200/90 border border-amber-300/80 text-amber-900 text-[11px] font-extrabold flex items-center gap-2 transition-all button-spring shadow-xs"
              title="Explore Capabilities"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
              <span>Explore Studio</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-amber-700" />
            </button>
          </div>

          {/* Right: Quick Studio Social Handles */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3 text-xs">
            <a
              href="https://www.instagram.com/wapptechies/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-pink-50 border border-borderLight hover:border-pink-200 text-ink-muted hover:text-pink-600 font-semibold transition-all button-spring shadow-2xs"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-500" />
              <span className="text-[11px]">@wapptechies</span>
            </a>

            <a
              href="https://wa.me/918300176274?text=Hello%20Wapp%20Techies,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-emerald-50 border border-borderLight hover:border-emerald-200 text-ink-muted hover:text-[#25D366] font-semibold transition-all button-spring shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="text-[11px]">WhatsApp</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

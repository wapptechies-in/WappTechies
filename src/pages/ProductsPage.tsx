import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  ExternalLink,
  QrCode,
  Navigation,
  Utensils,
  Truck,
  GraduationCap,
  MessageCircle,
  Layers,
  Zap,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

interface ContextType {
  onOpenQuote: () => void;
}

export const ProductsPage: React.FC = () => {
  const { onOpenQuote } = useOutletContext<ContextType>();
  const [activeProductTab, setActiveProductTab] = useState<string>('all');

  const iconMap: Record<string, React.ElementType> = {
    'snapfind-ai': QrCode,
    'ull-oor-auto': Navigation,
    'dine-easy': Utensils,
    'lr-consignment-billing': Truck,
    'student-vault': GraduationCap,
  };

  const filteredProducts = activeProductTab === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.id === activeProductTab);

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Dynamic Ambient Background Light Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-electric/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-coral/10 rounded-full blur-3xl pointer-events-none animate-float-medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Animation */}
        <div className="max-w-3xl mb-12 animate-[heroWordFadeUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-borderLight text-[10px] font-extrabold uppercase tracking-widest text-ink mb-3 shadow-xs">
            <span className="text-coral animate-pulse">❖</span>
            <span>PROPRIETARY INNOVATIONS</span>
            <span className="text-electric">›</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-ink leading-tight">
            Digital Products With{' '}
            <span className="text-gradient-coral">Real-World Purpose.</span>
          </h1>
          <p className="text-sm sm:text-base text-ink-muted mt-4 leading-relaxed font-medium">
            In addition to bespoke client engineering, Wapp Techies conceives and builds proprietary software products designed to streamline daily workflows, empower local transit, and modernize event media.
          </p>

          {/* Product Engine Ticker */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-ink">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-borderLight shadow-2xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              5 Active In-House Platforms
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-borderLight shadow-2xs flex items-center gap-1.5">
              <span className="text-electric">✦</span> Real-World Pilot Tested
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-borderLight shadow-2xs flex items-center gap-1.5">
              <span className="text-coral">⚡</span> Zero License Bloat
            </span>
          </div>
        </div>

        {/* Interactive Product Quick Switcher Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-12 border-b border-borderLight/80">
          <button
            onClick={() => setActiveProductTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all shrink-0 button-spring ${
              activeProductTab === 'all'
                ? 'bg-electric text-white shadow-glow-blue scale-102 ring-2 ring-electric/25'
                : 'bg-white border border-borderLight text-ink-muted hover:text-ink'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>

          {PRODUCTS.map((prod) => {
            const isSelected = activeProductTab === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveProductTab(prod.id)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all shrink-0 button-spring border ${
                  isSelected
                    ? 'bg-white text-ink border-current shadow-md scale-102 ring-2'
                    : 'bg-white/80 text-ink-muted border-borderLight hover:bg-white'
                }`}
                style={{
                  borderColor: isSelected ? prod.accentColor : undefined,
                }}
              >
                <span className="mr-1.5">{prod.title.split(' ')[0]}</span>
                <span
                  className="text-[9px] px-1.5 py-0.5 rounded-md"
                  style={{
                    backgroundColor: prod.accentBg,
                    color: prod.accentColor,
                  }}
                >
                  {prod.status}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Showcase Cards */}
        <div className="space-y-16 mb-24">
          {filteredProducts.map((prod, idx) => {
            const Icon = iconMap[prod.id] || Sparkles;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={prod.id}
                id={prod.id}
                className="rounded-4xl bg-white border border-borderLight overflow-hidden shadow-card hover:shadow-float transition-all duration-500 p-6 sm:p-10 lg:p-12 relative group"
                style={{
                  borderLeftWidth: '6px',
                  borderLeftColor: prod.accentColor,
                }}
              >
                {/* Background Watermark Accent */}
                <div
                  className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-35"
                  style={{ backgroundColor: prod.accentBg }}
                />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Visual Preview (7 cols) with Hover Zoom & Floating HUD */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="rounded-3xl overflow-hidden border border-borderLight shadow-md aspect-[16/10] bg-slate-950 group/img relative">
                      <img
                        src={prod.heroImage}
                        alt={prod.title}
                        className="w-full h-full object-cover group-hover/img:scale-106 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Subtle Overlay Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* Live Status Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span
                          className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-md backdrop-blur-md border border-white/20"
                          style={{ backgroundColor: prod.accentColor }}
                        >
                          {prod.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold border border-white/15 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {prod.status}
                        </span>
                      </div>

                      {/* Bottom Banner Title */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] uppercase font-bold text-slate-300 block">
                          Flagship Product Line
                        </span>
                        <h4 className="text-base font-extrabold text-white truncate drop-shadow-sm">
                          {prod.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Product Details (5 cols) */}
                  <div className={`lg:col-span-5 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: prod.accentBg, color: prod.accentColor }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-black uppercase tracking-wider text-ink-muted block">
                            {prod.category}
                          </span>
                          <span className="text-[11px] font-bold text-ink">
                            Production Ready
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-1">
                        {prod.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-bold leading-relaxed" style={{ color: prod.accentColor }}>
                        "{prod.tagline}"
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium">
                      {prod.description}
                    </p>

                    {/* Verified Features Checklist */}
                    <div className="space-y-2 pt-2 border-t border-borderLight/80">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-ink-muted block">
                        Verified Architecture Features:
                      </span>
                      {prod.verifiedFeatures.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs font-semibold text-ink">
                          <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: prod.accentColor }} />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons: Roadmap Link + WhatsApp Direct */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-2.5">
                      <Link
                        to={`/products/${prod.slug}`}
                        className="px-6 py-3.5 rounded-full bg-ink hover:bg-electric text-white text-xs font-extrabold transition-all shadow-sm flex items-center justify-center gap-2 button-spring"
                      >
                        <span>Product Roadmap & Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={`https://wa.me/918300176274?text=${encodeURIComponent(`Hello Wapp Techies, I would like to inquire about ${prod.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-extrabold flex items-center justify-center gap-2 transition-all button-spring shadow-2xs"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Chat via WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership & Early Access Callout */}
        <div className="p-8 sm:p-12 rounded-4xl bg-gradient-to-br from-white via-ivory-100 to-white border border-borderLight text-center max-w-3xl mx-auto shadow-elevated relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-electric block">
              Pilot Deployments & Partnerships
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-ink">
              Interested in piloting or integrating our products?
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed max-w-xl mx-auto font-medium">
              We actively collaborate with photographers, transport operators, hospitality hubs, and educational institutions for customized deployments.
            </p>
            <div className="pt-4">
              <button
                onClick={onOpenQuote}
                className="px-7 py-3.5 rounded-full bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm font-extrabold transition-all shadow-glow-blue button-spring"
              >
                Apply for Pilot Deployment →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ArrowRight, Sparkles, MessageCircle, Phone, Mail, Clock, CheckCircle2, Laptop, Smartphone, Bot, MapPin, Database } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface FinalCtaSectionProps {
  onOpenQuote: () => void;
}

interface ProjectScopeOption {
  id: string;
  label: string;
  icon: React.ElementType;
  estimatedTimeline: string;
  deliverables: string;
  highlight: string;
  defaultMsg: string;
}

const SCOPE_OPTIONS: ProjectScopeOption[] = [
  {
    id: 'web',
    label: 'Web Application',
    icon: Laptop,
    estimatedTimeline: '2 – 4 Weeks',
    deliverables: 'Architecture + Figma Design + React Frontend + Cloud Deploy',
    highlight: 'Ultra-fast Core Web Vitals & Clean Type-Safe Code',
    defaultMsg: 'Hello Wapp Techies, I would like to build a Web Application project.',
  },
  {
    id: 'mobile',
    label: 'Mobile App',
    icon: Smartphone,
    estimatedTimeline: '3 – 6 Weeks',
    deliverables: 'Native iOS & Android Builds + Store Submission + Backend APIs',
    highlight: 'Fluid 60fps Micro-interactions & Offline Caching',
    defaultMsg: 'Hello Wapp Techies, I would like to develop a Mobile App for iOS & Android.',
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    icon: Bot,
    estimatedTimeline: '2 – 4 Weeks',
    deliverables: 'Custom Computer Vision / LLM Agent + WhatsApp API Bot',
    highlight: 'Automated 24/7 Lead Qualifiers & Instant Customer Support',
    defaultMsg: 'Hello Wapp Techies, I am interested in an AI & WhatsApp Automation solution.',
  },
  {
    id: 'gis',
    label: 'GIS & Spatial Map',
    icon: MapPin,
    estimatedTimeline: '3 – 5 Weeks',
    deliverables: 'Interactive Map Visualizer + GeoJSON Engine + Routing Tools',
    highlight: 'Vector Tile Layering & Realtime Asset Tracking',
    defaultMsg: 'Hello Wapp Techies, I would like to discuss a GIS and Mapping platform.',
  },
  {
    id: 'erp',
    label: 'Custom Cloud ERP',
    icon: Database,
    estimatedTimeline: '4 – 8 Weeks',
    deliverables: 'Role-Based Access + Inventory / Billing + Automated Reports',
    highlight: 'Tailored specifically to your business operations',
    defaultMsg: 'Hello Wapp Techies, I need a Custom ERP and Internal Management tool.',
  },
];

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenQuote }) => {
  const [selectedScope, setSelectedScope] = useState<string>('web');
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const activeOption = SCOPE_OPTIONS.find((opt) => opt.id === selectedScope) || SCOPE_OPTIONS[0];

  const waUrl = `https://wa.me/918300176274?text=${encodeURIComponent(activeOption.defaultMsg)}`;

  return (
    <section ref={ref} className="py-20 sm:py-24 bg-ink-deep text-white relative overflow-hidden">
      {/* Dynamic ambient floating gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric/25 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-coral/20 rounded-full blur-3xl pointer-events-none animate-float-medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`rounded-4xl bg-gradient-to-br from-slate-900/95 via-ink/95 to-slate-950 border border-white/15 p-6 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
          }`}
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-coral animate-pulse" />
                <span>START YOUR DIGITAL JOURNEY</span>
                <span className="text-electric font-bold">›</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-[1.08]">
                Let's Build Something <br />
                <span className="text-gradient-shine">
                  Amazing Together.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                Have an ambitious idea, a business workflow to automate, or a mission-critical digital product? Our engineering studio turns your vision into a measurable competitive advantage.
              </p>

              {/* Trust Value Badges */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct collaboration with senior engineers & architects</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent fixed-milestone pricing & weekly demo reviews</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% code ownership, intellectual property & documentation</span>
                </div>
              </div>

              {/* Main Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-electric hover:bg-white hover:text-ink text-white text-xs sm:text-sm font-extrabold tracking-wide flex items-center justify-center gap-3 shadow-glow-blue transition-all group button-spring"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2.5 transition-all shadow-md button-spring"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>

              {/* Direct Reach Strip */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <a
                  href="tel:+918300176274"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-coral" />
                  <span>+91 83001 76274</span>
                </a>
                <span className="text-white/20">•</span>
                <a
                  href="mailto:wapptechies@gmail.com"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-electric" />
                  <span>wapptechies@gmail.com</span>
                </a>
              </div>

            </div>

            {/* Right Graphic: Interactive Scope & Estimator Console (6 cols) */}
            <div className="lg:col-span-6">
              <div className="p-5 sm:p-7 rounded-3xl bg-slate-950/90 border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                
                {/* Console Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-md border border-white/30 shrink-0">
                      <img
                        src="/images/wapp-techies-icon.png"
                        alt="Wapp Techies"
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-black tracking-wider text-white uppercase block">
                        Project Scope Console
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Interactive Studio Estimator
                      </span>
                    </div>
                  </div>

                  {/* Availability Beacon */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[10px] font-bold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Slot Available</span>
                  </div>
                </div>

                {/* Project Category Selector Chips */}
                <div className="space-y-1.5 mb-5">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                    1. Select Project Type:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SCOPE_OPTIONS.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = opt.id === selectedScope;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => setSelectedScope(opt.id)}
                          className={`p-2.5 rounded-xl text-left transition-all border flex items-center gap-2 ${
                            isSelected
                              ? 'bg-electric text-white border-electric shadow-glow-blue scale-102'
                              : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                          <span className="text-xs font-bold truncate">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Dynamic Estimation Preview Card */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 mb-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span>Estimated Sprint Time:</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-black">
                      {activeOption.estimatedTimeline}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Included Deliverables Pack:
                    </span>
                    <p className="text-xs font-semibold text-white leading-relaxed">
                      {activeOption.deliverables}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
                    <span>✦</span>
                    <span>{activeOption.highlight}</span>
                  </div>
                </div>

                {/* Direct Action for Selected Scope */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all button-spring"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span className="truncate">Discuss {activeOption.label} on WhatsApp</span>
                  </a>

                  <button
                    onClick={onOpenQuote}
                    className="py-3 px-4 rounded-xl bg-electric hover:bg-electric-dark text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all button-spring shadow-sm shrink-0"
                  >
                    <span>Request Full Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

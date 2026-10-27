import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { COMPANY } from '../data/company';
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Heart,
  Code2,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Phone,
  Layers,
  Cpu,
  Target,
  Zap,
  Globe2,
  MapPin,
  ChevronRight,
} from 'lucide-react';

interface ContextType {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC = () => {
  const { onOpenQuote } = useOutletContext<ContextType>();
  const [activeDnaTab, setActiveDnaTab] = useState<'client' | 'lab'>('client');

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Dynamic Ambient Background Light Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-electric/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-coral/10 rounded-full blur-3xl pointer-events-none animate-float-medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header */}
        <div className="max-w-3xl mb-16 animate-[heroWordFadeUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-borderLight text-[10px] font-extrabold uppercase tracking-widest text-ink mb-3 shadow-xs">
            <span className="text-electric animate-spin" style={{ animationDuration: '6s' }}>❖</span>
            <span>ABOUT WAPP TECHIES</span>
            <span className="text-coral">›</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-ink leading-tight">
            We Bring Ideas, Design and{' '}
            <span className="text-gradient-electric">Technology Together.</span>
          </h1>
          <p className="text-sm sm:text-base text-ink-muted mt-4 leading-relaxed font-medium">
            Wapp Techies is an independent creative digital engineering studio based in Tamil Nadu, India. We partner with ambitious founders, enterprises, and creators to engineer digital products that generate measurable commercial and community impact.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-ink">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-borderLight shadow-2xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Tamil Nadu, India Studio
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-borderLight shadow-2xs flex items-center gap-1.5">
              <span className="text-coral">✦</span> Direct Lead Engineers
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-borderLight shadow-2xs flex items-center gap-1.5">
              <span className="text-electric">✓</span> Fixed Milestones & Source Ownership
            </span>
          </div>
        </div>

        {/* Mission & Vision Cards with 3D Hover & Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-4xl bg-white border border-borderLight shadow-card hover:shadow-float hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-electric group-hover:h-1.5 transition-all" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-electric-subtle text-electric flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-electric block mb-1">
                Our Core Mission
              </span>
              <h2 className="text-2xl font-black text-ink mb-3 tracking-tight">
                Making Technology Genuinely Useful
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium">
                "{COMPANY.mission}"
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-borderLight flex items-center justify-between text-xs font-bold text-ink-muted">
              <span>Usability • Clean Code • Measurable Impact</span>
              <Target className="w-4 h-4 text-electric" />
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-4xl bg-white border border-borderLight shadow-card hover:shadow-float hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-coral group-hover:h-1.5 transition-all" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-coral-soft text-coral flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 group-hover:-rotate-6 transition-all">
                <Sparkles className="w-7 h-7" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-coral block mb-1">
                Our Studio Vision
              </span>
              <h2 className="text-2xl font-black text-ink mb-3 tracking-tight">
                Long-Term Engineering Excellence
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium">
                "{COMPANY.vision}"
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-borderLight flex items-center justify-between text-xs font-bold text-ink-muted">
              <span>Scalable Foundations • Digital Products • Regional Impact</span>
              <Zap className="w-4 h-4 text-coral" />
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE DUAL DNA SWITCHER: CLIENT LAB vs IN-HOUSE LAB      */}
        {/* ============================================================== */}
        <div className="rounded-4xl bg-white border border-borderLight p-6 sm:p-10 lg:p-12 mb-20 shadow-elevated relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-borderLight/80 mb-8">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink-muted block mb-1">
                Our Operating Model
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-ink">
                The Dual DNA of Wapp Techies
              </h2>
            </div>

            {/* Interactive Toggle Pill */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-ivory-100 border border-borderLight shadow-2xs self-start sm:self-auto">
              <button
                onClick={() => setActiveDnaTab('client')}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all button-spring ${
                  activeDnaTab === 'client'
                    ? 'bg-electric text-white shadow-sm'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                1. Client Engineering
              </button>
              <button
                onClick={() => setActiveDnaTab('lab')}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all button-spring ${
                  activeDnaTab === 'lab'
                    ? 'bg-coral text-white shadow-sm'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                2. In-House Product Lab
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 cols: Tab Content */}
            <div className="lg:col-span-7 space-y-4">
              {activeDnaTab === 'client' ? (
                <div className="space-y-4 animate-[heroWordFadeUp_0.35s_cubic-bezier(0.16,1,0.3,1)]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-subtle text-electric text-xs font-bold">
                    <span>✦</span> Bespoke Client Software Engineering
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-ink leading-snug">
                    Architecting high-converting websites, web apps & custom platforms.
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium">
                    We work directly with founders and business owners. From responsive marketing portals and e-commerce websites to custom consignment ERPs and WhatsApp automation bots, we handle the full stack with zero agency fluff.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {[
                      'Frontend Web Engineering (React, Vite, Next.js)',
                      'Mobile App Development (iOS & Android)',
                      'Custom ERP & Billing Systems',
                      'WhatsApp Business API Automations',
                    ].map((item) => (
                      <div
                        key={item}
                        className="p-3 rounded-2xl bg-ivory-100/80 border border-borderLight flex items-center gap-2.5 text-xs font-bold text-ink"
                      >
                        <CheckCircle2 className="w-4 h-4 text-electric shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={onOpenQuote}
                      className="px-6 py-3 rounded-full bg-electric hover:bg-electric-dark text-white text-xs font-bold flex items-center gap-2 shadow-glow-blue button-spring"
                    >
                      <span>Inquire About Client Engineering</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-[heroWordFadeUp_0.35s_cubic-bezier(0.16,1,0.3,1)]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-soft text-coral text-xs font-bold">
                    <span>❖</span> Proprietary Software Products
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-ink leading-snug">
                    Inventing our own software solutions for real-world everyday friction.
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium">
                    We do not just build for others; we also build our own products. This sharpens our engineering discipline, keeps our architecture cutting-edge, and lets us ship solutions that solve immediate regional challenges.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {[
                      'SnapFind AI: Instant Face Recognition Gallery',
                      'Ull Oor Auto: Hyperlocal Mobility Hailing',
                      'Dine Easy: Contactless QR Restaurant Suite',
                      'LR Consignment: Freight & Lorry Receipt ERP',
                    ].map((item) => (
                      <div
                        key={item}
                        className="p-3 rounded-2xl bg-ivory-100/80 border border-borderLight flex items-center gap-2.5 text-xs font-bold text-ink"
                      >
                        <CheckCircle2 className="w-4 h-4 text-coral shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral hover:bg-rose-600 text-white text-xs font-bold shadow-glow-coral button-spring"
                    >
                      <span>Explore In-House Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 cols: Studio Verification Badge */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-ivory-100 border border-borderLight shadow-sm space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b border-borderLight">
                  <div className="w-14 h-14 rounded-2xl bg-white p-1.5 shadow-md border border-borderLight overflow-hidden shrink-0">
                    <img
                      src="/images/wapp-techies-icon.png"
                      alt="Wapp Techies Official Logo"
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-ink">Wapp Techies Studio</h3>
                    <p className="text-[11px] text-ink-muted">Ideas Into Impact • Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-borderLight/60">
                    <span className="text-ink-muted font-semibold">Location:</span>
                    <span className="font-bold text-ink flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-coral" /> Tamil Nadu, India
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-borderLight/60">
                    <span className="text-ink-muted font-semibold">Direct Phone/WhatsApp:</span>
                    <a href="tel:+918300176274" className="font-bold text-electric hover:underline">
                      +91 83001 76274
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-ink-muted font-semibold">Official Email:</span>
                    <a href="mailto:wapptechies@gmail.com" className="font-bold text-electric hover:underline">
                      wapptechies@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/918300176274?text=Hello%20Wapp%20Techies,%20I%20would%20like%20to%20discuss%20a%20collaboration."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-2xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all shadow-sm button-spring"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat With Studio Leads</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Studio Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-coral block mb-1">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-ink">Our Core Values</h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-2 font-medium">
              The fundamental engineering beliefs that steer our software decisions and client partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY.values.map((v, i) => (
              <div
                key={v.title}
                className="p-6 rounded-3xl bg-white border border-borderLight shadow-sm hover:shadow-float hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <span className="text-xs font-black text-electric block mb-2 group-hover:scale-110 transition-transform origin-left">
                  0{i + 1}
                </span>
                <h3 className="text-sm font-black text-ink mb-1 group-hover:text-electric transition-colors">
                  {v.title}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team & Collaboration Culture */}
        <div className="p-8 sm:p-12 rounded-4xl bg-gradient-to-br from-white via-ivory-100 to-white border border-borderLight text-center max-w-4xl mx-auto mb-16 shadow-elevated relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-ink-muted block">
              Direct Collaboration Culture
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-ink tracking-tight">
              A Focused Team of Multi-Disciplinary Craftsmen
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed max-w-2xl mx-auto font-medium">
              Rather than maintaining bloated layers of account managers, Wapp Techies operates as an agile studio where clients work directly with senior designers, full-stack engineers, and product strategists.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="px-7 py-3.5 rounded-full bg-ink hover:bg-electric text-white text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 shadow-md button-spring"
              >
                <span>Work With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/work"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-ivory-200 border border-borderLight text-ink text-xs sm:text-sm font-bold transition-all button-spring shadow-2xs"
              >
                Explore Our Work →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

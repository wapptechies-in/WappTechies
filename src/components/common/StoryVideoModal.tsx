import React from 'react';
import { X, Play, Code, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface StoryVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryVideoModal: React.FC<StoryVideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-borderLight overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-ink text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white p-0.5 shadow-md overflow-hidden shrink-0 border border-slate-700">
              <img
                src="/images/wapp-techies-icon.png"
                alt="Wapp Techies"
                className="w-full h-full rounded-[10px] object-cover"
              />
            </div>
            <div>
              <h3 className="font-extrabold text-sm">The Wapp Techies Story</h3>
              <p className="text-[11px] text-white/70">Creative Digital Engineering in Action</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            aria-label="Close story"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Story Visual & Editorial Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Visual Showcase Card */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-ink via-ink-dark to-electric-dark p-6 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-electric/40 text-electric-subtle border border-electric/30 uppercase tracking-widest">
                Our Studio Philosophy
              </span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-snug">
                Turning ambitious ideas into tangible digital realities.
              </h2>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-xl">
                Founded with a mission to merge artful UI/UX design with rigorous full-stack engineering, Wapp Techies operates at the crossroads of creative storytelling and resilient software architecture.
              </p>
            </div>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-ivory-100 border border-borderLight space-y-2">
              <div className="w-8 h-8 rounded-xl bg-electric/10 text-electric flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-ink">Design Distinction</h4>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Rejecting cookie-cutter templates in favor of tailored typographic systems, warm palettes, and purposeful interactions.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-100 border border-borderLight space-y-2">
              <div className="w-8 h-8 rounded-xl bg-coral/10 text-coral flex items-center justify-center">
                <Code className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-ink">Modern Engineering</h4>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Clean, type-safe code written with modern web, mobile, and cloud frameworks engineered to scale without technical debt.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-100 border border-borderLight space-y-2">
              <div className="w-8 h-8 rounded-xl bg-mint/40 text-emerald-700 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-ink">Product Thinking</h4>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Building proprietary digital products (SnapFind AI, Ull Oor Auto, Dine Easy) alongside client solutions.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-borderLight flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <p className="text-xs text-ink font-semibold">
                Ready to bring your digital vision to life?
              </p>
            </div>
            <a
              href="/contact"
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-ink text-white text-xs font-bold hover:bg-electric transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


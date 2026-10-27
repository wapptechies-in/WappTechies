import React from 'react';
import { Handshake, HeartHandshake, Eye, ShieldCheck, MessageCircle, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ApproachTrustSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const principles = [
    {
      icon: Eye,
      title: 'Full Process Visibility',
      desc: 'You have complete visibility into code branches, design files, sprint boards, and staging environments at all times.',
      color: 'bg-purple-100 text-purple-700 border border-purple-200',
    },
    {
      icon: Handshake,
      title: 'Fixed Milestones & Honest Scoping',
      desc: 'We define exact deliverables before kicking off work, preventing scope creep and ensuring both sides are aligned on deliverables.',
      color: 'bg-coral-soft text-coral-dark border border-coral/20',
    },
    {
      icon: HeartHandshake,
      title: 'Direct Engineer & Designer Access',
      desc: 'You collaborate directly with the people building your product, eliminating game-of-telephone miscommunications.',
      color: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    },
    {
      icon: ShieldCheck,
      title: 'Complete IP & Code Sovereignty',
      desc: 'Once the project is complete, you own 100% of the repository, assets, and documentation. No vendor lock-in or proprietary traps.',
      color: 'bg-electric-subtle text-electric-dark border border-electric/20',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-ivory relative overflow-hidden">
      {/* Warm ambient dot texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="section-pill-badge mb-2">
            <span className="text-electric">❖</span>
            <span>OUR APPROACH</span>
            <span className="text-coral">›</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Better Work Begins With Better Collaboration.
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
            We believe the strongest digital products emerge from genuine trust, direct communication, and shared respect for craft.
          </p>
        </div>

        {/* 4 Partnership Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                style={{
                  transitionDelay: `${idx * 80}ms`,
                }}
                className={`p-6 rounded-3xl bg-white border border-borderLight shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-2xl ${p.color} flex items-center justify-center mb-4 shadow-2xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-ink group-hover:text-electric transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Client Feedback Placeholder Banner */}
        <div
          className={`p-6 sm:p-8 rounded-3xl bg-white/90 border border-dashed border-borderLight text-center max-w-3xl mx-auto shadow-xs relative overflow-hidden transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="w-11 h-11 rounded-2xl bg-ivory-200 text-ink-muted mx-auto flex items-center justify-center mb-3 shadow-2xs">
            <MessageCircle className="w-5 h-5 text-electric animate-pulse" />
          </div>
          <div className="flex items-center justify-center gap-1.5 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <h4 className="text-sm font-bold text-ink">
              Verified Client Reviews & Partner Outcomes
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed max-w-md mx-auto">
            Wapp Techies upholds a strict policy against fictional reviews or invented testimonials. Verified client feedback, approved logos, and case outcomes will appear here as formal case studies conclude.
          </p>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Sparkles, Layers, MessageSquare, TrendingUp, Check } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const WhyWappTechiesSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const strengths = [
    {
      icon: Sparkles,
      color: 'bg-electric text-white',
      title: 'Solutions Tailored to Your Business',
      desc: 'We do not sell pre-packaged, rigid templates. Every digital experience is architected around your exact operational model, brand voice, and customer expectations.',
      points: ['No off-the-shelf bloat', 'Custom data structures', 'Tailored user journeys'],
      pillBg: 'bg-electric-subtle/70 text-electric-dark border border-electric/20',
      checkColor: 'text-electric',
    },
    {
      icon: Layers,
      color: 'bg-coral text-white',
      title: 'Design and Engineering Working Together',
      desc: 'Creative art direction and rigorous software engineering are not separate silos. Our designers write code and our engineers understand typography and micro-interactions.',
      points: ['Pixel-perfect execution', 'Fluid motion & micro-interactions', 'Performance-optimized assets'],
      pillBg: 'bg-coral-soft/70 text-coral-dark border border-coral/20',
      checkColor: 'text-coral',
    },
    {
      icon: MessageSquare,
      color: 'bg-emerald-600 text-white',
      title: 'Clear Communication & Defined Milestones',
      desc: 'No technical jargon or radio silence. You receive predictable sprint roadmaps, live staging previews, and transparent progress updates throughout.',
      points: ['Weekly staging demos', 'Fixed-scope predictability', 'Direct developer access'],
      pillBg: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
      checkColor: 'text-emerald-600',
    },
    {
      icon: TrendingUp,
      color: 'bg-purple-600 text-white',
      title: 'Flexible Foundations for Future Growth',
      desc: 'We engineer modular components and decoupled data models that can expand as your business scales, preventing costly rewrites down the road.',
      points: ['Scalable cloud hosting', 'Clean, documented codebase', '100% IP ownership on delivery'],
      pillBg: 'bg-purple-50 text-purple-800 border border-purple-200',
      checkColor: 'text-purple-600',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white/60 via-ivory-50/50 to-white/70 border-b border-borderLight/80 relative overflow-hidden">
      {/* Warm atmospheric glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-coral/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="section-pill-badge mb-2">
            <span className="text-electric">❖</span>
            <span>WHY WAPP TECHIES</span>
            <span className="text-coral">›</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink flex items-center justify-center gap-1.5">
            <span>Built Around Your Ideas</span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-coral animate-pulse" />
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
            We partner with businesses, entrepreneurs, and creators who value thoughtful execution, dependable engineering, and lasting digital utility.
          </p>
        </div>

        {/* 4 Editorial Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
                className={`p-8 rounded-3xl bg-white border border-borderLight shadow-card hover:shadow-float hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-ink group-hover:text-electric transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-borderLight/60 flex flex-wrap gap-2">
                  {item.points.map((p) => (
                    <span
                      key={p}
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1 rounded-full shadow-2xs ${item.pillBg}`}
                    >
                      <Check className={`w-3 h-3 ${item.checkColor}`} />
                      <span>{p}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

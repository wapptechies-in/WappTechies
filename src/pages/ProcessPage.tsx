import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { PROCESS_STAGES } from '../data/process';
import { ArrowRight, Compass, Calendar, PenTool, Code2, CheckCircle2, LifeBuoy, Sparkles, Check } from 'lucide-react';

interface ContextType {
  onOpenQuote: () => void;
}

export const ProcessPage: React.FC = () => {
  const { onOpenQuote } = useOutletContext<ContextType>();

  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Calendar,
    PenTool,
    Code2,
    CheckCircle2,
    LifeBuoy,
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-borderLight text-[10px] font-extrabold uppercase tracking-widest text-ink mb-3 shadow-xs">
            <span className="text-electric">❖</span>
            <span>HOW WE WORK</span>
            <span className="text-coral">›</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-ink leading-tight">
            From Idea to Impact.
          </h1>
          <p className="text-sm sm:text-base text-ink-muted mt-4 leading-relaxed">
            Great software is never built by accident. We adhere to a structured, human-centered six-stage execution methodology that balances exploratory creativity with disciplined engineering.
          </p>
        </div>

        {/* 6 Stages Deep Dive */}
        <div className="space-y-12 mb-20">
          {PROCESS_STAGES.map((stage, idx) => {
            const Icon = iconMap[stage.icon] || Sparkles;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={stage.step}
                className="p-8 sm:p-12 rounded-4xl bg-white border border-borderLight shadow-card hover:shadow-float transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Left Column (Stage info) */}
                  <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-sm font-black px-3 py-1 rounded-xl"
                        style={{ backgroundColor: stage.accentBg, color: stage.accentColor }}
                      >
                        STAGE {stage.step}
                      </span>
                      <span className="text-xs font-bold text-ink-muted uppercase tracking-wider">
                        {stage.subtitle}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
                      {stage.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2">
                        Key Activities in this Stage:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {stage.keyActivities.map((act) => (
                          <div key={act} className="flex items-start gap-2 text-xs text-ink leading-snug">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Deliverable & Graphic Badge) */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div
                      className="p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-4"
                      style={{ backgroundColor: stage.accentBg }}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md bg-white"
                        style={{ color: stage.accentColor }}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest block text-ink-muted">
                          Official Stage Deliverable
                        </span>
                        <h4 className="text-sm sm:text-base font-extrabold text-ink mt-1">
                          {stage.deliverable}
                        </h4>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Ready to begin callout */}
        <div className="p-8 sm:p-12 rounded-4xl bg-ink text-white text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to kick off Stage 01?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto mb-6">
            We start every engagement with a zero-obligation discovery call to analyze your requirements and outline a realistic project roadmap.
          </p>
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-full bg-electric hover:bg-white hover:text-ink text-white text-xs font-bold tracking-wide transition-all shadow-glow-blue"
          >
            Start Your Project Discovery →
          </button>
        </div>

      </div>
    </div>
  );
};


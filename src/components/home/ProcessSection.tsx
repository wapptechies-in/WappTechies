import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Compass,
  Calendar,
  PenTool,
  Code2,
  CheckCircle2,
  LifeBuoy,
  Sparkles,
  Play,
  Pause,
  ChevronRight,
  CheckCircle,
  Package,
} from 'lucide-react';
import { PROCESS_STAGES } from '../../data/process';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ProcessSectionProps {
  onOpenQuote: () => void;
}

const STAGE_INTERVAL_MS = 5000;

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressTimerRef = useRef<number | null>(null);
  const stageNavRef = useRef<HTMLDivElement | null>(null);

  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Calendar,
    PenTool,
    Code2,
    CheckCircle2,
    LifeBuoy,
  };

  const currentStage = PROCESS_STAGES[activeStep];

  // Auto-advancing workflow engine timer
  useEffect(() => {
    if (!isPlaying || !isVisible) {
      if (progressTimerRef.current) cancelAnimationFrame(progressTimerRef.current);
      return;
    }

    let startTime = performance.now();

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min((elapsed / STAGE_INTERVAL_MS) * 100, 100);
      setProgress(pct);

      if (elapsed >= STAGE_INTERVAL_MS) {
        setActiveStep((prev) => (prev + 1) % PROCESS_STAGES.length);
        startTime = performance.now();
        setProgress(0);
      }

      progressTimerRef.current = requestAnimationFrame(updateProgress);
    };

    progressTimerRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (progressTimerRef.current) cancelAnimationFrame(progressTimerRef.current);
    };
  }, [isPlaying, isVisible, activeStep]);

  // Keep mobile tab in view when stage changes
  useEffect(() => {
    if (stageNavRef.current) {
      const activeEl = stageNavRef.current.children[activeStep] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeStep]);

  const handleSelectStage = (idx: number) => {
    setActiveStep(idx);
    setProgress(0);
  };

  const handleNextStage = () => {
    setActiveStep((prev) => (prev + 1) % PROCESS_STAGES.length);
    setProgress(0);
  };

  return (
    <section ref={ref} className="py-20 sm:py-24 bg-ivory relative overflow-hidden">
      {/* Subtle background ambient dot texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      {/* Floating Ambient Warm Glows */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40 transition-colors duration-700"
        style={{ backgroundColor: currentStage.accentBg }}
      />
      <div
        className="absolute bottom-10 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30 transition-colors duration-700"
        style={{ backgroundColor: currentStage.accentBg }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="section-pill-badge mb-2.5">
              <span className="text-electric animate-spin" style={{ animationDuration: '8s' }}>❖</span>
              <span>HOW WE WORK</span>
              <span className="text-coral">›</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink flex flex-wrap items-center gap-3">
              <span>From Idea to Impact</span>
              <span className="text-gradient-coral font-script font-normal text-3xl sm:text-4xl normal-case tracking-normal">
                — Our Process
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-ink-muted mt-2 max-w-2xl leading-relaxed">
              A transparent, structured six-stage execution roadmap designed to turn ambitious concepts into reliable, high-performance digital products with zero guesswork.
            </p>
          </div>

          {/* Interactive Engine Controls & Process Methodology Link */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Auto-cycle Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3.5 py-1.5 rounded-full bg-white border border-borderLight shadow-2xs hover:shadow-xs text-ink text-xs font-semibold flex items-center gap-2 transition-all button-spring"
              title={isPlaying ? 'Pause Auto-cycle' : 'Resume Auto-cycle'}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: isPlaying ? '#10B981' : '#94A3B8' }}
              />
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-ink-muted" />
                  <span className="text-[11px]">Auto Moving</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-electric fill-electric" />
                  <span className="text-[11px]">Play Motion</span>
                </>
              )}
            </button>

            <Link
              to="/process"
              className="text-xs font-bold text-electric hover:underline flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-electric-subtle/50 hover:bg-electric-subtle border border-electric/20 transition-colors"
            >
              <span>Process Deep Dive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP CONNECTING TRACK & ANIMATED LASER BEAM                 */}
        {/* ============================================================== */}
        <div className="relative">
          
          {/* Animated Connecting SVG Line on Desktop */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-6 -z-0 pointer-events-none">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="processTrackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#155EEF" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#FF6848" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.25" />
                </linearGradient>
              </defs>
              {/* Background dashed track */}
              <line
                x1="0"
                y1="3"
                x2="100%"
                y2="3"
                stroke="url(#processTrackGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />
              {/* Dynamic Animated Laser Pulse Indicator */}
              <circle
                cx={`${(activeStep / (PROCESS_STAGES.length - 1)) * 100}%`}
                cy="3"
                r="6"
                fill={currentStage.accentColor}
                className="transition-all duration-500 ease-out shadow-lg"
              />
            </svg>
          </div>

          {/* Mobile Horizontal Stage Selector (Touch friendly swipe pills) */}
          <div
            ref={stageNavRef}
            className="flex lg:hidden overflow-x-auto no-scrollbar gap-2.5 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 mb-4 snap-x snap-mandatory"
          >
            {PROCESS_STAGES.map((stage, idx) => {
              const Icon = iconMap[stage.icon] || Sparkles;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={`mobile-${stage.step}`}
                  onClick={() => handleSelectStage(idx)}
                  className={`snap-center shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all border ${
                    isSelected
                      ? 'bg-white text-ink border-current shadow-md scale-102 ring-2'
                      : 'bg-white/80 text-ink-muted border-borderLight hover:bg-white'
                  }`}
                  style={{
                    borderColor: isSelected ? stage.accentColor : undefined,
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-lg text-[10px] font-black flex items-center justify-center"
                    style={{
                      backgroundColor: stage.accentBg,
                      color: stage.accentColor,
                    }}
                  >
                    {stage.step}
                  </span>
                  <span>{stage.title}</span>
                  <Icon className="w-3.5 h-3.5" style={{ color: stage.accentColor }} />
                </button>
              );
            })}
          </div>

          {/* Desktop & Tablet 6-Stage Interactive Cards Grid */}
          <div className="hidden lg:grid grid-cols-6 gap-3.5 relative z-10">
            {PROCESS_STAGES.map((stage, idx) => {
              const Icon = iconMap[stage.icon] || Sparkles;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={stage.step}
                  onClick={() => handleSelectStage(idx)}
                  onMouseEnter={() => {
                    setIsPlaying(false);
                    setActiveStep(idx);
                  }}
                  onMouseLeave={() => setIsPlaying(true)}
                  style={{
                    transitionDelay: `${idx * 60}ms`,
                    borderColor: isSelected ? stage.accentColor : '#E9E5DF',
                  }}
                >
                  {/* Active Step Realtime Progress Bar */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl overflow-hidden bg-slate-100">
                      <div
                        className="h-full transition-all duration-100 ease-linear rounded-t-3xl"
                        style={{
                          width: `${progress}%`,
                          backgroundColor: stage.accentColor,
                        }}
                      />
                    </div>
                  )}

                  <div>
                    {/* Top Row: Step Tag + Glowing Icon */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span
                        className="text-xs font-black px-2.5 py-0.5 rounded-lg shadow-2xs transition-transform duration-300"
                        style={{
                          backgroundColor: stage.accentBg,
                          color: stage.accentColor,
                        }}
                      >
                        {stage.step}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-2xl flex items-center justify-center shadow-xs transition-all duration-300 ${
                          isSelected ? 'scale-110 rotate-6 shadow-md' : ''
                        }`}
                        style={{
                          backgroundColor: stage.accentBg,
                          color: stage.accentColor,
                        }}
                      >
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    <h3 className="text-sm font-extrabold text-ink mb-1">{stage.title}</h3>
                    <p className="text-[11px] font-semibold text-ink-muted leading-tight">
                      {stage.subtitle}
                    </p>
                  </div>

                  {/* Micro Deliverable Peek */}
                  <div className="mt-4 pt-3 border-t border-borderLight/70 flex items-center justify-between text-[10px] text-ink-muted font-medium">
                    <span className="truncate pr-1">{stage.deliverable.split(' ')[0]} Pack</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                        isSelected ? 'translate-x-1' : ''
                      }`}
                      style={{ color: isSelected ? stage.accentColor : '#94A3B8' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ============================================================== */}
        {/* INNOVATIVE ACTIVE STAGE COCKPIT & DELIVERABLES RADAR           */}
        {/* ============================================================== */}
        <div
          key={`stage-cockpit-${activeStep}`}
          className="mt-6 sm:mt-8 p-6 sm:p-8 lg:p-10 rounded-4xl bg-white border border-borderLight shadow-elevated relative overflow-hidden animate-[heroWordFadeUp_0.4s_cubic-bezier(0.16,1,0.3,1)]"
          style={{
            borderLeftWidth: '6px',
            borderLeftColor: currentStage.accentColor,
          }}
        >
          {/* Subtle Stage Accent Watermark Number */}
          <span
            className="absolute -right-4 -bottom-10 text-[120px] sm:text-[160px] font-black opacity-5 select-none pointer-events-none font-mono"
            style={{ color: currentStage.accentColor }}
          >
            {currentStage.step}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left 7 cols: Stage Details, Activities & Value */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className="text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider"
                  style={{
                    backgroundColor: currentStage.accentBg,
                    color: currentStage.accentColor,
                  }}
                >
                  Stage {currentStage.step} of 06
                </span>
                <span className="text-xs font-mono font-bold text-ink-muted">
                  • {currentStage.subtitle}
                </span>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  ✦ Transparent Milestones
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-ink tracking-tight flex items-center gap-3">
                <span>{currentStage.title}</span>
                <span className="text-xs font-bold text-ink-muted font-normal">
                  — How We Execute
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium">
                {currentStage.description}
              </p>

              {/* Key Activities Pill Grid with Interactive Micro-bounce */}
              <div className="pt-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-ink-muted block mb-2.5">
                  Core Sprints & Action Items:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentStage.keyActivities.map((act) => (
                    <div
                      key={act}
                      className="p-2.5 rounded-2xl bg-ivory-100/70 border border-borderLight flex items-start gap-2.5 text-xs font-semibold text-ink hover:bg-white transition-all shadow-2xs group"
                    >
                      <CheckCircle
                        className="w-4 h-4 shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                        style={{ color: currentStage.accentColor }}
                      />
                      <span className="leading-snug">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 5 cols: Tangible Deliverable Box & Fast Progression */}
            <div className="lg:col-span-5 space-y-4">
              
              <div
                className="p-5 sm:p-6 rounded-3xl border shadow-sm transition-all relative overflow-hidden"
                style={{
                  backgroundColor: currentStage.accentBg,
                  borderColor: currentStage.accentColor + '40',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-4 h-4" style={{ color: currentStage.accentColor }} />
                  <span
                    className="text-xs font-extrabold uppercase tracking-wider"
                    style={{ color: currentStage.accentColor }}
                  >
                    Tangible Deliverable
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-ink mb-1.5 leading-snug">
                  {currentStage.deliverable}
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Every stage concludes with documented, tangible output. You receive full source files, production code, or comprehensive architectural documentation.
                </p>

                <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-bold text-ink">
                  <span>Collaborative Review:</span>
                  <span className="text-ink-muted font-mono font-medium">Weekly Staging Demo</span>
                </div>
              </div>

              {/* Action Buttons: Next Stage & Start Project */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={onOpenQuote}
                  className="flex-1 px-6 py-3.5 rounded-full bg-ink hover:bg-electric text-white text-xs sm:text-sm font-extrabold transition-all shadow-sm flex items-center justify-center gap-2 button-spring"
                >
                  <span>Start With Stage 01</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNextStage}
                  className="px-5 py-3.5 rounded-full bg-white hover:bg-ivory-200 border border-borderLight text-ink text-xs font-bold flex items-center justify-center gap-2 transition-all button-spring shadow-2xs"
                >
                  <span>Next: Stage {PROCESS_STAGES[(activeStep + 1) % PROCESS_STAGES.length].step}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const FeaturedWorkSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-20 bg-ivory relative overflow-hidden">
      {/* Subtle diagonal warm stripe texture */}
      <div className="absolute inset-0 bg-diagonal-warm opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="section-pill-badge mb-2">
              <span className="text-electric">❖</span>
              <span>FEATURED WORK</span>
              <span className="text-coral">›</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              Our Latest Projects
            </h2>
            <p className="text-sm text-ink-muted mt-1 max-w-md">
              A glimpse of the digital products and solutions we've built for amazing clients and real-world needs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/work"
              className="px-5 py-2.5 rounded-full bg-ink hover:bg-electric text-white text-xs font-bold tracking-wide transition-all shadow-sm button-spring"
            >
              View All Projects →
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-full bg-white border border-borderLight hover:bg-ivory-200 text-ink flex items-center justify-center transition-all shadow-xs button-spring"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-full bg-white border border-borderLight hover:bg-ivory-200 text-ink flex items-center justify-center transition-all shadow-xs button-spring"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Project Carousel */}
        <div
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto pb-6 no-scrollbar scroll-smooth snap-x snap-mandatory transition-all duration-700 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              style={{
                transitionDelay: `${idx * 70}ms`,
              }}
              className="min-w-[300px] sm:min-w-[340px] md:min-w-[380px] max-w-[380px] flex-shrink-0 snap-start bg-white rounded-3xl border border-borderLight overflow-hidden shadow-card hover:shadow-float hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={proj.thumbnail}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-tr from-coral/15 to-electric/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-ink shadow-xs border border-white/60">
                    <span className="text-electric">❖</span>
                    <span>{proj.category}</span>
                  </span>
                </div>

                {/* Status indicator with animated pulse dot */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      proj.isConcept
                        ? 'bg-amber-100 text-amber-900 border border-amber-200'
                        : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        proj.isConcept ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'
                      }`}
                    />
                    <span>{proj.statusBadge}</span>
                  </span>
                </div>

                {/* Live Link Button if available */}
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-electric text-white text-[11px] font-bold shadow-md hover:bg-electric-dark transition-all flex items-center gap-1.5 button-spring"
                    title="Open Live Website"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-ink group-hover:text-electric transition-colors">
                      {proj.title}
                    </h3>
                    <Link
                      to={`/work/${proj.slug}`}
                      className="w-7 h-7 rounded-full bg-ivory-100 group-hover:bg-electric group-hover:text-white flex items-center justify-center text-ink-muted transition-colors flex-shrink-0 group-hover:scale-105"
                      title="Read Case Study"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-borderLight flex items-center justify-between text-xs">
                  <Link
                    to={`/work/${proj.slug}`}
                    className="font-bold text-electric hover:underline flex items-center gap-1 group/link"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  {proj.techStack && (
                    <span className="text-[10px] text-ink-muted font-medium bg-ivory-100 px-2 py-0.5 rounded-md border border-borderLight/60">
                      {proj.techStack[0]} • {proj.techStack[1]}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

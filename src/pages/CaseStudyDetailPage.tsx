import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Layers, Code2, Sparkles, Target } from 'lucide-react';

interface ContextType {
  onOpenQuote: () => void;
}

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { onOpenQuote } = useOutletContext<ContextType>();

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-40 pb-24 text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-ink">Case Study Not Found</h2>
        <p className="text-xs text-ink-muted mt-2">The requested project case study could not be located.</p>
        <Link
          to="/work"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-electric text-white text-xs font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-ink-muted mb-8">
          <Link to="/work" className="hover:text-electric flex items-center gap-1 font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Projects</span>
          </Link>
          <span>/</span>
          <span className="text-ink font-bold">{project.title}</span>
        </div>

        {/* Case Study Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-electric-subtle text-electric-dark border border-electric/20 uppercase tracking-wider">
                {project.category}
              </span>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  project.isConcept
                    ? 'bg-amber-100 text-amber-900 border border-amber-200'
                    : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                }`}
              >
                {project.statusBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-ink leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-2xl">
              {project.summary}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-electric hover:bg-electric-dark text-white text-xs font-bold tracking-wide flex items-center gap-2 shadow-md transition-all"
                >
                  <span>Visit Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-full bg-ink hover:bg-electric text-white text-xs font-bold tracking-wide flex items-center gap-2 shadow-sm transition-all"
              >
                <span>Request Similar Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Metadata Card */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-white border border-borderLight shadow-card space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-ink">Project Metadata</h4>
            <div className="space-y-3 text-xs">
              {project.client && (
                <div>
                  <span className="text-ink-muted block text-[10px] uppercase font-bold">Client / Entity</span>
                  <span className="font-bold text-ink">{project.client}</span>
                </div>
              )}
              <div>
                <span className="text-ink-muted block text-[10px] uppercase font-bold">Nature of Work</span>
                <span className="font-bold text-ink">
                  {project.isConcept ? 'Concept & Prototype Architecture' : 'Delivered Client Project'}
                </span>
              </div>
              {project.techStack && (
                <div>
                  <span className="text-ink-muted block text-[10px] uppercase font-bold">Technology Stack</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-ivory-100 text-ink border border-borderLight"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hero Full Showcase Image */}
        <div className="rounded-4xl overflow-hidden border border-borderLight shadow-card bg-slate-900 mb-16 aspect-[16/9]">
          <img
            src={project.fullImage}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Challenge & Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white border border-borderLight shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-coral" />
              <h3 className="text-lg font-bold text-ink">The Challenge</h3>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-borderLight shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-electric" />
              <h3 className="text-lg font-bold text-ink">Key Objectives</h3>
            </div>
            <ul className="space-y-2.5">
              {project.objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-2 text-xs text-ink-muted leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric shrink-0 mt-1.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Design & Implementation Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white border border-borderLight shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-pink-600" />
              <h3 className="text-lg font-bold text-ink">Design & Art Direction</h3>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {project.designDetails}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-borderLight shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-4 h-4 text-emerald-600" />
              <h3 className="text-lg font-bold text-ink">Engineering & Implementation</h3>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {project.implementationDetails}
            </p>
          </div>
        </div>

        {/* Features & Deliverables */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-borderLight shadow-sm mb-16">
          <h3 className="text-xl font-bold text-ink mb-6">Key Implemented Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-ivory-100 border border-borderLight flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-ink leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Documented Outcomes if available */}
        {project.outcomes && (
          <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-200/60 mb-16">
            <h3 className="text-lg font-bold text-emerald-950 mb-4">Documented Project Outcomes</h3>
            <div className="space-y-2">
              {project.outcomes.map((out) => (
                <div key={out} className="flex items-center gap-2 text-xs text-emerald-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="pt-6 border-t border-borderLight flex items-center justify-between">
          <Link
            to="/work"
            className="text-xs font-bold text-ink-muted hover:text-ink flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Work</span>
          </Link>

          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-full bg-electric hover:bg-electric-dark text-white text-xs font-bold transition-all shadow-sm"
          >
            Start Your Project →
          </button>
        </div>

      </div>
    </div>
  );
};


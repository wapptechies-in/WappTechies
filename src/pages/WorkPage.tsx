import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { ProjectCategory } from '../types';
import { ArrowRight, ExternalLink, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface ContextType {
  onOpenQuote: () => void;
}

export const WorkPage: React.FC = () => {
  const { onOpenQuote } = useOutletContext<ContextType>();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filterTabs: ProjectCategory[] = [
    'All',
    'Websites',
    'Web Applications',
    'Mobile Applications',
    'Internal Products',
    'GIS & Geospatial',
    'Concept Projects',
  ];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : activeFilter === 'Concept Projects'
    ? PROJECTS.filter((p) => p.isConcept)
    : PROJECTS.filter((p) => p.filterCategory === activeFilter);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-borderLight text-[10px] font-extrabold uppercase tracking-widest text-ink mb-3 shadow-xs">
            <span className="text-electric">❖</span>
            <span>PORTFOLIO & CASE STUDIES</span>
            <span className="text-coral">›</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-ink leading-tight">
            Digital Work, Designed With Purpose.
          </h1>
          <p className="text-sm sm:text-base text-ink-muted mt-4 leading-relaxed">
            Explore our delivered client websites, custom enterprise platforms, and internal product prototypes. Every project is built around real human needs and modern engineering principles.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-borderLight/80">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === tab
                  ? 'bg-electric text-white shadow-sm'
                  : 'bg-white border border-borderLight text-ink-muted hover:text-ink hover:bg-ivory-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-white border border-borderLight overflow-hidden shadow-card hover:shadow-float transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={proj.thumbnail}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`text-[9px] font-bold px-2.5 py-1 rounded-full ${
                      proj.isConcept
                        ? 'bg-amber-100 text-amber-900 border border-amber-200'
                        : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                    }`}
                  >
                    {proj.statusBadge}
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-ink shadow-xs">
                    {proj.category}
                  </span>
                </div>

                {/* Direct Live Website Link */}
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-electric text-white text-[11px] font-bold shadow-md hover:bg-electric-dark transition-all flex items-center gap-1.5"
                    title="Visit Live Deployed Site"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-ink group-hover:text-electric transition-colors">
                      {proj.title}
                    </h3>
                    <Link
                      to={`/work/${proj.slug}`}
                      className="w-7 h-7 rounded-full bg-ivory-100 group-hover:bg-electric group-hover:text-white flex items-center justify-center text-ink-muted transition-colors flex-shrink-0"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <p className="text-xs text-ink-muted leading-relaxed line-clamp-3 mb-4">
                    {proj.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-borderLight flex items-center justify-between text-xs">
                  <Link
                    to={`/work/${proj.slug}`}
                    className="font-bold text-electric hover:underline flex items-center gap-1"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  {proj.techStack && (
                    <span className="text-[10px] text-ink-muted font-semibold">
                      {proj.techStack[0]}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Inquiry Callout */}
        <div className="p-8 sm:p-12 rounded-4xl bg-ink text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Have a project or concept in mind?</h3>
            <p className="text-xs text-slate-300 max-w-lg">
              We work with clients from initial concept and design wireframes to production deployment and maintenance.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3.5 rounded-full bg-electric hover:bg-white hover:text-ink text-white text-xs font-bold tracking-wide transition-all shadow-md shrink-0"
          >
            Start Your Project →
          </button>
        </div>

      </div>
    </div>
  );
};


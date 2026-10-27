import React, { useState } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Globe, Smartphone, Bot, MapPin, Briefcase, Palette, Monitor, MessageSquare, Cloud } from 'lucide-react';

interface ContextType {
  onOpenQuote: () => void;
}

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { onOpenQuote } = useOutletContext<ContextType>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-40 pb-24 text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-ink">Service Not Found</h2>
        <p className="text-xs text-ink-muted mt-2">The requested service could not be located.</p>
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-electric text-white text-xs font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Services</span>
        </Link>
      </div>
    );
  }

  const iconMap: Record<string, React.ElementType> = {
    Globe,
    LayoutGrid: Globe,
    Smartphone,
    Monitor,
    Palette,
    Bot,
    MessageSquare,
    MapPin,
    Briefcase,
    Cloud,
  };
  const Icon = iconMap[service.iconName] || Globe;

  const relatedProjects = PROJECTS.filter((p) =>
    service.relatedProjectIds.includes(p.id)
  );

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-ink-muted mb-8">
          <Link to="/services" className="hover:text-electric flex items-center gap-1 font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
          <span>/</span>
          <span className="text-ink font-bold">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-8 space-y-5">
            <div className="flex items-center gap-2.5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                style={{ backgroundColor: service.accentBg, color: service.accentColor }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-ink-muted">
                {service.category} • {service.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-ink leading-tight">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-2xl">
              {service.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-full bg-electric hover:bg-electric-dark text-white text-xs font-bold tracking-wide flex items-center gap-2 shadow-sm transition-all"
              >
                <span>Request {service.title} Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-white border border-borderLight shadow-card space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-ink">Service Highlights</h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-ink-muted block text-[10px] uppercase font-bold">Category</span>
                <span className="font-bold text-ink">{service.category} Solutions</span>
              </div>
              <div>
                <span className="text-ink-muted block text-[10px] uppercase font-bold">Standard Delivery</span>
                <span className="font-bold text-ink">Agile Milestones (2-6 Weeks)</span>
              </div>
              <div>
                <span className="text-ink-muted block text-[10px] uppercase font-bold">IP Ownership</span>
                <span className="font-bold text-ink">100% Client Code & Asset Ownership</span>
              </div>
            </div>
          </div>
        </div>

        {/* Problems Solved & Target Customers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Problems Solved */}
          <div className="p-8 rounded-3xl bg-white border border-borderLight shadow-sm">
            <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-coral" />
              <span>Core Challenges Solved</span>
            </h3>
            <ul className="space-y-3">
              {service.problemsSolved.map((prob) => (
                <li key={prob} className="flex items-start gap-2.5 text-xs text-ink-muted leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Customers */}
          <div className="p-8 rounded-3xl bg-white border border-borderLight shadow-sm">
            <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric" />
              <span>Target Customers & Organizations</span>
            </h3>
            <ul className="space-y-3">
              {service.targetAudience.map((aud) => (
                <li key={aud} className="flex items-start gap-2.5 text-xs text-ink-muted leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric shrink-0 mt-1.5" />
                  <span>{aud}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-borderLight shadow-sm mb-16">
          <h3 className="text-xl font-bold text-ink mb-6">What We Deliver</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((deliv, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-ivory-100 border border-borderLight flex items-start gap-3">
                <span className="text-xs font-black text-electric shrink-0 mt-0.5">0{idx + 1}.</span>
                <span className="text-xs text-ink font-medium leading-relaxed">{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-ink mb-6">Development Workflow</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.workflow.map((w) => (
              <div key={w.step} className="p-5 rounded-2xl bg-white border border-borderLight shadow-xs">
                <span className="text-xs font-black text-electric block mb-1">{w.step}</span>
                <h4 className="text-sm font-bold text-ink mb-1">{w.title}</h4>
                <p className="text-xs text-ink-muted leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Case Studies if any */}
        {relatedProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-ink mb-6">Related Projects & Implementations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/work/${p.slug}`}
                  className="group p-5 rounded-3xl bg-white border border-borderLight hover:shadow-card transition-all flex items-center gap-4"
                >
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-20 h-20 rounded-2xl object-cover shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-electric block">{p.category}</span>
                    <h4 className="text-sm font-bold text-ink group-hover:text-electric transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-xs text-ink-muted line-clamp-1 mt-0.5">{p.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-16 max-w-3xl">
            <h3 className="text-xl font-bold text-ink mb-6">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-borderLight bg-white overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-ink hover:text-electric transition-colors"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-ink-muted leading-relaxed border-t border-borderLight/60 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Closing CTA */}
        <div className="p-8 sm:p-12 rounded-4xl bg-gradient-to-r from-ink via-ink-dark to-electric-dark text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Ready to implement {service.title}?</h3>
            <p className="text-xs text-slate-300 max-w-lg">
              Let's schedule an initial technical discovery session to review your scope and provide a transparent roadmap.
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


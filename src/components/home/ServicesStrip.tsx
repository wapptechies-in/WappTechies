import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Globe, Smartphone, Bot, MapPin, Briefcase, Palette } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ServicesStripProps {}

export const ServicesStrip: React.FC<ServicesStripProps> = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const services = [
    {
      title: 'Web Development',
      desc: 'Modern, responsive and high-performance websites.',
      slug: 'web-development',
      icon: Globe,
      color: 'bg-electric text-white',
      badgeBg: 'bg-electric-subtle',
      accentBorder: 'group-hover:border-t-electric',
    },
    {
      title: 'Mobile App Development',
      desc: 'Android & iOS apps with beautiful UI/UX.',
      slug: 'mobile-app-development',
      icon: Smartphone,
      color: 'bg-coral text-white',
      badgeBg: 'bg-coral-soft',
      accentBorder: 'group-hover:border-t-coral',
    },
    {
      title: 'AI & Automation',
      desc: 'Smart solutions to automate and grow.',
      slug: 'ai-automation',
      icon: Bot,
      color: 'bg-emerald-600 text-white',
      badgeBg: 'bg-emerald-50',
      accentBorder: 'group-hover:border-t-emerald-600',
    },
    {
      title: 'GIS & Geospatial Solutions',
      desc: 'Mapping, spatial analysis and location-based tools.',
      slug: 'gis-geospatial',
      icon: MapPin,
      color: 'bg-purple-600 text-white',
      badgeBg: 'bg-purple-50',
      accentBorder: 'group-hover:border-t-purple-600',
    },
    {
      title: 'Custom Software',
      desc: 'Tailored solutions for your unique business needs.',
      slug: 'custom-business-software',
      icon: Briefcase,
      color: 'bg-amber-600 text-white',
      badgeBg: 'bg-amber-50',
      accentBorder: 'group-hover:border-t-amber-600',
    },
    {
      title: 'UI/UX Design',
      desc: 'Creative and user-centric digital experiences.',
      slug: 'ui-ux-design',
      icon: Palette,
      color: 'bg-pink-600 text-white',
      badgeBg: 'bg-pink-50',
      accentBorder: 'group-hover:border-t-pink-600',
    },
  ];

  return (
    <section
      id="services-strip"
      ref={ref}
      className="py-14 border-y border-borderLight/70 bg-gradient-to-b from-white via-ivory-50/70 to-white relative overflow-hidden"
    >
      {/* Warm ambient dot texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="section-pill-badge mb-2">
              <span className="text-electric">❖</span>
              <span>OUR SERVICES</span>
              <span className="text-coral">›</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink flex items-center gap-2">
              <span>Smart Solutions for Every Business</span>
              <Link
                to="/services"
                className="w-7 h-7 rounded-full bg-ivory-200 hover:bg-electric hover:text-white flex items-center justify-center text-ink transition-colors button-spring shadow-xs"
                title="View All Services"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </h2>
          </div>

          <Link
            to="/services"
            className="text-xs font-bold text-electric hover:text-electric-dark flex items-center gap-1.5 transition-colors group"
          >
            <span>Explore All 10 Services</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* 6 Horizontal Service Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                style={{
                  transitionDelay: `${idx * 80}ms`,
                }}
                className={`group relative p-4 rounded-2xl bg-white border border-borderLight hover:border-electric/50 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                  service.accentBorder
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${service.color} flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-ivory flex items-center justify-center text-ink-muted group-hover:bg-electric group-hover:text-white transition-all shadow-2xs group-hover:scale-105">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h3 className="text-xs font-bold text-ink group-hover:text-electric transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed line-clamp-2">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-borderLight/60 flex items-center justify-between text-[11px] text-ink-muted font-semibold">
                  <span className="group-hover:text-electric transition-colors">Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 text-electric opacity-60 group-hover:opacity-100 transition-all duration-200" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

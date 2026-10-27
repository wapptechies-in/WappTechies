import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, QrCode, Navigation, Utensils, Truck, GraduationCap, CheckCircle } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ProductsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const snapFind = PRODUCTS.find((p) => p.id === 'snapfind-ai')!;
  const ullOorAuto = PRODUCTS.find((p) => p.id === 'ull-oor-auto')!;
  const otherProducts = PRODUCTS.filter((p) => p.id !== 'snapfind-ai' && p.id !== 'ull-oor-auto');

  return (
    <section ref={ref} className="py-20 bg-white/70 border-b border-borderLight/80 relative overflow-hidden">
      {/* Dynamic ambient floating gradients */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-electric/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none animate-float-medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="section-pill-badge mb-2">
              <span className="text-electric">❖</span>
              <span>OUR PRODUCTS</span>
              <span className="text-coral">›</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink flex items-center gap-2">
              <span>Innovative Products for a Better Tomorrow</span>
              <Link
                to="/products"
                className="w-8 h-8 rounded-full bg-ivory-200 hover:bg-electric hover:text-white flex items-center justify-center text-ink transition-colors button-spring shadow-xs"
                title="View All Products"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-1 max-w-xl leading-relaxed">
              We engineer proprietary digital products designed to simplify everyday tasks, improve business operations and create genuinely useful human experiences.
            </p>
          </div>

          <Link
            to="/products"
            className="text-xs font-bold text-electric hover:underline flex items-center gap-1.5 group"
          >
            <span>Explore All 5 Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2 Flagship Showcase Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Flagship Card 1: SnapFind AI */}
          <div
            className={`rounded-3xl border border-borderLight bg-gradient-to-br from-white via-ivory-50 to-blue-50/50 p-6 sm:p-8 shadow-card hover:shadow-float hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between overflow-hidden relative group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-electric/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-electric text-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300">
                    <QrCode className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-ink group-hover:text-electric transition-colors">
                      {snapFind.title}
                    </h3>
                    <p className="text-xs font-semibold text-electric">
                      AI Photo Sharing for Events & Photographers
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-electric-subtle text-electric-dark border border-electric/20 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                  <span>{snapFind.status}</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                {snapFind.shortDesc}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['AI Search', 'Face Recognition', 'Event Gallery', 'Secure Sharing'].map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-borderLight text-[11px] font-bold text-ink shadow-2xs transition-transform hover:scale-105"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Preview */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-borderLight/80 shadow-md bg-slate-900 group">
              <img
                src={snapFind.heroImage}
                alt={snapFind.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="mt-6 pt-4 border-t border-borderLight flex items-center justify-between">
              <span className="text-xs font-bold text-ink-muted">
                Tagline: <span className="text-ink">Easy • Smart • Fast</span>
              </span>
              <Link
                to={`/products/${snapFind.slug}`}
                className="px-5 py-2.5 rounded-full bg-electric hover:bg-electric-dark text-white text-xs font-bold tracking-wide flex items-center gap-2 shadow-sm transition-all button-spring"
              >
                <span>Explore SnapFind</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Flagship Card 2: Ull Oor Auto */}
          <div
            className={`rounded-3xl border border-borderLight bg-gradient-to-br from-white via-amber-50/40 to-orange-50/40 p-6 sm:p-8 shadow-card hover:shadow-float hover:-translate-y-1 transition-all duration-500 delay-100 flex flex-col justify-between overflow-hidden relative group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-amber-400/15 rounded-full blur-3xl pointer-events-none animate-float-medium" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-ink group-hover:text-amber-600 transition-colors">
                      {ullOorAuto.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-700">
                      Local Auto Booking App — உள்ளூர் ஆட்டோ
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span>{ullOorAuto.status}</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                {ullOorAuto.shortDesc}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Live Tracking', 'Multiple Payment', 'Driver Verification', 'Affordable Rides'].map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-borderLight text-[11px] font-bold text-ink shadow-2xs transition-transform hover:scale-105"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Preview */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-borderLight/80 shadow-md bg-slate-900 group">
              <img
                src={ullOorAuto.heroImage}
                alt={ullOorAuto.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="mt-6 pt-4 border-t border-borderLight flex items-center justify-between">
              <span className="text-xs font-bold text-ink-muted">
                Tagline: <span className="text-ink">Faster • Safer • Affordable</span>
              </span>
              <Link
                to={`/products/${ullOorAuto.slug}`}
                className="px-5 py-2.5 rounded-full bg-ink hover:bg-amber-600 text-white text-xs font-bold tracking-wide flex items-center gap-2 shadow-sm transition-all button-spring"
              >
                <span>View Product Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* 3 Additional Products Strip (Dine Easy, LR Consignment Billing, Student Vault) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProducts.map((prod, idx) => {
            const icons = {
              'dine-easy': Utensils,
              'lr-consignment-billing': Truck,
              'student-vault': GraduationCap,
            };
            const Icon = icons[prod.id as keyof typeof icons] || Sparkles;

            return (
              <div
                key={prod.id}
                style={{
                  transitionDelay: `${idx * 80 + 200}ms`,
                }}
                className={`p-5 rounded-3xl bg-white border border-borderLight hover:border-electric/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div>
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-borderLight">
                    <img
                      src={prod.heroImage}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-ivory-200 flex items-center justify-center text-ink group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-ink group-hover:text-electric transition-colors">
                        {prod.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-ivory-200 text-ink-muted">
                      {prod.status}
                    </span>
                  </div>
                  <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed">
                    {prod.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-borderLight flex items-center justify-between text-xs font-bold text-electric">
                  <Link to={`/products/${prod.slug}`} className="hover:underline flex items-center gap-1 group/link">
                    <span>Read Product Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

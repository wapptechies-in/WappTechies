import React, { useState } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Sparkles, ShieldAlert, Layers } from 'lucide-react';

interface ContextType {
  onOpenQuote: () => void;
}

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { onOpenQuote } = useOutletContext<ContextType>();
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-ink">Product Not Found</h2>
        <p className="text-xs text-ink-muted mt-2">The requested product could not be located.</p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-electric text-white text-xs font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Products</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-ink-muted mb-8">
          <Link to="/products" className="hover:text-electric flex items-center gap-1 font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
          <span>/</span>
          <span className="text-ink font-bold">{product.title}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider"
                style={{ backgroundColor: product.accentBg, color: product.accentColor }}
              >
                {product.category}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-ivory-200 text-ink-deep border border-borderLight">
                Status: {product.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-ink leading-tight">
              {product.title}
            </h1>

            <p className="text-base sm:text-lg font-bold text-electric">
              "{product.tagline}"
            </p>

            <p className="text-sm text-ink-muted leading-relaxed max-w-2xl">
              {product.description}
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-full bg-electric hover:bg-electric-dark text-white text-xs font-bold tracking-wide flex items-center gap-2 shadow-sm transition-all"
              >
                <span>Inquire About {product.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/918300176274?text=Hello%20Wapp%20Techies,%20I%20am%20interested%20in%20learning%20more%20about%20${encodeURIComponent(
                  product.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20BA5A] transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Key Metric Highlights Card */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-white border border-borderLight shadow-card space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-ink">Product Parameters</h4>
            <div className="space-y-3">
              {product.keyHighlights.map((k) => (
                <div key={k.label} className="text-xs">
                  <span className="text-ink-muted block text-[10px] uppercase font-bold">{k.label}</span>
                  <span className="font-bold text-ink">{k.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery / Showcase Visual */}
        <div className="rounded-4xl bg-white border border-borderLight p-6 sm:p-8 mb-16 shadow-card">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-slate-900 mb-4 border border-borderLight">
            <img
              src={product.showcaseImages[selectedImage] || product.heroImage}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {product.showcaseImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.showcaseImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-28 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                    selectedImage === i ? 'border-electric scale-102 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Purpose & Target Audience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white border border-borderLight shadow-sm">
            <h3 className="text-lg font-bold text-ink mb-3">Product Purpose</h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {product.purpose}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-borderLight shadow-sm">
            <h3 className="text-lg font-bold text-ink mb-3">Intended Audience</h3>
            <ul className="space-y-2.5">
              {product.targetAudience.map((aud) => (
                <li key={aud} className="flex items-start gap-2 text-xs text-ink-muted leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric shrink-0 mt-1.5" />
                  <span>{aud}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Problems Addressed */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-borderLight shadow-sm mb-16">
          <h3 className="text-xl font-bold text-ink mb-6">Problems Addressed</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.problemAddressed.map((prob, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-ivory-100 border border-borderLight flex items-start gap-3">
                <span className="text-xs font-black text-coral shrink-0 mt-0.5">0{idx + 1}.</span>
                <span className="text-xs text-ink leading-relaxed">{prob}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Features vs Planned Capabilities (Transparent Roadmap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Verified Features */}
          <div className="p-8 rounded-3xl bg-white border border-borderLight shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg font-bold text-ink">Verified Capabilities</h3>
            </div>
            <p className="text-[11px] text-ink-muted mb-4">
              Features currently functional within our prototype / pilot builds:
            </p>
            <ul className="space-y-3">
              {product.verifiedFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-xs text-ink leading-relaxed">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Planned Roadmap */}
          <div className="p-8 rounded-3xl bg-white border border-borderLight shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-bold text-ink">Future Product Roadmap</h3>
            </div>
            <p className="text-[11px] text-ink-muted mb-4">
              Planned capabilities in active research and upcoming sprint cycles:
            </p>
            <ul className="space-y-3">
              {product.plannedCapabilities.map((plan) => (
                <li key={plan} className="flex items-start gap-2.5 text-xs text-ink-muted leading-relaxed">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1" />
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-6 border-t border-borderLight flex items-center justify-between">
          <Link
            to="/products"
            className="text-xs font-bold text-ink-muted hover:text-ink flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Products</span>
          </Link>

          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-full bg-ink hover:bg-electric text-white text-xs font-bold transition-all shadow-sm"
          >
            Inquire About {product.title} →
          </button>
        </div>

      </div>
    </div>
  );
};


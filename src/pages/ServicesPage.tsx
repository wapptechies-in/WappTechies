import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { SERVICES } from '../data/services';
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Smartphone,
  Bot,
  MapPin,
  Briefcase,
  Palette,
  Monitor,
  MessageSquare,
  Cloud,
  Check,
  Sparkles,
  ExternalLink,
  Layers,
  Cpu,
  Compass,
  X,
  Clock,
  ShieldCheck,
  Eye,
  MessageCircle,
} from 'lucide-react';

interface ContextType {
  onOpenQuote: () => void;
}

interface ShowcaseItem {
  id: string;
  title: string;
  category: 'Product' | 'Web Layout' | 'Live Work';
  subCategory: string;
  tag: string;
  description: string;
  image: string;
  link: string;
  accent: string;
}

const STUDIO_SHOWCASE: ShowcaseItem[] = [
  // 1. Corporate & Law Website
  {
    id: 'coporate-premium-website',
    title: 'Corporate & Legal Counsel Website',
    category: 'Web Layout',
    subCategory: 'Corporate',
    tag: 'Corporate & Legal',
    description: 'High-authority law firm layout featuring attorney credentials, practice areas, case results, and confidential consultation booking.',
    image: '/images/coporate-premium-website.jpeg',
    link: '/services/web-development',
    accent: '#155EEF',
  },
  // 2. Cinematic & Fashion
  {
    id: 'cinematic-fashion',
    title: 'Fashion & Haute Couture Showcase',
    category: 'Web Layout',
    subCategory: 'Fashion',
    tag: 'Fashion & Arts',
    description: 'Atmospheric editorial portfolio layout with 3D perspective carousels, Paris runway visual direction, and smooth fluid motion.',
    image: '/images/cinematic.jpeg',
    link: '/services/ui-ux-design',
    accent: '#EC4899',
  },
  // 3. Luxury Resort
  {
    id: 'resort-hospitality',
    title: 'Aelora Luxury Resort & Spa',
    category: 'Web Layout',
    subCategory: 'Hospitality',
    tag: 'Luxury Hospitality',
    description: 'Architectural serenity layout highlighting infinity pools, suite floorplans, wellness spa rituals, and real-time room reservations.',
    image: '/images/resort.jpeg',
    link: '/services/web-development',
    accent: '#D97706',
  },
  // 4. Wedding Intro & Bridal
  {
    id: 'wedding-intro',
    title: 'Bridal & Wedding Experience',
    category: 'Web Layout',
    subCategory: 'Weddings',
    tag: 'Bridal & Events',
    description: 'Warm editorial layout designed for wedding beauty artists with bride lookbooks, touch-up kit perks, and date availability scheduler.',
    image: '/images/wedding-intro.jpeg',
    link: '/services/web-development',
    accent: '#F43F5E',
  },
  // 5. Automotive Dealership
  {
    id: 'automotive-dealership',
    title: 'Automotive Dealership & EV Showcase',
    category: 'Web Layout',
    subCategory: 'Automotive',
    tag: 'Automotive & EV',
    description: 'Precision vehicle showroom with interactive 360 specs, model comparison matrix, financing estimator, and instant test drive scheduler.',
    image: '/images/automotive.jpeg',
    link: '/services/web-development',
    accent: '#2563EB',
  },
  // 6. Artisan Cafe
  {
    id: 'artisan-cafe',
    title: 'Artisan Cafe & Coffee Roastery',
    category: 'Web Layout',
    subCategory: 'Culinary',
    tag: 'Cafe & Bistro',
    description: 'Warm, textured cafe layout featuring signature cold brew origins, roasted bean e-commerce, and weekend table reservations.',
    image: '/images/cafe.jpeg',
    link: '/services/web-development',
    accent: '#B45309',
  },
  // 7. Specialized Clinic
  {
    id: 'specialized-clinic',
    title: 'Specialized Medical Clinic Portal',
    category: 'Web Layout',
    subCategory: 'Healthcare',
    tag: 'Medical Clinic',
    description: 'Clean healthcare patient portal layout with multi-specialist biographies, insurance accepted checklist, and direct HIPAA booking.',
    image: '/images/clinic.jpeg',
    link: '/services/web-development',
    accent: '#0D9488',
  },
  // 8. Custom Furniture
  {
    id: 'custom-furniture',
    title: 'Architectural Timber & Living Studio',
    category: 'Web Layout',
    subCategory: 'Interiors',
    tag: 'Artisan Furniture',
    description: 'Minimalist Scandinavian furniture showcase highlighting bespoke joinery, wood grain finishes, and 3D space dimension specs.',
    image: '/images/furniture.jpeg',
    link: '/services/ui-ux-design',
    accent: '#78350F',
  },
  // 9. Healthcare & Wellness
  {
    id: 'healthcare-wellness',
    title: 'Integrative Wellness & Vitality Hub',
    category: 'Web Layout',
    subCategory: 'Healthcare',
    tag: 'Holistic Health',
    description: 'Calming wellness clinic layout with therapy modal descriptions, practitioner credentials, and secure telehealth appointment intake.',
    image: '/images/healthcare.jpeg',
    link: '/services/web-development',
    accent: '#059669',
  },
  // 10. Hospital Magazine
  {
    id: 'hospital-magazine',
    title: 'Medical Journal & Health Bulletin',
    category: 'Web Layout',
    subCategory: 'Editorial',
    tag: 'Clinical Journal',
    description: 'Editorial clinical journal layout with research papers, physician viewpoints, disease prevention guides, and doctor directories.',
    image: '/images/hospital-magazine.jpeg',
    link: '/services/web-development',
    accent: '#0284C7',
  },
  // 11. Boutique Hotel
  {
    id: 'boutique-hotel',
    title: 'Heritage Boutique Hotel & Suites',
    category: 'Web Layout',
    subCategory: 'Hospitality',
    tag: 'Heritage Suites',
    description: 'Charming boutique hotel layout featuring vintage architecture galleries, dining menus, guest testimonials, and direct rate match.',
    image: '/images/hotel.jpeg',
    link: '/services/web-development',
    accent: '#EA580C',
  },
  // 12. Fine Jewelry
  {
    id: 'fine-jewelry',
    title: 'Fine Diamond Atelier & Jewelry',
    category: 'Web Layout',
    subCategory: 'Luxury',
    tag: 'Fine Jewelry',
    description: 'High-luxury jewelry atelier layout with carat selectors, bespoke engagement ring consultations, and certified gem authentication.',
    image: '/images/jewelley-shop.jpeg',
    link: '/services/web-development',
    accent: '#D97706',
  },
  // 13. Product Sales & E-Commerce
  {
    id: 'product-sales',
    title: 'Direct-to-Consumer Product Showcase',
    category: 'Web Layout',
    subCategory: 'E-Commerce',
    tag: 'D2C E-Commerce',
    description: 'High-conversion product page layout with bundle builders, customer unboxing reviews, stock alerts, and one-click express checkout.',
    image: '/images/productsales.jpeg',
    link: '/services/web-development',
    accent: '#10B981',
  },
  // 14. Luxury Real Estate
  {
    id: 'luxury-real-estate',
    title: 'Prime Estate & Architectural Realty',
    category: 'Web Layout',
    subCategory: 'Real Estate',
    tag: 'Luxury Estates',
    description: 'Editorial property brokerage layout with aerial 4K drone cinematography, interactive floor plans, and VIP private viewings.',
    image: '/images/realestate.jpeg',
    link: '/services/web-development',
    accent: '#4F46E5',
  },
  // 15. Premium Residency
  {
    id: 'premium-residency',
    title: 'Skyline Private Urban Residencies',
    category: 'Web Layout',
    subCategory: 'Real Estate',
    tag: 'Urban Condos',
    description: 'Pre-construction luxury condo portal with penthouse floor specifications, amenity 3D renders, and real-time unit availability.',
    image: '/images/residency.jpeg',
    link: '/services/web-development',
    accent: '#0891B2',
  },
  // 16. Fine Dining Restaurant
  {
    id: 'fine-dining-restaurant',
    title: 'Fine Dining Culinary Restaurant',
    category: 'Web Layout',
    subCategory: 'Culinary',
    tag: 'Gastronomy',
    description: 'Gastronomic dining layout featuring chef seasonal tasting menus, sommelier wine pairing notes, and private event reservations.',
    image: '/images/restarnut.jpeg',
    link: '/services/web-development',
    accent: '#DC2626',
  },
  // 17. Saloon & Beauty Studio
  {
    id: 'saloon-beauty-studio',
    title: 'Beauty Lounge & Salon Studio',
    category: 'Web Layout',
    subCategory: 'Beauty',
    tag: 'Salon & Spa',
    description: 'Editorial beauty salon layout with styling portfolios, certified master colorists, and instant real-time chair reservation.',
    image: '/images/saloon-design.jpeg',
    link: '/services/web-development',
    accent: '#BE185D',
  },
  // 18. Traveller Expeditions
  {
    id: 'traveller-expeditions',
    title: 'Wilderness Travel & Expeditions',
    category: 'Web Layout',
    subCategory: 'Travel',
    tag: 'Adventure Travel',
    description: 'Immersive global travel expedition layout with curated trekking itineraries, expedition gear checklists, and traveler journals.',
    image: '/images/traveller.jpeg',
    link: '/services/web-development',
    accent: '#16A34A',
  },
  // 19. Trip Planner
  {
    id: 'smart-trip-planner',
    title: 'Smart Trip & Itinerary Planner',
    category: 'Web Layout',
    subCategory: 'Travel',
    tag: 'Travel Tech',
    description: 'AI-assisted itinerary builder layout with route optimization, offline trail maps, day-by-day schedules, and travel budget tracking.',
    image: '/images/tripplanner.jpeg',
    link: '/services/web-development',
    accent: '#0284C7',
  },
  // 20. Videographer Portfolio
  {
    id: 'videographer-portfolio',
    title: 'Cinematic Filmmaker & Director',
    category: 'Web Layout',
    subCategory: 'Creative',
    tag: 'Film & Motion',
    description: 'Full-bleed filmmaker portfolio with 4K video reel playback, festival accolades, commercial credits, and shoot inquiry forms.',
    image: '/images/videographer-design.jpeg',
    link: '/services/web-development',
    accent: '#7C3AED',
  },
  // 21. Coastal Villas
  {
    id: 'coastal-villas',
    title: 'Exclusive Coastal Vacation Villas',
    category: 'Web Layout',
    subCategory: 'Hospitality',
    tag: 'Vacation Villas',
    description: 'Private seaside villa rental portal with private pool specs, sunset view photography, and verified on-site concierge booking.',
    image: '/images/villas.jpeg',
    link: '/services/web-development',
    accent: '#0284C7',
  },
  // 22. Live Client Work: Alex Robin
  {
    id: 'jebaraj-portfolio',
    title: 'Alex Robin Photography Portfolio',
    category: 'Live Work',
    subCategory: 'Live Website',
    tag: 'Live Portfolio',
    description: 'Editorial dark-mode portfolio engineered for wedding and sports photographer Alex Robin with lightning fast responsive gallery.',
    image: '/images/website-page-alex-robin.png',
    link: '/work/jebaraj-alex-robin',
    accent: '#FF6848',
  },
  // 23. Live Client Work: CSI Church
  {
    id: 'csi-church',
    title: 'CSI Christ Church Live Portal',
    category: 'Live Work',
    subCategory: 'Live Website',
    tag: 'Live Community',
    description: 'Accessible bilingual community portal with service schedules, audio sermon archives, and digital prayer request submissions.',
    image: '/images/website-page-csi-church.png',
    link: '/work/csi-christ-church',
    accent: '#D97706',
  },
  // 24. Flagship Product: SnapFind AI
  {
    id: 'snapfind-ai',
    title: 'SnapFind AI Event Recognition',
    category: 'Product',
    subCategory: 'AI Product',
    tag: 'Face Recognition',
    description: 'Instant facial indexing and selfie search platform for event galleries, wedding photographers, and attendees.',
    image: '/images/snapfind-ai-showcase.png',
    link: '/products/snapfind-ai',
    accent: '#155EEF',
  },
  // 25. Flagship Product: Ull Oor Auto
  {
    id: 'ull-oor-auto',
    title: 'Ull Oor Auto Mobility App',
    category: 'Product',
    subCategory: 'Mobility App',
    tag: 'Hyperlocal Transit',
    description: 'Fair fare auto-rickshaw hailing mobile app empowering tier-2 and tier-3 city commuters and independent drivers.',
    image: '/images/ull-oor-auto-showcase.png',
    link: '/products/ull-oor-auto',
    accent: '#FF6848',
  },
  // 26. Flagship Product: Dine Easy
  {
    id: 'dine-easy',
    title: 'Dine Easy QR Restaurant Suite',
    category: 'Product',
    subCategory: 'Hospitality Tech',
    tag: 'Contactless Dining',
    description: 'Digital QR ordering, dynamic menu builder, multi-waiter bill management, and real-time kitchen display system (KDS).',
    image: '/images/dine-easy-showcase.png',
    link: '/products/dine-easy',
    accent: '#059669',
  },
  // 27. Flagship Product: Student Vault
  {
    id: 'student-vault',
    title: 'Student Vault Academic Portal',
    category: 'Product',
    subCategory: 'EdTech App',
    tag: 'Academic Workspace',
    description: 'Distraction-free student study organizer, syllabus tracker, PDF document library, and timetable manager.',
    image: '/images/student-vault-showcase.png',
    link: '/products/student-vault',
    accent: '#8B5CF6',
  },
  // 28. Flagship Product: LR Consignment Billing
  {
    id: 'lr-consignment',
    title: 'LR Consignment Billing System',
    category: 'Product',
    subCategory: 'Logistics',
    tag: 'Freight ERP',
    description: 'Dedicated logistics management ERP for lorry receipts, GST freight bills, vehicle tracking, and customer ledgers.',
    image: '/images/lr-consignment-showcase.png',
    link: '/products/lr-consignment-billing',
    accent: '#0284C7',
  },
];

export const ServicesPage: React.FC = () => {
  const { onOpenQuote } = useOutletContext<ContextType>();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeShowcaseFilter, setActiveShowcaseFilter] = useState<'All' | 'Web Layouts' | 'Products' | 'Live Work'>('All');
  const [visibleShowcaseCount, setVisibleShowcaseCount] = useState(12);
  const [previewItem, setPreviewItem] = useState<ShowcaseItem | null>(null);

  const categories = ['All', 'Engineering', 'Design', 'Automation', 'Geospatial', 'Enterprise'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const filteredShowcase = activeShowcaseFilter === 'All'
    ? STUDIO_SHOWCASE
    : activeShowcaseFilter === 'Web Layouts'
    ? STUDIO_SHOWCASE.filter(i => i.category === 'Web Layout')
    : activeShowcaseFilter === 'Products'
    ? STUDIO_SHOWCASE.filter(i => i.category === 'Product')
    : STUDIO_SHOWCASE.filter(i => i.category === 'Live Work');

  const displayedShowcase = filteredShowcase.slice(0, visibleShowcaseCount);

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

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Dynamic Ambient Background Light Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-electric/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-coral/10 rounded-full blur-3xl pointer-events-none animate-float-medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header with Animation Badge */}
        <div className="max-w-3xl mb-12 animate-[heroWordFadeUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-borderLight text-[10px] font-extrabold uppercase tracking-widest text-ink mb-3 shadow-xs">
            <span className="text-electric animate-spin" style={{ animationDuration: '6s' }}>❖</span>
            <span>END-TO-END CAPABILITIES</span>
            <span className="text-coral">›</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-ink leading-tight">
            Smart Digital Solutions for{' '}
            <span className="text-gradient-electric">Modern Businesses.</span>
          </h1>
          <p className="text-sm sm:text-base text-ink-muted mt-4 leading-relaxed font-medium">
            From responsive web applications to enterprise software platforms, we engineer resilient software tailored to your commercial goals with zero bloat.
          </p>

          {/* Capability Ticker HUD */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-ink">
            <span className="px-3 py-1 rounded-full bg-white border border-borderLight shadow-2xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              10 Production Services
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-borderLight shadow-2xs flex items-center gap-1.5">
              <span className="text-coral">✓</span> 100% Custom Architecture
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-borderLight shadow-2xs flex items-center gap-1.5">
              <span className="text-electric">⚡</span> 2-4 Week Typical Sprints
            </span>
          </div>
        </div>

        {/* Category Filters for Core Services with Smooth Pill Indicator */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-borderLight/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all button-spring ${
                selectedCategory === cat
                  ? 'bg-electric text-white shadow-glow-blue scale-102 ring-2 ring-electric/25'
                  : 'bg-white border border-borderLight text-ink-muted hover:text-ink hover:bg-ivory-100 shadow-2xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 10 Core Services Grid with Smooth Hover Lift & Accent Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredServices.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <div
                key={service.id}
                style={{ animationDelay: `${idx * 40}ms` }}
                className="p-7 rounded-3xl bg-white border border-borderLight hover:border-electric/50 shadow-card hover:shadow-float hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent Top Border Glow on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: service.accentColor }}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                      style={{
                        backgroundColor: service.accentBg,
                        color: service.accentColor,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-ivory-100 text-ink-muted border border-borderLight">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-ink group-hover:text-electric transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mb-5 font-medium">
                    {service.shortDesc}
                  </p>

                  {/* Problems Solved Preview */}
                  <div className="space-y-1.5 pt-3 border-t border-borderLight/60 mb-5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-ink-muted block">
                      Core Sprints & Outcomes:
                    </span>
                    {service.problemsSolved.slice(0, 2).map((prob) => (
                      <div key={prob} className="flex items-start gap-1.5 text-[11px] text-ink leading-tight">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{prob}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-borderLight flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold text-electric hover:underline flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Service Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={`/services/${service.slug}`}
                    className="w-8 h-8 rounded-full bg-ivory-100 group-hover:bg-electric group-hover:text-white flex items-center justify-center text-ink-muted transition-all shadow-2xs group-hover:rotate-12"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* FEATURED WORK & WEB LAYOUT SHOWCASE                            */}
        {/* ============================================================== */}
        <section className="pt-12 pb-16 border-t border-borderLight/90">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-borderLight text-[10px] font-extrabold uppercase tracking-widest text-ink mb-2 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-coral animate-pulse" />
                <span>INTERACTIVE STUDIO SHOWCASE</span>
                <span className="text-electric">›</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink">
                Featured Work & Web Layout Designs
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted mt-2 max-w-xl font-medium">
                Explore our production-grade client websites, AI systems, and high-impact web design layouts crafted for diverse industries.
              </p>
            </div>

            {/* Filter Tabs with Smooth Feedback */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white border border-borderLight shadow-xs">
              {(['All', 'Web Layouts', 'Products', 'Live Work'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveShowcaseFilter(tab);
                    setVisibleShowcaseCount(12);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all button-spring ${
                    activeShowcaseFilter === tab
                      ? 'bg-electric text-white shadow-sm'
                      : 'text-ink-muted hover:text-ink hover:bg-ivory-100'
                  }`}
                >
                  {tab}
                  <span className="ml-1.5 opacity-75 text-[10px]">
                    (
                    {tab === 'All'
                      ? STUDIO_SHOWCASE.length
                      : tab === 'Web Layouts'
                      ? STUDIO_SHOWCASE.filter(i => i.category === 'Web Layout').length
                      : tab === 'Products'
                      ? STUDIO_SHOWCASE.filter(i => i.category === 'Product').length
                      : STUDIO_SHOWCASE.filter(i => i.category === 'Live Work').length}
                    )
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Showcase Grid with Hover Effects & Click-to-Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {displayedShowcase.map((item) => (
              <div
                key={item.id}
                onClick={() => setPreviewItem(item)}
                className="group relative rounded-3xl bg-white border border-borderLight/90 overflow-hidden shadow-card hover:shadow-float hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-white shadow-sm"
                      style={{ backgroundColor: item.accent }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Corner Quick Preview Icon */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <Eye className="w-3.5 h-3.5 text-electric" />
                  </div>
                </div>

                {/* Card Content & Column Details */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink-muted">
                        {item.subCategory} • {item.category}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-ink group-hover:text-electric transition-colors mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-ink-muted leading-relaxed line-clamp-3 font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-borderLight flex items-center justify-between text-xs font-bold">
                    <span className="text-electric hover:underline flex items-center gap-1.5">
                      <span>Preview Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] text-ink-muted font-medium">Custom Studio Design</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleShowcaseCount < filteredShowcase.length && (
            <div className="flex justify-center mb-16">
              <button
                onClick={() => setVisibleShowcaseCount((prev) => prev + 8)}
                className="px-8 py-3.5 rounded-full bg-white border border-borderLight shadow-sm hover:shadow-md text-ink text-xs font-black uppercase tracking-wider hover:bg-ivory-100 hover:text-electric transition-all button-spring"
              >
                Load More Showcase Designs ({filteredShowcase.length - visibleShowcaseCount} Remaining)
              </button>
            </div>
          )}

          {/* 4 Bottom Metric/Capability Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
            <div className="p-4 rounded-2xl bg-white border border-borderLight shadow-xs flex items-center gap-3 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-electric-subtle text-electric flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-ink">Web & Mobile</p>
                <p className="text-[10px] text-ink-muted">iOS, Android, React</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-borderLight shadow-xs flex items-center gap-3 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-coral-soft text-coral flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-ink">UI/UX Design</p>
                <p className="text-[10px] text-ink-muted">Design Systems</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-borderLight shadow-xs flex items-center gap-3 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-mint/40 text-emerald-700 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-ink">AI & Automation</p>
                <p className="text-[10px] text-ink-muted">Intelligent Pipelines</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-borderLight shadow-xs flex items-center gap-3 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-ink">100% Custom</p>
                <p className="text-[10px] text-ink-muted">Ideas Into Impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Discovery Consultation Callout Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-ink text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-1.5 relative z-10">
            <h3 className="text-xl sm:text-2xl font-black">Need a bespoke technical solution?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We frequently architect custom workflows that combine web apps, WhatsApp automation, and mobile solutions tailored to your operational bottlenecks.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-7 py-3.5 rounded-full bg-electric hover:bg-white hover:text-ink text-white text-xs sm:text-sm font-extrabold tracking-wide transition-all shadow-glow-blue shrink-0 button-spring"
          >
            Schedule Discovery Consultation →
          </button>
        </div>

      </div>

      {/* Interactive Showcase Modal */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-borderLight overflow-hidden animate-[heroWordFadeUp_0.3s_cubic-bezier(0.16,1,0.3,1)]">
            <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden">
              <img
                src={previewItem.image}
                alt={previewItem.title}
                className="w-full h-full object-cover object-top"
              />
              <button
                onClick={() => setPreviewItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 shadow-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4">
                <span
                  className="text-xs font-black px-3 py-1 rounded-full text-white shadow-sm"
                  style={{ backgroundColor: previewItem.accent }}
                >
                  {previewItem.tag}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink-muted">
                    {previewItem.subCategory} • {previewItem.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-ink mt-0.5">
                    {previewItem.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium">
                {previewItem.description}
              </p>

              <div className="pt-3 border-t border-borderLight flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`https://wa.me/918300176274?text=${encodeURIComponent(`Hello Wapp Techies, I am interested in building a solution like ${previewItem.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#20ba59] transition-all button-spring"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire via WhatsApp</span>
                </a>

                <div className="flex items-center gap-2">
                  <Link
                    to={previewItem.link}
                    onClick={() => setPreviewItem(null)}
                    className="px-5 py-3 rounded-full bg-electric text-white text-xs font-bold flex items-center gap-1.5 hover:bg-electric-dark transition-all button-spring"
                  >
                    <span>View Service Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => setPreviewItem(null)}
                    className="px-4 py-3 rounded-full bg-ivory-100 hover:bg-ivory-200 text-ink text-xs font-bold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

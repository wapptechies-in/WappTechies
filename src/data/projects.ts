import { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'jebaraj-alex-robin',
    slug: 'jebaraj-alex-robin',
    title: 'Photography Website',
    category: 'Website / Portfolio',
    filterCategory: 'Websites',
    isConcept: false,
    statusBadge: 'Live Project',
    liveUrl: 'https://jebaraj-alex-robin.vercel.app/',
    thumbnail: '/images/website page 2.png',
    fullImage: '/images/website page 2.png',
    summary:
      'A sleek, high-impact portfolio website designed and developed for Jebaraj Alex Robin, an acclaimed wedding, candid, and sports photographer based in Tirunelveli.',
    client: 'Jebaraj Alex Robin Photography (Kallidaikurichi & Tirunelveli)',
    challenge:
      'The client required an editorial, immersive digital showcase that could display high-resolution photography without compromising load speeds or mobile browsing performance.',
    objectives: [
      'Create an elegant, dark-mode visual aesthetic that puts photography center stage.',
      'Implement fast image loading and smooth category transitions.',
      'Integrate direct WhatsApp and consultation booking channels for prospective clients.',
      'Deliver seamless mobile and desktop responsiveness.',
    ],
    approach:
      'We designed a high-contrast editorial layout with subtle typography, full-bleed imagery, integrated WhatsApp booking pills, and optimized image compression.',
    designDetails:
      'Deep atmospheric dark tones with crisp white typography, minimal navigation, theme toggle, and floating WhatsApp action button.',
    implementationDetails:
      'Engineered with modern frontend components, responsive CSS, and cloud hosting on Vercel for instant worldwide delivery.',
    techStack: ['React', 'Tailwind CSS', 'Vercel', 'WhatsApp Direct API'],
    features: [
      'Full-bleed hero carousel with smooth image slide transitions.',
      'Curated wedding, sports, ceremonial, and portrait galleries.',
      'Direct WhatsApp inquiry button with pre-filled event date parameters.',
      'Mobile-optimized touch gallery and responsive navigation.',
    ],
    outcomes: [
      'Successfully deployed live and actively serving client inquiries.',
      'Fast initial content render with optimized media delivery.',
      'Direct client booking channel established via WhatsApp.',
    ],
  },
  {
    id: 'csi-christ-church',
    slug: 'csi-christ-church',
    title: 'CSI Christ Church Website',
    category: 'Website / Community',
    filterCategory: 'Websites',
    isConcept: false,
    statusBadge: 'Live Project',
    liveUrl: 'https://csi-christ-church-website.vercel.app/',
    thumbnail: '/images/website page.png',
    fullImage: '/images/website page.png',
    summary:
      'A welcoming bilingual digital portal created for CSI Christ Church Kallidaikurichi, providing worship timings, sermon audio, prayer requests, and community announcements.',
    client: 'CSI Christ Church (Kallidaikurichi, Tirunelveli Diocese)',
    challenge:
      'The church community needed an accessible, bilingual (Tamil and English) online platform to share weekly order of service, church ministry news, event photo archives, and prayer requests.',
    objectives: [
      'Present weekly Sunday service timings (9:00 AM - 11:30 AM) prominently.',
      'Enable community members to submit prayer requests online.',
      'Provide an accessible archive of sermon recordings, announcements, and branch churches.',
      'Ensure high readability across all age groups and mobile screens.',
    ],
    approach:
      'We built an accessible, warm layout featuring the church steeple, clear Tamil typography, prominent service schedule cards, and a structured prayer request intake form.',
    designDetails:
      'Sky-blue and warm gold accents with authentic church photography, prominent Tamil typography, and high-contrast alert badges.',
    implementationDetails:
      'Lightweight responsive frontend deployed on Vercel with structured schema for local community discovery.',
    techStack: ['React', 'Tailwind CSS', 'Vercel', 'Bilingual Tamil Font System'],
    features: [
      'Prominent Sunday Service schedule card with next-service countdown.',
      'Dedicated prayer request submission section.',
      'Sermon archives and ministry activity highlights.',
      'Branch churches directory and contact coordinates.',
    ],
    outcomes: [
      'Live and accessible to community members across Kallidaikurichi and global diaspora.',
      'Facilitates weekly worship notices and community engagement.',
    ],
  },
  {
    id: 'snapfind-ai-case',
    slug: 'snapfind-ai',
    title: 'SnapFind AI',
    category: 'AI Product Concept / Pilot',
    filterCategory: 'Internal Products',
    isConcept: true,
    statusBadge: 'Product Concept & Pilot',
    thumbnail: '/images/SnapFind AI_ Every Moment, Easy to Find.png',
    fullImage: '/images/SnapFind AI Event Gallery Showcase.png',
    summary:
      'An intelligent photo-sharing ecosystem that employs face recognition so event guests can scan a QR code and immediately discover all their photos.',
    client: 'Wapp Techies Proprietary Product Lab',
    challenge:
      'Traditional event photo distribution is slow and frustrating, requiring guests to manually scroll through thousands of unstructured pictures.',
    objectives: [
      'Eliminate manual photo searching for event attendees.',
      'Provide photographers with an intuitive multi-event dashboard.',
      'Deliver instant face-matching with privacy-conscious indexing.',
    ],
    approach:
      'We combined lightweight face embeddings with instant QR onboarding, creating a zero-install mobile web gallery experience.',
    designDetails:
      'Electric blue and dark navy interfaces with floating glass badges, clear progress meters, and photo discovery cards.',
    implementationDetails:
      'Prototype developed with React, Python face-embedding microservice, and cloud storage.',
    techStack: ['React', 'Python', 'Face Embeddings', 'Cloudflare R2', 'Tailwind CSS'],
    features: [
      'Instant selfie scan and facial indexing.',
      'Photographer multi-event management console.',
      'One-tap high-resolution downloads and watermarking.',
    ],
    outcomes: [
      'Functional pilot tested across sample wedding galleries.',
      'Sub-second image discovery verified during initial benchmarks.',
    ],
  },
  {
    id: 'ull-oor-auto-case',
    slug: 'ull-oor-auto',
    title: 'Ull Oor Auto',
    category: 'Mobility Product / Concept',
    filterCategory: 'Mobile Applications',
    isConcept: true,
    statusBadge: 'Product Concept',
    thumbnail: '/images/Ull Oor Auto_ Your Local Ride.png',
    fullImage: '/images/Ull Oor Auto App Showcase.png',
    summary:
      'Hyperlocal auto-rickshaw hailing concept tailored for regional towns like Kallidaikurichi, Ambasamudram, and Cheranmahadevi.',
    client: 'Wapp Techies Urban Mobility Initiative',
    challenge:
      'Small regional towns lack structured on-demand transport, leading to arbitrary fare negotiations and long waiting times.',
    objectives: [
      'Design a simple bilingual (Tamil/English) booking interface for non-technical users.',
      'Provide transparent distance-based fare estimates.',
      'Empower local drivers with fair direct rides without exorbitant aggregator cuts.',
    ],
    approach:
      'We created a colorful, characterful UI with landmark-based routing, prominent ride confirmation cards, and driver safety badges.',
    designDetails:
      'Vibrant auto-yellow and road-black branding with friendly character art and high-legibility Tamil typography.',
    implementationDetails:
      'Interactive mobile UI prototype built in React Native and simulated web views.',
    techStack: ['React Native', 'Mapbox / Leaflet', 'Node.js', 'Tailwind CSS'],
    features: [
      'Landmark-based pickup & drop selection.',
      'Upfront fare calculation without hidden surge fees.',
      'Verified driver profiles with one-touch calling.',
    ],
    outcomes: [
      'Complete interactive UI prototype validated with local commuter focus groups.',
    ],
  },
  {
    id: 'smart-city-gis-case',
    slug: 'smart-city-gis',
    title: 'Smart City GIS',
    category: 'Geospatial Concept',
    filterCategory: 'GIS & Geospatial',
    isConcept: true,
    statusBadge: 'Geospatial Concept',
    thumbnail: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
    fullImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Conceptual interactive spatial analysis and urban infrastructure mapping platform designed for municipal planning and asset visualization.',
    client: 'Urban Technology Concept Exploration',
    challenge:
      'Municipal departments often struggle with fragmented CAD drawings and unindexed spatial records when planning infrastructure upgrades.',
    objectives: [
      'Visualize underground utilities, road networks, and zoning polygons on interactive vector basemaps.',
      'Enable cross-departmental spatial querying and asset attribute inspection.',
      'Provide 3D building height extrusions for urban density simulation.',
    ],
    approach:
      'We prototyped a high-performance WebGL vector tile mapping system integrating OpenStreetMap data with layered spatial attribute tables.',
    designDetails:
      'Clean topographic styling with emerald and violet layer indicators and dark glass inspectors.',
    implementationDetails:
      'WebGL-based map renderer with PostGIS spatial backend simulation.',
    techStack: ['Mapbox GL JS', 'Deck.gl', 'PostGIS', 'React', 'GeoJSON'],
    features: [
      'Multi-layer infrastructure toggles (water, power, transit, zoning).',
      'Buffer zone distance calculations and attribute inspection.',
      '3D building height extrusion rendering.',
    ],
    outcomes: [
      'Demonstrated 60fps rendering of 50,000+ vector features in browser tests.',
    ],
  },
  {
    id: 'business-management-system-case',
    slug: 'business-management-system',
    title: 'Business Management System',
    category: 'Custom Software Concept',
    filterCategory: 'Web Applications',
    isConcept: true,
    statusBadge: 'Software Concept',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    fullImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    summary:
      'A modular enterprise resource planning dashboard concept bringing together financial metrics, inventory tracking, team tasks, and sales forecasting.',
    client: 'Enterprise Systems Architecture Concept',
    challenge:
      'SMEs often face cognitive exhaustion trying to reconcile data between separate billing, stock, and payroll software.',
    objectives: [
      'Unify cash flow, accounts receivable, and inventory levels in a single overview.',
      'Provide customizable role-based widgets for finance, operations, and leadership.',
    ],
    approach:
      'We designed an ergonomic dashboard layout with modular cards, clear data visualization, and quick action shortcuts.',
    designDetails:
      'Deep navy navigation bar, crisp white metric panels, and electric blue primary highlights.',
    implementationDetails:
      'TypeScript and React architecture with reusable data tables, sorting, and export capabilities.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    features: [
      'Real-time revenue, expense, and profit margin cards.',
      'Low stock warning triggers and supplier reorder queues.',
      'Staff activity logs and role-based permissions.',
    ],
    outcomes: [
      'Serves as the design foundation for custom client ERP builds.',
    ],
  },
  {
    id: 'dine-easy-case',
    slug: 'dine-easy',
    title: 'Dine Easy Restaurant Suite',
    category: 'Web Applications & POS',
    filterCategory: 'Web Applications',
    isConcept: true,
    statusBadge: 'Product Prototype',
    thumbnail: '/images/Dine Easy Restaurant Management Banner.png',
    fullImage: '/images/Dine Easy Restaurant Platform Showcase.png',
    summary:
      'Synchronized restaurant operations suite combining digital QR tableside menus, kitchen display screens, and cashier POS billing.',
    client: 'Wapp Techies Hospitality Lab',
    challenge:
      'Kitchen order errors, slow table turnover, and high physical menu printing costs in busy dining establishments.',
    objectives: [
      'Connect customer phone ordering directly to the kitchen display.',
      'Accelerate bill generation and payment settlement.',
    ],
    approach:
      'We created a 3-tier synchronized system: Mobile QR for diners, tablet display for kitchen chefs, and desktop station for cashiers.',
    designDetails:
      'Warm culinary coral and forest green palette with crisp food photography and clear table status indicators.',
    implementationDetails:
      'WebSocket-powered live order synchronization across multiple station devices.',
    techStack: ['React', 'WebSockets', 'Tailwind CSS', 'Thermal Print API'],
    features: [
      'Live Table Status matrix (Occupied, Available, Billing).',
      'Real-time Kitchen Order Ticket (KOT) queue with timers.',
      'One-click split bill and thermal receipt printing.',
    ],
    outcomes: [
      'Demonstrated 40% reduction in order-to-kitchen latency in test simulations.',
    ],
  },
  {
    id: 'lr-consignment-case',
    slug: 'lr-consignment-billing',
    title: 'LR Consignment Billing',
    category: 'Custom Software & Logistics',
    filterCategory: 'Web Applications',
    isConcept: true,
    statusBadge: 'Pilot Deployment',
    thumbnail: '/images/Smart Logistics Billing Dashboard.png',
    fullImage: '/images/Smart Logistics Billing Dashboard.png',
    summary:
      'Dedicated logistics software for transport agencies to create, print, track, and settle Lorry Receipts and freight accounts.',
    client: 'Logistics Software Pilot',
    challenge:
      'Manual paper carbon copies of Lorry Receipts frequently get damaged, leading to freight reconciliation disputes and delayed billing.',
    objectives: [
      'Digitize Lorry Receipt creation with automated GST and freight calculations.',
      'Provide printable standard format consignment notes with legal signatures.',
      'Track freight payment status (Paid vs. Pending) by consignor party.',
    ],
    approach:
      'We built a streamlined data-entry interface optimized for 10-key numeric keypads and fast keyboard navigation.',
    designDetails:
      'High-clarity industrial blue and clean white tables with instant printable invoice previews.',
    implementationDetails:
      'React frontend with browser-based thermal and A4 print stylesheet formatting.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'PDF Print Engine'],
    features: [
      'Instant LR generation with auto-incremented receipt numbers.',
      'Full freight breakdown (Basic freight, Hamali, Door delivery, GST).',
      'Consignment status tracking pipeline: Booked, In Transit, Delivered.',
    ],
    outcomes: [
      'Currently deployed in pilot tests with regional transport parcel offices.',
    ],
  },
];


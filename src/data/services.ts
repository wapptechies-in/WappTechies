import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Website Development',
    shortDesc: 'Modern, responsive and high-performance websites built for brand authority and speed.',
    description:
      'We design and build bespoke, high-performance websites that combine elegant typography, fluid micro-interactions, responsive architecture, and optimized search performance to elevate your digital presence.',
    category: 'Engineering',
    accentColor: '#155EEF',
    accentBg: '#DCEBFF',
    iconName: 'Globe',
    badge: 'Core Service',
    problemsSolved: [
      'Outdated, non-responsive sites that lose mobile traffic and brand credibility.',
      'Slow page load times degrading user experience and SEO rankings.',
      'Rigid templates that fail to communicate unique business offerings.',
      'Complex maintenance workflows that require developer intervention for basic updates.',
    ],
    targetAudience: [
      'Growing businesses seeking to modernize their online brand.',
      'Creative agencies and studios needing bespoke digital showcases.',
      'Professional firms and regional enterprises expanding their reach.',
    ],
    deliverables: [
      'Tailored responsive frontend architecture (HTML5/CSS3/React/Next.js).',
      'Content management system (CMS) integration or lightweight editable data layers.',
      'Core Web Vitals optimization and high-performance asset loading.',
      'Search engine optimization (SEO) schema, sitemaps, and analytics setup.',
    ],
    workflow: [
      { step: '01', title: 'Content & Hierarchy', desc: 'Define information architecture, key conversion flows and editorial tone.' },
      { step: '02', title: 'Interactive Wireframing', desc: 'Craft high-fidelity layouts, typographic systems and responsive breakpoints.' },
      { step: '03', title: 'Engineering & Polish', desc: 'Clean, semantic component development with fluid micro-interactions.' },
      { step: '04', title: 'Audit & Deployment', desc: 'Cross-browser testing, accessibility audit, performance tuning, and launch.' },
    ],
    faqs: [
      {
        question: 'Do you build custom websites or use existing templates?',
        answer: 'We build custom-designed, bespoke digital experiences tailored specifically to your brand, design system, and business requirements.',
      },
      {
        question: 'Will the website be optimized for mobile devices and search engines?',
        answer: 'Yes, every site is engineered mobile-first, conforms to modern accessibility standards, and incorporates semantic SEO best practices.',
      },
    ],
    relatedProjectIds: ['jebaraj-alex-robin', 'csi-christ-church'],
  },
  {
    id: 'web-app-development',
    slug: 'web-app-development',
    title: 'Web Application Development',
    shortDesc: 'Interactive, data-driven web applications and client portals with scalable architecture.',
    description:
      'From internal business tools to customer-facing SaaS platforms, we architect resilient, scalable web applications with robust frontend state management, secure APIs, and responsive dashboards.',
    category: 'Engineering',
    accentColor: '#1747B8',
    accentBg: '#E0E7FF',
    iconName: 'LayoutGrid',
    badge: 'Scalable Systems',
    problemsSolved: [
      'Disjointed manual spreadsheets slowing down operations.',
      'Inflexible legacy systems unable to integrate with modern web APIs.',
      'Unreliable user interfaces that cause user frustration and churn.',
    ],
    targetAudience: [
      'Companies transitioning from manual processes to unified digital tools.',
      'Product startups launching Minimum Viable Products (MVPs).',
      'Enterprises needing custom operational portals.',
    ],
    deliverables: [
      'Single-page and server-rendered web application architecture.',
      'Authentication, role-based authorization, and session security.',
      'RESTful & GraphQL API integration with transactional data stores.',
      'Responsive data tables, charting, and administrative workflows.',
    ],
    workflow: [
      { step: '01', title: 'System Architecture', desc: 'Map entities, relationships, state flow, and external dependencies.' },
      { step: '02', title: 'UX & State Modeling', desc: 'Design intuitive workflows, optimistic updates, and error handling states.' },
      { step: '03', title: 'Full-Stack Build', desc: 'Component modularity, type-safe API consumption, and unit testing.' },
      { step: '04', title: 'Staging & Verification', desc: 'Security assessment, automated CI/CD deployment, and user training.' },
    ],
    faqs: [
      {
        question: 'What technology stack do you use for web applications?',
        answer: 'We primarily utilize modern TypeScript ecosystems including React, Next.js, Node.js, and Postgres/Supabase, chosen based on project needs.',
      },
    ],
    relatedProjectIds: ['business-management-system', 'dine-easy', 'student-vault'],
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc: 'Android & iOS apps with fluid native performance and human-centered UI/UX.',
    description:
      'We build cross-platform and native mobile applications that empower users on the go. Engineered for reliability, offline readiness, intuitive navigation, and smooth animations.',
    category: 'Engineering',
    accentColor: '#FF6848',
    accentBg: '#FFE7E2',
    iconName: 'Smartphone',
    badge: 'iOS & Android',
    problemsSolved: [
      'Clunky mobile web views masquerading as native apps.',
      'High development cost of maintaining separate iOS and Android codebases.',
      'Poor offline functionality in areas with inconsistent connectivity.',
    ],
    targetAudience: [
      'Local mobility and on-demand delivery services.',
      'Consumer-facing utility products and service booking platforms.',
      'Field teams and mobile-first workforce operations.',
    ],
    deliverables: [
      'Cross-platform React Native / Flutter codebase for iOS and Android.',
      'Native device hardware integration (GPS, camera, push notifications, biometric auth).',
      'App Store and Google Play Store preparation and submission support.',
      'Offline data caching and synchronization mechanisms.',
    ],
    workflow: [
      { step: '01', title: 'Mobile UX Journeys', desc: 'Map thumb zones, gesture navigation, and mobile-specific user flows.' },
      { step: '02', title: 'Native Prototype', desc: 'Validate touch response, animation choreography, and layout scaling.' },
      { step: '03', title: 'Core Implementation', desc: 'State synchronization, device API integration, and security sandboxing.' },
      { step: '04', title: 'Store Deployment', desc: 'TestFlight / Play Console internal tracks, compliance review, and launch.' },
    ],
    faqs: [
      {
        question: 'Will one codebase work on both Android and iOS?',
        answer: 'Yes, with modern cross-platform engineering (e.g. React Native / Flutter), we produce high-performance apps for both platforms while minimizing maintenance costs.',
      },
    ],
    relatedProjectIds: ['ull-oor-auto', 'snapfind-ai'],
  },
  {
    id: 'desktop-app-development',
    slug: 'desktop-app-development',
    title: 'Desktop Application Development',
    shortDesc: 'Reliable, offline-capable desktop software for intensive business tasks and POS systems.',
    description:
      'When your business demands hardware integration, high-throughput data processing, local hardware acceleration, or completely offline operations, we engineer robust desktop applications for Windows and macOS.',
    category: 'Engineering',
    accentColor: '#4F46E5',
    accentBg: '#EEF2FF',
    iconName: 'Monitor',
    badge: 'Windows & Mac',
    problemsSolved: [
      'Browser constraints when interacting with receipt printers, weighing scales, or barcode scanners.',
      'Internet dependency for mission-critical point-of-sale and warehouse operations.',
      'Suboptimal memory management during large file or consignment processing.',
    ],
    targetAudience: [
      'Logistics operators, transport agencies, and consignment booking offices.',
      'Retail stores and restaurants needing reliable POS stations.',
      'Enterprises with dedicated on-premise workstation requirements.',
    ],
    deliverables: [
      'Cross-platform desktop binaries (Electron / Tauri / .NET).',
      'Local SQLite or embedded database storage with automated cloud backup.',
      'Direct thermal printer and peripheral hardware driver integration.',
      'Silent auto-updater mechanisms for seamless feature rollouts.',
    ],
    workflow: [
      { step: '01', title: 'Hardware Audit', desc: 'Inspect target workstation specs, connected peripherals, and operating environments.' },
      { step: '02', title: 'Offline Architecture', desc: 'Design resilient local storage, conflict resolution, and queuing systems.' },
      { step: '03', title: 'Desktop Engineering', desc: 'Build lightweight system binaries, IPC communication, and hardware listeners.' },
      { step: '04', title: 'Packaging & Sign-off', desc: 'Installer packaging (.msi, .exe, .dmg), code signing, and site installation.' },
    ],
    faqs: [
      {
        question: 'Can the desktop software work completely without internet?',
        answer: 'Yes, our desktop applications can operate in standalone offline mode, syncing records automatically once a connection is re-established.',
      },
    ],
    relatedProjectIds: ['lr-consignment-billing', 'dine-easy'],
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDesc: 'Creative and user-centric digital product design, design systems, and prototypes.',
    description:
      'We combine visual elegance with empathetic interaction design. From initial user journey mapping to comprehensive design tokens and clickable prototypes, we create interfaces people genuinely enjoy using.',
    category: 'Design',
    accentColor: '#EC4899',
    accentBg: '#FCE7F3',
    iconName: 'Palette',
    badge: 'Human Centered',
    problemsSolved: [
      'Visually cluttered interfaces that confuse new users.',
      'Inconsistent design patterns across web and mobile surfaces.',
      'High user drop-off during onboarding and checkout flows.',
    ],
    targetAudience: [
      'Product founders looking to validate ideas before engineering.',
      'Established companies needing a visual and functional redesign.',
      'Development teams needing a systematic design system.',
    ],
    deliverables: [
      'Interactive Figma prototypes with comprehensive component libraries.',
      'Scalable design systems (tokens, typography, color palettes, micro-interactions).',
      'User journey maps, wireframes, and usability test documentation.',
      'Design handoff specifications ready for engineering.',
    ],
    workflow: [
      { step: '01', title: 'Discovery & Research', desc: 'Understand real user pain points, competitor landscapes, and core workflows.' },
      { step: '02', title: 'Wireframes & Flows', desc: 'Map low-fidelity schematics to validate information hierarchy.' },
      { step: '03', title: 'Visual Art Direction', desc: 'Design distinctive, accessible UI with purposeful micro-interactions.' },
      { step: '04', title: 'Prototype & Handoff', desc: 'Deliver production-ready design tokens and interactive developer specs.' },
    ],
    faqs: [
      {
        question: 'Do you deliver Figma files that our developers can use?',
        answer: 'Yes, all our design projects are built in Figma with auto-layout, atomic component variants, and clear developer inspection notes.',
      },
    ],
    relatedProjectIds: ['snapfind-ai', 'ull-oor-auto', 'student-vault'],
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI Integration & Automation',
    shortDesc: 'Smart solutions to automate workflows, recognize images, and process documents.',
    description:
      'We build practical AI and machine learning integrations that automate repetitive manual steps, classify images and media, extract data from unstructured documents, and enhance decision-making.',
    category: 'Automation',
    accentColor: '#059669',
    accentBg: '#D1FAE5',
    iconName: 'Bot',
    badge: 'Intelligent Workflows',
    problemsSolved: [
      'Manual sorting through thousands of photographs or documents.',
      'Slow response times for standard repetitive customer queries.',
      'Data entry bottlenecks in administrative and accounting operations.',
    ],
    targetAudience: [
      'Event organizers and photographers needing automated face indexing.',
      'Businesses wanting to automate operational bottlenecks.',
      'Service organizations looking to streamline customer intake.',
    ],
    deliverables: [
      'Custom AI pipelines (face recognition, visual search, document parsing).',
      'LLM integrations for intelligent data summarization and triage.',
      'Background queue automation for heavy batch processing.',
      'Secure, privacy-conscious data handling and storage protocols.',
    ],
    workflow: [
      { step: '01', title: 'Feasibility Assessment', desc: 'Evaluate dataset requirements, model accuracy thresholds, and privacy constraints.' },
      { step: '02', title: 'Pipeline Prototyping', desc: 'Benchmark foundational models and test detection/indexing accuracy.' },
      { step: '03', title: 'Production Integration', desc: 'Connect models into existing application workflows with failover fallbacks.' },
      { step: '04', title: 'Monitoring & Tuning', desc: 'Track latency, cost-efficiency, and accuracy drift over time.' },
    ],
    faqs: [
      {
        question: 'Is my data secure when using your AI integrations?',
        answer: 'Yes, we architect AI solutions using dedicated private endpoints and privacy-first configurations, ensuring customer data is never used for unauthorized public model training.',
      },
    ],
    relatedProjectIds: ['snapfind-ai'],
  },
  {
    id: 'whatsapp-automation',
    slug: 'whatsapp-automation',
    title: 'WhatsApp Business Automation',
    shortDesc: 'Conversational customer journeys, booking alerts, and official WhatsApp Cloud API integrations.',
    description:
      'Leverage the world’s most accessible messaging channel. We build official WhatsApp Business API integrations for automated booking notifications, lead capture, delivery updates, and customer support workflows.',
    category: 'Automation',
    accentColor: '#25D366',
    accentBg: '#DCF8C6',
    iconName: 'MessageSquare',
    badge: 'Official API',
    problemsSolved: [
      'Missed customer leads due to delayed phone or email responses.',
      'High call volume for standard queries like order status and business hours.',
      'Low open rates on traditional SMS and marketing emails.',
    ],
    targetAudience: [
      'Local transport, restaurants, clinics, and appointment-based services.',
      'E-commerce brands seeking automated order confirmations and tracking alerts.',
      'Regional businesses wanting direct conversational sales channels.',
    ],
    deliverables: [
      'Meta WhatsApp Business Platform account verification and setup.',
      'Custom webhook backend for two-way conversational routing.',
      'Interactive WhatsApp message templates (quick replies, list menus, CTA buttons).',
      'Integration with CRM, POS, or dispatch systems.',
    ],
    workflow: [
      { step: '01', title: 'Meta Verification', desc: 'Guide business verification, phone number provisioning, and API access.' },
      { step: '02', title: 'Conversation Flow', desc: 'Script conversational trees, decision nodes, and escalation triggers.' },
      { step: '03', title: 'Webhook Engineering', desc: 'Build webhook handlers, message dispatchers, and stateful session logic.' },
      { step: '04', title: 'Template Approval', desc: 'Submit compliant WhatsApp templates to Meta and launch verified channels.' },
    ],
    faqs: [
      {
        question: 'Do you use the official WhatsApp Business API?',
        answer: 'Yes, we implement integrations exclusively via the official Meta WhatsApp Cloud API to ensure 100% compliance, zero ban risk, and maximum message deliverability.',
      },
    ],
    relatedProjectIds: ['ull-oor-auto', 'dine-easy'],
  },
  {
    id: 'gis-geospatial',
    slug: 'gis-geospatial',
    title: 'GIS & Geospatial Solutions',
    shortDesc: 'Mapping, spatial analysis, infrastructure visualization, and location-based tools.',
    description:
      'We transform complex spatial data into intuitive web maps, location analytics, and routing systems. Ideal for municipal planning, real estate visualization, route optimization, and logistics tracking.',
    category: 'Geospatial',
    accentColor: '#7C3AED',
    accentBg: '#EDE9FE',
    iconName: 'MapPin',
    badge: 'Spatial Intelligence',
    problemsSolved: [
      'Difficulty visualizing complex infrastructure assets and boundary layers.',
      'Inefficient route dispatching and lack of spatial analytics.',
      'Disjointed CAD/GIS files inaccessible to field personnel or public stakeholders.',
    ],
    targetAudience: [
      'Urban planners, civil engineering consultants, and municipal authorities.',
      'Logistics companies needing customized fleet geofencing and routing.',
      'Infrastructure projects requiring interactive public mapping portals.',
    ],
    deliverables: [
      'Interactive web mapping applications (Mapbox, Leaflet, OpenLayers, Deck.gl).',
      'Geospatial data conversion (GeoJSON, Shapefile, KML, PostGIS).',
      'Custom route calculation, proximity buffering, and spatial clustering.',
      'Layer management with satellite basemaps and interactive attribute inspectors.',
    ],
    workflow: [
      { step: '01', title: 'Spatial Data Ingestion', desc: 'Clean, project, and validate coordinate systems and feature attributes.' },
      { step: '02', title: 'Cartographic Design', desc: 'Establish visual hierarchy, symbology, zoom level styling, and tooltips.' },
      { step: '03', title: 'Web GIS Engineering', desc: 'Vector tile hosting, spatial querying, and performant web renderers.' },
      { step: '04', title: 'Deployment & Training', desc: 'Deploy cloud-hosted map tiles and deliver user documentation.' },
    ],
    faqs: [
      {
        question: 'Can you work with existing Shapefiles or CAD drawings?',
        answer: 'Yes, we convert CAD, Shapefile, and legacy GIS datasets into optimized web vector formats for smooth browser-based interaction.',
      },
    ],
    relatedProjectIds: ['smart-city-gis', 'ull-oor-auto'],
  },
  {
    id: 'custom-business-software',
    slug: 'custom-business-software',
    title: 'Custom Business Software',
    shortDesc: 'Tailored enterprise software designed around your specific workflow, billing, and inventory needs.',
    description:
      'Off-the-shelf software rarely fits unique business models. We build custom end-to-end ERPs, billing systems, inventory trackers, and management platforms that align with your exact operational protocols.',
    category: 'Enterprise',
    accentColor: '#D97706',
    accentBg: '#FEF3C7',
    iconName: 'Briefcase',
    badge: 'Tailored Workflows',
    problemsSolved: [
      'Paying high recurring SaaS fees for software that only fulfills half your needs.',
      'Double data entry between disconnected billing, inventory, and accounting software.',
      'Lack of customized regional compliance, GST formats, and consignment documentation.',
    ],
    targetAudience: [
      'Logistics and transport hubs managing Lorry Receipts and freight accounts.',
      'Wholesale distributors and manufacturing units.',
      'Service businesses with non-standard billing or commission workflows.',
    ],
    deliverables: [
      'Bespoke operational dashboards with role-based staff access.',
      'Automated invoice generation, GST calculation, and print-ready PDFs.',
      'Inventory, consignment tracking, and vendor reconciliation modules.',
      'Audit logging, data backup routines, and financial exports.',
    ],
    workflow: [
      { step: '01', title: 'Workflow Immersion', desc: 'Map your existing paperwork, physical registers, and staff responsibilities.' },
      { step: '02', title: 'Prototype Validation', desc: 'Simulate daily entry forms and reports to ensure friction-free adoption.' },
      { step: '03', title: 'Modular Build', desc: 'Implement core modules incrementally without disrupting ongoing operations.' },
      { step: '04', title: 'Data Migration & Rollout', desc: 'Import historical records, train on-site operators, and provide support.' },
    ],
    faqs: [
      {
        question: 'How do you handle migration from our existing records?',
        answer: 'We provide structured data import pipelines from Excel, CSV, or legacy databases, verifying data integrity before go-live.',
      },
    ],
    relatedProjectIds: ['lr-consignment-billing', 'business-management-system'],
  },
  {
    id: 'cloud-deployment-maintenance',
    slug: 'cloud-deployment-maintenance',
    title: 'Cloud Deployment & Maintenance',
    shortDesc: 'Reliable cloud hosting, CI/CD pipelines, SSL security, and ongoing system health monitoring.',
    description:
      'We ensure your digital products stay secure, fast, and available 24/7. From setting up automated deployments on Vercel and AWS to database backups, domain configuration, and continuous monitoring.',
    category: 'Enterprise',
    accentColor: '#0EA5E9',
    accentBg: '#E0F2FE',
    iconName: 'Cloud',
    badge: 'Reliability',
    problemsSolved: [
      'Server outages during peak traffic periods.',
      'Vulnerable unpatched software and expired SSL certificates.',
      'Manual, risky deployment procedures prone to human error.',
    ],
    targetAudience: [
      'All clients launching digital products and websites.',
      'Companies needing proactive uptime monitoring and regular maintenance.',
      'Businesses requiring domain, email, and cloud architecture governance.',
    ],
    deliverables: [
      'Cloud infrastructure setup (Vercel, AWS, Cloudflare, Supabase).',
      'Automated CI/CD pipelines for zero-downtime continuous deployment.',
      'Automated database backup schedules and disaster recovery protocols.',
      'SSL certificates, security headers, and DNS optimization.',
    ],
    workflow: [
      { step: '01', title: 'Infrastructure Design', desc: 'Select cost-effective, scalable cloud providers suited for project scale.' },
      { step: '02', title: 'Pipeline Automation', desc: 'Configure Git-triggered builds, automated linting, and staging environments.' },
      { step: '03', title: 'Security Hardening', desc: 'Implement DDoS mitigation, WAF rules, and encrypted secrets storage.' },
      { step: '04', title: 'Continuous Health', desc: 'Set up automated ping monitors, error telemetry, and scheduled maintenance.' },
    ],
    faqs: [
      {
        question: 'Can you manage hosting and maintenance after launch?',
        answer: 'Yes, we offer ongoing maintenance agreements covering updates, cloud infrastructure monitoring, backups, and security patches.',
      },
    ],
    relatedProjectIds: ['jebaraj-alex-robin', 'csi-christ-church'],
  },
];


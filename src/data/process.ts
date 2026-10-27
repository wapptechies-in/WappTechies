import { ProcessStage } from '../types';

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Listen & Understand',
    description:
      'We begin by diving deep into your vision, target audience, business goals, and existing workflow friction. No assumptions—just genuine curiosity and active listening.',
    accentColor: '#155EEF',
    accentBg: '#DCEBFF',
    icon: 'Compass',
    keyActivities: [
      'Stakeholder interviews & user persona definition',
      'Technical feasibility assessment & system constraints',
      'Competitor landscape & value proposition mapping',
      'Defining core project goals and measurable milestones',
    ],
    deliverable: 'Project Discovery Document & Technical Scope',
  },
  {
    step: '02',
    title: 'Plan',
    subtitle: 'Strategy & Roadmap',
    description:
      'We translate raw insights into a clear, predictable execution plan. Architecture is selected, milestones are scheduled, and scope is defined transparently.',
    accentColor: '#059669',
    accentBg: '#D1FAE5',
    icon: 'Calendar',
    keyActivities: [
      'System architecture & database entity modeling',
      'Technology stack selection & cloud infrastructure design',
      'Sprint scheduling with tangible milestone deliverables',
      'Risk mitigation & dependency identification',
    ],
    deliverable: 'Architecture Blueprint & Sprint Roadmap',
  },
  {
    step: '03',
    title: 'Design',
    subtitle: 'Thoughtful UI/UX',
    description:
      'We craft human-centered interfaces where every visual decision serves function. Through wireframes, interactive prototypes, and refined typography, ideas take visual shape.',
    accentColor: '#FF6848',
    accentBg: '#FFE7E2',
    icon: 'PenTool',
    keyActivities: [
      'Information architecture & user journey wireframing',
      'High-fidelity visual design & design token creation',
      'Interactive clickable prototypes for early user testing',
      'Responsive breakpoint adaptation & accessibility review',
    ],
    deliverable: 'Figma Design System & Clickable Prototype',
  },
  {
    step: '04',
    title: 'Develop',
    subtitle: 'Modern Engineering',
    description:
      'We write clean, modular, and type-safe code using proven modern stacks. Frontend interactions feel crisp, backend APIs are resilient, and databases are strictly modeled.',
    accentColor: '#D97706',
    accentBg: '#FEF3C7',
    icon: 'Code2',
    keyActivities: [
      'Modular component engineering with React/TypeScript',
      'API, webhook, and third-party service integration',
      'Responsive styling & fluid micro-interaction polish',
      'Continuous Integration (CI) and automated lint checks',
    ],
    deliverable: 'Production-Ready Codebase & Staging Build',
  },
  {
    step: '05',
    title: 'Test & Launch',
    subtitle: 'Quality Assurance',
    description:
      'Before opening to the world, we rigorously stress-test cross-browser compatibility, device responsiveness, security headers, and Core Web Vitals.',
    accentColor: '#0D9488',
    accentBg: '#CCFBF1',
    icon: 'CheckCircle2',
    keyActivities: [
      'Cross-browser & cross-device responsive validation',
      'Security review, SSL configuration, and secrets audit',
      'Speed optimization & image asset compression',
      'DNS mapping, domain routing, and production deployment',
    ],
    deliverable: 'Live Production Deployment & Health Report',
  },
  {
    step: '06',
    title: 'Support',
    subtitle: 'Continuous Improvement',
    description:
      'Launch is just day one. We provide proactive monitoring, system updates, performance audits, and continuous iterative enhancements as your business expands.',
    accentColor: '#7C3AED',
    accentBg: '#EDE9FE',
    icon: 'LifeBuoy',
    keyActivities: [
      '24/7 uptime monitoring & automated error alerting',
      'Scheduled database backups & dependency security updates',
      'User feedback analysis & iterative feature rollouts',
      'Direct developer support for team queries',
    ],
    deliverable: 'Ongoing Maintenance & Growth Retainer',
  },
];


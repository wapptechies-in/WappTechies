export interface GeneralFAQ {
  question: string;
  answer: string;
  category: string;
}

export const GENERAL_FAQS: GeneralFAQ[] = [
  {
    category: 'General',
    question: 'What is Wapp Techies and what do you specialize in?',
    answer:
      'Wapp Techies is a creative digital engineering studio. We combine modern interface design, robust web/mobile engineering, practical AI integrations, and custom business software to help businesses turn ideas into working digital products.',
  },
  {
    category: 'Collaboration',
    question: 'How do we start a project with Wapp Techies?',
    answer:
      'You can reach out through our Contact page or click "Start Your Project". We schedule an initial discovery discussion to understand your requirements, timeline, and goals, followed by a clear proposal and transparent roadmap.',
  },
  {
    category: 'Process',
    question: 'What is your typical project timeline?',
    answer:
      'Project durations depend on scope. A bespoke showcase website typically takes 2 to 4 weeks, while complex web applications, mobile platforms, or custom ERP solutions range from 6 to 12 weeks with structured milestone releases.',
  },
  {
    category: 'Technology',
    question: 'Do you offer ongoing support after project launch?',
    answer:
      'Yes, we provide post-launch maintenance, cloud hosting monitoring, security patching, and continuous feature iterations through tailored support agreements.',
  },
  {
    category: 'Pricing',
    question: 'How do you price client projects?',
    answer:
      'We offer fixed-scope milestone pricing for clearly defined projects, as well as dedicated sprint retainers for ongoing product development. We never hide fees or surprise clients with unexpected costs.',
  },
  {
    category: 'Ownership',
    question: 'Who owns the intellectual property and code of our project?',
    answer:
      'You do. Upon full completion and final settlement, you own 100% of the custom codebase, design assets, and intellectual property developed for your project.',
  },
];


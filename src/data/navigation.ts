import { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products', badge: '5 Products' },
  { label: 'Our Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  services: [
    { label: 'Website Development', href: '/services/web-development' },
    { label: 'Web Application Development', href: '/services/web-app-development' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'Desktop Applications', href: '/services/desktop-app-development' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    { label: 'AI Integration & Automation', href: '/services/ai-automation' },
    { label: 'WhatsApp Business Automation', href: '/services/whatsapp-automation' },
    { label: 'GIS & Geospatial Solutions', href: '/services/gis-geospatial' },
    { label: 'Custom Business Software', href: '/services/custom-business-software' },
    { label: 'Cloud Deployment & Care', href: '/services/cloud-deployment-maintenance' },
  ],
  products: [
    { label: 'SnapFind AI', href: '/products/snapfind-ai' },
    { label: 'Ull Oor Auto', href: '/products/ull-oor-auto' },
    { label: 'Dine Easy', href: '/products/dine-easy' },
    { label: 'LR Consignment Billing', href: '/products/lr-consignment-billing' },
    { label: 'Student Vault', href: '/products/student-vault' },
  ],
  company: [
    { label: 'About Wapp Techies', href: '/about' },
    { label: 'Our Work & Case Studies', href: '/work' },
    { label: 'How We Work (Process)', href: '/process' },
    { label: 'Contact & Inquiry', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};


import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../../data/navigation';
import { COMPANY } from '../../data/company';
import { ArrowUpRight, Mail, MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-0.5 shadow-md overflow-hidden border border-slate-700">
                <img
                  src="/images/wapp-techies-icon.png"
                  alt="Wapp Techies Logo"
                  className="w-full h-full rounded-[9px] object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-white text-lg leading-tight">
                  WAPP TECHIES
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                  IDEAS INTO IMPACT
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Wapp Techies is a creative digital engineering studio crafting bespoke websites, web applications, mobile platforms, practical AI integrations, and custom business products that turn ideas into lasting impact.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-electric-light shrink-0" />
                <a href={`tel:${COMPANY.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-medium">
                  {COMPANY.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={COMPANY.contact.whatsappMessageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium"
                >
                  WhatsApp: {COMPANY.contact.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-coral shrink-0" />
                <a href={`mailto:${COMPANY.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{COMPANY.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-mint shrink-0" />
                <span>{COMPANY.contact.businessHours}</span>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-2.5 pt-2">
              {COMPANY.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-electric text-slate-300 hover:text-white text-xs font-semibold transition-all button-spring"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {FOOTER_LINKS.services.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="hover:text-white hover:underline transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-electric font-semibold hover:underline">
                  View All 10 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-4">
              Digital Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {FOOTER_LINKS.products.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="hover:text-white hover:underline transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <span className="text-[10px] text-slate-500 block">
                  Proprietary in-house innovations
                </span>
              </li>
            </ul>
          </div>

          {/* Studio & Legal Column */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-4">
              Studio & Work
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="hover:text-white hover:underline transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Wapp Techies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Project Inquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};


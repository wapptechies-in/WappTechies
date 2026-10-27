import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { COMPANY } from '../data/company';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-ink-muted hover:text-electric mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-4xl bg-white border border-borderLight shadow-sm space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-coral-soft text-coral flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink-muted">Legal Terms</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-ink">Terms and Conditions</h1>
            </div>
          </div>

          <div className="text-xs text-ink-muted space-y-6 leading-relaxed">
            <p>
              Last Updated: October 2026. By accessing or browsing the Wapp Techies website, you agree to comply with the terms and conditions outlined below.
            </p>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-ink">1. Intellectual Property & Work Presentation</h2>
              <p>
                All visual mockups, 3D renderings, product names, logos, and custom graphics displayed on this website are the intellectual property of Wapp Techies or their respective authorized clients. Client case studies are published with documented permission.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-ink">2. Concept & Prototype Disclosures</h2>
              <p>
                Works explicitly designated as "Concept Projects", "Product Concepts", or "Prototypes" (including Ull Oor Auto, Smart City GIS, and Student Vault) represent proprietary design and architectural explorations, and are not presented as active commercial public utilities unless specifically stated.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-ink">3. Project Contracting & Deliverables</h2>
              <p>
                Formal engineering engagements are governed by separate, mutually signed Statements of Work (SOW) defining exact deliverables, intellectual property transfer milestones, payment schedules, and warranty timelines.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-ink">4. Governing Law</h2>
              <p>
                These terms are governed by the applicable laws of India. For any commercial or legal inquiries, please contact{' '}
                <a href={`mailto:${COMPANY.contact.email}`} className="text-electric font-semibold underline">
                  {COMPANY.contact.email}
                </a>.
              </p>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
};


import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../data/company';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-ink-muted hover:text-electric mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-4xl bg-white border border-borderLight shadow-sm space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-electric-subtle text-electric flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink-muted">Legal Notice</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-ink">Privacy Policy</h1>
            </div>
          </div>

          <div className="text-xs text-ink-muted space-y-6 leading-relaxed">
            <p>
              Last Updated: October 2026. This Privacy Policy outlines how Wapp Techies ("we", "our", or "us") collects, uses, and safeguards information provided through this website.
            </p>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-ink">1. Information We Collect</h2>
              <p>
                We only collect information that you voluntarily submit to us via our project enquiry form, email, or direct WhatsApp correspondence. This includes your name, email address, company name, and project specifications.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-ink">2. How We Use Your Information</h2>
              <p>
                Information submitted is used solely to respond to project enquiries, deliver proposals, schedule discovery calls, and provide contracted engineering services. We do not sell, rent, or monetize your contact information under any circumstances.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-ink">3. Proprietary Code & Data Confidentiality</h2>
              <p>
                Any proprietary data, business ideas, or trade secrets shared during project discussions are treated with strict confidentiality. Non-Disclosure Agreements (NDAs) are executed prior to deep architectural reviews upon request.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-ink">4. Third-Party Integrations</h2>
              <p>
                Our website links to live client deployments (such as photography portfolios and community platforms) and official communication channels (WhatsApp, GitHub). We are not responsible for the privacy policies of external sites.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-ink">5. Contact Regarding Privacy</h2>
              <p>
                For questions regarding your data or this policy, please email us directly at{' '}
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


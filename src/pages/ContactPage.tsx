import React, { useState } from 'react';
import { SERVICES } from '../data/services';
import { COMPANY } from '../data/company';
import { GENERAL_FAQS } from '../data/faqs';
import { Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Phone, Instagram } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: SERVICES[0]?.id || 'web-development',
    budget: '₹50,000 – ₹1,50,000',
    timeline: 'Within 1-2 months',
    description: '',
    privacyAccepted: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.description) {
      setErrorMessage('Please fill in your name, email, and project overview.');
      return;
    }

    if (!formData.privacyAccepted) {
      setErrorMessage('Please confirm agreement with the privacy acknowledgement.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    setTimeout(() => {
      // In production, integrate Formspree, Resend, or your backend endpoint.
      // We save locally to browser storage for testing.
      const inquiries = JSON.parse(localStorage.getItem('wapp_techies_inquiries') || '[]');
      inquiries.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('wapp_techies_inquiries', JSON.stringify(inquiries));

      setStatus('success');
    }, 800);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-borderLight text-[10px] font-extrabold uppercase tracking-widest text-ink mb-3 shadow-xs">
            <span className="text-electric">❖</span>
            <span>GET IN TOUCH</span>
            <span className="text-coral">›</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-ink leading-tight">
            Tell Us What You Want to Build.
          </h1>
          <p className="text-sm sm:text-base text-ink-muted mt-4 leading-relaxed">
            Whether you are scoping a new bespoke website, looking to digitize business operations, or wanting to pilot an AI solution, our engineering team is ready to collaborate.
          </p>
        </div>

        {/* Main Grid: Form (7 cols) + Contact Info (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-4xl p-8 sm:p-12 border border-borderLight shadow-card">
            <h2 className="text-2xl font-extrabold text-ink mb-2">Project Brief & Inquiry</h2>
            <p className="text-xs text-ink-muted mb-8">
              Fill in the details below. We review project submissions within one business day.
            </p>

            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-mint/40 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-bold text-ink">Inquiry Staged Successfully!</h3>
                <p className="text-xs text-ink-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your project brief has been recorded in your local browser session. You can also connect with us directly on WhatsApp or via email for immediate priority discussion.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/918300176274?text=Hello%20Wapp%20Techies,%20I%20am%20${encodeURIComponent(
                      formData.name
                    )}%20and%20I%20submitted%20a%20project%20brief.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-md hover:bg-[#20BA5A] transition-all"
                  >
                    Confirm on WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        service: SERVICES[0]?.id || 'web-development',
                        budget: '₹50,000 – ₹1,50,000',
                        timeline: 'Within 1-2 months',
                        description: '',
                        privacyAccepted: false,
                      });
                    }}
                    className="px-6 py-3 rounded-full bg-ivory-200 text-ink text-xs font-bold hover:bg-ivory-300 transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Robin"
                      className="w-full px-4 py-3 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-3 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Brand or Studio Name"
                      className="w-full px-4 py-3 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                      <option value="product-development">Proprietary Product Inquiry</option>
                      <option value="other">Custom Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric"
                    >
                      <option value="Under ₹50,000">Under ₹50,000</option>
                      <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000</option>
                      <option value="₹1,50,000 – ₹3,50,000">₹1,50,000 – ₹3,50,000</option>
                      <option value="₹3,50,000+">₹3,50,000+</option>
                      <option value="To be discussed">To be scoped collaboratively</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">Target Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric"
                    >
                      <option value="Urgent (2-3 weeks)">Urgent (2-3 weeks)</option>
                      <option value="Within 1-2 months">Within 1-2 months</option>
                      <option value="Flexible (3+ months)">Flexible (3+ months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1.5">
                    Project Overview & Goals *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your project, objectives, target users, and key functionality..."
                    className="w-full px-4 py-3 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="pagePrivacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="mt-1 rounded border-borderLight text-electric focus:ring-electric"
                  />
                  <label htmlFor="pagePrivacyAccepted" className="text-xs text-ink-muted">
                    I acknowledge that Wapp Techies will use these details solely to respond to this project inquiry.
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-full bg-electric hover:bg-electric-dark text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'Submitting Brief...' : 'Send Project Brief'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & Studio Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-4xl p-8 border border-borderLight shadow-card space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-borderLight">
                <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-md overflow-hidden shrink-0 border border-borderLight">
                  <img
                    src="/images/wapp-techies-icon.png"
                    alt="Wapp Techies Logo"
                    className="w-full h-full rounded-[14px] object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">Studio Coordinates</h3>
                  <p className="text-[11px] text-ink-muted">Wapp Techies Creative Studio</p>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                {/* Contact Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-electric-subtle text-electric flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase font-bold">Contact No</span>
                    <a href={`tel:${COMPANY.contact.phone.replace(/\s+/g, '')}`} className="font-bold text-ink hover:text-electric transition-colors">
                      {COMPANY.contact.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0 border border-emerald-200">
                    <MessageCircle className="w-4 h-4 fill-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase font-bold">WhatsApp Direct</span>
                    <a
                      href={COMPANY.contact.whatsappMessageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-ink hover:text-[#25D366] transition-colors"
                    >
                      {COMPANY.contact.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-coral-soft text-coral flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase font-bold">Email Inquiries</span>
                    <a href={`mailto:${COMPANY.contact.email}`} className="font-bold text-ink hover:text-coral transition-colors">
                      {COMPANY.contact.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 border border-pink-200">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase font-bold">Instagram</span>
                    <a
                      href="https://www.instagram.com/wapptechies/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-ink hover:text-pink-600 transition-colors"
                    >
                      @wapptechies
                    </a>
                  </div>
                </div>

                {/* Studio Location */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase font-bold">Studio Location</span>
                    <span className="font-bold text-ink">{COMPANY.contact.location}</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-mint/40 text-emerald-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-ink-muted block text-[10px] uppercase font-bold">Working Hours</span>
                    <span className="font-bold text-ink">{COMPANY.contact.businessHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-borderLight flex flex-col gap-2.5">
                <a
                  href={COMPANY.contact.whatsappMessageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all button-spring"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat With Us on WhatsApp</span>
                </a>

                <a
                  href="https://www.instagram.com/wapptechies/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-coral text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all button-spring"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow on Instagram (@wapptechies)</span>
                </a>
              </div>
            </div>

            {/* Backend Integration Note */}
            <div className="bg-ivory-100/80 rounded-3xl p-6 border border-borderLight text-xs text-ink-muted space-y-2">
              <span className="font-bold text-ink block">Deployment Integration Note:</span>
              <p className="leading-relaxed text-[11px]">
                To route form submissions to your team's live email inbox or Discord/Slack channel, configure your Formspree endpoint or Resend API key in <code className="bg-white px-1.5 py-0.5 rounded border border-borderLight text-ink font-mono">src/pages/ContactPage.tsx</code>. Submissions currently store locally with high data fidelity.
              </p>
            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-electric block mb-1">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {GENERAL_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-borderLight bg-white overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-xs font-bold text-ink hover:text-electric transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-electric" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-ink-muted leading-relaxed border-t border-borderLight/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};


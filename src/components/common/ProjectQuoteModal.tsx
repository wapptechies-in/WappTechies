import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICES } from '../../data/services';

interface ProjectQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectQuoteModal: React.FC<ProjectQuoteModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.description) {
      setErrorMessage('Please fill in your name, email, and project description.');
      return;
    }

    if (!formData.privacyAccepted) {
      setErrorMessage('Please accept the privacy policy acknowledgment.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate submission / local staging queue
    setTimeout(() => {
      // In production, connect this to your Formspree, Resend, or custom API route.
      // We log the payload cleanly to console and localStorage.
      const inquiries = JSON.parse(localStorage.getItem('wapp_techies_inquiries') || '[]');
      inquiries.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('wapp_techies_inquiries', JSON.stringify(inquiries));

      setStatus('success');
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-borderLight overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 bg-ivory-100/80 border-b border-borderLight flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <img
              src="/images/wapp-techies-icon.png"
              alt="Wapp Techies"
              className="w-11 h-11 rounded-2xl object-cover shadow-sm border border-borderLight shrink-0"
            />
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-electric">
                Start Your Project
              </span>
              <h3 className="text-xl font-extrabold text-ink">Let's Build Together</h3>
              <p className="text-xs text-ink-muted mt-0.5">
                Tell us about your digital product or engineering needs.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-borderLight flex items-center justify-center text-ink-muted hover:text-ink hover:bg-ivory-200 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {status === 'success' ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-mint/30 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-ink">Inquiry Prepared & Saved!</h4>
              <p className="text-xs text-ink-muted max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your project brief has been recorded in your local inquiry workspace session. For direct contact, you can also connect with us on WhatsApp or email.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/918300176274?text=Hello%20Wapp%20Techies,%20I%20am%20${encodeURIComponent(
                    formData.name
                  )}%20and%20I%20submitted%20a%20project%20inquiry%20for%20${encodeURIComponent(
                    formData.service
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-md hover:bg-[#20BA5A] transition-all"
                >
                  Confirm on WhatsApp
                </a>
                <button
                  onClick={() => {
                    setStatus('idle');
                    onClose();
                  }}
                  className="px-5 py-2.5 rounded-full bg-ivory-200 text-ink text-xs font-bold hover:bg-ivory-300 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Robin"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink mb-1">Company / Brand</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Studio / Startup"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink mb-1">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                    <option value="custom-product">Digital Product Development</option>
                    <option value="consultation">Technical Consultation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink mb-1">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric"
                  >
                    <option value="Under ₹50,000">Under ₹50,000</option>
                    <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000</option>
                    <option value="₹1,50,000 – ₹3,50,000">₹1,50,000 – ₹3,50,000</option>
                    <option value="₹3,50,000+">₹3,50,000+</option>
                    <option value="To be scoped">To be scoped collaboratively</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink mb-1">Target Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric"
                  >
                    <option value="Urgent (2-3 weeks)">Urgent (2-3 weeks)</option>
                    <option value="Within 1-2 months">Within 1-2 months</option>
                    <option value="Flexible (3+ months)">Flexible (3+ months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink mb-1">
                  Project Description & Key Requirements *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Outline what you are looking to build, key features, and any reference designs..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-borderLight bg-ivory-50 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-electric resize-none"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                  className="mt-0.5 rounded border-borderLight text-electric focus:ring-electric"
                />
                <label htmlFor="privacyAccepted" className="text-[11px] text-ink-muted">
                  I agree that Wapp Techies may contact me regarding this project enquiry in accordance with the{' '}
                  <span className="text-electric underline">Privacy Policy</span>.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-2xl bg-electric hover:bg-electric-dark text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Project Brief'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};


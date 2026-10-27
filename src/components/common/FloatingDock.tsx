import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, Package, Briefcase, MessageCircle, X, Send } from 'lucide-react';
import { COMPANY } from '../../data/company';

export const FloatingDock: React.FC = () => {
  const [waModalOpen, setWaModalOpen] = useState(false);
  const [waMessage, setWaMessage] = useState('Hello Wapp Techies, I would like to discuss a project with your team.');
  const location = useLocation();

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(waMessage);
    window.open(`https://wa.me/918300176274?text=${encoded}`, '_blank');
    setWaModalOpen(false);
  };

  return (
    <>
      {/* Floating Vertical Dock on Desktop Right Edge */}
      <aside
        aria-label="Quick Actions Dock"
        className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2 p-2 rounded-full glass-dock border border-borderLight"
      >
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            location.pathname === '/'
              ? 'bg-electric text-white shadow-sm'
              : 'text-ink-muted hover:text-ink hover:bg-ivory-200'
          }`}
          title="Home"
          aria-label="Go to Home"
        >
          <Home className="w-4 h-4" />
        </Link>

        <Link
          to="/services"
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            location.pathname.startsWith('/services')
              ? 'bg-electric text-white shadow-sm'
              : 'text-ink-muted hover:text-ink hover:bg-ivory-200'
          }`}
          title="Services"
          aria-label="Explore Services"
        >
          <LayoutGrid className="w-4 h-4" />
        </Link>

        <Link
          to="/products"
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            location.pathname.startsWith('/products')
              ? 'bg-electric text-white shadow-sm'
              : 'text-ink-muted hover:text-ink hover:bg-ivory-200'
          }`}
          title="Products"
          aria-label="View Products"
        >
          <Package className="w-4 h-4" />
        </Link>

        <Link
          to="/work"
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            location.pathname.startsWith('/work')
              ? 'bg-electric text-white shadow-sm'
              : 'text-ink-muted hover:text-ink hover:bg-ivory-200'
          }`}
          title="Featured Work"
          aria-label="Featured Work"
        >
          <Briefcase className="w-4 h-4" />
        </Link>

        <div className="w-6 h-[1px] bg-borderLight my-1" />

        {/* Floating WhatsApp Action Pill */}
        <button
          onClick={() => setWaModalOpen(true)}
          className="relative group w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all"
          title="Chat on WhatsApp"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="absolute right-full mr-3 px-2.5 py-1 rounded-md bg-ink text-white text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            WhatsApp Direct
          </span>
        </button>
      </aside>

      {/* Floating Bottom-Right WhatsApp on Mobile / Tablet */}
      <div className="fixed bottom-6 right-6 z-40 xl:hidden">
        <button
          onClick={() => setWaModalOpen(true)}
          className="w-13 h-13 p-3.5 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </button>
      </div>

      {/* WhatsApp Quick Chat Modal */}
      {waModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-borderLight overflow-hidden">
            {/* Header */}
            <div className="bg-[#075E54] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/images/wapp-techies-icon.png"
                  alt="Wapp Techies"
                  className="w-10 h-10 rounded-full object-cover border border-white/40 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-sm">Wapp Techies Direct</h4>
                  <p className="text-[11px] text-white/90 font-mono">+91 83001 76274 • Quick Reply</p>
                </div>
              </div>
              <button
                onClick={() => setWaModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 bg-[#E5DDD5]/30">
              <div className="bg-white p-3.5 rounded-2xl shadow-sm text-xs text-ink mb-4 max-w-[85%] border border-borderLight">
                <p className="font-semibold text-ink-deep mb-1">Wapp Techies Studio</p>
                <p>Hello! How can we assist you with your digital product, website or mobile app today?</p>
                <span className="text-[10px] text-ink-muted float-right mt-1">Just now</span>
              </div>

              <form onSubmit={handleSendWhatsApp} className="mt-4">
                <label className="block text-xs font-semibold text-ink-muted mb-1.5">
                  Your message to our engineering team:
                </label>
                <textarea
                  rows={3}
                  value={waMessage}
                  onChange={(e) => setWaMessage(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-borderLight bg-white focus:outline-none focus:ring-2 focus:ring-[#25D366] resize-none"
                  placeholder="Type your project overview..."
                />
                <button
                  type="submit"
                  className="mt-3 w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Start WhatsApp Conversation</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, LayoutGrid, Package, Briefcase, Compass } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { PRODUCTS } from '../../data/products';
import { PROJECTS } from '../../data/projects';
import { PROCESS_STAGES } from '../../data/process';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredServices = SERVICES.filter(
    (s) => s.title.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q)
  );

  const filteredProducts = PRODUCTS.filter(
    (p) => p.title.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q)
  );

  const filteredProjects = PROJECTS.filter(
    (proj) => proj.title.toLowerCase().includes(q) || proj.summary.toLowerCase().includes(q) || proj.category.toLowerCase().includes(q)
  );

  const filteredProcess = PROCESS_STAGES.filter(
    (stage) => stage.title.toLowerCase().includes(q) || stage.description.toLowerCase().includes(q)
  );

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-ink/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-borderLight overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-borderLight bg-ivory-50/50">
          <Search className="w-5 h-5 text-electric" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, products, case studies, or process..."
            className="w-full bg-transparent text-sm font-semibold text-ink placeholder:text-ink-muted focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-ink-muted hover:text-ink hover:bg-ivory-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-1 bg-ivory-200 rounded text-ink-muted">
            ESC
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-ink-muted hover:text-ink"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {/* Services Category */}
          {filteredServices.length > 0 && (
            <div>
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-ink-muted uppercase tracking-wider">
                <LayoutGrid className="w-3.5 h-3.5 text-electric" />
                <span>Services ({filteredServices.length})</span>
              </div>
              <div className="space-y-1">
                {filteredServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleSelect(`/services/${service.slug}`)}
                    className="w-full text-left p-3 rounded-2xl hover:bg-ivory-100 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <p className="text-sm font-bold text-ink group-hover:text-electric transition-colors">
                        {service.title}
                      </p>
                      <p className="text-xs text-ink-muted line-clamp-1">{service.shortDesc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-muted group-hover:text-electric group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Category */}
          {filteredProducts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-ink-muted uppercase tracking-wider">
                <Package className="w-3.5 h-3.5 text-coral" />
                <span>Our Products ({filteredProducts.length})</span>
              </div>
              <div className="space-y-1">
                {filteredProducts.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => handleSelect(`/products/${prod.slug}`)}
                    className="w-full text-left p-3 rounded-2xl hover:bg-ivory-100 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-ink group-hover:text-coral transition-colors">
                          {prod.title}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-ivory-200 text-ink-deep">
                          {prod.status}
                        </span>
                      </div>
                      <p className="text-xs text-ink-muted line-clamp-1">{prod.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-muted group-hover:text-coral group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects / Case Studies */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-ink-muted uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                <span>Case Studies & Work ({filteredProjects.length})</span>
              </div>
              <div className="space-y-1">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => handleSelect(`/work/${proj.slug}`)}
                    className="w-full text-left p-3 rounded-2xl hover:bg-ivory-100 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-ink group-hover:text-electric transition-colors">
                          {proj.title}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                          {proj.category}
                        </span>
                      </div>
                      <p className="text-xs text-ink-muted line-clamp-1">{proj.summary}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-muted group-hover:text-electric group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Process */}
          {filteredProcess.length > 0 && (
            <div>
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-ink-muted uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-purple-600" />
                <span>Process Stages</span>
              </div>
              <div className="space-y-1">
                {filteredProcess.map((stage) => (
                  <button
                    key={stage.step}
                    onClick={() => handleSelect('/process')}
                    className="w-full text-left p-3 rounded-2xl hover:bg-ivory-100 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <p className="text-sm font-bold text-ink">
                        {stage.step} — {stage.title}: {stage.subtitle}
                      </p>
                      <p className="text-xs text-ink-muted line-clamp-1">{stage.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-muted group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredServices.length === 0 &&
            filteredProducts.length === 0 &&
            filteredProjects.length === 0 &&
            filteredProcess.length === 0 && (
              <div className="py-12 text-center text-ink-muted">
                <p className="text-sm">No matches found for "{query}".</p>
                <p className="text-xs mt-1">Try searching for "web", "auto", "ai", "mobile" or "pricing".</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};


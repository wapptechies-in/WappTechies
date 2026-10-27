import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-40 pb-24 text-center">
      <div className="max-w-md mx-auto px-4">
        <span className="text-7xl font-black text-electric block tracking-tighter mb-2">404</span>
        <h1 className="text-2xl font-extrabold text-ink mb-2">Page Not Located</h1>
        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-8">
          The page you are looking for may have moved or does not exist. Explore our core studio sections below:
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-electric hover:bg-electric-dark text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/work"
            className="px-6 py-3 rounded-full bg-white border border-borderLight text-ink text-xs font-bold hover:bg-ivory-100 flex items-center justify-center gap-2 transition-all"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-borderLight text-xs text-ink-muted">
          Looking for our products? Check out{' '}
          <Link to="/products" className="text-electric font-bold underline">
            Our Products
          </Link>{' '}
          or browse{' '}
          <Link to="/services" className="text-electric font-bold underline">
            Services
          </Link>.
        </div>
      </div>
    </div>
  );
};


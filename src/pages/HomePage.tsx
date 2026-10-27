import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesStrip } from '../components/home/ServicesStrip';
import { FeaturedWorkSection } from '../components/home/FeaturedWorkSection';
import { ProductsSection } from '../components/home/ProductsSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { ApproachTrustSection } from '../components/home/ApproachTrustSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

interface ContextType {
  onOpenQuote: () => void;
  onOpenStory?: () => void;
}

export const HomePage: React.FC = () => {
  const { onOpenQuote } = useOutletContext<ContextType>();

  return (
    <div className="relative">
      <HeroSection onOpenQuote={onOpenQuote} />
      <ServicesStrip />
      <FeaturedWorkSection />
      <ProductsSection />
      <ProcessSection onOpenQuote={onOpenQuote} />
      <ApproachTrustSection />
      <FinalCtaSection onOpenQuote={onOpenQuote} />
    </div>
  );
};


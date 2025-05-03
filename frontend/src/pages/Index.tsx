
import React from 'react';
import Hero from '../components/Hero';
import AboutVanameiSection from '../components/AboutVanameiSection';
import GrowthCycleSection from '../components/GrowthCycleSection';
import ProductionSection from '../components/ProductionSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutVanameiSection />
      <GrowthCycleSection />
      <ProductionSection />
    </div>
  );
};

export default Index;

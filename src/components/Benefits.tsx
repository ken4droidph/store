import React from 'react';
import { Sparkles, Shield, Leaf, Truck } from 'lucide-react';
import { Benefit } from '../types/product';

interface BenefitsProps {
  benefits: Benefit[];
}

const iconMap = {
  sparkles: Sparkles,
  shield: Shield,
  leaf: Leaf,
  truck: Truck
};

const Benefits = ({ benefits }: BenefitsProps) => {
  return (
    <section id="benefits" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Designed with care, built to last, and made for those who appreciate quality.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {benefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              
              return (
                <div key={benefit.id} className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md">
                    {IconComponent && <IconComponent size={32} className="text-gray-900" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

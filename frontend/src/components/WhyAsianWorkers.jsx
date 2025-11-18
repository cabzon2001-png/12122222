import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export const WhyAsianWorkers = () => {
  const benefits = [
    'High work culture based on professionalism and perfectionism',
    'Hardworking, loyal, and reliable workforce',
    'Excellent adaptation to foreign environments',
    'Strong respect for employers and punctuality',
    'Motivated by earning opportunities',
    'Willing to work overtime and weekends',
    'No language barrier - proficient in English',
    'Eager to learn local languages quickly',
    'Long-term commitment to employers',
    'Low turnover rates and high stability',
    'Not afraid of monotonous work',
    'Limited family visits (once per year)',
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxkaXZlcnNlJTIwdGVhbXxlbnwwfHx8fDE3NjM0NzE4NjZ8MA&ixlib=rb-4.1.0&q=85"
              alt="Professional team meeting"
              className="relative rounded-3xl shadow-elegant object-cover w-full h-[500px]"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="inline-block bg-accent px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-accent-foreground uppercase tracking-wide">
                Why Asian Workers?
              </span>
            </div>
            
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Exceptional Workforce from Asia
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Workers from South and Central Asia are well-prepared for physical labor and distinguished by high dedication. 
              Their employment contributes to business stability, especially in manufacturing and processing industries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAsianWorkers;
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Factory, Building2, Truck, UtensilsCrossed, Wheat } from 'lucide-react';

export const IndustriesSection = () => {
  const industries = [
    {
      icon: Wrench,
      title: 'Welding',
      description: 'Experienced welders combining technical precision with practical expertise for your projects.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'High-performance production workers who implement innovations and optimize processes.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Building2,
      title: 'Construction',
      description: 'Qualified construction workers ready to execute modern projects in dynamic work environments.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Truck,
      title: 'Transport & Logistics',
      description: 'Experienced personnel ensuring seamless operations and delivery, supporting business growth.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: UtensilsCrossed,
      title: 'Gastronomy',
      description: 'Passionate gastronomy professionals from chefs to support staff, elevating taste standards.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Wheat,
      title: 'Agriculture',
      description: 'Agricultural workers with necessary knowledge and experience contributing to innovation and productivity.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-accent-foreground uppercase tracking-wide">
              Industries
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We connect companies with the best candidates from Asia across key sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 border-border bg-card hover:border-primary/50"
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${industry.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                    <Icon className={`w-7 h-7 ${industry.color}`} />
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold text-foreground">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
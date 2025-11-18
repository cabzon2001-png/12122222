import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Target, Headphones, DollarSign, Zap, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export const ServicesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    {
      icon: Clock,
      title: t.timeSavings.title,
      description: t.timeSavings.description,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Target,
      title: t.candidateSelection.title,
      description: t.candidateSelection.description,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Headphones,
      title: t.consulting.title,
      description: t.consulting.description,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: DollarSign,
      title: t.costOptimization.title,
      description: t.costOptimization.description,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Zap,
      title: t.flexibility.title,
      description: t.flexibility.description,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Award,
      title: t.expertise.title,
      description: t.expertise.description,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-accent-foreground uppercase tracking-wide">
              {t.badge}
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elegant hover:scale-105 transition-all duration-300 border-border bg-card hover:border-primary/50 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
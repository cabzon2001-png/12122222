import React from 'react';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export const StatsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].stats;

  const stats = [
    {
      icon: Users,
      value: '5000+',
      label: t.workersPlaced,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Globe,
      value: '15+',
      label: t.countriesRecruit,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Award,
      value: '98%',
      label: t.satisfaction,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: TrendingUp,
      value: '200+',
      label: t.companiesServed,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant hover:scale-105 transition-all duration-300 border-border bg-card animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="font-heading font-bold text-4xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
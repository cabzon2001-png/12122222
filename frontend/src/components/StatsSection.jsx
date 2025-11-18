import React from 'react';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: '5000+',
      label: 'Workers Successfully Placed',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Globe,
      value: '15+',
      label: 'Countries We Recruit From',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Award,
      value: '98%',
      label: 'Client Satisfaction Rate',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: TrendingUp,
      value: '200+',
      label: 'European Companies Served',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Our Numbers Speak for Themselves
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading European companies for international recruitment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-smooth border-border bg-card"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center`}>
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
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Target, Headphones, DollarSign, Zap, Award } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'We handle the entire recruitment process, allowing you to focus on your core business operations.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Target,
      title: 'Precise Candidate Selection',
      description: 'Access to a wide network of talent, carefully matched to your company needs and requirements.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Headphones,
      title: 'Professional Consulting',
      description: 'Our HR team provides support and consultation at every stage, ensuring expert guidance.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Reduce direct employment costs while enabling more effective budget management.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Zap,
      title: 'Business Flexibility',
      description: 'Adapt your team to current needs, ensuring simple scaling of operations.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Award,
      title: 'Expert Knowledge',
      description: 'Access to specialists and latest technologies without expanding internal resources.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-accent-foreground uppercase tracking-wide">
              Services
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Comprehensive Recruitment Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tailored to your staffing needs - respond to market challenges together with ProfiWay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 border-border bg-card hover:border-primary/50"
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
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
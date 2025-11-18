import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const PricingSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const plans = [
    {
      name: 'Standard',
      description: 'For small to medium businesses',
      price: 'Custom',
      features: [
        'Candidate search and selection',
        'Document verification',
        'Visa process organization',
        'Basic support',
        'Up to 20 workers',
      ],
      highlighted: false,
    },
    {
      name: 'Premium',
      description: 'For growing companies',
      price: 'Custom',
      features: [
        'Everything in Standard',
        'Testing and video interviews',
        'Full legal support',
        'Arrival coordination',
        'Adaptation support',
        'Up to 50 workers',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale recruitment',
      price: 'Custom',
      features: [
        'Everything in Premium',
        'Dedicated account manager',
        'Priority candidate selection',
        'Special payment terms',
        'Unlimited workers',
        '24/7 support',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-accent-foreground uppercase tracking-wide">
              Pricing
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose a plan that fits your recruitment needs. All prices are customized based on your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-elegant transition-all duration-300 ${
                plan.highlighted
                  ? 'border-primary border-2 shadow-lg scale-105'
                  : 'border-border'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-heading font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-heading font-bold text-foreground">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Based on requirements
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => scrollToSection('contact')}
                  className={`w-full mt-6 ${
                    plan.highlighted
                      ? 'bg-gradient-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Payment only after successful completion of probation period. No hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
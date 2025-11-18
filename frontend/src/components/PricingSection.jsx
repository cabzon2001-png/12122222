import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export const PricingSection = () => {
  const { language } = useLanguage();
  const t = translations[language].pricing;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const plans = [
    {
      name: language === 'en' ? 'Standard' : 'Стандарт',
      description: language === 'en' ? 'For small to medium businesses' : 'Для малого та середнього бізнесу',
      price: t.custom,
      features: language === 'en' ? [
        'Candidate search and selection',
        'Document verification',
        'Visa process organization',
        'Basic support',
        'Up to 20 workers',
      ] : [
        'Пошук та відбір кандидатів',
        'Перевірка документів',
        'Організація візового процесу',
        'Базова підтримка',
        'До 20 працівників',
      ],
      highlighted: false,
    },
    {
      name: language === 'en' ? 'Premium' : 'Преміум',
      description: language === 'en' ? 'For growing companies' : 'Для компаній, що розвиваються',
      price: t.custom,
      features: language === 'en' ? [
        'Everything in Standard',
        'Testing and video interviews',
        'Full legal support',
        'Arrival coordination',
        'Adaptation support',
        'Up to 50 workers',
      ] : [
        'Все зі Стандарту',
        'Тестування та відео-співбесіди',
        'Повна юридична підтримка',
        'Координація прибуття',
        'Підтримка адаптації',
        'До 50 працівників',
      ],
      highlighted: true,
    },
    {
      name: language === 'en' ? 'Enterprise' : 'Корпоративний',
      description: language === 'en' ? 'For large-scale recruitment' : 'Для масштабного найму',
      price: t.custom,
      features: language === 'en' ? [
        'Everything in Premium',
        'Dedicated account manager',
        'Priority candidate selection',
        'Special payment terms',
        'Unlimited workers',
        '24/7 support',
      ] : [
        'Все з Преміум',
        'Персональний менеджер',
        'Пріоритетний відбір кандидатів',
        'Спеціальні умови оплати',
        'Необмежена кількість працівників',
        'Підтримка 24/7',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-elegant transition-all duration-300 animate-fade-in-up ${
                plan.highlighted
                  ? 'border-primary border-2 shadow-lg scale-105'
                  : 'border-border hover:scale-105'
              }`}
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    {language === 'en' ? 'Most Popular' : 'Найпопулярніший'}
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
                    {t.basedOn}
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
                  className={`w-full mt-6 transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-primary text-primary-foreground hover:scale-105'
                      : 'bg-muted text-foreground hover:bg-muted/80 hover:scale-105'
                  }`}
                >
                  {t.getStarted}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p className="text-muted-foreground">
            {t.paymentNote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
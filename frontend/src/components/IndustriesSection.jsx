import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Factory, Building2, Truck, UtensilsCrossed, Wheat } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export const IndustriesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].industries;

  const industries = [
    {
      icon: Wrench,
      title: language === 'en' ? 'Welding' : 'Зварювання',
      description: language === 'en' ? 'Experienced welders combining technical precision with practical expertise for your projects.' : 'Досвідчені зварювальники, що поєднують технічну точність з практичним досвідом для ваших проектів.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Factory,
      title: language === 'en' ? 'Manufacturing' : 'Виробництво',
      description: language === 'en' ? 'High-performance production workers who implement innovations and optimize processes.' : 'Високопродуктивні виробничі працівники, які впроваджують інновації та оптимізують процеси.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Building2,
      title: language === 'en' ? 'Construction' : 'Будівництво',
      description: language === 'en' ? 'Qualified construction workers ready to execute modern projects in dynamic work environments.' : 'Кваліфіковані будівельні робітники, готові виконувати сучасні проекти в динамічних умовах.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Truck,
      title: language === 'en' ? 'Transport & Logistics' : 'Транспорт та логістика',
      description: language === 'en' ? 'Experienced personnel ensuring seamless operations and delivery, supporting business growth.' : 'Досвідчений персонал, що забезпечує безперебійні операції та доставку, підтримуючи зростання бізнесу.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: UtensilsCrossed,
      title: language === 'en' ? 'Gastronomy' : 'Гастрономія',
      description: language === 'en' ? 'Passionate gastronomy professionals from chefs to support staff, elevating taste standards.' : 'Пристрасні професіонали гастрономії від шеф-кухарів до допоміжного персоналу, підвищуючи стандарти смаку.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Wheat,
      title: language === 'en' ? 'Agriculture' : 'Сільське господарство',
      description: language === 'en' ? 'Agricultural workers with necessary knowledge and experience contributing to innovation and productivity.' : 'Сільськогосподарські працівники з необхідними знаннями та досвідом, що сприяють інноваціям та продуктивності.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30">
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
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elegant hover:scale-105 transition-all duration-300 border-border bg-card hover:border-primary/50 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${industry.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
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
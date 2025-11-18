import React from 'react';
import { Card } from '@/components/ui/card';
import { FileText, Users, ClipboardCheck, FileCheck, Plane, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export const ProcessSection = () => {
  const { language } = useLanguage();
  const t = translations[language].process;

  const steps = [
    {
      icon: FileText,
      title: language === 'en' ? 'Client Submits Request' : 'Клієнт подає заявку',
      description: language === 'en' ? 'Employer submits an application through our website form with detailed requirements.' : 'Роботодавець подає заявку через форму на сайті з детальними вимогами.',
      number: '01',
    },
    {
      icon: ClipboardCheck,
      title: language === 'en' ? 'Contract & Requirements' : 'Договір та вимоги',
      description: language === 'en' ? 'We sign a contract and begin candidate selection based on specified parameters.' : 'Підписуємо договір та починаємо підбір кандидатів за вказаними параметрами.',
      number: '02',
    },
    {
      icon: Users,
      title: language === 'en' ? 'Candidate Selection' : 'Відбір кандидатів',
      description: language === 'en' ? 'We send resumes, document copies, and test results for your review and approval.' : 'Надсилаємо резюме, копії документів та результати тестів для перегляду та затвердження.',
      number: '03',
    },
    {
      icon: FileCheck,
      title: language === 'en' ? 'Document Preparation' : 'Підготовка документів',
      description: language === 'en' ? 'Processing work permits, visa arrangements, and all legal documentation.' : 'Оформлення дозволів на роботу, візових документів та всієї юридичної документації.',
      number: '04',
    },
    {
      icon: Plane,
      title: language === 'en' ? 'Worker Arrival' : 'Прибуття працівників',
      description: language === 'en' ? 'We organize relocation and provide comprehensive arrival support.' : 'Організовуємо переїзд та надаємо комплексну підтримку по прибуттю.',
      number: '05',
    },
    {
      icon: Headphones,
      title: language === 'en' ? 'Ongoing Support' : 'Постійна підтримка',
      description: language === 'en' ? 'Continuous support after placement to ensure successful integration.' : 'Безперервна підтримка після працевлаштування для успішної інтеграції.',
      number: '06',
    },
  ];

  return (
    <section id="process" className="py-20 bg-background">
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
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative p-6 hover:shadow-elegant hover:scale-105 transition-all duration-300 border-border bg-card group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="font-heading font-bold text-sm text-primary-foreground">
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1758518730162-09a142505bfd"
              alt="Interview process"
              className="shadow-elegant object-cover w-full h-64 transform group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1758519288480-1489c17b1519"
              alt="Document review"
              className="shadow-elegant object-cover w-full h-64 transform group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
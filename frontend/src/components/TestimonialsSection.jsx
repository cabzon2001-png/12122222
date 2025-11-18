import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export const TestimonialsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const testimonials = [
    {
      name: 'Michael Schmidt',
      role: 'CEO, Manufacturing Corp',
      company: language === 'en' ? 'Germany' : 'Німеччина',
      content: language === 'en' 
        ? 'ProfiWay helped us find 50 qualified workers from India within just 3 months. Their professionalism and dedication exceeded our expectations. The workers are highly skilled and committed.'
        : 'ProfiWay допомогли нам знайти 50 кваліфікованих працівників з Індії всього за 3 місяці. Їхній професіоналізм та відданість перевершили наші очікування. Працівники високо кваліфіковані та відповідальні.',
      rating: 5,
      avatar: 'MS',
    },
    {
      name: 'Anna Kowalska',
      role: language === 'en' ? 'HR Director' : 'Директор з персоналу',
      company: language === 'en' ? 'Poland' : 'Польща',
      content: language === 'en'
        ? 'Working with ProfiWay has been a game-changer for our construction projects. The quality of candidates and the smooth process made international hiring stress-free.'
        : 'Робота з ProfiWay стала переломним моментом для наших будівельних проектів. Якість кандидатів та плавний процес зробили міжнародний найм безстресовим.',
      rating: 5,
      avatar: 'AK',
    },
    {
      name: 'Jan Novak',
      role: language === 'en' ? 'Operations Manager' : 'Менеджер з операцій',
      company: language === 'en' ? 'Czech Republic' : 'Чехія',
      content: language === 'en'
        ? 'Excellent service from start to finish. The workers from Bangladesh have been incredibly reliable and hardworking. ProfiWay handled all documentation professionally.'
        : 'Відмінний сервіс від початку до кінця. Працівники з Бангладеш були неймовірно надійними та працьовитими. ProfiWay професійно впоралися з усією документацією.',
      rating: 5,
      avatar: 'JN',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
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
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant hover:scale-105 transition-all duration-300 border-border bg-card animate-fade-in-up"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="w-10 h-10 text-primary/20" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import whatsappTestimonials from '@/data/whatsappTestimonials';
import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';


export const TestimonialsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const filtered = whatsappTestimonials.filter(
    (item) => item.language === language || item.language === 'en'
  );

  const formatName = (item) => item.name;

  const getRating = (chat) => {
    // базові рейтинги для візуалізації 3.7–5.0
    switch (chat.id) {
      case 'employer-pl-nepal':
        return 4.9;
      case 'candidate-de':
        return 4.8;
      case 'logistics-owner':
        return 4.7;
      case 'construction-company':
        return 4.6;
      case 'worker-asia':
        return 4.5;
      case 'hotel-owner':
        return 4.4;
      case 'worker-family':
        return 4.3;
      default:
        return 4.5;
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const total = 5;
    const stars = [];

    for (let i = 0; i < total; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
        );
      } else if (halfStar && i === fullStars) {
        stars.push(
          <Star
            key={i}
            className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400/60"
          />
        );
      } else {
        stars.push(
          <Star key={i} className="w-3.5 h-3.5 text-muted-foreground/40" />
        );
      }
    }
    return stars;
  };

  return (
    <section className="py-20 bg-muted/30" id="testimonials">
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

        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((chat, index) => {
              const rating = getRating(chat);

              // Взяти перші 1–2 повідомлення для короткого огляду
              const firstMessage = chat.messages[0];
              const secondMessage = chat.messages[1];

              return (
                <Card
                  key={chat.id}
                  className={cn(
                    'relative h-full flex flex-col border-border bg-card/90 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1',
                    index < 2 ? 'animate-fade-in-up' : ''
                  )}
                >
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-9 h-9">
                          <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm font-semibold">
                            {chat.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-semibold text-foreground line-clamp-1">
                            {formatName(chat)}
                          </span>
                          <span className="text-[11px] text-muted-foreground">
                            {chat.type === 'employer'
                              ? language === 'ua'
                                ? 'Роботодавець'
                                : 'Employer'
                              : language === 'ua'
                              ? 'Кандидат'
                              : 'Candidate'}
                          </span>
                        </div>
                      </div>
                      <Quote className="w-4 h-4 text-primary/70" />
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {renderStars(rating)}
                      </div>
                      <span className="text-[11px] text-muted-foreground">
                        {rating.toFixed(1)} / 5.0
                      </span>
                    </div>

                    <div className="relative flex-1 mb-3">
                      {firstMessage && (
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 mb-2">
                          {firstMessage.text}
                        </p>
                      )}
                      {secondMessage && (
                        <p className="text-xs text-muted-foreground/90 leading-relaxed line-clamp-3 italic">
                          {secondMessage.text}
                        </p>
                      )}
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-2 border-t border-border/60 text-[11px] text-muted-foreground">
                      <span>
                        WhatsApp · {index + 1}/{filtered.length}
                      </span>
                      <span>
                        {language === 'ua'
                          ? 'Повна історія в чаті'
                          : 'Based on real chat'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA after testimonials */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-300"
            onClick={() => {
              const form = document.getElementById('contact');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            {language === 'ua' ? 'Замовити працівників' : 'Request workers'}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/40 text-primary hover:bg-primary/5 transition-all duration-300"
            onClick={() => {
              const form = document.getElementById('contact');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            {language === 'ua' ? 'Подати заявку на роботу' : 'Apply for a job'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

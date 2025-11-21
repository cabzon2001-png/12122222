import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import whatsappTestimonials from '@/data/whatsappTestimonials';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';


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

        <div className="relative mb-10">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4500,
                stopOnMouseEnter: true,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {filtered.map((chat) => {
                const rating = getRating(chat);
                return (
                  <CarouselItem
                    key={chat.id}
                    className="basis-full md:basis-1/2 lg:basis-1/3 px-2 md:px-3"
                  >
                    <Card className="h-full flex flex-col hover:shadow-elegant transition-all duration-300 border-border bg-card/90 overflow-hidden">
                      <CardContent className="p-0 flex flex-col h-full">
                        {/* Header with summary */}
                        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border bg-muted/70">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-9 h-9">
                              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm font-semibold">
                                {chat.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col items-start">
                              <span className="text-sm font-semibold text-foreground">
                                {formatName(chat)}
                              </span>
                              <span className="text-[11px] text-muted-foreground">
                                WhatsApp ·{' '}
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
                          <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-1">
                              {renderStars(rating)}
                            </div>
                            <span className="text-[11px] text-muted-foreground">
                              {rating.toFixed(1)} / 5.0
                            </span>
                          </div>
                        </div>

                        {/* Chat body */}
                        <div className="bg-[#0b141a] px-4 py-5 space-y-3 text-white flex-1 flex flex-col justify-center">
                          {chat.messages.map((msg, i) => {
                            const isClient = msg.from === 'client';
                            return (
                              <div
                                key={i}
                                className={cn(
                                  'flex w-full',
                                  isClient ? 'justify-start' : 'justify-end'
                                )}
                              >
                                <div className="max-w-[85%] flex flex-col">
                                  <div
                                    className={cn(
                                      'rounded-2xl px-3 py-2 text-sm shadow-sm break-words',
                                      isClient
                                        ? 'bg-[#202c33] text-white rounded-bl-sm'
                                        : 'bg-[#005c4b] text-white rounded-br-sm'
                                    )}
                                  >
                                    {msg.text}
                                  </div>
                                  <span className="mt-1 text-[10px] text-gray-400 self-end">
                                    {msg.time}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="-left-4 sm:-left-8 top-1/2 -translate-y-1/2 bg-background/90 border border-border shadow-md" />
            <CarouselNext className="-right-4 sm:-right-8 top-1/2 -translate-y-1/2 bg-background/90 border border-border shadow-md" />
          </Carousel>
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

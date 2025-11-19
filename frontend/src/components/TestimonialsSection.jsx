import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import whatsappTestimonials from '@/data/whatsappTestimonials';
import { cn } from '@/lib/utils';

export const TestimonialsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const filtered = whatsappTestimonials.filter(
    (item) => item.language === language || item.language === 'en'
  );

  const formatName = (item) => item.name;

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((chat, index) => (
            <Card
              key={chat.id}
              className="hover:shadow-elegant transition-all duration-300 border-border bg-card animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/60">
                  <Avatar className="w-9 h-9">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm font-semibold">
                      {chat.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">
                      {formatName(chat)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      WhatsApp · {chat.type === 'employer' ? (language === 'ua' ? 'Роботодавець' : 'Employer') : language === 'ua' ? 'Кандидат' : 'Candidate'}
                    </span>
                  </div>
                </div>

                {/* Chat body */}
                <div className="bg-[#0b141a] px-3 py-4 space-y-2 min-h-[230px] text-white">
                  {chat.messages.map((msg, i) => {
                    const isClient = msg.from === 'client';
                    return (
                      <div
                        key={i}
                        className={cn('flex w-full', isClient ? 'justify-start' : 'justify-end')}
                      >
                        <div className="max-w-[80%] flex flex-col">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

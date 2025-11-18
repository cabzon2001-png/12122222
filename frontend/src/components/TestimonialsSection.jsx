import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Michael Schmidt',
      role: 'CEO, Manufacturing Corp',
      company: 'Germany',
      content: 'ProfiWay helped us find 50 qualified workers from India within just 3 months. Their professionalism and dedication exceeded our expectations. The workers are highly skilled and committed.',
      rating: 5,
      avatar: 'MS',
    },
    {
      name: 'Anna Kowalska',
      role: 'HR Director',
      company: 'Poland',
      content: 'Working with ProfiWay has been a game-changer for our construction projects. The quality of candidates and the smooth process made international hiring stress-free.',
      rating: 5,
      avatar: 'AK',
    },
    {
      name: 'Jan Novak',
      role: 'Operations Manager',
      company: 'Czech Republic',
      content: 'Excellent service from start to finish. The workers from Bangladesh have been incredibly reliable and hardworking. ProfiWay handled all documentation professionally.',
      rating: 5,
      avatar: 'JN',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-accent-foreground uppercase tracking-wide">
              Testimonials
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading European companies for their international recruitment needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant transition-all duration-300 border-border bg-card"
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
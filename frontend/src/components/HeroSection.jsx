import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Globe, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-subtle" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full animate-bounce-slow">
              <Award className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                {t.badge}
              </span>
            </div>

            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-foreground">
              {t.title1}
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t.title2}
              </span>
              {t.title3}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {t.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg px-8 shadow-elegant group"
              >
                {t.requestEmployees}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="text-lg px-8 border-2 hover:bg-accent hover:scale-105 transition-all duration-300"
              >
                {t.learnMore}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center space-x-3 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">5000+</div>
                  <div className="text-sm text-muted-foreground">{t.workersPlaced}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">{t.countries}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] animate-fade-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbXxlbnwwfHx8fDE3NjM0NzE4NjZ8MA&ixlib=rb-4.1.0&q=85"
              alt="Diverse team collaboration"
              className="relative rounded-3xl shadow-elegant object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
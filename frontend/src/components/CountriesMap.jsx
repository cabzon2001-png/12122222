import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Globe, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export const CountriesMap = () => {
  const { language } = useLanguage();
  const t = translations[language].countries;

  const recruitmentCountries = [
    { name: 'India', nameUa: 'Індія' },
    { name: 'Bangladesh', nameUa: 'Бангладеш' },
    { name: 'Nepal', nameUa: 'Непал' },
    { name: 'Sri Lanka', nameUa: 'Шрі-Ланка' },
    { name: 'Philippines', nameUa: 'Філіппіни' },
    { name: 'Vietnam', nameUa: 'В\'єтнам' },
    { name: 'Indonesia', nameUa: 'Індонезія' },
  ];

  const employerRegions = [
    { name: 'Western Europe', nameUa: 'Західна Європа' },
    { name: 'Eastern Europe', nameUa: 'Східна Європа' },
    { name: 'Nordic Countries', nameUa: 'Скандинавія' },
    { name: 'Central Europe', nameUa: 'Центральна Європа' },
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

        {/* Map Visualization */}
        <div className="relative bg-gradient-subtle rounded-3xl p-8 md:p-12 shadow-elegant mb-12 overflow-hidden group">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <Globe className="w-full h-full text-primary animate-float" />
          </div>
          
          {/* Decorative animated circles */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            {/* Recruitment Countries */}
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-foreground">
                  {t.recruitFrom}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {recruitmentCountries.map((country, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-base bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer border border-border hover:scale-105 hover:shadow-md"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {language === 'ua' ? country.nameUa : country.name}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.recruitDescription}
              </p>
            </div>

            {/* Employer Regions */}
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-foreground">
                  {t.employerRegions}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {employerRegions.map((region, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-base bg-card hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 cursor-pointer border border-border hover:scale-105 hover:shadow-md"
                    style={{animationDelay: `${index * 0.1 + 0.4}s`}}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {language === 'ua' ? region.nameUa : region.name}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.employerDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Image */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1686771416282-3888ddaf249b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBoYW5kc2hha2V8ZW58MHx8fHwxNzYzNDcxODczfDA&ixlib=rb-4.1.0&q=85"
              alt="Professional handshake"
              className="shadow-elegant object-cover w-full h-64 transform group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1556484687-30636164638b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxkaXZlcnNlJTIwdGVhbXxlbnwwfHx8fDE3NjM0NzE4NjZ8MA&ixlib=rb-4.1.0&q=85"
              alt="Team unity"
              className="shadow-elegant object-cover w-full h-64 transform group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountriesMap;
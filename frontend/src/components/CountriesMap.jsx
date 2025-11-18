import React, { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Globe, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export const CountriesMap = () => {
  const { language } = useLanguage();
  const t = translations[language].countries;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const recruitmentCountries = [
    { name: 'India', nameUa: 'Індія', flag: '🇮🇳', color: 'from-orange-500 to-green-600' },
    { name: 'Bangladesh', nameUa: 'Бангладеш', flag: '🇧🇩', color: 'from-green-500 to-red-600' },
    { name: 'Nepal', nameUa: 'Непал', flag: '🇳🇵', color: 'from-blue-600 to-red-500' },
    { name: 'Sri Lanka', nameUa: 'Шрі-Ланка', flag: '🇱🇰', color: 'from-yellow-500 to-red-600' },
    { name: 'Philippines', nameUa: 'Філіппіни', flag: '🇵🇭', color: 'from-blue-600 to-red-600' },
    { name: 'Vietnam', nameUa: 'В\'єтнам', flag: '🇻🇳', color: 'from-red-600 to-yellow-500' },
    { name: 'Indonesia', nameUa: 'Індонезія', flag: '🇮🇩', color: 'from-red-600 to-white' },
  ];

  const employerRegions = [
    { name: 'Western Europe', nameUa: 'Західна Європа', flag: '🇪🇺', icon: '🏢' },
    { name: 'Eastern Europe', nameUa: 'Східна Європа', flag: '🇪🇺', icon: '🏭' },
    { name: 'Nordic Countries', nameUa: 'Скандинавія', flag: '🇪🇺', icon: '⚡' },
    { name: 'Central Europe', nameUa: 'Центральна Європа', flag: '🇪🇺', icon: '🔧' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full mb-6 shadow-lg">
            <Globe className="w-5 h-5 animate-spin" style={{animationDuration: '10s'}} />
            <span className="text-sm font-medium uppercase tracking-wide">
              {t.badge}
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Recruitment Countries - Left Side */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-elegant">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl text-foreground">
                  {t.recruitFrom}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'ua' ? '7 країн Азії' : '7 Asian Countries'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {recruitmentCountries.map((country, index) => (
                <div
                  key={country.name}
                  className={`group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-border hover:border-primary transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{animationDelay: isVisible ? `${0.3 + index * 0.1}s` : '0s'}}
                >
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="relative flex flex-col items-center text-center space-y-3">
                    <div className="text-5xl group-hover:scale-125 transition-transform duration-300">
                      {country.flag}
                    </div>
                    <h4 className="font-heading font-semibold text-lg text-foreground">
                      {language === 'ua' ? country.nameUa : country.name}
                    </h4>
                    
                    {/* Arrow appears on hover */}
                    <div className="absolute -right-2 -top-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ArrowRight className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-primary">💼 {language === 'ua' ? 'Пряма співпраця:' : 'Direct cooperation:'}</span> {t.recruitDescription}
              </p>
            </div>
          </div>

          {/* Employer Regions - Right Side */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center shadow-elegant">
                <Globe className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl text-foreground">
                  {t.employerRegions}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'ua' ? 'Вся Європа' : 'All Europe'}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {employerRegions.map((region, index) => (
                <div
                  key={region.name}
                  className={`group relative bg-gradient-to-r from-card to-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-border hover:border-secondary transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{animationDelay: isVisible ? `${0.5 + index * 0.1}s` : '0s'}}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                  
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
                        {region.icon}
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-xl text-foreground">
                          {language === 'ua' ? region.nameUa : region.name}
                        </h4>
                      </div>
                    </div>
                    <div className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                      {region.flag}
                    </div>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary to-transparent w-0 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              ))}
            </div>

            <div className="bg-secondary/5 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-secondary">🌍 {language === 'ua' ? 'Європейський охоплення:' : 'European coverage:'}</span> {t.employerDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Visual Connection Element */}
        <div className={`relative py-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-dashed border-border" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full shadow-elegant flex items-center space-x-3 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <MapPin className="w-5 h-5" />
              <span className="font-heading font-semibold text-lg">
                {language === 'ua' ? 'Азія → Європа' : 'Asia → Europe'}
              </span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Partnership Images */}
        <div className={`grid md:grid-cols-2 gap-8 mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
          <div className="relative group overflow-hidden rounded-3xl shadow-elegant">
            <img
              src="https://images.unsplash.com/photo-1686771416282-3888ddaf249b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBoYW5kc2hha2V8ZW58MHx8fHwxNzYzNDcxODczfDA&ixlib=rb-4.1.0&q=85"
              alt="Professional handshake"
              className="object-cover w-full h-80 transform group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <h4 className="font-heading font-bold text-2xl mb-2">
                {language === 'ua' ? 'Міжнародне партнерство' : 'International Partnership'}
              </h4>
              <p className="text-sm">
                {language === 'ua' ? 'Будуємо надійні зв\'язки між континентами' : 'Building reliable connections between continents'}
              </p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-3xl shadow-elegant">
            <img
              src="https://images.unsplash.com/photo-1556484687-30636164638b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxkaXZlcnNlJTIwdGVhbXxlbnwwfHx8fDE3NjM0NzE4NjZ8MA&ixlib=rb-4.1.0&q=85"
              alt="Team unity"
              className="object-cover w-full h-80 transform group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <h4 className="font-heading font-bold text-2xl mb-2">
                {language === 'ua' ? 'Глобальна команда' : 'Global Team'}
              </h4>
              <p className="text-sm">
                {language === 'ua' ? 'Різноманітність як наша сила' : 'Diversity as our strength'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountriesMap;
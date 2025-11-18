import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Globe } from 'lucide-react';

export const CountriesMap = () => {
  const recruitmentCountries = [
    { name: 'India', flag: '🇮🇳' },
    { name: 'Bangladesh', flag: '🇧🇩' },
    { name: 'Nepal', flag: '🇳🇵' },
    { name: 'Sri Lanka', flag: '🇱🇰' },
    { name: 'Philippines', flag: '🇵🇭' },
    { name: 'Vietnam', flag: '🇻🇳' },
    { name: 'Indonesia', flag: '🇮🇩' },
  ];

  const employerRegions = [
    { name: 'Western Europe', flag: '🇪🇺' },
    { name: 'Eastern Europe', flag: '🇪🇺' },
    { name: 'Nordic Countries', flag: '🇪🇺' },
    { name: 'Central Europe', flag: '🇪🇺' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-accent-foreground uppercase tracking-wide">
              Global Network
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Our International Reach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our global recruitment network connecting talent from Asia with opportunities in Europe
          </p>
        </div>

        {/* Map Visualization */}
        <div className="relative bg-gradient-subtle rounded-3xl p-8 md:p-12 shadow-elegant mb-12">
          <div className="absolute inset-0 opacity-10">
            <Globe className="w-full h-full text-primary" />
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            {/* Recruitment Countries */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-foreground">
                  Countries We Recruit From
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {recruitmentCountries.map((country, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-base bg-card hover:bg-primary/10 transition-smooth cursor-pointer border border-border"
                  >
                    <span className="mr-2 text-xl">{country.flag}</span>
                    {country.name}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We work directly with countries in Asia through our partner network, including own recruiters in India, Bangladesh, and Nepal.
              </p>
            </div>

            {/* Employer Regions */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-foreground">
                  Employer Regions
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {employerRegions.map((region, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-base bg-card hover:bg-secondary/10 transition-smooth cursor-pointer border border-border"
                  >
                    <span className="mr-2 text-xl">{region.flag}</span>
                    {region.name}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We serve companies across Europe, including Eastern and Western Europe, providing tailored recruitment solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Image */}
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1686771416282-3888ddaf249b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBoYW5kc2hha2V8ZW58MHx8fHwxNzYzNDcxODczfDA&ixlib=rb-4.1.0&q=85"
            alt="Professional handshake"
            className="rounded-2xl shadow-elegant object-cover w-full h-64"
          />
          <img
            src="https://images.unsplash.com/photo-1556484687-30636164638b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxkaXZlcnNlJTIwdGVhbXxlbnwwfHx8fDE3NjM0NzE4NjZ8MA&ixlib=rb-4.1.0&q=85"
            alt="Team unity"
            className="rounded-2xl shadow-elegant object-cover w-full h-64"
          />
        </div>
      </div>
    </section>
  );
};

export default CountriesMap;
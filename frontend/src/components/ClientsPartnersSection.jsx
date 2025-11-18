import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Users, Building2, Globe2, Sparkles } from 'lucide-react';

export const ClientsPartnersSection = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCountry, setActiveCountry] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const asianCountries = [
    { 
      name: language === 'en' ? 'India' : 'Індія', 
      flag: '🇮🇳', 
      x: 67, 
      y: 48,
      workers: '2000+',
      industries: language === 'en' ? 'Manufacturing, IT' : 'Виробництво, IT'
    },
    { 
      name: language === 'en' ? 'Bangladesh' : 'Бангладеш', 
      flag: '🇧🇩', 
      x: 70, 
      y: 47,
      workers: '800+',
      industries: language === 'en' ? 'Textiles, Agriculture' : 'Текстиль, Сільське господарство'
    },
    { 
      name: language === 'en' ? 'Nepal' : 'Непал', 
      flag: '🇳🇵', 
      x: 68, 
      y: 46,
      workers: '500+',
      industries: language === 'en' ? 'Construction, Hospitality' : 'Будівництво, Готелі'
    },
    { 
      name: language === 'en' ? 'Sri Lanka' : 'Шрі-Ланка', 
      flag: '🇱🇰', 
      x: 67, 
      y: 52,
      workers: '400+',
      industries: language === 'en' ? 'Services, Healthcare' : 'Послуги, Охорона здоров'я'
    },
    { 
      name: language === 'en' ? 'Philippines' : 'Філіппіни', 
      flag: '🇵🇭', 
      x: 78, 
      y: 49,
      workers: '600+',
      industries: language === 'en' ? 'Customer Service, Healthcare' : 'Обслуговування, Медицина'
    },
    { 
      name: language === 'en' ? 'Vietnam' : 'В\'єтнам', 
      flag: '🇻🇳', 
      x: 73, 
      y: 48,
      workers: '700+',
      industries: language === 'en' ? 'Manufacturing, Electronics' : 'Виробництво, Електроніка'
    },
    { 
      name: language === 'en' ? 'Indonesia' : 'Індонезія', 
      flag: '🇮🇩', 
      x: 75, 
      y: 58,
      workers: '300+',
      industries: language === 'en' ? 'Agriculture, Mining' : 'Сільське господарство, Видобуток'
    },
  ];

  const europeanCountries = [
    { name: language === 'en' ? 'Germany' : 'Німеччина', flag: '🇩🇪', x: 49, y: 30 },
    { name: language === 'en' ? 'Poland' : 'Польща', flag: '🇵🇱', x: 51, y: 29 },
    { name: language === 'en' ? 'Czech Rep.' : 'Чехія', flag: '🇨🇿', x: 50.5, y: 30.5 },
    { name: language === 'en' ? 'France' : 'Франція', flag: '🇫🇷', x: 47, y: 32 },
    { name: language === 'en' ? 'Spain' : 'Іспанія', flag: '🇪🇸', x: 45, y: 35 },
    { name: language === 'en' ? 'Italy' : 'Італія', flag: '🇮🇹', x: 49.5, y: 34 },
  ];

  const clients = [
    { 
      name: 'PKN ORLEN', 
      img: 'data:image/svg+xml,%3Csvg width="200" height="80" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="80" fill="%23e60000"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24" font-weight="bold" font-family="Arial"%3EORLENSOR%3C/text%3E%3C/svg%3E'
    },
    { 
      name: 'Volkswagen',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/200px-Volkswagen_logo_2019.svg.png'
    },
    { 
      name: 'Amazon',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png'
    },
    { 
      name: 'McDonald\'s',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/200px-McDonald%27s_Golden_Arches.svg.png'
    },
    { 
      name: 'ALSTOM',
      img: 'data:image/svg+xml,%3Csvg width="200" height="80" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="80" fill="white"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%230051a5" font-size="32" font-weight="bold" font-family="Arial"%3EALSTOM%3C/text%3E%3C/svg%3E'
    },
    { 
      name: 'EUROCASH',
      img: 'data:image/svg+xml,%3Csvg width="200" height="80" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="80" fill="white"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" fill="%230066cc" font-size="28" font-weight="bold" font-family="Arial"%3EEUROCASH%3C/text%3E%3Ctext x="50%25" y="65%25" dominant-baseline="middle" text-anchor="middle" fill="%23009933" font-size="16" font-family="Arial"%3ECASH %26amp%3B CARRY%3C/text%3E%3C/svg%3E'
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 backdrop-blur-sm px-8 py-3 rounded-full mb-6 border border-primary/30 shadow-lg">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {language === 'en' ? 'INTERNATIONAL RECRUITMENT' : 'МІЖНАРОДНИЙ РЕКРУТИНГ'}
            </span>
            <Sparkles className="w-5 h-5 text-secondary animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>
          
          <h2 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              {language === 'en' ? 'Sphere of our activity' : 'Сфера нашої діяльності'}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'Discover the world\'s opportunities with our international recruitment network'
              : 'Відкрийте світ можливостей з нашою міжнародною рекрутинговою мережею'}
          </p>
        </div>

        {/* World Map Section */}
        <div className={`relative mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl blur-xl" />
          
          <div className="relative bg-card/50 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 border border-border/50 shadow-2xl">
            {/* Map Container */}
            <div className="relative w-full" style={{paddingBottom: '50%', minHeight: '500px'}}>
              {/* SVG World Map */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.15}} />
                    <stop offset="50%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity: 0.1}} />
                    <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.15}} />
                  </linearGradient>
                  
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Continents - More realistic shapes */}
                {/* North America */}
                <path d="M 150 80 Q 200 60 260 90 L 280 150 Q 270 200 240 220 L 200 210 Q 170 180 160 140 Z" 
                      fill="url(#mapGradient)" stroke="hsl(var(--border))" strokeWidth="1.5" opacity="0.7"
                      className="transition-all duration-500 hover:opacity-100" />
                
                {/* South America */}
                <path d="M 240 230 Q 270 220 290 250 L 280 340 Q 260 400 230 410 L 210 380 Q 200 320 210 270 Z" 
                      fill="url(#mapGradient)" stroke="hsl(var(--border))" strokeWidth="1.5" opacity="0.7"
                      className="transition-all duration-500 hover:opacity-100" />
                
                {/* Europe */}
                <path d="M 450 100 Q 490 90 530 110 Q 550 130 545 160 L 530 180 Q 500 190 470 180 Q 445 160 445 130 Z" 
                      fill="url(#mapGradient)" stroke="hsl(var(--border))" strokeWidth="1.5" opacity="0.7"
                      className="transition-all duration-500 hover:opacity-100" />
                
                {/* Africa */}
                <path d="M 480 190 Q 520 180 560 210 L 570 300 Q 550 370 510 380 L 470 360 Q 450 300 450 240 Z" 
                      fill="url(#mapGradient)" stroke="hsl(var(--border))" strokeWidth="1.5" opacity="0.7"
                      className="transition-all duration-500 hover:opacity-100" />
                
                {/* Asia */}
                <path d="M 550 80 Q 650 60 750 100 L 820 180 Q 810 260 770 290 L 680 300 Q 600 270 570 220 Q 550 160 550 120 Z" 
                      fill="url(#mapGradient)" stroke="hsl(var(--border))" strokeWidth="1.5" opacity="0.7"
                      className="transition-all duration-500 hover:opacity-100" />
                
                {/* Australia */}
                <path d="M 760 310 Q 820 300 860 330 Q 870 370 850 400 L 800 410 Q 750 400 740 370 Q 735 340 760 310 Z" 
                      fill="url(#mapGradient)" stroke="hsl(var(--border))" strokeWidth="1.5" opacity="0.7"
                      className="transition-all duration-500 hover:opacity-100" />
                
                {/* Connection lines between continents */}
                <line x1="690" y1="220" x2="500" y2="150" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5,5" opacity="0.3">
                  <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="2s" repeatCount="indefinite" />
                </line>
              </svg>

              {/* Asian Countries Markers */}
              <div className="absolute inset-0">
                {asianCountries.map((country, index) => (
                  <div
                    key={country.name}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                      isVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{
                      left: `${country.x}%`,
                      top: `${country.y}%`,
                      animationDelay: isVisible ? `${0.5 + index * 0.1}s` : '0s'
                    }}
                    onMouseEnter={() => setActiveCountry(country)}
                    onMouseLeave={() => setActiveCountry(null)}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Pulse rings */}
                      <div className="absolute inset-0 -m-4">
                        <div className="w-20 h-20 bg-primary/20 rounded-full animate-ping" style={{animationDuration: '2s'}} />
                      </div>
                      
                      {/* Main marker */}
                      <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-2xl border-4 border-card flex items-center justify-center transform group-hover:scale-125 transition-all duration-300">
                        <span className="text-2xl filter drop-shadow-lg">{country.flag}</span>
                      </div>
                      
                      {/* Country info tooltip */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-16 bg-card/95 backdrop-blur-lg px-4 py-3 rounded-xl shadow-2xl border border-border opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50 min-w-[200px]">
                        <div className="text-center space-y-1">
                          <div className="font-heading font-bold text-foreground">{country.name}</div>
                          <div className="text-xs text-primary font-semibold">
                            <Users className="w-3 h-3 inline mr-1" />
                            {country.workers} {language === 'ua' ? 'працівників' : 'workers'}
                          </div>
                          <div className="text-xs text-muted-foreground">{country.industries}</div>
                        </div>
                        {/* Arrow */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-card/95" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* European Countries Markers */}
              <div className="absolute inset-0">
                {europeanCountries.map((country, index) => (
                  <div
                    key={country.name}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                      isVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{
                      left: `${country.x}%`,
                      top: `${country.y}%`,
                      animationDelay: isVisible ? `${1 + index * 0.1}s` : '0s'
                    }}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Pulse rings */}
                      <div className="absolute inset-0 -m-4">
                        <div className="w-20 h-20 bg-secondary/20 rounded-full animate-ping" style={{animationDuration: '2s', animationDelay: `${index * 0.2}s`}} />
                      </div>
                      
                      {/* Main marker */}
                      <div className="relative w-14 h-14 bg-gradient-to-br from-secondary to-secondary-light rounded-full shadow-2xl border-4 border-card flex items-center justify-center transform group-hover:scale-125 transition-all duration-300">
                        <span className="text-2xl filter drop-shadow-lg">{country.flag}</span>
                      </div>
                      
                      {/* Country label */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-16 bg-card/95 backdrop-blur-lg px-3 py-1.5 rounded-lg shadow-xl border border-border opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50">
                        <div className="text-xs font-semibold text-foreground text-center">{country.name}</div>
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-card/95" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center space-x-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 shadow-lg">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-foreground">
                    {language === 'ua' ? 'Країни рекрутингу' : 'Recruitment Countries'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/30 shadow-lg">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                  <span className="text-xs font-medium text-foreground">
                    {language === 'ua' ? 'Країни роботодавців' : 'Employer Countries'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:scale-105 transition-transform duration-300">
            <div className="text-center space-y-2">
              <Users className="w-8 h-8 text-primary mx-auto" />
              <div className="text-3xl font-heading font-bold text-foreground">5000+</div>
              <div className="text-sm text-muted-foreground">{language === 'ua' ? 'Працівників' : 'Workers'}</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:scale-105 transition-transform duration-300">
            <div className="text-center space-y-2">
              <MapPin className="w-8 h-8 text-secondary mx-auto" />
              <div className="text-3xl font-heading font-bold text-foreground">13</div>
              <div className="text-sm text-muted-foreground">{language === 'ua' ? 'Країн' : 'Countries'}</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:scale-105 transition-transform duration-300">
            <div className="text-center space-y-2">
              <Building2 className="w-8 h-8 text-primary mx-auto" />
              <div className="text-3xl font-heading font-bold text-foreground">200+</div>
              <div className="text-sm text-muted-foreground">{language === 'ua' ? 'Компаній' : 'Companies'}</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:scale-105 transition-transform duration-300">
            <div className="text-center space-y-2">
              <Globe2 className="w-8 h-8 text-secondary mx-auto" />
              <div className="text-3xl font-heading font-bold text-foreground">4</div>
              <div className="text-sm text-muted-foreground">{language === 'ua' ? 'Континенти' : 'Continents'}</div>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
          <h3 className="font-heading font-bold text-3xl text-foreground mb-4">
            {language === 'en' ? 'Trusted by leading companies' : 'Нам довіряють провідні компанії'}
          </h3>
          <p className="text-muted-foreground mb-12">
            {language === 'en' ? 'Our partners who believe in our mission' : 'Наші партнери, які вірять у нашу місію'}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {clients.map((client, index) => (
              <div 
                key={client.name}
                className={`grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{animationDelay: isVisible ? `${1.2 + index * 0.1}s` : '0s'}}
              >
                <img 
                  src={client.img} 
                  alt={client.name} 
                  className="h-14 md:h-16 object-contain filter drop-shadow-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'h-14 md:h-16 flex items-center justify-center px-8 py-4 border-2 border-border rounded-xl bg-card shadow-lg hover:shadow-2xl transition-shadow';
                    fallback.innerHTML = `<span class="font-bold text-xl text-foreground">${client.name}</span>`;
                    e.target.parentNode.appendChild(fallback);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsPartnersSection;
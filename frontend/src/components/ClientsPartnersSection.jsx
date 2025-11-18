import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';

export const ClientsPartnersSection = () => {
  const { language } = useLanguage();
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

  const asianCountries = [
    { name: language === 'en' ? 'India' : 'Індія', flag: '🇮🇳', x: 65, y: 45 },
    { name: language === 'en' ? 'Bangladesh' : 'Бангладеш', flag: '🇧🇩', x: 70, y: 43 },
    { name: language === 'en' ? 'Nepal' : 'Непал', flag: '🇳🇵', x: 67, y: 42 },
    { name: language === 'en' ? 'Sri Lanka' : 'Шрі-Ланка', flag: '🇱🇰', x: 66, y: 52 },
    { name: language === 'en' ? 'Philippines' : 'Філіппіни', flag: '🇵🇭', x: 78, y: 48 },
    { name: language === 'en' ? 'Vietnam' : 'В\'єтнам', flag: '🇻🇳', x: 73, y: 47 },
    { name: language === 'en' ? 'Indonesia' : 'Індонезія', flag: '🇮🇩', x: 75, y: 58 },
  ];

  const europeanCountries = [
    { name: language === 'en' ? 'Germany' : 'Німеччина', flag: '🇩🇪', x: 48, y: 28 },
    { name: language === 'en' ? 'Poland' : 'Польща', flag: '🇵🇱', x: 51, y: 27 },
    { name: language === 'en' ? 'Czech Republic' : 'Чехія', flag: '🇨🇿', x: 50, y: 29 },
    { name: language === 'en' ? 'France' : 'Франція', flag: '🇫🇷', x: 46, y: 31 },
    { name: language === 'en' ? 'Spain' : 'Іспанія', flag: '🇪🇸', x: 44, y: 34 },
    { name: language === 'en' ? 'Italy' : 'Італія', flag: '🇮🇹', x: 49, y: 33 },
  ];

  const clients = [
    { 
      name: 'PKN ORLEN', 
      img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iODAiIGZpbGw9IiNlNjAwMDAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LWZhbWlseT0iQXJpYWwiPk9STEVOJE9SPC90ZXh0Pjwvc3ZnPg=='
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
      img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iODAiIGZpbGw9IndoaXRlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMDUxYTUiIGZvbnQtc2l6ZT0iMzIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LWZhbWlseT0iQXJpYWwiPkFMU1RPTTwvdGV4dD48L3N2Zz4='
    },
    { 
      name: 'EUROCASH',
      img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iODAiIGZpbGw9IndoaXRlIi8+PHRleHQgeD0iNTAlIiB5PSI0NSUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMDY2Y2MiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LWZhbWlseT0iQXJpYWwiPkVVUk9DQVNIPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iNjUlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDA5OTMzIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iQXJpYWwiPkNBU0ggJmFtcDsgQ0FSUlk8L3RleHQ+PC9zdmc+'
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-accent px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-accent-foreground uppercase tracking-wide">
              {language === 'en' ? 'INTERNATIONAL RECRUITMENT' : 'МІЖНАРОДНИЙ РЕКРУТИНГ'}
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            {language === 'en' ? 'Sphere of our activity' : 'Сфера нашої діяльності'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Discover the world\'s opportunities with our international recruitment network'
              : 'Відкрийте світ можливостей з нашою міжнародною рекрутинговою мережею'}
          </p>
        </div>

        {/* World Map with Countries */}
        <div className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-3xl p-8 md:p-16 shadow-2xl mb-20 border border-border/50">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px',
            color: 'hsl(var(--primary))'
          }} />

          <div className="relative z-10">
            {/* Map container */}
            <div className="relative w-full" style={{paddingBottom: '50%', minHeight: '400px'}}>
              {/* World map SVG background */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.1}} />
                    <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stop Opacity: 0.1}} />
                  </linearGradient>
                </defs>
                
                {/* Simplified world map continents */}
                {/* Europe */}
                <path d="M 450 120 Q 480 100 520 120 Q 540 130 540 150 Q 530 170 500 180 Q 470 175 450 160 Z" 
                      fill="url(#mapGradient)" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.6" />
                
                {/* Asia */}
                <path d="M 550 100 Q 650 80 750 120 Q 800 150 800 200 Q 780 260 720 280 Q 650 280 580 250 Q 550 220 550 180 Q 540 140 550 100 Z" 
                      fill="url(#mapGradient)" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.6" />
                
                {/* Africa */}
                <path d="M 480 200 Q 520 190 540 220 Q 550 280 530 340 Q 500 360 470 350 Q 450 320 450 280 Q 440 240 480 200 Z" 
                      fill="url(#mapGradient)" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.6" />
                
                {/* North America */}
                <path d="M 150 100 Q 200 80 250 100 Q 280 140 280 180 Q 260 220 220 230 Q 180 220 150 190 Q 130 150 150 100 Z" 
                      fill="url(#mapGradient)" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.6" />
                
                {/* South America */}
                <path d="M 230 240 Q 260 230 280 260 Q 290 320 270 380 Q 250 400 220 390 Q 200 360 200 310 Q 210 270 230 240 Z" 
                      fill="url(#mapGradient)" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.6" />
                
                {/* Australia */}
                <path d="M 750 320 Q 800 310 830 330 Q 840 360 820 380 Q 780 390 750 370 Q 740 350 750 320 Z" 
                      fill="url(#mapGradient)" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.6" />
              </svg>

              {/* Asian Countries */}
              <div className="absolute inset-0">
                <h3 className="absolute top-4 left-4 text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {language === 'en' ? 'Recruitment Countries' : 'Країни рекрутингу'}
                </h3>
                {asianCountries.map((country, index) => (
                  <div
                    key={country.name}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                      isVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{
                      left: `${country.x}%`,
                      top: `${country.y}%`,
                      animationDelay: isVisible ? `${index * 0.15}s` : '0s'
                    }}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                      
                      {/* Country marker */}
                      <div className="relative flex flex-col items-center">
                        <div className="w-12 h-12 bg-card rounded-full shadow-lg border-2 border-primary flex items-center justify-center text-2xl group-hover:scale-125 transition-transform duration-300">
                          {country.flag}
                        </div>
                        <div className="mt-2 bg-card/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          <span className="text-xs font-semibold text-foreground">{country.name}</span>
                        </div>
                      </div>
                      
                      {/* Connection line to Europe */}
                      <svg className="absolute w-64 h-64 pointer-events-none" style={{left: '-100px', top: '-100px'}}>
                        <line 
                          x1="100" 
                          y1="100" 
                          x2="0" 
                          y2="0" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth="1" 
                          strokeDasharray="4" 
                          opacity="0.2"
                          className="group-hover:opacity-50 transition-opacity"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {/* European Countries */}
              <div className="absolute inset-0">
                <h3 className="absolute top-4 right-4 text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  {language === 'en' ? 'Employer Countries' : 'Країни роботодавців'}
                </h3>
                {europeanCountries.map((country, index) => (
                  <div
                    key={country.name}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                      isVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{
                      left: `${country.x}%`,
                      top: `${country.y}%`,
                      animationDelay: isVisible ? `${(index + asianCountries.length) * 0.15}s` : '0s'
                    }}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-secondary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                      
                      {/* Country marker */}
                      <div className="relative flex flex-col items-center">
                        <div className="w-12 h-12 bg-card rounded-full shadow-lg border-2 border-secondary flex items-center justify-center text-2xl group-hover:scale-125 transition-transform duration-300">
                          {country.flag}
                        </div>
                        <div className="mt-2 bg-card/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          <span className="text-xs font-semibold text-foreground">{country.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Clients and Partners Section */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '1.5s'}}>
          <h3 className="font-heading font-bold text-3xl text-foreground mb-12">
            {language === 'en' ? 'Clients and partners we trust' : 'Клієнти та партнери, які нам довірилися'}
          </h3>
          
          {/* Partner Logos */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {clients.map((client, index) => (
              <div 
                key={client.name}
                className={`grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{animationDelay: isVisible ? `${1.8 + index * 0.1}s` : '0s'}}
              >
                <img 
                  src={client.img} 
                  alt={client.name} 
                  className="h-14 md:h-16 object-contain filter drop-shadow-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'h-14 md:h-16 flex items-center justify-center px-6 py-3 border-2 border-muted rounded-lg bg-card';
                    fallback.innerHTML = `<span class="font-bold text-lg text-foreground">${client.name}</span>`;
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
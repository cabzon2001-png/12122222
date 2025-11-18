import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ClientsPartnersSection = () => {
  const { language } = useLanguage();

  const clients = [
    { name: 'ORLEN', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/PKN_Orlen_logo.svg/200px-PKN_Orlen_logo.svg.png' },
    { name: 'Volkswagen', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/200px-Volkswagen_logo_2019.svg.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-accent-foreground uppercase tracking-wide">
              {language === 'en' ? 'INTERNATIONAL RECRUITMENT' : 'МІЖНАРОДНИЙ РЕКРУТИНГ'}
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            {language === 'en' ? 'Sphere of our activity' : 'Сфера нашої діяльності'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Discover the world\'s opportunities with our international recruitment network'
              : 'Відкрийте світ можливостей з нашою міжнародною рекрутинговою мережею'}
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="relative bg-gradient-subtle rounded-3xl p-8 md:p-16 shadow-elegant mb-16 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              color: 'hsl(var(--primary))'
            }} />
          </div>

          {/* World Map SVG or Image */}
          <div className="relative z-10 min-h-[500px] flex items-center justify-center">
            <div className="w-full max-w-5xl mx-auto">
              {/* Simple world map representation */}
              <div className="relative">
                <svg viewBox="0 0 1000 500" className="w-full h-auto" style={{filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'}}>
                  {/* Dotted world map pattern */}
                  <defs>
                    <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                      <circle cx="4" cy="4" r="1" fill="currentColor" className="text-foreground opacity-40" />
                    </pattern>
                  </defs>
                  
                  {/* World map continents - simplified shapes */}
                  {/* Europe */}
                  <ellipse cx="500" cy="180" rx="80" ry="60" fill="url(#dots)" className="animate-pulse" style={{animationDuration: '3s'}} />
                  
                  {/* Asia */}
                  <ellipse cx="650" cy="200" rx="120" ry="80" fill="url(#dots)" className="animate-pulse" style={{animationDuration: '3.5s'}} />
                  
                  {/* Americas */}
                  <ellipse cx="200" cy="250" rx="70" ry="120" fill="url(#dots)" className="animate-pulse" style={{animationDuration: '4s'}} />
                  
                  {/* Africa */}
                  <ellipse cx="500" cy="280" rx="60" ry="90" fill="url(#dots)" className="animate-pulse" style={{animationDuration: '3.2s'}} />
                  
                  {/* Location markers with flags */}
                  {/* India */}
                  <g className="animate-bounce-slow" style={{animationDelay: '0s'}}>
                    <circle cx="680" cy="240" r="20" fill="hsl(var(--primary))" opacity="0.2" />
                    <circle cx="680" cy="240" r="12" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <text x="680" y="245" textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))">🇮🇳</text>
                  </g>
                  
                  {/* Bangladesh */}
                  <g className="animate-bounce-slow" style={{animationDelay: '0.2s'}}>
                    <circle cx="720" cy="235" r="20" fill="hsl(var(--primary))" opacity="0.2" />
                    <circle cx="720" cy="235" r="12" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <text x="720" y="240" textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))">🇧🇩</text>
                  </g>
                  
                  {/* Nepal */}
                  <g className="animate-bounce-slow" style={{animationDelay: '0.4s'}}>
                    <circle cx="700" cy="225" r="20" fill="hsl(var(--primary))" opacity="0.2" />
                    <circle cx="700" cy="225" r="12" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <text x="700" y="230" textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))">🇳🇵</text>
                  </g>
                  
                  {/* Philippines */}
                  <g className="animate-bounce-slow" style={{animationDelay: '0.6s'}}>
                    <circle cx="760" cy="260" r="20" fill="hsl(var(--primary))" opacity="0.2" />
                    <circle cx="760" cy="260" r="12" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <text x="760" y="265" textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))">🇵🇭</text>
                  </g>
                  
                  {/* Vietnam */}
                  <g className="animate-bounce-slow" style={{animationDelay: '0.8s'}}>
                    <circle cx="740" cy="250" r="20" fill="hsl(var(--primary))" opacity="0.2" />
                    <circle cx="740" cy="250" r="12" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <text x="740" y="255" textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))">🇻🇳</text>
                  </g>
                  
                  {/* Europe markers */}
                  {/* Germany */}
                  <g className="animate-bounce-slow" style={{animationDelay: '1s'}}>
                    <circle cx="510" cy="170" r="20" fill="hsl(var(--secondary))" opacity="0.2" />
                    <circle cx="510" cy="170" r="12" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" />
                    <text x="510" y="175" textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))">🇩🇪</text>
                  </g>
                  
                  {/* Poland */}
                  <g className="animate-bounce-slow" style={{animationDelay: '1.2s'}}>
                    <circle cx="530" cy="165" r="20" fill="hsl(var(--secondary))" opacity="0.2" />
                    <circle cx="530" cy="165" r="12" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" />
                    <text x="530" y="170" textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))">🇵🇱</text>
                  </g>
                  
                  {/* Czech Republic */}
                  <g className="animate-bounce-slow" style={{animationDelay: '1.4s'}}>
                    <circle cx="520" cy="175" r="20" fill="hsl(var(--secondary))" opacity="0.2" />
                    <circle cx="520" cy="175" r="12" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" />
                    <text x="520" y="180" textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))">🇨🇿</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Clients and Partners Section */}
        <div className="text-center animate-fade-in" style={{animationDelay: '0.5s'}}>
          <h3 className="font-heading font-semibold text-2xl text-foreground mb-8">
            {language === 'en' ? 'Clients and partners we trust' : 'Клієнти та партнери, які нам довірилися'}
          </h3>
          
          {/* Partner Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/PKN_Orlen_logo.svg/200px-PKN_Orlen_logo.svg.png" alt="ORLEN" className="h-12 object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/200px-Volkswagen_logo_2019.svg.png" alt="Volkswagen" className="h-12 object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png" alt="Amazon" className="h-10 object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/200px-McDonald%27s_Golden_Arches.svg.png" alt="McDonald's" className="h-12 object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <div className="h-12 flex items-center justify-center px-6 py-2 border-2 border-muted rounded-lg">
                <span className="font-bold text-xl text-foreground">ALSTOM</span>
              </div>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <div className="h-12 flex items-center justify-center px-6 py-2 border-2 border-muted rounded-lg">
                <span className="font-bold text-xl" style={{color: '#0066CC'}}>EUROCASH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsPartnersSection;
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

const LOGO_SRC = 'https://customer-assets.emergentagent.com/job_workforce-bridge/artifacts/bgbjeq0i_5262734539052747749.jpg';

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const navT = translations[language].nav;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: navT.about, id: 'about' },
    { label: navT.services, id: 'services' },
    { label: navT.process, id: 'process' },
    { label: navT.industries, id: 'industries' },
    { label: navT.faq, id: 'faq' },
    { label: navT.contact, id: 'contact' },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-24 h-20 sm:w-28 sm:h-20 rounded-2xl flex items-center justify-center bg-white shadow-lg border border-border/70 px-4 sm:px-5 py-2.5">
                <img
                  src={LOGO_SRC}
                  alt="ProfiWay logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-bold text-2xl sm:text-3xl text-foreground">ProfiWay</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-foreground">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-foreground">{t.ourServices}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>International Recruitment</li>
              <li>Visa Processing</li>
              <li>Document Verification</li>
              <li>Legal Support</li>
              <li>Arrival Coordination</li>
              <li>Ongoing Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-foreground">{t.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>+38 (097) 459-01-01</div>
                  <div>+38 (097) 399-41-46</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>profiway24@gmail.com</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  20251, Черкаська обл., Звенигородський р-н
                  <br />
                  м. Багачеве, вул. Леонтовича, буд. 10, кв. 3
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">www.profiway.com</span>
              </li>
            </ul>
            <div className="pt-3 border-t border-border/60 mt-3">
              <p className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="inline-flex h-6 px-2 items-center justify-center rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wide">
                  {language === 'ua' ? 'Ми говоримо' : 'We speak'}
                </span>
                <span>UA / EN / PL / RU</span>
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ProfiWay Recruiting LLC. {t.allRights}.
          </div>
          <div className="flex space-x-6">
            <button className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </button>
            <button className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </button>
            <button className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Cookie Policy
            </button>
          </div>
        </div>

        {/* Legal Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="text-xs text-muted-foreground space-y-2">
            <p>
              <strong>Company:</strong> TOV "PROFI WEY" (ТОВ "ПРОФІ ВЕЙ") | <strong>EDRPOU Code:</strong> 46134891
            </p>
            <p>
              <strong>Legal Address:</strong> 20251, Cherkasy region, Zvenyhorodka district, Bahacheve, Leontovycha St., 10, apt. 3
            </p>
            <p className="leading-relaxed">
              PROFI WAY operates in accordance with Ukrainian and international recruitment and immigration law standards. 
              All candidates undergo legal document verification, and employer companies undergo basic verification. 
              We do not take hidden payments and do not work with grey intermediaries.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
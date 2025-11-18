import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

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
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">P</span>
              </div>
              <span className="font-heading font-bold text-2xl text-foreground">ProfiWay</span>
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
                  <div>+38 (050) 123-45-67</div>
                  <div>+38 (067) 987-65-43</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>info@profiway.com</div>
                  <div>support@profiway.com</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Kyiv, Ukraine
                  <br />
                  Prykladna St. 12, Office 45
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">www.profiway.com</span>
              </li>
            </ul>
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
              <strong>Company:</strong> ProfiWay Recruiting LLC | <strong>Registration Code:</strong> 12345678 | 
              <strong> Tax ID:</strong> 123456789012
            </p>
            <p>
              <strong>Recruitment License:</strong> #000000 | 
              <strong> Legal Address:</strong> Kyiv, Prykladna St. 12, Office 45
            </p>
            <p className="leading-relaxed">
              ProfiWay operates in accordance with international recruitment and immigration law standards. 
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
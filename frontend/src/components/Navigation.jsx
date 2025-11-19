import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Languages } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Невелика затримка, щоб дочекатися рендера головної сторінки
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navLinks = [
    { label: t.about, id: 'about', href: '/' },
    { label: t.services, id: 'services', href: '/' },
    { label: t.process, id: 'process', href: '/' },
    { label: t.industries, id: 'industries', href: '/' },
    { label: t.faq, id: 'faq', href: '/' },
    { label: t.contact, id: 'contact', href: '/' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">P</span>
            </div>
            <span className="font-heading font-bold text-2xl text-foreground">ProfiWay</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navigate('/jobs')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
            >
              {t.jobs}
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-primary group"
            >
              <Languages className="w-4 h-4 mr-2 group-hover:rotate-12 transition-smooth" />
              {language === 'en' ? 'EN' : 'UA'}
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t.getStarted}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-smooth py-2 hover:translate-x-2"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => navigate('/jobs')}
                  className="text-left text-lg font-medium text-foreground hover:text-primary transition-smooth py-2 hover:translate-x-2"
                >
                  {t.jobs}
                </button>
                <Button
                  variant="outline"
                  onClick={toggleLanguage}
                  className="w-full mt-4"
                >
                  <Languages className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Switch to українська' : 'Switch to English'}
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-primary text-primary-foreground mt-4"
                >
                  {t.getStarted}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
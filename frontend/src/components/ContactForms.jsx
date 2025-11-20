import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Building2, User } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import { ShieldCheck, FileCheck, Globe2 } from 'lucide-react';

export const ContactForms = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [employerForm, setEmployerForm] = useState({
    name: '',
    company: '',
    country: '',
    phone: '',
    email: '',
    workerType: '',
    quantity: '',
    requirements: '',
    privacy: false,
  });

  const [candidateForm, setCandidateForm] = useState({
    name: '',
    originCountry: '',
    whatsapp: '',
    email: '',
    position: '',
    experience: '',
    privacy: false,
  });

  const handleEmployerSubmit = (e) => {
    e.preventDefault();
    if (!employerForm.privacy) {
      toast.error(language === 'en' ? 'Please accept the privacy policy' : 'Будь ласка, прийміть політику конфіденційності');
      return;
    }
    // Store in localStorage for demo
    const submissions = JSON.parse(localStorage.getItem('employerSubmissions') || '[]');
    submissions.push({ ...employerForm, date: new Date().toISOString() });
    localStorage.setItem('employerSubmissions', JSON.stringify(submissions));
    
    toast.success(language === 'en' ? 'Request submitted successfully! We will contact you soon.' : 'Заявку успішно надіслано! Ми зв\'яжемося з вами найближчим часом.');
    setEmployerForm({
      name: '',
      company: '',
      country: '',
      phone: '',
      email: '',
      workerType: '',
      quantity: '',
      requirements: '',
      privacy: false,
    });
  };

  const handleCandidateSubmit = (e) => {
    e.preventDefault();
    if (!candidateForm.privacy) {
      toast.error(language === 'en' ? 'Please accept the privacy policy' : 'Будь ласка, прийміть політику конфіденційності');
      return;
    }
    // Store in localStorage for demo
    const submissions = JSON.parse(localStorage.getItem('candidateSubmissions') || '[]');
    submissions.push({ ...candidateForm, date: new Date().toISOString() });
    localStorage.setItem('candidateSubmissions', JSON.stringify(submissions));
    
    toast.success(language === 'en' ? 'Application submitted successfully! We will review your profile.' : 'Заявку успішно надіслано! Ми розглянемо ваш профіль.');
    setCandidateForm({
      name: '',
      originCountry: '',
      whatsapp: '',
      email: '',
      position: '',
      experience: '',
      privacy: false,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
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

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Employer Form */}
          <Card className="border-border shadow-elegant animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  {t.forEmployers}
                </CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                {t.employerSubtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmployerSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="emp-name">Name *</Label>
                  <Input
                    id="emp-name"
                    value={employerForm.name}
                    onChange={(e) => setEmployerForm({ ...employerForm, name: e.target.value })}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emp-company">Company *</Label>
                    <Input
                      id="emp-company"
                      value={employerForm.company}
                      onChange={(e) => setEmployerForm({ ...employerForm, company: e.target.value })}
                      required
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emp-country">Country *</Label>
                    <Input
                      id="emp-country"
                      value={employerForm.country}
                      onChange={(e) => setEmployerForm({ ...employerForm, country: e.target.value })}
                      required
                      placeholder="Germany"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emp-phone">Phone *</Label>
                    <Input
                      id="emp-phone"
                      type="tel"
                      value={employerForm.phone}
                      onChange={(e) => setEmployerForm({ ...employerForm, phone: e.target.value })}
                      required
                      placeholder="+49 123 456789"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emp-email">Email *</Label>
                    <Input
                      id="emp-email"
                      type="email"
                      value={employerForm.email}
                      onChange={(e) => setEmployerForm({ ...employerForm, email: e.target.value })}
                      required
                      placeholder="email@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emp-worker-type">Type of Worker Needed *</Label>
                  <Select
                    value={employerForm.workerType}
                    onValueChange={(value) => setEmployerForm({ ...employerForm, workerType: value })}
                  >
                    <SelectTrigger id="emp-worker-type">
                      <SelectValue placeholder="Select worker type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="welding">Welding</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="logistics">Transport & Logistics</SelectItem>
                      <SelectItem value="gastronomy">Gastronomy</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emp-quantity">Number of Workers *</Label>
                  <Input
                    id="emp-quantity"
                    type="number"
                    value={employerForm.quantity}
                    onChange={(e) => setEmployerForm({ ...employerForm, quantity: e.target.value })}
                    required
                    placeholder="10"
                    min="1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emp-requirements">Additional Requirements</Label>
                  <Textarea
                    id="emp-requirements"
                    value={employerForm.requirements}
                    onChange={(e) => setEmployerForm({ ...employerForm, requirements: e.target.value })}
                    placeholder="Tell us about specific skills, experience, or other requirements..."
                    rows={4}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="emp-privacy"
                    checked={employerForm.privacy}
                    onCheckedChange={(checked) => setEmployerForm({ ...employerForm, privacy: checked })}
                  />
                  <label
                    htmlFor="emp-privacy"
                    className="text-sm text-muted-foreground leading-tight cursor-pointer"
                  >
                    I accept the privacy policy and consent to the processing of my personal data by ProfiWay
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  {t.requestEmployees}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Candidate Form */}
          <Card className="border-border shadow-elegant animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  {t.forCandidates}
                </CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                {t.candidateSubtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCandidateSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="can-name">Full Name *</Label>
                  <Input
                    id="can-name"
                    value={candidateForm.name}
                    onChange={(e) => setCandidateForm({ ...candidateForm, name: e.target.value })}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="can-country">Country of Origin *</Label>
                  <Select
                    value={candidateForm.originCountry}
                    onValueChange={(value) => setCandidateForm({ ...candidateForm, originCountry: value })}
                  >
                    <SelectTrigger id="can-country">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="bangladesh">Bangladesh</SelectItem>
                      <SelectItem value="nepal">Nepal</SelectItem>
                      <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                      <SelectItem value="philippines">Philippines</SelectItem>
                      <SelectItem value="vietnam">Vietnam</SelectItem>
                      <SelectItem value="indonesia">Indonesia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="can-whatsapp">WhatsApp Number *</Label>
                    <Input
                      id="can-whatsapp"
                      type="tel"
                      value={candidateForm.whatsapp}
                      onChange={(e) => setCandidateForm({ ...candidateForm, whatsapp: e.target.value })}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="can-email">Email *</Label>
                    <Input
                      id="can-email"
                      type="email"
                      value={candidateForm.email}
                      onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="can-position">Desired Position *</Label>
                  <Select
                    value={candidateForm.position}
                    onValueChange={(value) => setCandidateForm({ ...candidateForm, position: value })}
                  >
                    <SelectTrigger id="can-position">
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="welder">Welder</SelectItem>
                      <SelectItem value="production-worker">Production Worker</SelectItem>
                      <SelectItem value="construction-worker">Construction Worker</SelectItem>
                      <SelectItem value="driver">Driver</SelectItem>
                      <SelectItem value="chef">Chef/Cook</SelectItem>
                      <SelectItem value="agricultural-worker">Agricultural Worker</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="can-experience">Work Experience *</Label>
                  <Textarea
                    id="can-experience"
                    value={candidateForm.experience}
                    onChange={(e) => setCandidateForm({ ...candidateForm, experience: e.target.value })}
                    required
                    placeholder="Describe your relevant work experience, skills, and qualifications..."
                    rows={6}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="can-privacy"
                    checked={candidateForm.privacy}
                    onCheckedChange={(checked) => setCandidateForm({ ...candidateForm, privacy: checked })}
                  />
                  <label
                    htmlFor="can-privacy"
                    className="text-sm text-muted-foreground leading-tight cursor-pointer"
                  >
                    I accept the privacy policy and consent to the processing of my personal data by ProfiWay
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  {t.applyNow}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;
import React from 'react';
import { Card } from '@/components/ui/card';
import { FileText, Users, ClipboardCheck, FileCheck, Plane, Headphones } from 'lucide-react';

export const ProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Client Submits Request',
      description: 'Employer submits an application through our website form with detailed requirements.',
      number: '01',
    },
    {
      icon: ClipboardCheck,
      title: 'Contract & Requirements',
      description: 'We sign a contract and begin candidate selection based on specified parameters.',
      number: '02',
    },
    {
      icon: Users,
      title: 'Candidate Selection',
      description: 'We send resumes, document copies, and test results for your review and approval.',
      number: '03',
    },
    {
      icon: FileCheck,
      title: 'Document Preparation',
      description: 'Processing work permits, visa arrangements, and all legal documentation.',
      number: '04',
    },
    {
      icon: Plane,
      title: 'Worker Arrival',
      description: 'We organize relocation and provide comprehensive arrival support.',
      number: '05',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'Continuous support after placement to ensure successful integration.',
      number: '06',
    },
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-accent-foreground uppercase tracking-wide">
              How It Works
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Our Recruitment Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A transparent, step-by-step approach to finding the perfect talent for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative p-6 hover:shadow-elegant transition-all duration-300 border-border bg-card group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="font-heading font-bold text-sm text-primary-foreground">
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Image Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <img
            src="https://images.unsplash.com/photo-1758518730162-09a142505bfd"
            alt="Interview process"
            className="rounded-2xl shadow-elegant object-cover w-full h-64"
          />
          <img
            src="https://images.unsplash.com/photo-1758519288480-1489c17b1519"
            alt="Document review"
            className="rounded-2xl shadow-elegant object-cover w-full h-64"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQSection = () => {
  const faqs = [
    {
      question: 'Which countries does your activity cover?',
      answer: 'We work with Asian countries including India, Bangladesh, Nepal, Vietnam, Sri Lanka, Philippines, Indonesia, and others. For employers, we serve companies across Europe, including Eastern and Western Europe.',
    },
    {
      question: 'How long does the recruitment and legalization process take?',
      answer: 'On average, the process takes 2 to 6 months, depending on the country of origin of the candidate and specific legal requirements. We strive to expedite the process as much as possible.',
    },
    {
      question: 'How is the cost of services calculated?',
      answer: 'The cost depends on the number of candidates, level of qualification, and complexity of the process. We offer individual rates tailored to your specific needs. Payment is only required after successful completion of the probation period.',
    },
    {
      question: 'What if the candidate is not suitable?',
      answer: 'If a candidate does not pass the probation period (typically 30 days), we offer a replacement at no additional cost. Your satisfaction is our priority.',
    },
    {
      question: 'Do you provide support after the workers arrive?',
      answer: 'Yes, we provide comprehensive support after placement, including adaptation assistance, communication support, and ongoing consultation to ensure successful integration.',
    },
    {
      question: 'What documents are required from the employer?',
      answer: 'We will guide you through all necessary documentation. Typically, this includes company registration documents, job offer details, and work permit applications. Our team handles most of the paperwork.',
    },
    {
      question: 'Do the workers speak English?',
      answer: 'Yes, workers from Asian countries, especially India, Bangladesh, and Nepal, are proficient in English due to historical context. They are also eager to learn local languages quickly.',
    },
    {
      question: 'Can we conduct interviews before hiring?',
      answer: 'Absolutely! We facilitate video interviews and can arrange testing of candidates before you make your final decision. We want to ensure the perfect match for your company.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-accent-foreground uppercase tracking-wide">
              FAQ
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our international recruitment services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:shadow-md transition-smooth"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
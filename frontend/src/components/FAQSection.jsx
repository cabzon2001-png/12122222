import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export const FAQSection = () => {
  const { language } = useLanguage();
  const t = translations[language].faq;

  const faqs = [
    {
      question: language === 'en' ? 'Which countries does your activity cover?' : 'Які країни охоплює ваша діяльність?',
      answer: language === 'en'
        ? 'We work with Asian countries including India, Bangladesh, Nepal, Vietnam, Sri Lanka, Philippines, Indonesia, and others. For employers, we serve companies across Europe, including Eastern and Western Europe.'
        : 'Ми працюємо з азіатськими країнами, включаючи Індію, Бангладеш, Непал, В\'єтнам, Шрі-Ланку, Філіппіни, Індонезію та інші. Для роботодавців ми обслуговуємо компанії по всій Європі, включаючи Східну та Західну Європу.',
    },
    {
      question: language === 'en' ? 'How long does the recruitment and legalization process take?' : 'Скільки часу займає процес рекрутингу та легалізації?',
      answer: language === 'en'
        ? 'On average, the process takes 2 to 6 months, depending on the country of origin of the candidate and specific legal requirements. We strive to expedite the process as much as possible.'
        : 'В середньому процес займає від 2 до 6 місяців, залежно від країни походження кандидата та конкретних юридичних вимог. Ми прагнемо прискорити процес наскільки це можливо.',
    },
    {
      question: language === 'en' ? 'How is the cost of services calculated?' : 'Як розраховується вартість послуг?',
      answer: language === 'en'
        ? 'The cost depends on the number of candidates, level of qualification, and complexity of the process. We offer individual rates tailored to your specific needs. Payment is only required after successful completion of the probation period.'
        : 'Вартість залежить від кількості кандидатів, рівня кваліфікації та складності процесу. Ми пропонуємо індивідуальні тарифи, адаптовані до ваших конкретних потреб. Оплата потрібна лише після успішного завершення випробувального терміну.',
    },
    {
      question: language === 'en' ? 'What if the candidate is not suitable?' : 'Що якщо кандидат не підходить?',
      answer: language === 'en'
        ? 'If a candidate does not pass the probation period (typically 30 days), we offer a replacement at no additional cost. Your satisfaction is our priority.'
        : 'Якщо кандидат не проходить випробувальний термін (зазвичай 30 днів), ми пропонуємо заміну без додаткових витрат. Ваша задоволеність - наш пріоритет.',
    },
    {
      question: language === 'en' ? 'Do you provide support after the workers arrive?' : 'Чи надаєте ви підтримку після прибуття працівників?',
      answer: language === 'en'
        ? 'Yes, we provide comprehensive support after placement, including adaptation assistance, communication support, and ongoing consultation to ensure successful integration.'
        : 'Так, ми надаємо комплексну підтримку після працевлаштування, включаючи допомогу в адаптації, комунікаційну підтримку та постійні консультації для забезпечення успішної інтеграції.',
    },
    {
      question: language === 'en' ? 'What documents are required from the employer?' : 'Які документи потрібні від роботодавця?',
      answer: language === 'en'
        ? 'We will guide you through all necessary documentation. Typically, this includes company registration documents, job offer details, and work permit applications. Our team handles most of the paperwork.'
        : 'Ми проведемо вас через всю необхідну документацію. Зазвичай це включає документи реєстрації компанії, деталі пропозиції роботи та заявки на дозволи на роботу. Наша команда обробляє більшість документів.',
    },
    {
      question: language === 'en' ? 'Do the workers speak English?' : 'Чи розмовляють працівники англійською?',
      answer: language === 'en'
        ? 'Yes, workers from Asian countries, especially India, Bangladesh, and Nepal, are proficient in English due to historical context. They are also eager to learn local languages quickly.'
        : 'Так, працівники з азіатських країн, особливо Індії, Бангладеш та Непалу, володіють англійською через історичний контекст. Вони також прагнуть швидко вивчити місцеві мови.',
    },
    {
      question: language === 'en' ? 'Can we conduct interviews before hiring?' : 'Чи можемо ми проводити співбесіди перед наймом?',
      answer: language === 'en'
        ? 'Absolutely! We facilitate video interviews and can arrange testing of candidates before you make your final decision. We want to ensure the perfect match for your company.'
        : 'Звичайно! Ми організовуємо відео-співбесіди та можемо організувати тестування кандидатів перед тим, як ви приймете остаточне рішення. Ми хочемо забезпечити ідеальну відповідність для вашої компанії.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
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

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:shadow-md hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${index * 0.08}s`}}
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
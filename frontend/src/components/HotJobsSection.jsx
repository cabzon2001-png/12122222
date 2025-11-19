import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Flame, Factory, Warehouse, Hammer, Cog, Sparkles } from 'lucide-react';
import { translations } from '@/translations/translations';

const HotJobsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].hotJobs;

  const jobs = [
    {
      id: 1,
      icon: <Factory className="w-7 h-7 text-primary" />,
      title: t.jobs[0].title,
      titleEn: 'Factory Worker',
      description: t.jobs[0].description,
      demand: t.jobs[0].demand,
    },
    {
      id: 2,
      icon: <Warehouse className="w-7 h-7 text-primary" />,
      title: t.jobs[1].title,
      titleEn: 'Warehouse Worker',
      description: t.jobs[1].description,
      demand: t.jobs[1].demand,
    },
    {
      id: 3,
      icon: <Hammer className="w-7 h-7 text-primary" />,
      title: t.jobs[2].title,
      titleEn: 'Construction Helper',
      description: t.jobs[2].description,
      demand: t.jobs[2].demand,
    },
    {
      id: 4,
      icon: <Cog className="w-7 h-7 text-primary" />,
      title: t.jobs[3].title,
      titleEn: 'Production Line Operator',
      description: t.jobs[3].description,
      demand: t.jobs[3].demand,
    },
    {
      id: 5,
      icon: <Sparkles className="w-7 h-7 text-primary" />,
      title: t.jobs[4].title,
      titleEn: 'Cleaning Staff',
      description: t.jobs[4].description,
      demand: t.jobs[4].demand,
    },
    {
      id: 6,
      icon: <Flame className="w-7 h-7 text-primary" />,
      title: t.jobs[5].title,
      titleEn: 'Packer / Sorter',
      description: t.jobs[5].description,
      demand: t.jobs[5].demand,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background" id="hot-jobs">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-4 border border-primary/20">
            <Flame className="w-4 h-4 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wide">
              {t.badge}
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="group relative bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Accent gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  {job.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    {job.title}
                  </h3>
                  <p className="text-xs text-muted-foreground italic mb-1">
                    {job.titleEn}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>

              <div className="relative mt-4 flex items-center justify-between text-xs sm:text-sm">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 text-primary font-medium">
                  {t.labelWorkers}
                </span>
                <span className="text-[11px] sm:text-xs text-muted-foreground text-right max-w-[60%]">
                  {job.demand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotJobsSection;

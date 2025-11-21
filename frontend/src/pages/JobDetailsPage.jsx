import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import jobs from '@/data/jobs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Briefcase, MapPin, Clock } from 'lucide-react';

const JobDetailsPage = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="pt-24 pb-20 flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <p>{language === 'ua' ? 'Вакансію не знайдено.' : 'Job not found.'}</p>
          <Button className="mt-4" variant="outline" onClick={() => navigate('/jobs')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'ua' ? 'Повернутись до списку' : 'Back to jobs'}
          </Button>
        </div>
      </div>
    );
  }

  const text = t.jobDetailsPage;
  const jobsPageText = t.jobsPage;

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            className="inline-flex items-center px-0 text-muted-foreground hover:text-primary"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'ua' ? 'Назад' : 'Back'}
          </Button>
          <Badge variant="secondary">{job.category[language]}</Badge>
        </div>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-2">
          {job.title[language]}
        </h1>
        <p className="text-sm text-muted-foreground italic mb-4">{job.title.en}</p>

        <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {job.country[language]}
          </span>
          <span className="inline-flex items-center">
            <Briefcase className="w-4 h-4 mr-1" />
            {text.experienceLabel}: {text.experienceOptions[job.experienceLevel]}
          </span>
          {job.type && (
            <span className="inline-flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {job.type[language]}
            </span>
          )}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 mb-6 space-y-4">
          <div>
            <h2 className="font-heading font-semibold text-lg mb-2">{text.aboutRole}</h2>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {job.fullDescription[language]}
            </p>
          </div>

          {job.requirements && job.requirements[language]?.length > 0 && (
            <div>
              <h2 className="font-heading font-semibold text-lg mb-2">{text.requirements}</h2>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {job.requirements[language].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {job.offers && job.offers[language]?.length > 0 && (
            <div>
              <h2 className="font-heading font-semibold text-lg mb-2">{text.weOffer}</h2>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {job.offers[language].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

        <div className="mt-8 bg-card border border-border rounded-2xl p-5 sm:p-6 space-y-3">
          <h2 className="font-heading font-semibold text-lg sm:text-xl text-foreground flex items-center gap-2">
            {jobsPageText.candidateFaqTitle}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {jobsPageText.candidateFaqSubtitle}
          </p>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            {jobsPageText.candidateFaqItems?.slice(0, 4).map((item, idx) => (
              <li key={idx} className="flex flex-col">
                <span className="font-medium text-foreground">
                  {item.question}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {item.answer}
                </span>
              </li>
            ))}
          </ul>
        </div>

        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground mb-1">{text.applyTitle}</p>
            <p>{text.applyDescription}</p>
          </div>
          <Button
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-300"
            onClick={() => {
              // Поки що просто повідомлення, що треба заповнити форму внизу сторінки
              alert(
                language === 'ua'
                  ? 'Щоб подати заявку, заповніть форму для кандидатів внизу сторінки.'
                  : 'To apply, please fill in the candidate form at the bottom of the page.'
              );
            }}
          >
            {text.applyButton}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;

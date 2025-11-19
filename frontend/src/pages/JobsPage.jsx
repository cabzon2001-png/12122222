import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import jobs from '@/data/jobs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Filter } from 'lucide-react';

const JobsPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('all');
  const [category, setCategory] = useState('all');
  const [experience, setExperience] = useState('all');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const countries = useMemo(() => {
    const set = new Set();
    jobs.forEach((job) => set.add(job.country[language]));
    return Array.from(set);
  }, [language]);

  const categories = useMemo(() => {
    const set = new Set();
    jobs.forEach((job) => set.add(job.category[language]));
    return Array.from(set);
  }, [language]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const title = job.title[language].toLowerCase();
      const titleEn = job.title.en.toLowerCase();
      const description = job.shortDescription[language].toLowerCase();
      const query = search.toLowerCase();

      const matchesSearch =
        !query ||
        title.includes(query) ||
        titleEn.includes(query) ||
        description.includes(query);

      const matchesCountry =
        country === 'all' || job.country[language] === country;

      const matchesCategory =
        category === 'all' || job.category[language] === category;

      const matchesExperience =
        experience === 'all' || job.experienceLevel === experience;

      return matchesSearch && matchesCountry && matchesCategory && matchesExperience;
    });
  }, [search, country, category, experience, language]);

  const handleCardClick = (id) => {
    navigate(`/jobs/${id}`);
  };

  const text = t.jobsPage;

  const allExperienceOptions = [
    { value: 'entry', label: text.experienceOptions.entry },
    { value: 'mid', label: text.experienceOptions.mid },
    { value: 'senior', label: text.experienceOptions.senior },
  ];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Badge variant="secondary" className="mb-4 inline-flex items-center space-x-2">
              <Filter className="w-3 h-3" />
              <span className="text-[11px] uppercase tracking-wide font-semibold">
                {text.badge}
              </span>
            </Badge>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-3">
              {text.title}
            </h1>
            <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
              {text.subtitle}
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden sm:inline-flex items-center"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'ua' ? 'На головну' : 'Back to home'}
          </Button>
        </div>

        {/* Mobile filters button */}
        <div className="flex items-center justify-between mb-4 md:hidden">
          <span className="text-xs text-muted-foreground">
            {text.resultsLabel.replace('{count}', filteredJobs.length)}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsMobileFiltersOpen((prev) => !prev)}
            className="inline-flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            {language === 'ua' ? 'Фільтри' : 'Filters'}
          </Button>
        </div>

        <div className="flex gap-6">
          {/* Sidebar filters */}
          <aside className="hidden md:block w-72 flex-shrink-0">
            <div className="sticky top-24 bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-sm max-h-[calc(100vh-120px)] overflow-y-auto">
              <div className="mb-4">
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  {text.searchLabel}
                </label>
                <Input
                  placeholder={text.searchPlaceholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  {text.countryLabel}
                </label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder={text.countryPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{text.any}</SelectItem>
                    {countries.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  {text.categoryLabel}
                </label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder={text.categoryPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{text.any}</SelectItem>
                    {categories.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  {text.experienceFilterLabel}
                </label>
                <Select value={experience} onValueChange={setExperience}>
                  <SelectTrigger>
                    <SelectValue placeholder={text.experiencePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{text.any}</SelectItem>
                    {allExperienceOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {text.resultsLabel.replace('{count}', filteredJobs.length)}
                </span>
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => {
                    setSearch('');
                    setCountry('all');
                    setCategory('all');
                    setExperience('all');
                  }}
                >
                  {text.clearFilters}
                </button>
              </div>
            </div>
          </aside>

          {/* Mobile sidebar (collapsible) */}
          {isMobileFiltersOpen && (
            <aside className="md:hidden w-full mb-6">
              <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
                <div className="mb-4">
                  <label className="block text-xs font-medium text-muted-foreground mb-1">
                    {text.searchLabel}
                  </label>
                  <Input
                    placeholder={text.searchPlaceholder}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-muted-foreground mb-1">
                    {text.countryLabel}
                  </label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger>
                      <SelectValue placeholder={text.countryPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{text.any}</SelectItem>
                      {countries.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-muted-foreground mb-1">
                    {text.categoryLabel}
                  </label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder={text.categoryPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{text.any}</SelectItem>
                      {categories.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-2">
                  <label className="block text-xs font-medium text-muted-foreground mb-1">
                    {text.experienceFilterLabel}
                  </label>
                  <Select value={experience} onValueChange={setExperience}>
                    <SelectTrigger>
                      <SelectValue placeholder={text.experiencePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{text.any}</SelectItem>
                      {allExperienceOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <button
                    type="button"
                    className="text-primary hover:underline"
                    onClick={() => {
                      setSearch('');
                      setCountry('all');
                      setCategory('all');
                      setExperience('all');
                    }}
                  >
                    {text.clearFilters}
                  </button>
                  <button
                    type="button"
                    className="text-muted-foreground hover:underline"
                    onClick={() => setIsMobileFiltersOpen(false)}
                  >
                    {language === 'ua' ? 'Закрити' : 'Close'}
                  </button>
                </div>
              </div>
            </aside>
          )}

          {/* Jobs list */}
          <div className="flex-1">
            {filteredJobs.length === 0 ? (
              <div className="text-center text-muted-foreground py-16">
                {text.noResults}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredJobs.map((job) => (
                  <button
                    key={job.id}
                    className="group w-full text-left bg-card border border-border rounded-2xl p-5 hover:border-primary hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                    onClick={() => handleCardClick(job.id)}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary line-clamp-2">
                          {job.title[language]}
                        </h3>
                        <Badge variant="outline" className="ml-2 text-[11px]">
                          {job.country[language]}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground italic mb-2">
                        {job.title.en}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                        {job.shortDescription[language]}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                      <span>
                        {text.experienceLabel}: {text.experienceOptions[job.experienceLevel]}
                      </span>
                      <span className="inline-flex items-center text-primary font-medium">
                        {text.viewDetails}
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
          <div className="text-center text-muted-foreground py-16">
            {text.noResults}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <button
                key={job.id}
                className="group text-left bg-card border border-border rounded-2xl p-5 hover:border-primary hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                onClick={() => handleCardClick(job.id)}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary line-clamp-2">
                      {job.title[language]}
                    </h3>
                    <Badge variant="outline" className="ml-2 text-[11px]">
                      {job.country[language]}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground italic mb-2">
                    {job.title.en}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                    {job.shortDescription[language]}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span>
                    {text.experienceLabel}: {text.experienceOptions[job.experienceLevel]}
                  </span>
                  <span className="inline-flex items-center text-primary font-medium">
                    {text.viewDetails}
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;

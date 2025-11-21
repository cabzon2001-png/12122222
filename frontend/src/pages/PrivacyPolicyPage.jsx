import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicyPage = () => {
  const { language } = useLanguage();

  if (language === 'ua') {
    return (
      <div className="pt-24 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Політика конфіденційності
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Останнє оновлення: 20.11.2025
          </p>

          <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              Ця Політика конфіденційності описує, як ТОВ "ПРОФІ ВЕЙ" (Limited Liability Company
              "PROFI WAY", код ЄДРПОУ 46134891) збирає, використовує та захищає персональні дані
              кандидатів і представників роботодавців при використанні сайту ProfiWay та наших
              рекрутингових послуг.
            </p>

            <section>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-2">
                1. Які дані ми збираємо
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>контактні дані (ім'я, email, телефон, месенджери);</li>
                <li>інформація про компанію роботодавця та потребу в працівниках;</li>
                <li>дані кандидатів щодо досвіду роботи, бажаної посади та країни;</li>
                <li>технічні дані (IP-адреса, файли cookie, базова аналітика відвідувань сайту).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-2">
                2. Цілі обробки даних
              </h2>
              <p>
                Ми обробляємо персональні дані виключно з метою надання рекрутингових послуг,
                зокрема:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>пошук та підбір кандидатів для роботодавців;</li>
                <li>пошук вакансій для кандидатів;</li>
                <li>комунікація щодо заявок, вакансій та подальших етапів працевлаштування;</li>
                <li>виконання вимог законодавства України та країн працевлаштування.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-2">
                3. Передача даних третім особам
              </h2>
              <p>
                Ми можемо передавати персональні дані тільки перевіреним роботодавцям та партнерам,
                які залучені до процесу легального працевлаштування (візові центри, юристи,
                ліцензовані рекрутингові компанії). Ми не продаємо персональні дані третім особам.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-2">
                4. Права суб'єкта персональних даних
              </h2>
              <p>Ви маєте право:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>запитувати доступ до своїх персональних даних;</li>
                <li>вимагати виправлення або оновлення неточних даних;</li>
                <li>вимагати видалення даних, якщо це не суперечить закону;</li>
                <li>відкликати згоду на обробку даних, звернувшись до нас.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-2">
                5. Контакти для питань щодо персональних даних
              </h2>
              <p>
                Якщо у вас є питання щодо обробки персональних даних або ви хочете реалізувати свої
                права, будь ласка, звертайтесь:
              </p>
              <p>
                Email: <span className="font-medium text-foreground">profiway24@gmail.com</span>
                <br />
                Телефон: <span className="font-medium text-foreground">+38 (097) 459-01-01</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }

  // EN version
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: 20.11.2025
        </p>

        <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>
            This Privacy Policy explains how LLC "PROFI WAY" (ТОВ "ПРОФІ ВЕЙ", EDRPOU code 46134891)
            collects, uses and protects personal data of candidates and employers when using the
            ProfiWay website and our recruitment services.
          </p>

          <section>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">1. Data we collect</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>contact details (name, email, phone, messengers);</li>
              <li>information about employer company and staffing needs;</li>
              <li>candidate data about work experience, desired position and country;</li>
              <li>technical data (IP address, cookies, basic website analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">2. Purposes of processing</h2>
            <p>We process personal data only for the purpose of providing recruitment services:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>matching candidates with employers;</li>
              <li>searching for job opportunities for candidates;</li>
              <li>communication about applications, vacancies and next steps;</li>
              <li>complying with the laws of Ukraine and destination countries.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">3. Sharing data with third parties</h2>
            <p>
              We may share personal data only with verified employers and partners involved in legal
              employment procedures (visa centers, lawyers, licensed recruitment agencies). We do
              not sell personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">4. Your rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>request access to your personal data;</li>
              <li>ask for correction or update of inaccurate data;</li>
              <li>request deletion of data where it does not conflict with law;</li>
              <li>withdraw your consent by contacting us.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">5. Contact</h2>
            <p>
              If you have questions about personal data processing or want to exercise your rights,
              please contact us:
            </p>
            <p>
              Email: <span className="font-medium text-foreground">profiway24@gmail.com</span>
              <br />
              Phone: <span className="font-medium text-foreground">+38 (097) 459-01-01</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

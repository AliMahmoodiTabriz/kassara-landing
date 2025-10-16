import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../components/ui/Card';

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black py-12 sm:py-20 pt-24 sm:pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">{t('terms.title')}</h1>
          <p className="text-gray-500 mb-8">{t('terms.updated')}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.general')}</h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {t('terms.generalText')}
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.service')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('terms.serviceText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('terms.serviceItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.contactTitle')}</h2>
              <p className="text-sm sm:text-base text-gray-400">
                {t('terms.contactText')} <a href="mailto:legal@kassara.com" className="text-white hover:underline">legal@kassara.com</a>
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;

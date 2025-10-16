import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../components/ui/Card';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black py-12 sm:py-20 pt-24 sm:pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">{t('privacy.title')}</h1>
          <p className="text-gray-500 mb-8">{t('privacy.updated')}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.intro')}</h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {t('privacy.introText')}
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.collected')}</h2>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('privacy.collectedItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.contactTitle')}</h2>
              <p className="text-sm sm:text-base text-gray-400">
                {t('privacy.contactText')} <a href="mailto:info@kassara.app" className="text-white hover:underline">info@kassara.app</a>
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

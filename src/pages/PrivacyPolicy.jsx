import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import Card from '../components/ui/Card';

const PrivacyPolicy = ({ standalone = false }) => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();

  // Query string'den dil parametresini oku ve ayarla
  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang && (lang === 'tr' || lang === 'en')) {
      i18n.changeLanguage(lang);
    }
  }, [searchParams, i18n]);

  // Standalone mod için farklı padding'ler
  const containerClass = standalone 
    ? "min-h-screen bg-black py-4 px-2"
    : "min-h-screen bg-black py-12 sm:py-20 pt-24 sm:pt-32";
  
  const cardClass = standalone
    ? "p-4 sm:p-6"
    : "p-6 sm:p-8 md:p-12";

  return (
    <div className={containerClass}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className={cardClass}>
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
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.company')}</h2>
              <div className="bg-gray-900 p-4 rounded-lg">
                <pre className="text-sm text-gray-300 whitespace-pre-line">{t('privacy.companyText')}</pre>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.dataCollection')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('privacy.dataCollectionText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('privacy.dataItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.purpose')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('privacy.purposeText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('privacy.purposeItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.legalBasis')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('privacy.legalBasisText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('privacy.legalBasisItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.dataSharing')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('privacy.dataSharingText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('privacy.dataSharingItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.dataRetention')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('privacy.dataRetentionText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('privacy.dataRetentionItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.dataSecurity')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('privacy.dataSecurityText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('privacy.dataSecurityItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.userRights')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('privacy.userRightsText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('privacy.userRightsItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.accountDeletion')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('privacy.accountDeletionText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('privacy.accountDeletionItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.cookies')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('privacy.cookiesText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('privacy.cookiesItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.ageRestriction')}</h2>
              <p className="text-sm sm:text-base text-gray-400">{t('privacy.ageRestrictionText')}</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.entertainment')}</h2>
              <p className="text-sm sm:text-base text-gray-400">{t('privacy.entertainmentText')}</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.international')}</h2>
              <p className="text-sm sm:text-base text-gray-400">{t('privacy.internationalText')}</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.changes')}</h2>
              <p className="text-sm sm:text-base text-gray-400">{t('privacy.changesText')}</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.contact')}</h2>
              <p className="text-sm sm:text-base text-gray-400">
                {t('privacy.contactText')} <a href="mailto:info@kassara.app" className="text-white hover:underline">info@kassara.app</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('privacy.authority')}</h2>
              <p className="text-sm sm:text-base text-gray-400">{t('privacy.authorityText')}</p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

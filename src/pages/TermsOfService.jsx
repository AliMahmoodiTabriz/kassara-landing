import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import Card from '../components/ui/Card';

const TermsOfService = ({ standalone = false }) => {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">{t('terms.title')}</h1>
          <p className="text-gray-500 mb-8">{t('terms.updated')}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.acceptance')}</h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {t('terms.acceptanceText')}
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.company')}</h2>
              <div className="bg-gray-900 p-4 rounded-lg">
                <pre className="text-sm text-gray-300 whitespace-pre-line">{t('terms.companyText')}</pre>
              </div>
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
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.entertainment')}</h2>
              <p className="text-sm sm:text-base text-gray-400">{t('terms.entertainmentText')}</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.ageRestriction')}</h2>
              <p className="text-sm sm:text-base text-gray-400">{t('terms.ageRestrictionText')}</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.account')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('terms.accountText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('terms.accountItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.payment')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('terms.paymentText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('terms.paymentItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.prohibited')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('terms.prohibitedText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('terms.prohibitedItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.intellectual')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('terms.intellectualText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('terms.intellectualItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.liability')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('terms.liabilityText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('terms.liabilityItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.accountSuspension')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('terms.accountSuspensionText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('terms.accountSuspensionItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.serviceChanges')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('terms.serviceChangesText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('terms.serviceChangesItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.warranty')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('terms.warrantyText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('terms.warrantyItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.limitation')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('terms.limitationText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('terms.limitationItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.indemnification')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('terms.indemnificationText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('terms.indemnificationItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.dispute')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{t('terms.disputeText')}</p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400 space-y-2">
                {t('terms.disputeItems', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.changes')}</h2>
              <p className="text-sm sm:text-base text-gray-400">{t('terms.changesText')}</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.severability')}</h2>
              <p className="text-sm sm:text-base text-gray-400">{t('terms.severabilityText')}</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.contact')}</h2>
              <p className="text-sm sm:text-base text-gray-400">
                {t('terms.contactText')} <a href="mailto:info@kassara.app" className="text-white hover:underline">info@kassara.app</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('terms.effective')}</h2>
              <p className="text-sm sm:text-base text-gray-400">{t('terms.effectiveText')}</p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;

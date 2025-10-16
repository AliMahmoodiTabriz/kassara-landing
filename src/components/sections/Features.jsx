import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHeart, FaStar, FaCoffee, FaRobot } from 'react-icons/fa';
import Card from '../ui/Card';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    { icon: FaHeart, titleKey: 'features.tarot.title', descKey: 'features.tarot.desc' },
    { icon: FaStar, titleKey: 'features.astrology.title', descKey: 'features.astrology.desc' },
    { icon: FaCoffee, titleKey: 'features.coffee.title', descKey: 'features.coffee.desc' },
    { icon: FaRobot, titleKey: 'features.ai.title', descKey: 'features.ai.desc' }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{t('features.title')}</h2>
          <p className="text-base sm:text-lg text-gray-500">{t('features.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} hover className="p-6 sm:p-8 text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{t(feature.titleKey)}</h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{t(feature.descKey)}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6 sm:p-8 md:p-12 mt-12 sm:mt-16 md:mt-20">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{t('features.whyTitle')}</h3>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
              {t('features.whyDesc')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
              <div className="p-4 sm:p-6 bg-black rounded-lg border border-gray-800">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm sm:text-base text-gray-500">{t('features.service247')}</div>
              </div>
              <div className="p-4 sm:p-6 bg-black rounded-lg border border-gray-800">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">AI</div>
                <div className="text-sm sm:text-base text-gray-500">{t('features.aiPower')}</div>
              </div>
              <div className="p-4 sm:p-6 bg-black rounded-lg border border-gray-800">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm sm:text-base text-gray-500">{t('features.privacy')}</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Features;

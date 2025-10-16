import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRocket, FaBrain, FaEye } from 'react-icons/fa';
import Card from '../ui/Card';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              {t('about.intro1')}
            </p>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              {t('about.intro2')}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <Card hover className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaBrain className="h-6 w-6 sm:h-8 sm:w-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{t('about.mission')}</h3>
                    <p className="text-sm sm:text-base text-gray-500">{t('about.missionText')}</p>
                  </div>
                </div>
              </Card>
              
              <Card hover className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaEye className="h-6 w-6 sm:h-8 sm:w-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{t('about.vision')}</h3>
                    <p className="text-sm sm:text-base text-gray-500">{t('about.visionText')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-6 sm:p-8 mt-8 lg:mt-0">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full mb-6">
                <FaRocket className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {t('about.cardTitle')}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6">
                {t('about.cardDesc')}
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8">
                <div className="p-3 sm:p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-white">10K+</div>
                  <div className="text-xs sm:text-sm text-gray-500">{t('about.customers')}</div>
                </div>
                <div className="p-3 sm:p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-white">95%</div>
                  <div className="text-xs sm:text-sm text-gray-500">{t('about.accuracy')}</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

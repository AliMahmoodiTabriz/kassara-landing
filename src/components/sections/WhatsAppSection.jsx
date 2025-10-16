import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaComment, FaRobot, FaCheckCircle } from 'react-icons/fa';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { WHATSAPP_PHONE, WHATSAPP_MESSAGE } from '../../utils/constants';

const WhatsAppSection = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, '_blank');
  };

  const steps = [
    { icon: FaComment, titleKey: 'whatsapp.step1', descKey: 'whatsapp.step1Desc' },
    { icon: FaRobot, titleKey: 'whatsapp.step2', descKey: 'whatsapp.step2Desc' },
    { icon: FaCheckCircle, titleKey: 'whatsapp.step3', descKey: 'whatsapp.step3Desc' }
  ];

  return (
    <section id="whatsapp" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{t('whatsapp.title')}</h2>
          <p className="text-base sm:text-lg text-gray-500">{t('whatsapp.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
              {t('whatsapp.description')}
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{t(step.titleKey)}</h3>
                    <p className="text-sm sm:text-base text-gray-500">{t(step.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white text-black hover:bg-gray-200 transform hover:scale-105"
            >
              <FaWhatsapp className="text-xl sm:text-2xl" />
              <span>{t('whatsapp.startBtn')}</span>
            </Button>
          </div>

          <Card className="p-6 sm:p-8 mt-8 lg:mt-0">
            <div className="bg-gray-800 rounded-t-2xl p-4 mb-6">
              <div className="flex items-center space-x-3 text-white">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">{t('whatsapp.aiName')}</div>
                  <div className="text-sm text-gray-500">{t('whatsapp.online')}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-3 max-w-xs ml-auto">
                <p className="text-sm text-gray-300">{t('whatsapp.msg1')}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 max-w-xs">
                <p className="text-sm text-gray-300">{t('whatsapp.msg2')}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;

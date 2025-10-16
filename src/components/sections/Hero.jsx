import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaDownload, FaArrowDown } from 'react-icons/fa';
import Button from '../ui/Button';
import { WHATSAPP_PHONE, WHATSAPP_MESSAGE } from '../../utils/constants';

const Hero = () => {
  const { t } = useTranslation();
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20 px-4">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 px-4">
          {t('hero.title')}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 font-light px-4">
          {t('hero.subtitle')}
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
          <Button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-black hover:bg-gray-200 shadow-lg transform hover:scale-105"
          >
            <FaWhatsapp className="text-xl" />
            <span>{t('hero.whatsappBtn')}</span>
          </Button>
          
          <Button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 transform hover:scale-105">
            <FaDownload className="text-xl" />
            <span>{t('hero.downloadBtn')}</span>
          </Button>
        </div>

        <Link to="about" smooth duration={500} className="inline-flex flex-col items-center text-gray-500 hover:text-gray-300 cursor-pointer animate-bounce">
          <span className="text-sm mb-2">{t('hero.learnMore')}</span>
          <FaArrowDown />
        </Link>
      </div>
    </section>
  );
};

export default Hero;

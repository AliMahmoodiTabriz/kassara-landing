import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../utils/constants';

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const quickLinks = [
    { key: 'nav.home', to: 'home' },
    { key: 'nav.about', to: 'about' },
    { key: 'nav.features', to: 'features' },
    { key: 'nav.whatsapp', to: 'whatsapp' },
    { key: 'nav.contact', to: 'contact' }
  ];

  const socialLinks = [
    { icon: FaInstagram, href: SOCIAL_LINKS.instagram },
    { icon: FaTwitter, href: SOCIAL_LINKS.twitter },
    { icon: FaFacebook, href: SOCIAL_LINKS.facebook },
    { icon: FaLinkedin, href: SOCIAL_LINKS.linkedin }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            {isHomePage ? (
              <ScrollLink to="home" smooth duration={500} className="text-2xl font-bold text-white cursor-pointer block mb-4">
                Kassara
              </ScrollLink>
            ) : (
              <RouterLink to="/" className="text-2xl font-bold text-white cursor-pointer block mb-4 hover:text-gray-300">
                Kassara
              </RouterLink>
            )}
            <p className="text-sm sm:text-base text-gray-400 mb-6">{t('footer.description')}</p>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-lg transition-all transform hover:scale-105 font-medium text-sm sm:text-base"
            >
              <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>{t('footer.whatsappBtn')}</span>
            </a>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  {isHomePage ? (
                    <ScrollLink to={link.to} smooth duration={500} className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer">
                      {t(link.key)}
                    </ScrollLink>
                  ) : (
                    <RouterLink to={`/#${link.to}`} className="text-gray-500 hover:text-gray-300 text-sm" onClick={() => window.location.href = `/#${link.to}`}>
                      {t(link.key)}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm">{t('footer.privacy')}</a></li>
              <li><a href="/terms-of-service" className="text-gray-500 hover:text-gray-300 text-sm">{t('footer.terms')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">{t('footer.social')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">{t('footer.copyright')}</p>
          <div className="flex items-center space-x-1 text-gray-500 text-sm mt-4 md:mt-0">
            <span>{t('footer.madeWith')}</span>
            <FaHeart className="h-4 w-4 text-gray-600" />
            <span>{t('footer.inTurkey')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', to: 'home' },
    { key: 'nav.about', to: 'about' },
    { key: 'nav.features', to: 'features' },
    { key: 'nav.whatsapp', to: 'whatsapp' },
    { key: 'nav.contact', to: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {isHomePage ? (
            <ScrollLink to="home" smooth duration={500} className="cursor-pointer hover:opacity-80 transition-opacity">
              <img src="/kassara.svg" alt="Kassara" className="h-10 w-auto" />
            </ScrollLink>
          ) : (
            <RouterLink to="/" className="hover:opacity-80 transition-opacity">
              <img src="/kassara.svg" alt="Kassara" className="h-10 w-auto" />
            </RouterLink>
          )}

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              isHomePage ? (
                <ScrollLink
                  key={item.key}
                  to={item.to}
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                  activeClass="text-white"
                >
                  {t(item.key)}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={item.key}
                  to={`/#${item.to}`}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                  onClick={() => {
                    window.location.href = `/#${item.to}`;
                  }}
                >
                  {t(item.key)}
                </RouterLink>
              )
            ))}
            <LanguageSwitcher />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border border-gray-800 rounded-lg mt-2 p-2">
            {navItems.map((item) => (
              isHomePage ? (
                <ScrollLink
                  key={item.key}
                  to={item.to}
                  smooth
                  duration={500}
                  className="block text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-900 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={item.key}
                  to={`/#${item.to}`}
                  className="block text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-900"
                  onClick={() => {
                    window.location.href = `/#${item.to}`;
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t(item.key)}
                </RouterLink>
              )
            ))}
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

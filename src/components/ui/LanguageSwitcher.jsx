import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'tr', name: 'TR' },
    { code: 'en', name: 'EN' }
  ];

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            i18n.language === lang.code
              ? 'bg-white text-black'
              : 'text-gray-400 hover:text-white hover:bg-gray-900'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;


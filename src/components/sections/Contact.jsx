import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contact.sent'));
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: FaEnvelope, titleKey: 'contact.emailTitle', value: 'info@kassara.app', link: 'mailto:info@kassara.app' },
    { icon: FaPhone, titleKey: 'contact.phoneTitle', value: '+90 534 579 91 03', link: 'tel:+905345799103' },
    { icon: FaMapMarkerAlt, titleKey: 'contact.addressTitle', valueKey: 'contact.address', link: '#' }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{t('contact.title')}</h2>
          <p className="text-base sm:text-lg text-gray-500">{t('contact.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <Card className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">{t('contact.formTitle')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.nameLabel')}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-white placeholder-gray-600"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.emailLabel')}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-white placeholder-gray-600"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.messageLabel')}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-white resize-none placeholder-gray-600"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              <Button type="submit" className="w-full flex items-center justify-center space-x-2 bg-white text-black hover:bg-gray-200">
                <FaPaperPlane />
                <span>{t('contact.sendBtn')}</span>
              </Button>
            </form>
          </Card>

          <div className="space-y-6 mt-8 lg:mt-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{t('contact.infoTitle')}</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">{t('contact.infoDesc')}</p>
            </div>
            {contactInfo.map((info, idx) => (
              <Card key={idx} hover className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{t(info.titleKey)}</h4>
                    <a href={info.link} className="text-sm sm:text-base text-gray-400 hover:text-white break-all">
                      {info.valueKey ? t(info.valueKey) : info.value}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

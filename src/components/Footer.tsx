/**
 * Footer component with social media links and copyright information
 * Displays social media icons and contact information
 */
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../utils/translations';

const Footer: React.FC = () => {
  const { language } = useTheme();
  const { t } = useTranslation(language);

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/emadalddine',
      icon: Instagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/emadalddine',
      icon: Linkedin,
    },
    {
      name: 'Behance',
      href: 'https://behance.net/emadalddine',
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3.729-.229-3.729h-3.355v3.729zm0 1.629v3.330h3.687c3.195 0 2.906-3.33 0-3.33h-3.687z"/>
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com/emadalddine',
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.628 0-12 5.373-12 12 0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.627-5.372-12-12-12zm9.315 5.736c1.433 1.759 2.302 3.972 2.302 6.264 0 1.313-.252 2.567-.71 3.715-.125-.35-1.213-2.936-3.581-4.218-.011-.005-.021-.01-.032-.014 1.071-2.284 1.791-4.221 2.021-5.747zm-2.021 5.747c-1.314.616-2.641 1.446-3.718 2.317-.203-.406-.419-.806-.652-1.199 1.305-.545 2.593-1.163 3.861-1.798.172.227.337.457.509.68zm-9.294-10.483c2.669 0 5.108.919 7.049 2.456-.372.723-.78 1.423-1.213 2.102-1.63-.616-3.314-.914-5.027-.914-1.713 0-3.397.298-5.027.914-.433-.679-.841-1.379-1.213-2.102 1.941-1.537 4.38-2.456 7.049-2.456 0 0 .382-.001.382-.001zm-7.049 2.456c.372.723.78 1.423 1.213 2.102-1.305.545-2.593 1.163-3.861 1.798-.172-.227-.337-.457-.509-.68 1.314-.616 2.641-1.446 3.718-2.317.203.406.419.806.652 1.199-.011-.005-.021-.01-.032-.014-1.071 2.284-1.791 4.221-2.021 5.747zm-2.021-5.747c.125.35 1.213 2.936 3.581 4.218.011.005.021.01.032.014-1.071 2.284-1.791 4.221-2.021 5.747-1.433-1.759-2.302-3.972-2.302-6.264 0-1.313.252-2.567.71-3.715z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#a76552] dark:bg-[#1a1a1a] text-white dark:text-[#d9cab1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1">
                <img
                  src="https://pub-cdn.sider.ai/u/U0AWH647XGE/web-coder/68867f69f2d3a0ac8dcde35e/resource/4aedc5a3-b524-4b41-ae57-a9899840f1d8.png"
                  alt="EmadAlddine Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{t('title')}</h3>
                <p className="text-sm opacity-80">{t('subtitle')}</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {language === 'en' 
                ? 'Creative graphic designer with 9+ years of experience in branding and visual identity development.'
                : 'مصمم جرافيك مبدع بخبرة تزيد عن 9 سنوات في تطوير العلامات التجارية والهوية البصرية.'
              }
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('contact')}</h3>
            <div className="space-y-2 text-sm">
              <p>📧 Emad.i202020@gmail.com</p>
              <p>📱 +966 504487308</p>
              <p>📍 Al-Madina, Saudi Arabia</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('followMe')}</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                    aria-label={link.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 {t('title')}. {t('allRightsReserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
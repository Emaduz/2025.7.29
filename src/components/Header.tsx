/**
 * Main navigation header component
 * Features logo, navigation menu, theme toggle, and language switcher
 */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../utils/translations';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();
  const { t } = useTranslation(language);
  const location = useLocation();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('portfolio'), href: '/portfolio' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('contact'), href: '/contact' },
  ];

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#d9cab1]/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md border-b border-[#9c7860]/20 dark:border-[#d9cab1]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className={`w-10 h-10 rounded-full overflow-hidden ${theme === 'light' ? 'bg-white p-1' : ''}`}>
              <img
                src="https://pub-cdn.sider.ai/u/U0AWH647XGE/web-coder/68867f69f2d3a0ac8dcde35e/resource/4aedc5a3-b524-4b41-ae57-a9899840f1d8.png"
                alt="EmadAlddine Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#8f1819] dark:text-[#bd7b6a]">
                {t('title')}
              </span>
              <span className="text-xs text-[#9c7860] dark:text-[#d9cab1]/80">
                {t('subtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#8f1819] dark:hover:text-[#bd7b6a] ${
                  isActiveRoute(item.href)
                    ? 'text-[#8f1819] dark:text-[#bd7b6a] border-b-2 border-[#8f1819] dark:border-[#bd7b6a]'
                    : 'text-[#9c7860] dark:text-[#d9cab1]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="border-[#9c7860] text-[#9c7860] hover:bg-[#9c7860] hover:text-white dark:border-[#d9cab1] dark:text-[#d9cab1] dark:hover:bg-[#d9cab1] dark:hover:text-[#1a1a1a] bg-transparent"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-[#9c7860] text-[#9c7860] hover:bg-[#9c7860] hover:text-white dark:border-[#d9cab1] dark:text-[#d9cab1] dark:hover:bg-[#d9cab1] dark:hover:text-[#1a1a1a] bg-transparent"
            >
              <Globe className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
              {language === 'en' ? 'ع' : 'EN'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="border-[#9c7860] text-[#9c7860] hover:bg-[#9c7860] hover:text-white dark:border-[#d9cab1] dark:text-[#d9cab1] dark:hover:bg-[#d9cab1] dark:hover:text-[#1a1a1a] bg-transparent"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-[#9c7860] text-[#9c7860] hover:bg-[#9c7860] hover:text-white dark:border-[#d9cab1] dark:text-[#d9cab1] dark:hover:bg-[#d9cab1] dark:hover:text-[#1a1a1a] bg-transparent"
            >
              {language === 'en' ? 'ع' : 'EN'}
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#9c7860] dark:text-[#d9cab1] hover:text-[#8f1819] dark:hover:text-[#bd7b6a]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#d9cab1] dark:bg-[#1a1a1a] border-t border-[#9c7860]/20 dark:border-[#d9cab1]/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActiveRoute(item.href)
                      ? 'text-[#8f1819] dark:text-[#bd7b6a] bg-[#9c7860]/10 dark:bg-[#d9cab1]/10'
                      : 'text-[#9c7860] dark:text-[#d9cab1] hover:text-[#8f1819] dark:hover:text-[#bd7b6a] hover:bg-[#9c7860]/10 dark:hover:bg-[#d9cab1]/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
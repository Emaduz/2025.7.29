/**
 * Portfolio page component displaying projects with filtering
 * Showcases design work with category filters and project details
 */
import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../utils/translations';

interface Project {
  id: number;
  title: { en: string; ar: string };
  category: 'all' | 'logos' | 'branding' | 'print' | 'uiux';
  image: string;
  description: { en: string; ar: string };
  tags: string[];
}

const PortfolioPage: React.FC = () => {
  const { language } = useTheme();
  const { t } = useTranslation(language);
  const [activeFilter, setActiveFilter] = useState<'all' | 'logos' | 'branding' | 'print' | 'uiux'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: { en: 'Corporate Identity Design', ar: 'تصميم الهوية التجارية' },
      category: 'branding',
      image: 'https://pub-cdn.sider.ai/u/U0AWH647XGE/web-coder/68867f69f2d3a0ac8dcde35e/resource/e745546e-b12d-4d81-883a-23c25362caf8.jpg',
      description: { en: 'Complete brand identity package for tech company', ar: 'حزمة هوية تجارية كاملة لشركة تقنية' },
      tags: ['Branding', 'Logo', 'Guidelines'],
    },
    {
      id: 2,
      title: { en: 'Restaurant Logo Collection', ar: 'مجموعة شعارات مطاعم' },
      category: 'logos',
      image: 'https://pub-cdn.sider.ai/u/U0AWH647XGE/web-coder/68867f69f2d3a0ac8dcde35e/resource/1cb7265b-3145-47cc-a1a0-f85c88815296.jpg',
      description: { en: 'Modern logo designs for restaurant chain', ar: 'تصاميم شعارات عصرية لسلسلة مطاعم' },
      tags: ['Logo', 'Food', 'Modern'],
    },
    {
      id: 3,
      title: { en: 'Annual Report Design', ar: 'تصميم التقرير السنوي' },
      category: 'print',
      image: 'https://pub-cdn.sider.ai/u/U0AWH647XGE/web-coder/68867f69f2d3a0ac8dcde35e/resource/3b615d10-a1fa-4339-9021-0ec574ad94d4.jpg',
      description: { en: 'Professional annual report layout and design', ar: 'تخطيط وتصميم تقرير سنوي احترافي' },
      tags: ['Print', 'Layout', 'Corporate'],
    },
    {
      id: 4,
      title: { en: 'Mobile App Interface', ar: 'واجهة تطبيق محمول' },
      category: 'uiux',
      image: 'https://pub-cdn.sider.ai/u/U0AWH647XGE/web-coder/68867f69f2d3a0ac8dcde35e/resource/dc3224b1-eb04-44f0-aef0-e554f200ec97.jpg',
      description: { en: 'User-friendly mobile application design', ar: 'تصميم تطبيق محمول سهل الاستخدام' },
      tags: ['UI/UX', 'Mobile', 'App'],
    },
    {
      id: 5,
      title: { en: 'Fashion Brand Identity', ar: 'هوية علامة أزياء' },
      category: 'branding',
      image: 'https://pub-cdn.sider.ai/u/U0AWH647XGE/web-coder/68867f69f2d3a0ac8dcde35e/resource/0d3e36f8-ab6c-43cd-ba48-8c58ca4c9386.jpg',
      description: { en: 'Luxury fashion brand visual identity', ar: 'هوية بصرية لعلامة أزياء فاخرة' },
      tags: ['Fashion', 'Luxury', 'Branding'],
    },
    {
      id: 6,
      title: { en: 'Tech Startup Logos', ar: 'شعارات شركات تقنية ناشئة' },
      category: 'logos',
      image: 'https://pub-cdn.sider.ai/u/U0AWH647XGE/web-coder/68867f69f2d3a0ac8dcde35e/resource/ce073c5a-5a64-42d0-a8ba-d352550ffad8.jpg',
      description: { en: 'Innovative logos for technology startups', ar: 'شعارات مبتكرة للشركات التقنية الناشئة' },
      tags: ['Technology', 'Startup', 'Innovation'],
    },
    {
      id: 7,
      title: { en: 'Magazine Layout Design', ar: 'تصميم تخطيط مجلة' },
      category: 'print',
      image: 'https://pub-cdn.sider.ai/u/U0AWH647XGE/web-coder/68867f69f2d3a0ac8dcde35e/resource/af01bd90-a33a-4062-be30-93ea8791eb15.jpg',
      description: { en: 'Creative magazine layout and typography', ar: 'تخطيط مجلة إبداعي وطباعة متقنة' },
      tags: ['Magazine', 'Typography', 'Layout'],
    },
    {
      id: 8,
      title: { en: 'E-commerce Website Design', ar: 'تصميم موقع تجارة إلكترونية' },
      category: 'uiux',
      image: 'https://pub-cdn.sider.ai/u/U0AWH647XGE/web-coder/68867f69f2d3a0ac8dcde35e/resource/71185495-116e-4f71-a509-6dfef686521e.jpg',
      description: { en: 'Modern e-commerce platform design', ar: 'تصميم منصة تجارة إلكترونية عصرية' },
      tags: ['E-commerce', 'Web', 'UX'],
    },
  ];

  const filters = [
    { key: 'all', label: { en: 'All Projects', ar: 'جميع المشاريع' } },
    { key: 'logos', label: { en: 'Logos', ar: 'الشعارات' } },
    { key: 'branding', label: { en: 'Branding', ar: 'العلامة التجارية' } },
    { key: 'print', label: { en: 'Print Design', ar: 'التصميم الطباعي' } },
    { key: 'uiux', label: { en: 'UI/UX', ar: 'واجهات المستخدم' } },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold text-[#8f1819] dark:text-[#bd7b6a]">
            {t('portfolioTitle')}
          </h1>
          <p className="text-xl text-[#9c7860] dark:text-[#d9cab1]/80 max-w-3xl mx-auto">
            {t('portfolioSubtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as any)}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`
                ${activeFilter === filter.key 
                  ? 'bg-[#8f1819] hover:bg-[#bd7b6a] text-white' 
                  : 'border-[#9c7860] text-[#9c7860] hover:bg-[#9c7860] hover:text-white dark:border-[#d9cab1] dark:text-[#d9cab1] dark:hover:bg-[#d9cab1] dark:hover:text-[#1a1a1a] bg-transparent'
                }
              `}
            >
              {filter.label[language]}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-[#2d2d2d] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#8f1819] dark:text-[#bd7b6a] mb-2">
                    {project.title[language]}
                  </h3>
                  <p className="text-[#9c7860] dark:text-[#d9cab1]/80 text-sm leading-relaxed">
                    {project.description[language]}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-[#d9cab1] dark:bg-[#1a1a1a] text-[#8f1819] dark:text-[#bd7b6a] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <Button
                  className="w-full bg-[#8f1819] hover:bg-[#bd7b6a] text-white"
                  size="sm"
                >
                  {t('viewProject')}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#9c7860] text-[#9c7860] hover:bg-[#9c7860] hover:text-white dark:border-[#d9cab1] dark:text-[#d9cab1] dark:hover:bg-[#d9cab1] dark:hover:text-[#1a1a1a] bg-transparent"
          >
            {language === 'en' ? 'Load More Projects' : 'تحميل المزيد من المشاريع'}
          </Button>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-[#a76552] dark:bg-[#2d2d2d] rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white dark:text-[#d9cab1]">
            {language === 'en' ? 'Like What You See?' : 'أعجبك ما تراه؟'}
          </h2>
          <p className="text-white/90 dark:text-[#d9cab1]/80 text-lg max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Let\'s collaborate on your next project. I\'m always excited to work on new creative challenges.'
              : 'لنتعاون في مشروعك القادم. أنا متحمس دائماً للعمل على تحديات إبداعية جديدة.'
            }
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#a76552] bg-transparent"
          >
            <a href="/contact">
              {language === 'en' ? 'Start a Project' : 'ابدأ مشروعاً'}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
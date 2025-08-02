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
  const [activeFilter, setActiveFilter] = useState<'all' | 'logos' | 'branding' | 'print' | 'socialmedia'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: { en: 'Balsam Taiba Medical Co. Identity Design', ar: 'تصميم شعار وهوية شركة بلسم طيبة الطبية' },
      category: 'branding',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/60f7a4214380481.675743f08799d.jpeg',
      description: { en: 'Complete brand identity package for tech company', ar: 'حزمة هوية تجارية كاملة لشركة تقنية' },
      tags: ['branding', 'Logo', 'Guidelines'],
    },
    {
      id: 2,
      title: { en: 'Caesar Restaurant Logo Brand', ar: 'تصميم شعار سلسلة مطاعم القيصر' },
      category: 'logos',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/75670b214380481.675743f088b9a.jpeg',
      description: { en: 'Modern logo designs for restaurant chain', ar: 'تصاميم شعارات عصرية لسلسلة مطاعم' },
      tags: ['Logo', 'Food', 'Modern'],
    },
    {
      id: 3,
      title: { en: 'Annual Report Design', ar: 'تصميم التقرير السنوي' },
      category: 'print',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/6c98f5214380481.675743f092c71.jpeg',
      description: { en: 'Professional annual report layout and design', ar: 'تخطيط وتصميم تقرير سنوي احترافي' },
      tags: ['Print', 'Layout', 'Corporate'],
    },
    {
      id: 4,
      title: { en: 'Social Media Adv', ar: 'تصاميم السوشال ميديا' },
      category: 'socialmedia',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/bed92e214380481.675743f08c922.jpeg',
      description: { en: 'Expert social media design', ar: 'تصميم احترافي لوسائل التواصل الاجتماعي' },
      tags: ['Ai/Ps', 'Social', 'Design'],
    },
    {
      id: 5,
      title: { en: 'Logo Brand & Identity For Ekleel Alenayah Medical Co.', ar: 'شعار وهوية بصرية لشركة إكليل العناية الطبية' },
      category: 'branding',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/d658ae214380481.675743f07fafe.jpeg',
      description: { en: 'Luxury medical brand visual identity', ar: 'هوية بصرية فاخرة لعلامة طبية' },
      tags: ['Medica', 'Luxury', 'Branding'],
    },
    {
      id: 6,
      title: { en: 'Al Khattabi Press Logo', ar: 'شعار مطابع الخطابي' },
      category: 'logos',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/063a91214380481.675743f0844b9.jpeg',
      description: { en: 'Innovative logos for Printing Press startups', ar: 'شعار مبتكر لشركة طباعة' },
      tags: ['Printing', 'Startup', 'Materials'],
    },
    {
      id: 7,
      title: { en: 'Bahaa Silver Logo Design', ar: 'تصميم شعار شركة بهاء الفضة' },
      category: 'print',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/c99968214380481.675743f086a49.jpeg',
      description: { en: 'Creative Brand Logo by typography', ar: 'شعار علامة تجارية إبداعي بطريقة التايبوجرافي' },
      tags: ['Gold & Silver', 'Typography', 'Layout'],
    },
    {
      id: 8,
      title: { en: 'Jenan Yemeni Hony Logo Design', ar: 'تصميم شعار شركة جنان للعسل اليمني' },
      category: 'branding',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/7c3596214380481.675743f08b052.jpeg',
      description: { en: 'Modern commerce branding design', ar: 'تصميم هوية تجارية عصرية' },
      tags: ['Commerce', 'Branding', 'Logo'],
    },
  ];

  const filters = [
    { key: 'all', label: { en: 'All Projects', ar: 'جميع المشاريع' } },
    { key: 'logos', label: { en: 'Logos', ar: 'الشعارات' } },
    { key: 'branding', label: { en: 'Branding', ar: 'العلامة التجارية' } },
    { key: 'print', label: { en: 'Print Design', ar: 'التصميم الطباعي' } },
    { key: 'socialmedia', label: { en: 'Social Media', ar: 'تصاميم وسائل التواصل الإجماعي' } },
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
              className={
                ${activeFilter === filter.key 
                  ? 'bg-[#8f1819] hover:bg-[#bd7b6a] text-white' 
                  : 'border-[#9c7860] text-[#9c7860] hover:bg-[#9c7860] hover:text-white dark:border-[#d9cab1] dark:text-[#d9cab1] dark:hover:bg-[#d9cab1] dark:hover:text-[#1a1a1a] bg-transparent'
                }
              }
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

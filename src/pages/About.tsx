/**
 * About page component displaying designer's background and experience
 * Shows biography, education, skills, and professional experience
 */
import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../utils/translations';

const AboutPage: React.FC = () => {
  const { language } = useTheme();
  const { t } = useTranslation(language);

  const experiences = [
    {
      title: { en: 'Graphic Designer', ar: 'مصمم جرافيك' },
      company: { en: 'Al Masjid Al Nabawi', ar: 'المسجد النبوي' },
      period: { en: '2020 - Present', ar: '2020 - الحاضر' },
      location: 'Al-Madina, Saudi Arabia',
      description: {
        en: 'Created impactful designs for awareness and guidance campaigns. Enhanced branding through innovative design solutions.',
        ar: 'إنشاء تصاميم مؤثرة لحملات التوعية والإرشاد. تعزيز العلامة التجارية من خلال حلول التصميم المبتكرة.'
      },
    },
    {
      title: { en: 'Graphic & Printing Specialist', ar: 'أخصائي جرافيك وطباعة' },
      company: { en: 'Al Fanoos Press', ar: 'مطبعة الفانوس' },
      period: { en: '2018 - 2020', ar: '2018 - 2020' },
      location: 'Al-Madina, Saudi Arabia',
      description: {
        en: 'Designed engaging graphic & printing content for various printable items. Collaborated with cross-functional teams to deliver projects on time.',
        ar: 'تصميم محتوى جرافيك وطباعة جذاب لمختلف العناصر القابلة للطباعة. التعاون مع فرق متعددة الوظائف لتسليم المشاريع في الوقت المحدد.'
      },
    },
    {
      title: { en: 'Freelance Designer', ar: 'مصمم مستقل' },
      company: { en: 'Self-Employed', ar: 'عمل حر' },
      period: { en: '2015 - Present', ar: '2015 - الحاضر' },
      location: { en: 'Remote', ar: 'عن بُعد' },
      description: {
        en: 'Delivered custom design solutions for clients across various industries. Built strong client relationships and maintained high satisfaction rates.',
        ar: 'تقديم حلول تصميم مخصصة للعملاء في مختلف الصناعات. بناء علاقات قوية مع العملاء والحفاظ على معدلات رضا عالية.'
      },
    },
  ];

  const education = [
    { title: { en: 'Bachelor of Graphic & Multimedia', ar: 'بكالوريوس في الجرافيك والوسائط المتعددة' }, year: '2021' },
    { title: { en: 'TOFEL ITP Certificate', ar: 'شهادة توفل ITP' }, year: '2021' },
    { title: { en: 'Diplôme français junior', ar: 'دبلوم فرنسي مبتدئ' }, year: '2022' },
    { title: { en: 'English Advanced Diploma', ar: 'دبلوم اللغة الإنجليزية المتقدم' }, year: '2018' },
    { title: { en: 'Designing Diploma', ar: 'دبلوم التصميم' }, year: '2016' },
    { title: { en: 'ICDL Certificate', ar: 'شهادة ICDL' }, year: '2016' },
  ];

  const skills = [
    { name: 'Adobe Creative Suite', level: 95 },
    { name: '3D Modeling & Rendering', level: 90 },
    { name: 'UI/UX Design Principles', level: 85 },
    { name: 'Typography & Branding', level: 98 },
    { name: 'Print Design', level: 95 },
    { name: 'Mobile App UI Design', level: 80 },
  ];

  const languages = [
    { name: { en: 'Arabic', ar: 'العربية' }, level: { en: 'Mother Tongue', ar: 'اللغة الأم' }, percentage: 100 },
    { name: { en: 'English', ar: 'الإنجليزية' }, level: { en: 'Advanced', ar: 'متقدم' }, percentage: 90 },
    { name: { en: 'French', ar: 'الفرنسية' }, level: { en: 'Elementary', ar: 'مبتدئ' }, percentage: 40 },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold text-[#8f1819] dark:text-[#bd7b6a]">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-[#9c7860] dark:text-[#d9cab1]/80 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Passionate designer with 9+ years of experience creating impactful visual solutions'
              : 'مصمم شغوف بخبرة تزيد عن 9 سنوات في إنشاء حلول بصرية مؤثرة'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Profile & Bio */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-full max-w-sm mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://pub-cdn.sider.ai/u/U0AWH647XGE/web-coder/68867f69f2d3a0ac8dcde35e/resource/d349de7c-8cfe-4e22-80a8-669f9b8a7475.jpg"
                    alt="EmadAlddine Ismael"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-6 shadow-lg space-y-4">
              <h3 className="text-xl font-bold text-[#8f1819] dark:text-[#bd7b6a] mb-4">
                {language === 'en' ? 'Personal Information' : 'المعلومات الشخصية'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <MapPin className="h-5 w-5 text-[#9c7860] dark:text-[#bd7b6a]" />
                  <span className="text-[#9c7860] dark:text-[#d9cab1]/80">Al-Madina, Saudi Arabia</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Calendar className="h-5 w-5 text-[#9c7860] dark:text-[#bd7b6a]" />
                  <span className="text-[#9c7860] dark:text-[#d9cab1]/80">
                    {language === 'en' ? 'Yemeni Nationality' : 'الجنسية اليمنية'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Award className="h-5 w-5 text-[#9c7860] dark:text-[#bd7b6a]" />
                  <span className="text-[#9c7860] dark:text-[#d9cab1]/80">
                    {language === 'en' ? '9+ Years Experience' : '9+ سنوات خبرة'}
                  </span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#8f1819] dark:text-[#bd7b6a] mb-6">
                {language === 'en' ? 'Languages' : 'اللغات'}
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-[#9c7860] dark:text-[#d9cab1]">
                        {lang.name[language]}
                      </span>
                      <span className="text-sm text-[#9c7860] dark:text-[#d9cab1]/80">
                        {lang.level[language]}
                      </span>
                    </div>
                    <div className="w-full bg-[#d9cab1] dark:bg-[#1a1a1a] rounded-full h-2">
                      <div
                        className="bg-[#8f1819] dark:bg-[#bd7b6a] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Skills */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#8f1819] dark:text-[#bd7b6a] mb-6">
                {language === 'en' ? 'About Me' : 'نبذة عني'}
              </h3>
              <p className="text-[#9c7860] dark:text-[#d9cab1]/80 leading-relaxed text-lg">
                {language === 'en'
                  ? 'Creative and experienced Branding and Logo Designer with over 9 years of expertise in developing impactful visual identities. Skilled in managing design teams, fostering collaboration, and ensuring the successful execution of creative projects. Proficient in delivering professional logo designs, brand guidelines, and cohesive marketing materials. Capable of taking on senior-level roles as a Senior Graphic Designer to lead projects and mentor junior designers. Passionate about design innovation and achieving excellence in every project.'
                  : 'مصمم علامات تجارية وشعارات مبدع وذو خبرة تزيد عن 9 سنوات في تطوير الهويات البصرية المؤثرة. ماهر في إدارة فرق التصميم وتعزيز التعاون وضمان التنفيذ الناجح للمشاريع الإبداعية. متمكن من تقديم تصاميم شعارات احترافية وإرشادات العلامة التجارية ومواد تسويقية متماسكة. قادر على تولي أدوار على مستوى أول كمصمم جرافيك أول لقيادة المشاريع وتوجيه المصممين المبتدئين. شغوف بالابتكار في التصميم وتحقيق التميز في كل مشروع.'
                }
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#8f1819] dark:text-[#bd7b6a] mb-8">
                {t('experience')}
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 rtl:pl-0 rtl:pr-8">
                    {/* Timeline dot */}
                    <div className="absolute left-0 rtl:left-auto rtl:right-0 top-0 w-4 h-4 bg-[#8f1819] dark:bg-[#bd7b6a] rounded-full"></div>
                    {/* Timeline line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-2 rtl:left-auto rtl:right-2 top-4 w-0.5 h-16 bg-[#d9cab1] dark:bg-[#9c7860]"></div>
                    )}
                    
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-lg font-bold text-[#8f1819] dark:text-[#bd7b6a]">
                          {exp.title[language]}
                        </h4>
                        <span className="text-sm text-[#9c7860] dark:text-[#d9cab1]/80 bg-[#d9cab1] dark:bg-[#1a1a1a] px-3 py-1 rounded-full">
                          {exp.period[language]}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-[#9c7860] dark:text-[#d9cab1]/80">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company[language]}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                      <p className="text-[#9c7860] dark:text-[#d9cab1]/80 leading-relaxed">
                        {exp.description[language]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#8f1819] dark:text-[#bd7b6a] mb-8">
                {t('education')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-[#8f1819] dark:text-[#bd7b6a]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-[#8f1819] dark:text-[#bd7b6a]">
                        {edu.title[language]}
                      </h4>
                      <p className="text-sm text-[#9c7860] dark:text-[#d9cab1]/80">
                        {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#8f1819] dark:text-[#bd7b6a] mb-8">
                {t('skills')}
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-[#9c7860] dark:text-[#d9cab1]">
                        {skill.name}
                      </span>
                      <span className="text-sm text-[#9c7860] dark:text-[#d9cab1]/80">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-[#d9cab1] dark:bg-[#1a1a1a] rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-[#8f1819] to-[#bd7b6a] h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
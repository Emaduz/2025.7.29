/**
 * Services page component showcasing design services offered
 * Displays service categories with descriptions and pricing
 */
import React from 'react';
import { Palette, Layout, Printer, Smartphone, Globe, Camera, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../utils/translations';

interface Service {
  icon: React.ElementType;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  features: { en: string[]; ar: string[] };
  price: { en: string; ar: string };
  popular?: boolean;
}

const ServicesPage: React.FC = () => {
  const { language } = useTheme();
  const { t } = useTranslation(language);

  const services: Service[] = [
    {
      icon: PenTool,
      title: { en: 'Logo Design', ar: 'تصميم الشعارات' },
      description: { 
        en: 'Creating unique and memorable logos that represent your brand identity perfectly.',
        ar: 'إنشاء شعارات فريدة ولا تُنسى تمثل هوية علامتك التجارية بشكل مثالي.'
      },
      features: {
        en: ['3 Initial Concepts', 'Unlimited Revisions', 'Vector Files (AI, EPS)', 'PNG & JPG Files', 'Brand Guidelines'],
        ar: ['3 مفاهيم أولية', 'تعديلات غير محدودة', 'ملفات فيكتور (AI, EPS)', 'ملفات PNG و JPG', 'إرشادات العلامة التجارية']
      },
      price: { en: 'Starting at $150', ar: 'ابتداءً من 150$' },
      popular: true,
    },
    {
      icon: Layers,
      title: { en: 'Brand Identity', ar: 'الهوية التجارية' },
      description: { 
        en: 'Complete brand identity packages including logo, colors, typography, and guidelines.',
        ar: 'حزم هوية تجارية كاملة تشمل الشعار والألوان والطباعة والإرشادات.'
      },
      features: {
        en: ['Logo Design', 'Color Palette', 'Typography Guide', 'Business Cards', 'Letterhead Design', 'Brand Guidelines'],
        ar: ['تصميم الشعار', 'لوحة الألوان', 'دليل الطباعة', 'بطاقات العمل', 'تصميم ورق الخطابات', 'إرشادات العلامة التجارية']
      },
      price: { en: 'Starting at $400', ar: 'ابتداءً من 400$' },
    },
    {
      icon: Printer,
      title: { en: 'Print Design', ar: 'التصميم الطباعي' },
      description: { 
        en: 'Professional print materials including brochures, flyers, posters, and marketing collateral.',
        ar: 'مواد طباعة احترافية تشمل الكتيبات والنشرات والملصقات والمواد التسويقية.'
      },
      features: {
        en: ['Brochure Design', 'Flyer Design', 'Poster Design', 'Magazine Layout', 'Packaging Design', 'Print-Ready Files'],
        ar: ['تصميم الكتيبات', 'تصميم النشرات', 'تصميم الملصقات', 'تخطيط المجلات', 'تصميم التعبئة', 'ملفات جاهزة للطباعة']
      },
      price: { en: 'Starting at $50', ar: 'ابتداءً من 50$' },
    },
    {
      icon: Smartphone,
      title: { en: 'Social Media Design', ar: 'تصميم صفحات التواصل الإجتماعية' },
      description: { 
        en: 'Creative and engaging visuals tailored for social media platforms to enhance brand presence and audience interaction.',
        ar: 'تصاميم إبداعية وجذابة مخصصة لمنصات التواصل الاجتماعي لتعزيز حضور العلامة التجارية وزيادة تفاعل الجمهور.'
      },
      features: {
        en: ['Creative social media posts, stories, ads, and branding designs to boost engagement.'],
        ar: ['تصاميم إبداعية للمنشورات والقصص والإعلانات والهوية البصرية لزيادة التفاعل.']
      },
      price: { en: 'Starting at $150', ar: 'ابتداءً من 150$' },
    },
    {
      icon: IdCard,
      title: { en: 'Profile Design', ar: 'تصميم البروفايلات' },
      description: { 
        en: 'Modern and responsive website designs that engage users and drive conversions.',
        ar: 'تصاميم مواقع عصرية ومتجاوبة تجذب المستخدمين وتحقق التحويلات.'
      },
      features: {
        en: ['Responsive Design', 'Landing Pages', 'E-commerce Design', 'CMS Integration', 'SEO Optimization', 'Performance Optimization'],
        ar: ['تصميم متجاوب', 'صفحات الهبوط', 'تصميم التجارة الإلكترونية', 'تكامل CMS', 'تحسين SEO', 'تحسين الأداء']
      },
      price: { en: 'Starting at $500', ar: 'ابتداءً من 500$' },
    },
    {
      icon: Package,
      title: { en: 'Packaging Design', ar: 'تصميم التغليف' },
      description: { 
        en: 'Creative and functional packaging that enhances product appeal and strengthens brand identity.',
        ar: 'تصاميم تغليف إبداعية وعملية تعزز جاذبية المنتج وتقوي هوية العلامة التجارية.'
      },
      features: {
        en: ['Box Design', 'Label Design', 'Product Mockups', 'Bag & Pouch Design', 'Custom Die-Cuts', 'Eco-Friendly Solutions'],
        ar: ['تصميم العلب', 'تصميم الملصقات', 'نماذج عرض المنتجات', 'تصميم الأكياس والأغلفة', 'قصات مخصصة', 'حلول صديقة للبيئة']
      },
      price: { en: 'Starting at $50', ar: 'ابتداءً من 50$' },
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: { en: 'Consultation', ar: 'الاستشارة' },
      description: { 
        en: 'We discuss your project requirements, goals, and vision in detail.',
        ar: 'نناقش متطلبات مشروعك وأهدافك ورؤيتك بالتفصيل.'
      },
    },
    {
      step: '02',
      title: { en: 'Concept Development', ar: 'تطوير المفهوم' },
      description: { 
        en: 'I create initial concepts and present multiple design directions.',
        ar: 'أنشئ المفاهيم الأولية وأقدم اتجاهات تصميم متعددة.'
      },
    },
    {
      step: '03',
      title: { en: 'Design & Refinement', ar: 'التصميم والتحسين' },
      description: { 
        en: 'Based on your feedback, I refine the chosen concept to perfection.',
        ar: 'بناءً على ملاحظاتك، أقوم بتحسين المفهوم المختار إلى الكمال.'
      },
    },
    {
      step: '04',
      title: { en: 'Final Delivery', ar: 'التسليم النهائي' },
      description: { 
        en: 'You receive all final files in various formats ready for use.',
        ar: 'تتلقى جميع الملفات النهائية بتنسيقات مختلفة جاهزة للاستخدام.'
      },
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold text-[#8f1819] dark:text-[#bd7b6a]">
            {t('servicesTitle')}
          </h1>
          <p className="text-xl text-[#9c7860] dark:text-[#d9cab1]/80 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative bg-white dark:bg-[#2d2d2d] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  service.popular ? 'ring-2 ring-[#8f1819] dark:ring-[#bd7b6a]' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#8f1819] dark:bg-[#bd7b6a] text-white px-4 py-1 rounded-full text-sm font-medium">
                      {language === 'en' ? 'Most Popular' : 'الأكثر شعبية'}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Icon & Title */}
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-[#8f1819]/10 dark:bg-[#bd7b6a]/10 rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-[#8f1819] dark:text-[#bd7b6a]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#8f1819] dark:text-[#bd7b6a]">
                      {service.title[language]}
                    </h3>
                    <p className="text-[#9c7860] dark:text-[#d9cab1]/80 leading-relaxed">
                      {service.description[language]}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features[language].map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="h-5 w-5 text-[#8f1819] dark:text-[#bd7b6a] flex-shrink-0 mt-0.5" />
                        <span className="text-[#9c7860] dark:text-[#d9cab1]/80 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-6 border-t border-[#d9cab1] dark:border-[#9c7860]/20 space-y-4">
                    <div className="text-2xl font-bold text-[#8f1819] dark:text-[#bd7b6a]">
                      {service.price[language]}
                    </div>
                    <Button className="w-full bg-[#8f1819] hover:bg-[#bd7b6a] text-white">
                      {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
                      <ArrowRight className={`h-4 w-4 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-12 shadow-lg mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-[#8f1819] dark:text-[#bd7b6a]">
              {language === 'en' ? 'My Design Process' : 'عملية التصميم'}
            </h2>
            <p className="text-xl text-[#9c7860] dark:text-[#d9cab1]/80 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'A streamlined process to ensure your project is delivered on time and exceeds expectations'
                : 'عملية مبسطة لضمان تسليم مشروعك في الوقت المحدد وتجاوز التوقعات'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center space-y-4">
                {/* Step Number */}
                <div className="w-16 h-16 bg-[#8f1819] dark:bg-[#bd7b6a] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {step.step}
                </div>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#d9cab1] dark:bg-[#9c7860] transform -translate-x-8"></div>
                )}

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-[#8f1819] dark:text-[#bd7b6a]">
                    {step.title[language]}
                  </h4>
                  <p className="text-[#9c7860] dark:text-[#d9cab1]/80 text-sm leading-relaxed">
                    {step.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#a76552] dark:bg-[#1a1a1a] rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-4xl font-bold text-white dark:text-[#d9cab1]">
            {language === 'en' ? 'Ready to Get Started?' : 'جاهز للبدء؟'}
          </h2>
          <p className="text-white/90 dark:text-[#d9cab1]/80 text-xl max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Let\'s discuss your project and create something amazing together. Contact me for a free consultation.'
              : 'دعنا نناقش مشروعك وننشئ شيئاً مذهلاً معاً. تواصل معي للحصول على استشارة مجانية.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#a76552] bg-transparent"
            >
              <a href="/contact">
                {language === 'en' ? 'Get Free Quote' : 'احصل على عرض مجاني'}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#a76552] bg-transparent"
            >
              <a href="https://wa.me/+966504487308" target="_blank" rel="noopener noreferrer">
                {language === 'en' ? 'WhatsApp Chat' : 'محادثة واتساب'}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

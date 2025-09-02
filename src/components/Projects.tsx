import React, { useState } from 'react';
import bakariFoundationImg from '../assets/bakari-foundation.JPG';
import canKitchenImg from '../assets/can-kitchen.jpg';

interface SlideCarouselProps {
  slides: string[];
  title: string;
}

const SlideCarousel: React.FC<SlideCarouselProps> = ({ slides, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <>
      {/* Carousel Trigger */}
      <div className="mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          View Presentation ({slides.length} slides)
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">{title} - Presentation</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Slide Content */}
            <div className="relative">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <iframe
                  src={slides[currentSlide]}
                  className="w-full h-full border-0"
                  allowFullScreen
                  title={`${title} - Slide ${currentSlide + 1}`}
                />
              </div>

              {/* Navigation Arrows */}
              {slides.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Slide Indicators */}
            {slides.length > 1 && (
              <div className="flex items-center justify-center gap-2 p-4 border-t border-gray-200">
                <span className="text-sm text-gray-600 mr-4">
                  {currentSlide + 1} of {slides.length}
                </span>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const getTechIcon = (tech: string) => {
  const iconMap: { [key: string]: React.JSX.Element } = {
    'Salesforce NPSP': (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    'React': (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z"/>
      </svg>
    ),
    'AWS': (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.07-.2.07-.08 0-.16-.04-.239-.12a2.799 2.799 0 0 1-.287-.375 6.81 6.81 0 0 1-.248-.471c-.622.734-1.405 1.101-2.35 1.101-.671 0-1.205-.191-1.596-.574-.391-.383-.589-.894-.589-1.533 0-.678.239-1.23.718-1.644.479-.415 1.112-.623 1.906-.623.264 0 .537.024.822.064.287.048.583.111.886.207v-.687c0-.719-.151-1.222-.447-1.51-.296-.287-.8-.431-1.517-.431-.32 0-.647.04-.981.111-.336.072-.663.16-.973.264-.144.048-.256.08-.318.096-.064.016-.111.024-.143.024-.127 0-.191-.096-.191-.287v-.454c0-.151.016-.263.056-.336.04-.072.111-.144.207-.207.32-.168.703-.31 1.149-.415.447-.111.926-.168 1.437-.168 1.096 0 1.906.248 2.414.75.51.502.765 1.253.765 2.254v2.98zm-3.24 1.214c.256 0 .51-.048.774-.144.264-.096.497-.272.694-.52.12-.16.207-.335.247-.528.04-.191.064-.415.064-.67v-.319a6.484 6.484 0 0 0-.735-.16 7.98 7.98 0 0 0-.758-.048c-.534 0-.926.104-1.19.32-.264.215-.39.518-.39.917 0 .375.095.655.287.846.191.2.47.306.807.306zm6.35 1.358c-.16 0-.271-.032-.335-.088-.064-.064-.12-.183-.168-.36l-1.878-6.17c-.048-.16-.072-.271-.072-.327 0-.128.064-.2.191-.2h.783c.168 0 .279.032.335.088.064.064.111.183.151.36l1.342 5.284 1.245-5.284c.04-.176.088-.295.151-.36.064-.063.176-.087.327-.087h.638c.168 0 .279.032.335.088.064.064.12.183.151.36l1.261 5.348 1.381-5.348c.048-.176.104-.295.168-.36.063-.063.175-.087.327-.087h.742c.128 0 .2.063.2.191 0 .04-.009.08-.017.128-.008.048-.024.112-.048.2L18.815 15.2c-.048.16-.104.271-.168.36-.064.056-.183.088-.335.088h-.687c-.168 0-.279-.032-.335-.088-.064-.064-.12-.184-.151-.368l-1.245-5.18L14.648 15.192c-.04.176-.088.295-.151.36-.064.064-.176.096-.335.096h-.687zm11.042.168c-.8 0-1.405-.231-1.813-.694-.407-.463-.613-1.117-.613-1.965 0-.887.199-1.558.597-2.005.399-.447.942-.67 1.636-.67.8 0 1.261.231 1.38.694.12.463.181 1.117.181 1.965v.327c0 .151-.08.231-.231.231h-3.347c.032.735.183 1.237.447 1.51.264.271.638.407 1.117.407.24 0 .487-.04.735-.12.248-.08.479-.2.694-.36.08-.064.144-.104.191-.12.048-.024.087-.032.127-.032.112 0 .168.08.168.24v.383c0 .127-.016.215-.056.279-.04.063-.111.127-.207.191-.24.191-.527.343-.862.447-.336.111-.694.168-1.077.168zm-.055-4.244c-.399 0-.718.127-.957.383-.239.256-.375.614-.399 1.077h2.621c0-.463-.08-.821-.239-1.077-.159-.256-.407-.383-.726-.383z"/>
      </svg>
    ),
    'Java': (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218"/>
      </svg>
    ),
    'Grafana': (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.37 2.094c-.324-.003-.602.168-.764.466L4.27 15.604c-.162.297-.162.662 0 .959l4.172 7.623c.162.297.462.466.764.466h8.588c.302 0 .602-.169.764-.466l4.172-7.623c.162-.297.162-.662 0-.959L14.394 2.56c-.162-.298-.462-.466-.764-.466h-8.588"/>
      </svg>
    ),
    'Product Strategy': (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"/>
      </svg>
    ),
    'AI/ML': (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    'Data Migration': (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 3v10H7l5 5 5-5h-2V3H9zM4 19v2h16v-2H4z"/>
      </svg>
    )
  };
  
  return iconMap[tech] || (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Bakari Foundation CRM",
      category: "Solutions Architecture",
      description: "Built complete Salesforce CRM system for nonprofit, migrating 2k+ donor records with custom automation.",
      technologies: ["Salesforce NPSP", "Data Migration", "CRM Architecture", "Automation"],
      highlights: [
        "Migrated 2k+ records with custom validation rules",
        "Owned complete technical delivery from design to QA",
        "Educated stakeholders on technical constraints & MVP scope"
      ],
      color: "border-green-500",
      bgColor: "bg-green-50",
      period: "May 2025",
      image: bakariFoundationImg,
      slides: [
        // Add your Google Slides embed URLs here
        "https://docs.google.com/presentation/d/e/2PACX-1vR14UMSguyfWQ4lMfckKj2i3w9-zX3aS0ni3BkE6394TmBgnonQKB1-5EkGDgofNLfwCiPhgbfDSnb7/pubembed?start=false&loop=false&delayms=3000"
      ]
    },
    {
      title: "CAN Kitchen Recipe Finder",
      category: "Product & Engineering",
      description: "Recipe finder web app built with Food Shift nonprofit, optimized for accessibility and social impact.",
      technologies: ["Product Strategy", "Web Development", "Accessibility", "SEO"],
      highlights: [
        "30% improvement in accessibility & SEO scores",
        "End-to-end delivery from concept to deployment", 
        "Strategic nonprofit partnership with Food Shift"
      ],
      color: "border-purple-500",
      bgColor: "bg-purple-50",
      period: "August 2023",
      image: canKitchenImg,
      slides: [
        // Add your Google Slides embed URLs here
      ],
      website: "https://capstonecan.web.app/"
    },
    {
      title: "LA3S: Large-scale Annotation Platform",
      category: "AI Research & Systems",
      description: "Productionized AI research experiment using serverless AWS architecture for automated data collection at scale.",
      technologies: ["AWS Lambda", "MTurk API", "Serverless", "Data Pipeline", "CloudWatch"],
      highlights: [
        "Built fully automated research infrastructure",
        "Serverless architecture with real-time processing",
        "Scaled experiment to 1k+ participants with zero intervention",
        "End-to-end AWS pipeline from collection to storage"
      ],
      color: "border-blue-500",
      bgColor: "bg-blue-50",
      period: "June 2025 - Present",
      slides: [
        // Add your Google Slides embed URLs here
        "https://docs.google.com/presentation/d/e/2PACX-1vSUNS1ZeHR9pvCaNkJNUhLuZHBeDdYPAZK01nOAPg60o1V23dFyi9rIXit8fp5rBa-4lwE6edpbCwcw/pubembed?start=false&loop=false&delayms=3000"
      ]
    },
    {
      title: "Salesforce Monitoring Dashboard",
      category: "Software Engineering",
      description: "Real-time monitoring dashboard for 8k+ cloud services, improving SRE observability and workflows.",
      technologies: ["Grafana", "Java", "API Development", "Cloud Infrastructure"],
      highlights: [
        "8k+ services monitored across public clouds",
        "400% faster API response times for 100+ SREs",
        "Real-time observability & alerting system"
      ],
      color: "border-orange-500",
      bgColor: "bg-orange-50",
      period: "August 2024",
      slides: [
        // Add your Google Slides embed URLs here
        "https://docs.google.com/presentation/d/e/2PACX-1vSZuOvieWFmlPwjXkmYOfcpdgHBtaiJGqSaC-jvtXiegY-69N3dDWmgIK0i2iny8rtLZbY5XgMb9R69/pubembed?start=false&loop=false&delayms=3000"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            A showcase of impactful projects from nonprofit CRM systems to AI/ML platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`border-2 ${project.color} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] bg-white/80 backdrop-blur-sm group cursor-pointer`}>
              {project.image && (
                <div className="h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className={`${project.bgColor} p-6 border-b border-current border-opacity-20`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                    {project.category}
                  </span>
                  {project.period && (
                    <span className="text-xs text-slate-500 font-medium">
                      {project.period}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="p-6 bg-white">
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium flex items-center gap-1 hover:bg-slate-200 hover:scale-105 transition-all duration-200">
                        <span className="group-hover:rotate-12 transition-transform duration-300">
                          {getTechIcon(tech)}
                        </span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Slide Carousel Integration */}
                <SlideCarousel slides={project.slides || []} title={project.title} />

                {/* Website Link */}
                {project.website && (
                  <div className="mt-4">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Visit Live Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
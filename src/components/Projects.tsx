import React, { useState } from 'react';
import HepatitisImg from '../assets/liver.jpg';
import IEEEImg from '../assets/conference.jpg';

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
          className="flex items-center gap-3 px-6 py-3 bg-black text-white font-bold text-sm uppercase hover:bg-gray-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          PRESENTATION ({slides.length} SLIDES)
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 cursor-pointer">{title} - Presentation</h3>
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

const Projects = () => {
  const projects = [
    {
      title: "Hepatitis C Stage Prediction – Biomedical ML Project",
      category: "Biomedical Machine Learning",
        description:
          "Developed a multinomial logistic regression model in Python to classify Hepatitis C stages (early, suspected, advanced) using patient biomarker and clinical data. Achieved 97% accuracy and 97% F1-score in multi-class predictions. Conducted univariate and bivariate data analysis to identify key clinical markers (e.g., ALT, BIL, AST), and applied correlation heatmaps with variance filtering to select relevant features, enhancing model interpretability and clinical reliability.",
        technologies: ["Python", "Logistic Regression", "Pandas", "Scikit-learn", "Data Analysis", "Biomedical Data"],
        highlights: [
            "Built a multinomial logistic regression model for Hepatitis C stage classification",
            "Achieved 97% accuracy and 97% F1-score in multi-class predictions",
            "Performed univariate and bivariate analysis to evaluate key biomarkers (ALT, BIL, AST)",
            "Enhanced model interpretability with correlation heatmaps and variance-based feature selection",
            "Applied ML techniques to improve healthcare decision-making in biomedical contexts"
          ],
      color: "border-green-500",
      bgColor: "bg-green-50",
      period: "May 2025",
      image: HepatitisImg,
      slides: [
        // Add your Google Slides embed URLs here
        "https://docs.google.com/presentation/d/1l1UsaeMKnKY9FY9-ty0tQJ8TL1I0rawn/edit?usp=sharing&ouid=104053972983588249258&rtpof=true&sd=true"
      ]
    },
    {
        title: "Synergy of AI & Music – Research Project",
        category: "AI & Creative Systems",
        description:
          "Developed an LSTM-based music generator trained on MIDI sequences to achieve ~85% accuracy in melodic pattern retention. Designed a custom encoding pipeline to convert MIDI files into Nx89 binary matrix format, enabling effective deep learning input and improving note-sequence prediction consistency across diverse compositions. Implemented a sliding window training strategy to capture both short-term and long-term dependencies, reducing unnatural transitions by ~40% compared to traditional RNNs, and enhancing output fluidity.",
        technologies: ["LSTM", "Deep Learning", "MIDI", "Music Generation", "Python"],
        highlights: [
              "Engineered an LSTM-based music generator with ~85% accuracy in melodic pattern retention",
              "Converted MIDI files into Nx89 binary matrix format through a custom encoding pipeline",
              "Implemented sliding window training to capture both short- and long-term dependencies",
              "Reduced unnatural transitions by ~40% compared to traditional RNNs",
              "Published and Presented research at the International Conference on Advanced Science and Technology (ICAST 2023)"
          ],
      color: "border-purple-500",
      bgColor: "bg-purple-50",
      period: "August 2023",
      image: IEEEImg,
      alt : "Profile",
      className: "w-full h-full object-contain",
      slides: [
        // Add your Google Slides embed URLs here
      ],
       website : "https://ieeexplore.ieee.org/document/10455075"
    },
    {
      title: "Sentiment Analysis on Cryptocurrency News",
      category: "CRYPTO Finance Review",
      description:
        "Developed a real-time sentiment analysis system by scraping cryptocurrency articles from leading news sources (e.g., CNBC, DW) via Google News RSS using BeautifulSoup and Newspaper3k, enabling structured data collection across custom timeframes. Implemented NLP-based sentiment scoring with TextBlob to extract polarity and subjectivity metrics, classifying sentiment into positive, neutral, or negative categories to analyze public influence on crypto market behavior.",
      technologies: ["AWS", "BeautifulSoup", "Newspaper3k", "TextBlob", "NLP", "Data Pipeline"],
      highlights: [
          "Built an end-to-end, fully automated AWS pipeline from data collection to storage",
          "Implemented serverless architecture for real-time data processing",
          "Extracted and categorized sentiment metrics (positive, neutral, negative) from news articles",
          "Analyzed sentiment trends across multiple channels to assess public perception of cryptocurrency markets"
          ],
      color: "border-blue-500",
      bgColor: "bg-blue-50",
      period : "March 2025",
      slides: [
        // Add your Google Slides embed URLs here
        //"https://docs.google.com/presentation/d/e/2PACX-1vSUNS1ZeHR9pvCaNkJNUhLuZHBeDdYPAZK01nOAPg60o1V23dFyi9rIXit8fp5rBa-4lwE6edpbCwcw/pubembed?start=false&loop=false&delayms=3000"
      ]
    },
    {

      title: "MedVision / Medical Image Classifier",
      category: "AI / LLM Development",
      description:
        "Built and deployed a medical image classification system leveraging Generative AI APIs and LLM-based prompt engineering to enhance diagnostic accuracy and showcase scalable AI applications in healthcare. Designed and implemented the model architecture with a Streamlit-based interface to provide interactive visualization and improve end-user usability.",
      technologies: ["GenAI API", "LLM", "Streamlit", "Deep Learning", "Medical Imaging"],
      highlights: [
        "Developed a medical image classifier integrating Generative AI APIs with LLM-driven prompt generation",
        "Improved diagnostic accuracy through advanced model design and deployment",
        "Built an interactive, user-friendly Streamlit interface for visualization and usability",
        "Demonstrated scalable AI applications tailored to healthcare domains"
      ],

      color: "border-orange-500",
      bgColor: "bg-orange-50",
      period: "August 2025",
      slides: [
        // Add your Google Slides embed URLs here
        //"https://docs.google.com/presentation/d/e/2PACX-1vSZuOvieWFmlPwjXkmYOfcpdgHBtaiJGqSaC-jvtXiegY-69N3dDWmgIK0i2iny8rtLZbY5XgMb9R69/pubembed?start=false&loop=false&delayms=3000"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
            PROJECTS
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            // Define color schemes for each project
            const colorSchemes = [
              'hover:border-green-500 hover:bg-green-50', // Bakari Foundation
              'hover:border-purple-500 hover:bg-purple-50', // CAN Kitchen
              'hover:border-blue-500 hover:bg-blue-50', // LA3S
              'hover:border-orange-500 hover:bg-orange-50' // Salesforce Dashboard
            ];
            
            return (
              <div key={index} className={`border-4 border-white bg-white ${colorSchemes[index]} group transition-all duration-300`}>
                {project.image && (
                  <div className="h-64 border-b-4 border-black group-hover:border-current">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                )}
                
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-black text-white text-sm font-bold uppercase tracking-wide">
                        {project.category}
                      </span>
                      {project.period && (
                        <span className="text-sm font-bold text-gray-600">
                          {project.period}
                        </span>
                      )}
                    </div>
                    <h3 className="text-3xl font-black text-black mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-black font-medium leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-black text-black mb-4">KEY HIGHLIGHTS</h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-black mt-2 flex-shrink-0"></div>
                          <span className="text-black font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-black text-black mb-4">TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 border-2 border-black text-black font-bold text-sm uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Slide Carousel Integration */}
                    <SlideCarousel slides={project.slides || []} title={project.title} />

                    {/* Website Link */}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-bold text-sm uppercase hover:bg-gray-800 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                        VISIT WEBSITE
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
import campalinImg from '../assets/campalin_logo.jpg';
import dmceImg from '../assets/dmce.logo.png';
import GsoImg from '../assets/GSO.png';


const Experience = () => {
  const experiences = [
    {
      role: "President / Co-Founder",
      company: " Graduate Student Organisation (GSO)",
      location: "Binghamton, NY",
      period: "Jun 25 - Present",
      type: "Data-Driven Leadership",
      description: "Driving data-informed policy reforms and student engagement growth through executive leadership and applied NLP insights",
      achievements: [
        " Taking Inclusive initiative uniting all 6 graduate schools student of binghamton, boosting student engagement by 35%"],
      color: "bg-orange-100 text-orange-800 border-orange-200",
      logo: GsoImg
    },
    {
      role: "Research Assistant",
      company: "University of Mumbai",
      location: "Navi Mumbai, india",
      period: "January 2023 - May 2024",
      type: "Education",
      description: " Built a flood classification model using a fine-tuned Mobile Net CNN, applying transfer learning to accurately distinguish between flood and non-flood images across a 2,100-image dataset. This helped achieve high precision while keeping the model lightweight for potential deployment in low-resource environments.",
      achievements: [
        " Publication : Bhor, P., & Raut, C. (2024). Deep Flood: Leveraging Deep Learning for Flood Inundation Modeling and Disaster Management Preparedness. Journal of Engineering and Technology Management, Volume 72. DOI: 20.14118/v72.2024.101960"
      ],
      color: "bg-blue-100 text-blue-800 border-blue-300",
      logo: dmceImg
    },
    {
      role: "Machine Learning Intern, AI/ML Platform",
      company: "Campalin Innovations!",
      location: "Remote",
      period: "September 2023 – October 2023",
      type: "Software Development",
      description: "Driving the development of  AI/ML features for costumer churn classification based on consumer feedback loop",
      achievements: [
        "Built a machine learning model to predict customer churn by combining Random Forest, Gradient Boosting, and SVM models, achieving a ROC AUC of 0.823 to identify customers likely to leave. "
      ],
      color: "bg-purple-100 text-purple-800 border-purple-200",
      logo: campalinImg
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black text-black mb-8">
            EXPERIENCE
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-400"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-4 border-black p-8 bg-white relative">
              {exp.logo && (
                <img 
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="absolute top-8 right-8 h-16 w-auto object-contain hover:grayscale-0 transition-all duration-300"
                />
              )}
              
              <div className="pr-24">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-3xl font-black text-black">{exp.role}</h3>
                    <span className={`px-4 py-1 text-white text-sm font-bold uppercase ${
                      exp.type === 'Product Management' ? 'bg-blue-600' :
                      exp.type === 'Engineering' ? 'bg-red-600' :
                      exp.type === 'Research' ? 'bg-yellow-600' :
                      exp.type === 'Consulting' ? 'bg-green-600' :
                      exp.type === 'Education' ? 'bg-purple-600' :
                      exp.type === 'Program Management' ? 'bg-orange-600' :
                      exp.type === 'Growth & Adoption' ? 'bg-pink-600' :
                      'bg-black'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-black mb-2">{exp.company}</p>
                  <p className="text-lg font-medium text-gray-600">{exp.location} • {exp.period}</p>
                </div>

                <p className="text-lg text-black mb-8 leading-relaxed font-medium">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-xl font-black text-black mb-4">KEY ACHIEVEMENTS</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-4 h-4 bg-black mt-1 flex-shrink-0"></div>
                        <span className="text-black font-medium leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
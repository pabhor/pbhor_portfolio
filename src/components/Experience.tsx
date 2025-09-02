import salesforceLogo from '../assets/salesforce-logo.png';
import yahooLogo from '../assets/yahoo-logo.png';
import utAustinLogo from '../assets/ut-austin-logo.png';

const Experience = () => {
  const experiences = [
    {
      role: "Product Manager Intern, AI/ML Platform",
      company: "Yahoo!",
      location: "Remote",
      period: "June 2025 – August 2025",
      type: "Product Management",
      description: "Driving the development of multilingual AI/ML features for email classification, bridging research and engineering to create scalable prototypes for international markets.",
      achievements: [
        "Drove development of multilingual email classification tool set to reach 700k+ users and generate $35k monthly revenue",
        "Delivered production-ready ML models through roadmap ownership and PRD creation, processing 19M+ daily email traffic",
        "Bridged research and engineering teams to develop scalable ML prototypes, establishing go-to framework for internationalization"
      ],
      color: "bg-purple-100 text-purple-800 border-purple-200",
      logo: yahooLogo
    },
    {
      role: "Research Assistant, AI & Ethics",
      company: "University of Texas at Austin",
      location: "Austin, TX",
      period: "June 2025 – August 2025",
      type: "Research",
      description: "Conducting cutting-edge research on AI explainability and bias in human decision-making, leveraging AWS cloud infrastructure for large-scale data collection and analysis.",
      achievements: [
        "Conducting research with Professor Maria De-Arteaga on AI explainability to study how LLMs bias human decision-making",
        "Served as SME on experimental design and MTurk workflows; leveraged AWS Lambda + S3 for real-time crowdsourcing",
        "Managed data collection from 3K+ participants using principled sampling methods to support unbiased algorithmic outcomes"
      ],
      color: "bg-green-100 text-green-800 border-green-200",
      logo: utAustinLogo
    },
    {
      role: "Software Engineer Intern, Monitoring & Observability",
      company: "Salesforce",
      location: "San Francisco, CA",
      period: "May 2024 – August 2024",
      type: "Engineering",
      description: "Developed real-time monitoring solutions for enterprise-scale cloud infrastructure, improving observability across thousands of services and enhancing user experience for site reliability engineers.",
      achievements: [
        "Developed and owned real-time monitoring dashboard on Grafana, ensuring observability of 8k+ services across public clouds",
        "Collaborated with product manager and 7-member agile team to design UI and align features with product strategy",
        "Designed, developed and deployed API decreasing request time by 400% and improving UX for 100+ SREs",
        "Retrieved and processed Argus queries via Java-based API integrations to view real-time SLOs of mission-critical AI tools"
      ],
      color: "bg-blue-100 text-blue-800 border-blue-200",
      logo: salesforceLogo
    },
    {
      role: "Software Engineer Intern, Full-Stack",
      company: "Salesforce",
      location: "San Francisco, CA",
      period: "June 2023 – August 2023",
      type: "Engineering",
      description: "Led full-stack development initiatives and team leadership, focusing on user experience optimization and strategic product vision development.",
      achievements: [
        "Spearheaded end-to-end development of 5+ full stack web applications using React, Node, Express, AWS, and PostgreSQL",
        "Led team of three engineer interns in establishing strategic product vision and Agile sprint plan for capstone project",
        "Researched product usability to inform engineering and UX teams, boosting completion rates by 25% in user testing"
      ],
      color: "bg-blue-100 text-blue-800 border-blue-200",
      logo: salesforceLogo
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            A diverse background spanning software engineering, AI research, and product management
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group">
              {exp.logo && (
                <img 
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="absolute top-6 right-6 h-12 w-auto object-contain opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                />
              )}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1 pr-16">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${exp.color}`}>
                      {exp.type}
                    </span>
                  </div>
                  <div className="mb-2">
                    <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <p className="text-slate-500 text-sm">{exp.location} • {exp.period}</p>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
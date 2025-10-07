import aboutPic from '../assets/about-pic.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
            ABOUT
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 mb-16">
          {/* Left Column: Single Image */}
          <div className="flex justify-center">
            <div className="border-3 border-white-full h-[700px] lg:h-[600px]">
              <img
                src={aboutPic}
                alt="About Prabhu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Middle Column: Info Blocks */}
          <div className="space-y-8">
            <div className="border-l-4 border-white pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">EDUCATION</h3>
              <p className="text-white font-medium mb-2">State University of New York , Binghamton </p>
              <p className="text-gray-300 mb-1"> Major: Computer Science</p>
              <p className="text-gray-300 mb-1">Degree: Masters in Science</p>
              <p className="text-gray-400">Graduating January 2026</p>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">LOCATION</h3>
              <p className="text-white font-medium">Binghamton, NY</p>
              <p className="text-gray-300">Originally from India</p>
              <p className="text-gray-400">• Authorized to work in U.S.A </p>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-white font-medium mb-2">Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-600 text-white font-medium">Python</span>
                    <span className="px-3 py-1 bg-blue-600 text-white font-medium">Machine Learning</span>
                    <span className="px-3 py-1 bg-yellow-600 text-black font-medium">AWS</span>
                    <span className="px-3 py-1 bg-purple-600 text-white font-medium">NLP</span>
                    <span className="px-3 py-1 bg-orange-600 text-white font-medium">SQL</span>
                    <span className="px-3 py-1 bg-indigo-600 text-white font-medium">LLM</span>
                    <span className="px-3 py-1 bg-pink-600 text-white font-medium">Github</span>
                  </div>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 border-2 border-white text-white font-medium">PyTorch</span>
                    <span className="px-3 py-1 border-2 border-white text-white font-medium">Tensorflow</span>
                    <span className="px-3 py-1 border-2 border-white text-white font-medium"> Fast API</span>
                    <span className="px-3 py-1 border-2 border-white text-white font-medium">Flask</span>
                    <span className="px-3 py-1 border-2 border-white text-white font-medium">Hugging Face</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="space-y-8">
            <div className="border-l-4 border-white pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">TECHNICAL</h3>
              <ul className="text-white space-y-2">
                <li>AI/ML Platforms</li>
                <li>System Architecture</li>
                <li>Database Design</li>
                <li>API Development</li>
              </ul>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Software Engineering</h3>
              <ul className="text-white space-y-2">
                <li>Product Management</li>
                <li>Strategy Consulting</li>
                <li>Cross-functional Leadership</li>
                <li>Agile Methodologies</li>
                <li>Stakeholder Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Bio Text */}
        <div className="max-w-5xl mx-auto">
          <div className="border-4 border-white p-12">
            <h3 className="text-3xl font-bold text-white mb-8">MY STORY</h3>
            
            <div className="grid lg:grid-cols-2 gap-12 text-white text-lg leading-relaxed">
              <div className="space-y-6">
                <p className="text-justify">
                  My passion for technology and entrepreneurship began in high school, back then I designed a voice-based 
                  navigation app for visually impaired individuals its was my real first project. The idea futher presented in hackathon, and the 
                  experience of building for impact, presenting innovation, and exchanging ideas with peers set me off on a jorney.
                </p>

                <p className="text-justify">
                  In my past I have worked as research assistant and machine learning intern and participated
                  30+ technical and business competition which has shaped my fast moving and user first mindset, teaching me to focus on solving
                  problems with emerging technologies while always keeping customer needs at the center.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-justify">
                  My experience spans software engineering, strategy consulting, and product management for AI/ML platforms.
                   I leverage my multicultural perspective to help organizations solve complex challenges and 
                   drive meaningful outcomes
                </p>

                <p className="text-justify">
                  Currently seeking full-time opportunities where I can contribute my diverse background, 
                  resilience, and passion for innovation to help companies succeed in our connected world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import headshotImg from '../assets/headshot.png';
import graduationImg from '../assets/graduation.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Top Section: Images and Info Cards Side by Side */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column: Images */}
          <div className="relative order-2 md:order-1 space-y-6">
            {/* Main Unsplash Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1714594923299-e915b7d71701?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Languages and culture representation"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Personal Photos Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Circular Headshot */}
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-full shadow-xl border-4 border-white">
                  <img 
                    src={headshotImg}
                    alt="César Monagas Romero"
                    className="w-full h-full object-cover object-[40%_70%] hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Graduation Photo */}
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img 
                  src={graduationImg}
                  alt="Graduation at UT Austin"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-xs font-medium text-slate-800">🎓 UT Austin</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-15 blur-xl"></div>
          </div>

          {/* Right Column: Info Cards */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-slate-900">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-slate-800">University of Texas at Austin</h4>
                  <p className="text-slate-600">Double Major: Management Information Systems & French Studies</p>
                  <p className="text-slate-600">Minor: Computer Science</p>
                  <p className="text-sm text-slate-500">Expected Graduation: December 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-slate-900">Languages</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-slate-800">Fluent</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">Spanish (Native)</span>
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">English</span>
                  <span className="px-3 py-1 bg-blue-700 text-white text-sm rounded-full">French</span>
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">ASL</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Currently Learning</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">German</span>
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Portuguese</span>
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Catalan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-slate-900">Core Competencies</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-slate-800">Technical</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Full-Stack Development</li>
                    <li>• AI/ML Platforms</li>
                    <li>• System Architecture</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-slate-800">Business</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Strategy Consulting</li>
                    <li>• Product Management</li>
                    <li>• Cross-functional Leadership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Bio Text (Full Width, Centered) */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              My journey began in Venezuela, where I lived until high school when my family and I 
              moved to the United States fleeing political unrest. Arriving without speaking 
              any English, I discovered a deep passion for languages that has shaped who I am today.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Now a senior at UT Austin studying Management Information Systems, French, and Computer Science, 
              I speak multiple languages fluently—Spanish (native), English, French, and ASL—while currently 
              learning Catalan, Portuguese, and German. This linguistic curiosity mirrors my approach to 
              technology: always eager to learn new "languages," whether programming or human.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              My experience spans software engineering, strategy consulting, and product management for 
              AI/ML platforms. I thrive at the intersection of technical depth and business strategy, 
              leveraging my multicultural perspective to help organizations solve complex challenges and 
              drive meaningful outcomes.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Currently seeking full-time opportunities where I can contribute my diverse background, 
              resilience, and passion for innovation to help companies grow and succeed in our increasingly 
              connected world.
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;
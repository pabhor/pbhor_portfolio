import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative">
          {/* Floating geometric shapes */}
          <div className="absolute -top-8 left-1/4 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-16 right-1/3 w-12 h-12 bg-purple-500/10 rounded-full animate-bounce"></div>
          <div className="absolute -top-4 right-1/4 w-8 h-8 bg-green-500/10 rounded-full"></div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight relative z-10 group cursor-default">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-500 group-hover:from-purple-400 group-hover:to-pink-500 group-hover:scale-105 inline-block">
              César
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6 group cursor-default">
            <svg className="w-6 h-6 text-blue-400 transition-all duration-300 group-hover:text-blue-300 group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl transition-colors duration-300 group-hover:text-white">
              A wanna-be UN Ambassador → turned Consultant → turned Engineer → turned Product Manager
            </p>
            <svg className="w-6 h-6 text-purple-400 transition-all duration-300 group-hover:text-purple-300 group-hover:-rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div className="flex items-center justify-center gap-4 text-2xl md:text-4xl">
            <span className="animate-pulse">🇻🇪</span>
            <svg className="w-8 h-8 text-blue-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="animate-pulse">🌎</span>
            <svg className="w-8 h-8 text-green-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
            <span className="animate-pulse">💻</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 flex items-center gap-2 hover:bg-blue-600/30 hover:border-blue-400/50 hover:text-blue-200 hover:scale-105 transition-all duration-300 cursor-pointer">
            <svg className="w-4 h-4 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
            Software Engineering
          </span>
          <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 flex items-center gap-2 hover:bg-purple-600/30 hover:border-purple-400/50 hover:text-purple-200 hover:scale-105 transition-all duration-300 cursor-pointer">
            <svg className="w-4 h-4 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"/>
            </svg>
            Strategy Consulting
          </span>
          <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30 flex items-center gap-2 hover:bg-green-600/30 hover:border-green-400/50 hover:text-green-200 hover:scale-105 transition-all duration-300 cursor-pointer">
            <svg className="w-4 h-4 transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            Product Management
          </span>
          <span className="px-4 py-2 bg-orange-600/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30 flex items-center gap-2 hover:bg-orange-600/30 hover:border-orange-400/50 hover:text-orange-200 hover:scale-105 transition-all duration-300 cursor-pointer">
            <svg className="w-4 h-4 transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            AI/ML Platform
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Learn More About Me
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-medium rounded-lg transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
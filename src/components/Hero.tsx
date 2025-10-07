import { useState, useEffect } from "react";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import resume from "../assets/pbhor_resume.pdf";
import profilePic from "../assets/headshotImg.jpg";

const Hero = () => {
  const words = ["AI Engineer", "Graduate Leader", "Data-Driven Innovator"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 60 : 120;
    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Gradient Borders */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600"></div>

      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-6xl mx-auto w-full gap-12">
        {/* Profile Image */}
        <div className="w-62 h-62 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <img
            src={profilePic}
            alt="Prabhu Bhor profile"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right-Side Text Content */}
        <div className="flex flex-col justify-center items-center flex-1 max-w-lg mx-auto">
          <p className="text-lg text-gray-600 mb-2">Hello, I'm</p>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-black mb-6">
            Prabhu Bhor
          </h1> 
          {/* Typing Effect */}
          <p className="text-2xl lg:text-3xl text-gray-800 font-medium mb-6">
            <span className="border-r-2 border-black pr-1 animate-pulse">{text}</span>
          </p>

          {/* Sub Description */}
          <p className="text-lg lg:text-xl text-gray-700 mb-8  text-center">
            Developer from New York who is either busy improving his craft
            or pondering over the next big idea.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-8">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-colors"
            >
              Contact Info
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-start">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
              onClick={() =>
                window.open("https://linkedin.com/in/prabhubhor", "_blank")
              }
            />
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => window.open("https://github.com/pabhor", "_blank")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

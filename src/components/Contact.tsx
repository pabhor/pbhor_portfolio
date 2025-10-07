import { useState } from "react";
import axios from "axios";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Contact Header */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black text-black mb-8">
            CONTACT
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600"></div>
        </div>

        {/* Existing Contact Info */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div className="border-4 border-black p-12">
            <h3 className="text-3xl font-black text-black mb-8">LET'S WORK TOGETHER</h3>
            <p className="text-xl text-black font-medium mb-8 leading-relaxed">
              I'm actively seeking full-time opportunities for 2026. With my unique combination 
              of technical expertise and business acumen, I'm ready to help organizations navigate 
              complex challenges and drive innovation.
            </p>
            <p className="text-lg text-black leading-relaxed">
              Whether it's building products, optimizing processes, or leading strategic initiatives, 
              I bring a collaborative approach and proven results.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-black pl-8">
              <h4 className="text-2xl font-black text-black mb-4">EMAIL</h4>
              <a
                href="mailto:bhor.prabhu.66@gmail.com"
                className="text-xl text-black font-medium hover:underline"
              >
                bhor.prabhu.66@gmail.com
              </a>
            </div>

            <div className="border-l-4 border-black pl-8">
              <h4 className="text-2xl font-black text-black mb-4">LINKEDIN</h4>
              <a
                href="https://linkedin.com/in/prabhubhor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-black font-medium hover:underline"
              >
                linkedin.com/in/prabhubhor
              </a>
            </div>

            <div className="border-l-4 border-black pl-8">
              <h4 className="text-2xl font-black text-black mb-4">GITHUB</h4>
              <a
                href="https://github.com/pabhor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-black font-medium hover:underline"
              >
                github.com/pabhor
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-12 border-t-4 border-black">
          <p className="text-black font-bold text-lg">
            © 2025 PRABHU ANIL BHOR • BUILT WITH REACT & TAILWIND CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

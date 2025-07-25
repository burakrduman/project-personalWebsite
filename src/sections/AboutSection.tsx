import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="furkan.jpg" 
                alt="Furkan Duman" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              I'm Furkan, a PhD Researcher at Cardiff University.
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With 5 years of experience in crafting beautiful user interfaces, I'm dedicated to creating intuitive and 
              engaging experiences that bridge the gap between users and technology.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">Cardiff, UK</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h4>
                <p className="text-gray-700 dark:text-gray-300">5+ Years</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Freelance</h4>
                <p className="text-gray-700 dark:text-gray-300">Available</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Languages</h4>
                <p className="text-gray-700 dark:text-gray-300">Turkish, English</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors shadow-md"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
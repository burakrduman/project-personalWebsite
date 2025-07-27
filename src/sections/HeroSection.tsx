import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-teal-100 dark:bg-teal-900/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            <span className="block">Hi, I'm Furkan</span>
            <span className="block mt-2 text-blue-500">PhD Researcher</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            Computational Robotics
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-800 dark:text-gray-200 font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

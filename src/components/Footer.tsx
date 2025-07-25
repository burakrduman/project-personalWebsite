import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: 'https://twitter.com' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:hello@example.com' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Furkan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
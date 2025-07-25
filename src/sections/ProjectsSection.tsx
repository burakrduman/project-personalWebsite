import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for managing online stores with real-time analytics and inventory tracking.',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A beautiful and intuitive task manager with drag-and-drop functionality and team collaboration features.',
      image: 'https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'JavaScript', 'CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'A sleek weather application with 7-day forecasts, location-based services, and interactive maps.',
      image: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['JavaScript', 'CSS', 'API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Recipe Finder',
      description: 'A recipe discovery platform with filtering by ingredients, dietary restrictions, and meal categories.',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'JavaScript', 'API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 5,
      title: 'Portfolio Template',
      description: 'A customizable portfolio template for developers and designers with multiple themes and sections.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'Meditation App',
      description: 'A mindfulness application with guided meditations, sleep stories, and ambient sounds for relaxation.',
      image: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'TypeScript', 'API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  // Extract unique tags from projects
  const allTags = ['all', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  // Filter projects based on active tag
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Here's a selection of my recent work. Each project is unique and showcases different skills and technologies.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === tag
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 text-sm font-medium rounded-lg transition-colors"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import React, { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard.',
      image: '/api/placeholder/600/400',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, file sharing, and team analytics.',
      image: '/api/placeholder/600/400',
      category: 'frontend',
      tech: ['Vue.js', 'Firebase', 'Vuetify', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool that generates blog posts, social media content, and marketing copy.',
      image: '/api/placeholder/600/400',
      category: 'ai',
      tech: ['Python', 'OpenAI API', 'Django', 'React', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Modern weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: '/api/placeholder/600/400',
      category: 'frontend',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Weather API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'API Gateway Service',
      description: 'Microservices API gateway with authentication, rate limiting, and comprehensive logging.',
      image: '/api/placeholder/600/400',
      category: 'backend',
      tech: ['Node.js', 'Express', 'Redis', 'MongoDB', 'JWT'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 6,
      title: 'Real-time Chat App',
      description: 'Scalable chat application with real-time messaging, file sharing, and video calls.',
      image: '/api/placeholder/600/400',
      category: 'fullstack',
      tech: ['React', 'Socket.io', 'Node.js', 'WebRTC', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => (
    <div className="project-card group">
      {project.featured && (
        <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-2 py-1 rounded-full z-10">
          Featured
        </div>
      )}
      
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-6 bg-zinc-800 h-48 flex items-center justify-center">
        <div className="text-zinc-500 text-sm">Project Image</div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
          >
            Code
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-zinc-300 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-md text-xs font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="section">
      <div className="section-content">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-2">Featured Work</h2>
          <div className="w-20 h-1 bg-white rounded-full mx-auto"></div>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            innovative digital solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-white text-black'
                  : 'border border-zinc-600 text-zinc-300 hover:bg-zinc-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-16 border-t border-zinc-800">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Have a Project in Mind?</h3>
            <p className="text-zinc-300 max-w-md mx-auto">
              Let's discuss how we can bring your ideas to life with cutting-edge technology 
              and exceptional design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="btn-primary"
              >
                Start a Project
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

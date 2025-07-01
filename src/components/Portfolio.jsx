import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: "Financial Applications Platform",
      company: "Apple Capital",
      period: "2022 - Present",
      description: "Led cross-functional engineering team in developing high-performance financial applications serving 50,000+ active users. Architected microservices migration resulting in 40% improvement in system reliability.",
      technologies: ["React", "TypeScript", ".NET Core", "Azure", "Microservices"],
      achievements: [
        "40% improvement in system reliability",
        "25% reduction in response times",
        "50,000+ active users served"
      ]
    },
    {
      title: "Tic-Tac-Toe Game Analysis & Predictive Modeling",
      company: "Personal Project",
      period: "2020",
      description: "Applied supervised machine learning to analyze full game sequences and predict optimal moves with 85% accuracy. Developed comprehensive data pipeline processing 350K+ game scenarios.",
      technologies: ["Python", "NumPy", "scikit-learn", "Data Visualization"],
      achievements: [
        "85% prediction accuracy",
        "350K+ game scenarios analyzed",
        "Strategic insights visualization"
      ]
    },
    {
      title: "UFO Sighting NLP & Data Extraction",
      company: "Data Analytics Project",
      period: "2019-2020",
      description: "Engineered advanced NLP pipeline to extract structured insights from 40+ years of UFO sighting reports with 90% accuracy in categorizing sighting patterns.",
      technologies: ["Python", "NLP", "Text Classification", "Geospatial Analysis"],
      achievements: [
        "90% classification accuracy",
        "40+ years of data processed",
        "Geographic pattern discovery"
      ]
    },
    {
      title: "E-commerce Platform Optimization",
      company: "Best Buy",
      period: "2018-2019",
      description: "Optimized legacy systems resulting in 30% performance improvement and enhanced user experience for millions of customers. Contributed to 15% increase in online conversion rates.",
      technologies: ["JavaScript", "Performance Optimization", "A/B Testing", "Analytics"],
      achievements: [
        "30% performance improvement",
        "15% increase in conversion rates",
        "Millions of users impacted"
      ]
    },
    {
      title: "Recipe Web Scraper & Data Pipeline",
      company: "Personal Project",
      period: "2019",
      description: "Architected scalable data extraction system processing recipe data from multiple websites. Built searchable database enabling complex queries across 100K+ recipes.",
      technologies: ["Python", "BeautifulSoup", "Data Pipeline", "Database Design"],
      achievements: [
        "100K+ recipes processed",
        "Real-time monitoring system",
        "Automated data transformation"
      ]
    },
    {
      title: "Global Money Transfer System",
      company: "MoneyGram International",
      period: "2011-2013",
      description: "Developed mission-critical financial transaction systems processing millions of dollars in global money transfers daily with 99.9% system uptime.",
      technologies: [".NET", "SQL Server", "Financial Systems", "High Availability"],
      achievements: [
        "99.9% system uptime",
        "Millions in daily transactions",
        "24/7 production support"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Portfolio & Experience</h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="lg:flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                    <span className="text-blue-600 font-medium">{project.company}</span>
                    <span className="text-gray-400 hidden sm:inline">•</span>
                    <span className="text-gray-600">{project.period}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work or discussing a potential project?
          </p>
          <a href="#contact" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 font-medium">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

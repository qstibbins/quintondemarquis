import React from 'react';

export default function Services() {
  const services = [
    {
      icon: "⚙️",
      title: "Full-Stack Development",
      description: "End-to-end application development using modern technologies like React, .NET Core, Node.js, and cloud platforms. Specializing in scalable, high-performance solutions.",
      features: [
        "Frontend Development (React, Angular, TypeScript)",
        "Backend Development (.NET Core, Node.js, Python)",
        "Database Design & Optimization",
        "API Development & Integration",
        "Cloud Architecture (Azure, AWS)"
      ]
    },
    {
      icon: "📊",
      title: "Data Analytics & Engineering",
      description: "Comprehensive data solutions from ETL pipelines to predictive analytics. Transform raw data into actionable business insights with modern data engineering practices.",
      features: [
        "ETL Pipeline Development",
        "Data Warehousing & Modeling",
        "Machine Learning & Predictive Analytics",
        "Interactive Dashboard Creation",
        "Big Data Processing & Analysis"
      ]
    },
    {
      icon: "🏗️",
      title: "System Architecture & Migration",
      description: "Design and implement scalable system architectures. Lead cloud migrations and microservices transformations for improved performance and reliability.",
      features: [
        "Microservices Architecture Design",
        "Cloud Migration Strategy & Implementation",
        "Performance Optimization",
        "Legacy System Modernization",
        "DevOps & CI/CD Implementation"
      ]
    },
    {
      icon: "👥",
      title: "Technical Leadership & Consulting",
      description: "Provide technical leadership and strategic guidance for development teams. Mentor developers and establish best practices for scalable software development.",
      features: [
        "Team Leadership & Mentoring",
        "Technical Strategy & Planning",
        "Code Review & Quality Assurance",
        "Agile/Scrum Implementation",
        "Technology Stack Evaluation"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Services & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            With 13+ years of experience and a proven track record of delivering successful projects, 
            I'm here to help bring your ideas to life. Let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-50 transition duration-300 font-medium">
              Start a Conversation
            </a>
            <a href="/quinton_stibbins_resume_updated.md" target="_blank" className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 font-medium">
              View My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

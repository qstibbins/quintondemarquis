import React from 'react';

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, and cloud platforms.',
      features: [
        'Custom web applications',
        'Database design & optimization',
        'API development & integration',
        'Cloud deployment & scaling'
      ],
      price: 'From $5,000'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
      features: [
        'React Native development',
        'Native iOS & Android apps',
        'App Store optimization',
        'Push notifications & analytics'
      ],
      price: 'From $8,000'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences.',
      features: [
        'User interface design',
        'Prototyping & wireframing',
        'User experience research',
        'Design system creation'
      ],
      price: 'From $3,000'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance Optimization',
      description: 'Speed up your applications and improve user experience with comprehensive performance audits and optimizations.',
      features: [
        'Website speed optimization',
        'Code review & refactoring',
        'Database query optimization',
        'SEO improvements'
      ],
      price: 'From $2,000'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Technical Consulting',
      description: 'Strategic technology guidance to help you make informed decisions about your tech stack and architecture.',
      features: [
        'Technology stack assessment',
        'Architecture planning',
        'Code quality audits',
        'Team mentoring'
      ],
      price: 'From $150/hour'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'DevOps & Deployment',
      description: 'Streamline your development workflow with automated CI/CD pipelines and cloud infrastructure setup.',
      features: [
        'CI/CD pipeline setup',
        'Cloud infrastructure (AWS, GCP)',
        'Docker containerization',
        'Monitoring & logging'
      ],
      price: 'From $4,000'
    }
  ];

  const ServiceCard = ({ service, index }) => (
    <div className="project-card group h-full">
      <div className="space-y-6">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">
            {service.title}
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-zinc-300 text-sm">
              <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="pt-4 border-t border-zinc-700">
          <div className="text-lg font-semibold text-white">
            {service.price}
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="btn-secondary w-full text-center inline-block"
        >
          Get Started
        </a>
      </div>
    </div>
  );

  return (
    <section id="services" className="section">
      <div className="section-content">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-2">Services</h2>
          <div className="w-20 h-1 bg-white rounded-full mx-auto"></div>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            I offer comprehensive development services to help bring your ideas to life 
            with cutting-edge technology and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24 pt-16 border-t border-zinc-800">
          <div className="text-center space-y-4 mb-16">
            <h3 className="heading-3">My Process</h3>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your goals, requirements, and target audience through detailed consultation.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating a comprehensive project roadmap with timelines, milestones, and deliverables.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building your solution using agile methodology with regular updates and feedback loops.'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Deploying your project with thorough testing, documentation, and ongoing support.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-full flex items-center justify-center mx-auto text-xl font-bold text-white">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-white">
                  {process.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-16 border-t border-zinc-800">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold">Ready to Start Your Project?</h3>
            <p className="text-zinc-300">
              Let's discuss your requirements and create something amazing together. 
              Get in touch for a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="btn-primary"
              >
                Get Free Consultation
              </a>
              <a
                href="mailto:hello@example.com"
                className="btn-secondary inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

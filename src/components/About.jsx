import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Professional Background</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              I'm a Senior Full-Stack Software Developer with 13+ years of experience architecting and building 
              scalable, high-performance applications. I have a proven track record of leading cross-functional 
              teams and delivering mission-critical projects that improve system performance, user experience, 
              and business outcomes.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Currently at <strong>Apple Capital</strong>, I lead engineering teams in developing financial 
              applications serving 50,000+ active users. I've successfully architected microservices migrations 
              resulting in 40% improvement in system reliability and 25% reduction in response times.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Expertise</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Full-Stack Development & System Architecture
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Team Leadership & Cross-Functional Collaboration
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Performance Optimization & Scalability Solutions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Cloud Migration & DevOps Implementation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Agile/Scrum Methodologies & Project Management
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">13+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Users Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
            <div className="text-gray-600">Performance Improvement</div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Education & Continuous Learning</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800">University of Minnesota</h4>
              <p className="text-gray-600">B.S. Computer Science & B.S. Mathematics</p>
              <p className="text-sm text-gray-500">2006 - 2011</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Data Analytics Bootcamp</h4>
              <p className="text-gray-600">Advanced Machine Learning & Statistical Analysis</p>
              <p className="text-sm text-gray-500">2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Let's Work Together</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, whether it's a full-time position, 
            consulting project, or collaboration. Let's connect and explore how we can work together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-blue-600 mr-3">📧</span>
                <a href="mailto:qstibbins@gmail.com" className="text-blue-600 hover:underline">
                  qstibbins@gmail.com
                </a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-blue-600 mr-3">📱</span>
                <a href="tel:612.334.9058" className="text-blue-600 hover:underline">
                  612.334.9058
                </a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-blue-600 mr-3">📍</span>
                <span className="text-gray-700">Minneapolis, MN</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Links</h3>
              
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-blue-600 mr-3">💼</span>
                <a 
                  href="https://www.linkedin.com/in/qstibbins" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-blue-600 mr-3">📄</span>
                <a 
                  href="/quinton_stibbins_resume_updated.md" 
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Areas of Interest</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-sm font-medium text-gray-800">Full-Time Opportunities</div>
              <div className="text-xs text-gray-600">Senior/Lead Developer Roles</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl mb-2">💼</div>
              <div className="text-sm font-medium text-gray-800">Consulting Projects</div>
              <div className="text-xs text-gray-600">Architecture & Development</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl mb-2">👥</div>
              <div className="text-sm font-medium text-gray-800">Team Leadership</div>
              <div className="text-xs text-gray-600">Technical Mentoring</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm font-medium text-gray-800">Collaborations</div>
              <div className="text-xs text-gray-600">Open Source & Innovation</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <p className="text-gray-600 mb-4">
            Response time: Usually within 24 hours
          </p>
          <a 
            href="mailto:qstibbins@gmail.com?subject=Let's Discuss an Opportunity" 
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 font-medium"
          >
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  );
}

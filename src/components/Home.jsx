import React from 'react';

export default function Home() {
  return (
    <section id="home" className="text-center py-32 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg my-12">
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
          Quinton Stibbins
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600">
          Senior Full-Stack Software Developer
        </h2>
        <p className="text-lg mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          13+ years of experience architecting and building scalable, high-performance applications. 
          Expert in modern software development practices with deep expertise in cloud technologies, 
          microservices architecture, and agile methodologies.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">.NET Core</span>
        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Azure</span>
        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Python</span>
        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Data Analytics</span>
        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Team Leadership</span>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#portfolio" className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 font-medium">
          View My Work
        </a>
        <a href="#contact" className="px-8 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition duration-300 font-medium">
          Get In Touch
        </a>
        <a href="/quinton_stibbins_resume_updated.md" target="_blank" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg shadow hover:bg-blue-50 transition duration-300 font-medium">
          Download Resume
        </a>
      </div>
    </section>
  );
}

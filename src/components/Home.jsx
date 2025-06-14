import React from 'react';

export default function Home() {
  return (
    <section id="home" className="text-center py-32 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg my-12">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
        Software Engineer | Data Analyst | Systems Consultant
      </h2>
      <p className="text-lg mb-10 text-gray-700 max-w-2xl mx-auto">
        Building software, solving data problems, and helping businesses run better.
      </p>
      <div className="flex justify-center space-x-6">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          View My Work
        </button>
        <button className="px-8 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition">
          Work With Me
        </button>
      </div>
    </section>
  );
}

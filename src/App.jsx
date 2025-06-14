import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="flex justify-between items-center p-6 shadow-md bg-white">
        <h1 className="text-2xl font-bold">Quinton Stibbins</h1>
        <nav className="space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#portfolio" className="text-gray-700 hover:text-blue-500">Portfolio</a>
          <a href="#services" className="text-gray-700 hover:text-blue-500">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </nav>
      </header>

      <main className="p-10">
        <section id="home" className="text-center my-20">
          <h2 className="text-4xl font-extrabold mb-6">Software Engineer | Data Analyst | Systems Consultant</h2>
          <p className="text-lg mb-8">Building software, solving data problems, and helping businesses run better.</p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">View My Work</button>
            <button className="px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition">Work With Me</button>
          </div>
        </section>

        <section id="about" className="my-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">13+ years software engineering. Data Analytics bootcamp graduate. Passionate about blending software, data, and operations to solve real problems. Available for consulting and freelance projects in software, data, and operations.</p>
        </section>

        <section id="contact" className="my-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p>Email: <a href="mailto:quinton.stibbins@gmail.com" className="text-blue-500">quinton.stibbins@gmail.com</a></p>
        </section>
      </main>
    </div>
  );
}

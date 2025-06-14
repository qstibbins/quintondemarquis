import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold tracking-tight">Quinton Stibbins</h1>
        <nav className="flex space-x-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

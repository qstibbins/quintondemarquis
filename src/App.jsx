import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <Home />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </>
  );
}

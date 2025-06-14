import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
}

export default App;

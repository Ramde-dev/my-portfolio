import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Initialize EmailJS when the app starts
    emailjs.init('s4IVVB-tXDBeaihnf');
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
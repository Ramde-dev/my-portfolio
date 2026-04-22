import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import heroBackground from '../assets/profile-image.jpg'; // Import background image

const Hero = () => {
  const roles = [
    "Full Stack Web Developer",
    "Mobile App Developer", 
    "Digital Marketing Expert",
    "Data Analyst"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentFullText = roles[currentRole];
    
    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(() => {}, 500);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
      }
    } else {
      if (displayText === currentFullText) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 100);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  const heroStyle = {
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Optional: creates parallax effect
  };

  return (
    <section id="home" className="hero" style={heroStyle}>
      {/* Overlay for better text readability */}
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Ramde</span>
        </h1>
        
        <div className="hero-role">
          <span className="role-prefix">I'm a </span>
          <span className="role-text">{displayText}</span>
          <span className="cursor">|</span>
        </div>
        
        <p className="hero-description">
          Building innovative digital solutions across web and mobile platforms.
          Helping brands grow through strategic digital marketing and data-driven insights.
        </p>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">4+</span>
            <span className="stat-label">Expertise</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Dedication</span>
          </div>
        </div>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Connects
          </a>
          {/* Resume button removed - now only in navbar */}
        </div>
        
        <div className="social-links">
          <a href="https://github.com/Ramde-dev" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ramde-undefined-0b819b401" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ramde.dev" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="mailto:ramde@example.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import logoImage from '../assets/logo.png'; // Change to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'Skills', 'Projects', 'Contact'];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo-link">
            <img 
              src={logoImage}
              alt="Logo" 
              className="logo-image"
            />
          </a>
          
          <div className="nav-menu">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
                {link}
              </a>
            ))}
            <a href="/resume.pdf" download className="resume-btn">
              <FaDownload /> Resume
            </a>
          </div>

          <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} 
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`} 
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            {link}
          </a>
        ))}
        <a 
          href="/resume.pdf" 
          download 
          className="mobile-nav-link resume-btn"
          onClick={closeMenu}
        >
          <FaDownload /> Resume
        </a>
      </div>
    </>
  );
};

export default Navbar;
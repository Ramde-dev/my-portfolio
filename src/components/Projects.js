import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaHeartbeat } from 'react-icons/fa';
import project1Image from '../assets/mac2.jpg';
import project2Image from '../assets/afya.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MacNice ICT Hub',
      description: 'A comprehensive ICT service platform providing web development, software solutions, IT consulting, and digital marketing services to businesses and individuals.',
      languages: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL'],
      liveLink: 'https://macnice-ict.infinityfreeapp.com/',
      githubLink: 'https://github.com/Ramde-dev/Macnice_ICT_Project',
      image: project1Image,
      hasDemo: true,
      icon: <FaLaptopCode />
    },
    {
      id: 2,
      title: 'Ramde Afya',
      description: 'Mobile application that helps users donate their blood to nearby hospitals based on their blood type. Connects donors with recipients in real-time for emergency blood donations.',
      languages: ['JAVA', 'MYSQL'],
      githubLink: 'https://github.com/Ramde-dev/RamdeAfya',
      image: project2Image,
      hasDemo: false,
      icon: <FaHeartbeat />
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Image */}
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {/* Tech Stack */}
                <div className="project-tech">
                  {project.languages.map((lang, idx) => (
                    <span key={idx} className="tech-badge">{lang}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={`project-buttons ${!project.hasDemo ? 'single-button' : ''}`}>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-github"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.hasDemo && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-demo"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
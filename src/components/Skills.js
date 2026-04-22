import React from 'react';

const Skills = () => {
  const skills = {
    Frontend: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML/CSS', level: 85 }
    ],
    Backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Php', level: 75 },
      { name: 'Java', level: 75 }
    ],
    'Mobile Application' : [
      { name: 'Flutter/Dart', level: 80 },
      { name: 'Java/Spring', level: 75 },
    ],
    Database: [
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 70 },
      { name: 'PostgreSQL', level: 65 }
    ],
    Tools : [
      { name: 'Git/GitHub', level: 80 },
      { name: 'REST APIs', level: 85 }
    ],
    'Digital Marketing': [
      { name: 'Ads Manager/Meta Ads', level: 100 },
      { name: 'Boost', level: 100 },
    ]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              {items.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
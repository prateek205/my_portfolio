// components/Experience/Experience.js
import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('internship');
  
  const experiences = {
    internship: {
      title: 'Frontend Developer Intern',
      company: 'Flight-IT Solution Pvt. Ltd., Pune (Remote)',
      period: 'June 2023 - December 2023',
      duration: '6 Months',
      icon: '🚀',
      color: '#8b5cf6',
      achievements: [
        {
          id: 1,
          title: 'Responsive UI Development',
          description: 'Developed and maintained responsive user interfaces using React.js, HTML, CSS, and JavaScript',
          tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
          impact: 'Improved user engagement by 40%'
        },
        {
          id: 2,
          title: 'API Integration',
          description: 'Collaborated with backend developers to integrate REST APIs and enhance application performance',
          tech: ['REST APIs', 'Axios', 'JSON'],
          impact: 'Reduced API response time by 30%'
        },
        {
          id: 3,
          title: 'Version Control',
          description: 'Utilized Git and GitHub for version control and collaborative development',
          tech: ['Git', 'GitHub', 'Git Flow'],
          impact: 'Streamlined team collaboration'
        },
        {
          id: 4,
          title: 'State Management',
          description: 'Implemented state management using the Context API and reusable component-based design',
          tech: ['Context API', 'React Hooks'],
          impact: 'Improved code maintainability'
        }
      ]
    }
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-sparkle">Professional Journey</span>
        </h2>
        
        <div className="experience-container">
          <div className="timeline">
            <div className="timeline-progress">
              <div className="timeline-line"></div>
              <div className="timeline-marker"></div>
            </div>
            
            <div className="experience-card">
              <div className="experience-header">
                <div className="company-logo">
                  <span className="logo-icon">{experiences.internship.icon}</span>
                  <div className="logo-glow" style={{ backgroundColor: experiences.internship.color }}></div>
                </div>
                
                <div className="experience-info">
                  <h3 className="experience-title">{experiences.internship.title}</h3>
                  <div className="experience-meta">
                    <span className="company-name">{experiences.internship.company}</span>
                    <span className="experience-period">
                      <span className="period-icon">📅</span>
                      {experiences.internship.period}
                    </span>
                    <span className="experience-duration">
                      <span className="duration-icon">⏱️</span>
                      {experiences.internship.duration}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="achievements-grid">
                {experiences.internship.achievements.map((achievement, index) => (
                  <div 
                    key={achievement.id} 
                    className="achievement-card"
                    style={{ '--card-index': index }}
                  >
                    <div className="achievement-number">0{index + 1}</div>
                    
                    <div className="achievement-content">
                      <h4 className="achievement-title">{achievement.title}</h4>
                      <p className="achievement-description">{achievement.description}</p>
                      
                      <div className="achievement-tech">
                        {achievement.tech.map(tech => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      
                      <div className="achievement-impact">
                        <span className="impact-icon">📈</span>
                        <span className="impact-text">{achievement.impact}</span>
                      </div>
                    </div>
                    
                    <div className="achievement-decoration">
                      <div className="decoration-line"></div>
                      <div className="decoration-dot"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="experience-skills">
                <h4 className="skills-title">Key Skills Developed</h4>
                <div className="skills-cloud">
                  <span className="skill-tag large">React.js</span>
                  <span className="skill-tag medium">JavaScript</span>
                  <span className="skill-tag small">HTML5</span>
                  <span className="skill-tag medium">CSS3</span>
                  <span className="skill-tag large">Git</span>
                  <span className="skill-tag small">GitHub</span>
                  <span className="skill-tag medium">REST APIs</span>
                  <span className="skill-tag small">Context API</span>
                  <span className="skill-tag large">Responsive Design</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="experience-stats">
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-content">
                <div className="stat-number">40%</div>
                <div className="stat-label">UI Engagement Increase</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-number">30%</div>
                <div className="stat-label">Performance Improvement</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">🔧</div>
              <div className="stat-content">
                <div className="stat-number">50+</div>
                <div className="stat-label">Components Built</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <div className="stat-number">100%</div>
                <div className="stat-label">Team Collaboration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
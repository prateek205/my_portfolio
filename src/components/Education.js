// components/Education/Education.js
import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [activeYear, setActiveYear] = useState('2023');
  
  const educationData = {
    2023: {
      year: '2023',
      title: 'B.Tech Completed',
      degree: 'Bachelor of Technology',
      field: 'Mechanical Engineering',
      institution: 'Dr. Babasaheb Ambedkar Technological University',
      location: 'Raigad, Maharashtra',
      duration: 'August 2020 – June 2023',
      status: 'Completed',
      achievements: [
        'Successfully completed degree with strong engineering fundamentals',
        'Developed analytical and problem-solving skills',
        'Applied logical thinking to technical challenges',
        'Participated in technical workshops and projects'
      ],
      skills: ['Problem Solving', 'Analytical Thinking', 'Technical Analysis', 'Project Management']
    }
  };

  return (
    <section id="education" className="education section">
      <div className="education-background">
        <div className="edu-orb orb-1"></div>
        <div className="edu-orb orb-2"></div>
        <div className="knowledge-tree">
          <div className="tree-trunk"></div>
          <div className="tree-branch branch-1"></div>
          <div className="tree-branch branch-2"></div>
          <div className="tree-branch branch-3"></div>
          <div className="tree-leaf leaf-1">🎓</div>
          <div className="tree-leaf leaf-2">📚</div>
          <div className="tree-leaf leaf-3">💡</div>
        </div>
      </div>
      
      <div className="container">
        <h2 className="section-title">
          <span className="title-knowledge">Knowledge Journey</span>
        </h2>
        <p className="section-subtitle">From mechanical principles to digital solutions - My educational path</p>
        
        <div className="education-container">
          <div className="education-timeline">
            <div className="timeline-years">
              <button 
                className={`year-btn ${activeYear === '2023' ? 'active' : ''}`}
                onClick={() => setActiveYear('2023')}
              >
                <span className="year-label">2023</span>
                <span className="year-dot"></span>
              </button>
              
              <div className="timeline-path">
                <div className="path-line"></div>
                <div className="path-progress"></div>
              </div>
              
              <button className="year-btn disabled">
                <span className="year-label">Future</span>
                <span className="year-dot"></span>
              </button>
            </div>
          </div>
          
          <div className="education-card">
            <div className="card-header">
              <div className="degree-icon">
                <span className="icon-symbol">🎓</span>
                <div className="icon-glow"></div>
              </div>
              
              <div className="degree-info">
                <div className="degree-meta">
                  <span className="degree-year">{educationData[activeYear].year}</span>
                  <span className={`degree-status ${educationData[activeYear].status.toLowerCase()}`}>
                    {educationData[activeYear].status}
                  </span>
                </div>
                <h3 className="degree-title">{educationData[activeYear].degree}</h3>
                <h4 className="degree-field">{educationData[activeYear].field}</h4>
              </div>
            </div>
            
            <div className="institution-info">
              <div className="institution-header">
                <h4 className="institution-title">{educationData[activeYear].institution}</h4>
                <div className="institution-location">
                  <span className="location-icon">📍</span>
                  <span className="location-text">{educationData[activeYear].location}</span>
                </div>
              </div>
              
              <div className="duration-display">
                <span className="duration-icon">📅</span>
                <span className="duration-text">{educationData[activeYear].duration}</span>
              </div>
            </div>
            
            <div className="achievements-section">
              <h4 className="section-heading">Key Achievements</h4>
              <div className="achievements-grid">
                {educationData[activeYear].achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="achievement-item"
                    style={{ '--achievement-index': index }}
                  >
                    <div className="achievement-check">✓</div>
                    <div className="achievement-content">
                      <div className="achievement-text">{achievement}</div>
                      <div className="achievement-progress">
                        <div className="progress-bar">
                          <div className="progress-fill"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="skills-developed">
              <h4 className="section-heading">Skills Developed</h4>
              <div className="skills-bubbles">
                {educationData[activeYear].skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="skill-bubble"
                    style={{ '--bubble-index': index }}
                  >
                    <div className="bubble-content">{skill}</div>
                    <div className="bubble-ring"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="education-transition">
              <div className="transition-icon">🔄</div>
              <div className="transition-text">
                <h5>Engineering to Development</h5>
                <p>Applied analytical skills from mechanical engineering to software development</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="certification-section">
          <h3 className="certification-title">Certification</h3>
          <div className="certification-card">
            <div className="cert-badge">
              <span className="badge-icon">🏆</span>
            </div>
            <div className="cert-info">
              <h4 className="cert-name">Frontend Developer Certification</h4>
              <p className="cert-issuer">Online Certification</p>
              <div className="cert-skills">
                <span className="cert-skill">HTML/CSS</span>
                <span className="cert-skill">JavaScript</span>
                <span className="cert-skill">React.js</span>
              </div>
            </div>
            <div className="cert-verification">
              <span className="verification-status">✅ Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
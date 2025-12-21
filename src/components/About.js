// components/About/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-highlight">
              <div className="highlight-icon">💫</div>
              <h3>Passionate MERN Stack Developer</h3>
            </div>
            
            <p className="about-description">
              I'm a passionate and dedicated <strong>MERN Stack Developer</strong> with practical 
              experience in developing full-stack web applications using modern technologies. 
              I specialize in creating clean, responsive user interfaces and integrating 
              <strong> RESTful APIs</strong> for seamless functionality.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <div className="feature-content">
                  <h4>Problem Solver</h4>
                  <p>Enjoys solving complex problems with elegant, efficient code solutions.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🚀</div>
                <div className="feature-content">
                  <h4>Continuous Learner</h4>
                  <p>Always learning new technologies to improve performance and user experience.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🤝</div>
                <div className="feature-content">
                  <h4>Team Player</h4>
                  <p>Excited to contribute to impactful projects in collaborative environments.</p>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">
                Let's Work Together
              </a>
              <a 
                href="https://drive.google.com/file/d/YOUR_RESUME_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span className="initials">PB</span>
                </div>
                <div className="profile-badge">
                  <span className="badge-icon">⭐</span>
                  <span className="badge-text">Available</span>
                </div>
              </div>
              
              <div className="profile-info">
                <h3 className="profile-name">Prateek Bahad</h3>
                <p className="profile-title">MERN Stack Developer</p>
                
                <div className="profile-details">
                  <div className="detail">
                    <span className="detail-icon">📍</span>
                    <span>Chhatrapati Sambhajinagar, MH</span>
                  </div>
                  <div className="detail">
                    <span className="detail-icon">📧</span>
                    <span>mernstack.prateekb@gmail.com</span>
                  </div>
                  <div className="detail">
                    <span className="detail-icon">📱</span>
                    <span>+91-9404557931</span>
                  </div>
                </div>
                
                <div className="profile-tags">
                  <span className="tag">React.js</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">Express.js</span>
                </div>
              </div>
            </div>
            
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
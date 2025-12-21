// components/Footer/Footer.js
import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = currentTime.getFullYear();
  const timeString = currentTime.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  const quotes = [
    "Code is like humor. When you have to explain it, it's bad.",
    "First, solve the problem. Then, write the code.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "The best error message is the one that never shows up."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <footer id="footer" className="footer">
      <div className="footer-background">
        <div className="footer-wave"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="brand-logo">
                <span className="logo-symbol">⚛️</span>
                <div className="logo-text">
                  <span className="logo-name">Prateek Bahad</span>
                  <span className="logo-tagline">MERN Stack Developer</span>
                </div>
              </div>
              
              <p className="brand-quote">"{randomQuote}"</p>
              
              <div className="brand-social">
                <a 
                  href="https://www.linkedin.com/in/prateek-bahad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <span className="social-icon">💼</span>
                  <span className="social-tooltip">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/prateek205" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <span className="social-icon">💻</span>
                  <span className="social-tooltip">GitHub</span>
                </a>
                <a 
                  href="mailto:mernstack.prateekb@gmail.com" 
                  className="social-link"
                  aria-label="Email"
                >
                  <span className="social-icon">✉️</span>
                  <span className="social-tooltip">Email</span>
                </a>
                <a 
                  href="https://drive.google.com/file/d/YOUR_RESUME_ID" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Resume"
                >
                  <span className="social-icon">📄</span>
                  <span className="social-tooltip">Resume</span>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4 className="group-title">Navigation</h4>
                <div className="link-list">
                  <a href="#home" className="footer-link">Home</a>
                  <a href="#about" className="footer-link">About</a>
                  <a href="#skills" className="footer-link">Skills</a>
                  <a href="#experience" className="footer-link">Experience</a>
                  <a href="#projects" className="footer-link">Projects</a>
                  <a href="#contact" className="footer-link">Contact</a>
                </div>
              </div>
              
              <div className="link-group">
                <h4 className="group-title">Resources</h4>
                <div className="link-list">
                  <a href="#resume" className="footer-link">Resume</a>
                  <a href="#portfolio" className="footer-link">Portfolio</a>
                  <a href="#certifications" className="footer-link">Certifications</a>
                  <a href="#blog" className="footer-link">Blog</a>
                  <a href="#tools" className="footer-link">Dev Tools</a>
                </div>
              </div>
              
              <div className="link-group">
                <h4 className="group-title">Legal</h4>
                <div className="link-list">
                  <a href="#privacy" className="footer-link">Privacy Policy</a>
                  <a href="#terms" className="footer-link">Terms of Service</a>
                  <a href="#cookies" className="footer-link">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="bottom-left">
              <div className="copyright">
                &copy; {currentYear} Prateek Bahad. All rights reserved.
              </div>
              <div className="time-display">
                <span className="time-icon">⏰</span>
                <span className="time-text">{timeString}</span>
              </div>
            </div>
            
            <div className="bottom-right">
              <div className="made-with">
                <span className="made-text">Made with</span>
                <span className="heart-icon">❤️</span>
                <span className="tech-stack">React.js</span>
              </div>
              <div className="footer-actions">
                <button 
                  className="back-to-top" 
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                >
                  <span className="arrow-icon">↑</span>
                  <span className="arrow-text">Back to Top</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`footer-decoration ${isVisible ? 'visible' : ''}`}>
        <div className="decoration-line"></div>
        <div className="decoration-dot dot-1"></div>
        <div className="decoration-dot dot-2"></div>
        <div className="decoration-dot dot-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
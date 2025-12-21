// components/Hero/Hero.js
import React, { useEffect, useState } from 'react';
import './Hero.css';

const words = ['MERN Developer', 'React Specialist', 'Problem Solver', 'Web Craftsman'];

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const typeSpeed = isDeleting ? 50 : 100;
      const deleteSpeed = 50;
      const pauseSpeed = 2000;

      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseSpeed);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        const timeout = setTimeout(() => {
          setTypedText(
            isDeleting
              ? currentWord.substring(0, typedText.length - 1)
              : currentWord.substring(0, typedText.length + 1)
          );
        }, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timeout);
      }
    };

    const timer = handleTyping();
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex]);

  return (
    <section id="home" className="hero section">
      <div className="hero-background">
        <div className="hero-bg-shape shape-1"></div>
        <div className="hero-bg-shape shape-2"></div>
        <div className="hero-bg-shape shape-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <div className={`hero-greeting ${isVisible ? 'visible' : ''}`}>
              <span className="wave">👋</span> Hello, I'm
            </div>
            
            <h1 className="hero-title">
              <span className="hero-name">Prateek Bahad</span>
              <span className="hero-role">
                <span className="typing-cursor">|</span>
                {typedText}
              </span>
            </h1>
            
            <p className="hero-description">
              Passionate about building scalable web applications with cutting-edge technologies.
              Turning complex problems into elegant, efficient solutions.
            </p>
            
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary hero-btn">
                <span className="btn-icon">🚀</span>
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary hero-btn">
                <span className="btn-icon">💬</span>
                Let's Connect
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="developer-image-wrapper">
              <div className="developer-image">
                <div className="code-overlay">
                  <div className="code-line">const developer = &#123;</div>
                  <div className="code-line">  name: <span className="string">"Prateek"</span>,</div>
                  <div className="code-line">  stack: <span className="array">["M", "E", "R", "N"]</span>,</div>
                  <div className="code-line">  location: <span className="string">"India"</span>,</div>
                  <div className="code-line">  status: <span className="variable">CODING</span></div>
                  <div className="code-line">&#125;;</div>
                </div>
                <div className="floating-tools">
                  <div className="tool react">⚛️</div>
                  <div className="tool node">🟢</div>
                  <div className="tool mongo">🍃</div>
                  <div className="tool express">🚂</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll</div>
      </div>
    </section>
  );
};

export default Hero;
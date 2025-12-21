// components/Skills/Skills.js
import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: '🎨',
      color: '#8b5cf6',
      skills: [
        { name: 'HTML5', level: 95, icon: '🔶', description: 'Semantic markup' },
        { name: 'CSS3', level: 90, icon: '🎨', description: 'Modern layouts' },
        { name: 'JavaScript', level: 90, icon: '⚡', description: 'ES6+ features' },
        { name: 'React.js', level: 85, icon: '⚛️', description: 'Components & Hooks' },
        { name: 'Context API', level: 80, icon: '🔄', description: 'State management' },
        { name: 'Responsive Design', level: 95, icon: '📱', description: 'Mobile-first' },
        { name: 'UI/UX', level: 85, icon: '✨', description: 'User-centered design' },
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: '⚙️',
      color: '#06b6d4',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢', description: 'Runtime environment' },
        { name: 'Express.js', level: 80, icon: '🚂', description: 'API frameworks' },
        { name: 'RESTful APIs', level: 85, icon: '🔌', description: 'API design' },
      ]
    },
    {
      id: 'database',
      name: 'Database',
      icon: '🗄️',
      color: '#10b981',
      skills: [
        { name: 'MongoDB', level: 80, icon: '🍃', description: 'NoSQL database' },
        { name: 'CRUD Operations', level: 85, icon: '📝', description: 'Database operations' },
      ]
    },
    {
      id: 'tools',
      name: 'Tools',
      icon: '🧰',
      color: '#f59e0b',
      skills: [
        { name: 'Git', level: 85, icon: '📊', description: 'Version control' },
        { name: 'GitHub', level: 85, icon: '🐙', description: 'Code collaboration' },
        { name: 'VS Code', level: 90, icon: '💻', description: 'Code editor' },
        { name: 'Postman', level: 80, icon: '📫', description: 'API testing' },
        { name: 'Vercel', level: 75, icon: '▲', description: 'Deployment' },
        { name: 'JSON', level: 90, icon: '📄', description: 'Data format' },
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(cat => cat.skills.map(skill => ({
    ...skill,
    category: cat.id,
    categoryColor: cat.color
  })));

  const displaySkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills section">
      <div className="skills-background">
        <div className="tech-orb orb-1"></div>
        <div className="tech-orb orb-2"></div>
        <div className="tech-orb orb-3"></div>
        <div className="binary-background">
          {Array.from({ length: 100 }).map((_, i) => (
            <span key={i} className="binary-digit">{Math.random() > 0.5 ? '1' : '0'}</span>
          ))}
        </div>
      </div>
      
      <div className="container">
        <h2 className="section-title">
          <span className="title-glow">Tech Galaxy</span>
        </h2>
        <p className="section-subtitle">Explore my universe of skills and technologies</p>
        
        <div className="skills-categories">
          <button 
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
            style={{ '--category-color': '#6366f1' }}
          >
            <span className="category-icon">🌌</span>
            <span className="category-name">All Skills</span>
          </button>
          
          {skillCategories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              style={{ '--category-color': category.color }}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
        
        <div className="skills-grid">
          {displaySkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-card"
              style={{ 
                '--card-color': skill.categoryColor,
                '--animation-delay': `${index * 0.1}s`
              }}
            >
              <div className="skill-card-inner">
                <div className="skill-header">
                  <div className="skill-icon-wrapper">
                    <span className="skill-icon">{skill.icon}</span>
                    <div className="skill-glow"></div>
                  </div>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                </div>
                
                <div className="skill-progress-section">
                  <div className="progress-info">
                    <span className="progress-label">Mastery</span>
                    <span className="progress-value">{skill.level}%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-bg"></div>
                    <div 
                      className="progress-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="progress-sparkle"></div>
                    </div>
                  </div>
                </div>
                
                <div className="skill-footer">
                  <span className="skill-category-tag">{skill.category}</span>
                  <div className="skill-badges">
                    <span className="badge badge-expert">{skill.level >= 80 ? 'Expert' : 'Proficient'}</span>
                    {skill.level >= 90 && <span className="badge badge-master">🔥 Hot</span>}
                  </div>
                </div>
              </div>
              
              <div className="skill-orbit">
                <div className="orbit-dot dot-1"></div>
                <div className="orbit-dot dot-2"></div>
                <div className="orbit-dot dot-3"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-legend">
          <div className="legend-item">
            <div className="legend-color beginner"></div>
            <span>Beginner (0-60%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color proficient"></div>
            <span>Proficient (61-79%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color expert"></div>
            <span>Expert (80-100%)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
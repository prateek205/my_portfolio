// components/Projects/Projects.js
import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'Responsive Portfolio Website | React',
      description: 'A react based personal portfolio website with contact form functionality and real-time messaging.',
      category: 'frontend',
      status: 'completed',
      icon: '🚀',
      color: '#8b5cf6',
      features: [
        'Responsive design',
        'Smooth animations'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vercel',  'Git', 'GitHub' ],
      github: 'https://github.com/prateek205/Portfolio',
      demo: 'https://portfolio-prateek205s-projects.vercel.app',
    },
    {
      id: 2,
      title: 'E-Com Web App | React',
      description: 'A responsive product listing application with advanced filtering options and global state management.',
      category: 'frontend',
      status: 'completed',
      icon: '🛒',
      color: '#06b6d4',
      features: [
        'Category filters and Sorting',
        'Price range',
        'Product Rating',
        'Responsive UI'
      ],
      technologies: ['React.js', 'Context API', 'HTML', 'JavaScript', 'CSS3', 'Vercel', 'Git', 'GitHub'],
      github: 'https://github.com/prateek205/E-Com-App',
      demo: 'https://e-com-app-liard.vercel.app',
    },
    {
      id: 3,
      title: 'Frontend Practice Projects',
      description: 'Collection of frontend projects including landing pages and a fully functional To-Do List app.',
      category: 'frontend',
      status: 'completed',
      icon: '🎨',
      color: '#f59e0b',
      features: [
        'Responsive design',
        'CRUD operations',
        'Animations',
        'Accessibility optimized',
        'LocalStorage'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git', 'GitHub', 'Vercel'],
      github: 'https://github.com/prateek205/Todo_Task_App',
      demo: 'https://todo-task-app-git-main-prateek205s-projects.vercel.app/',
    }
  ];

  const categories = [
    { id: 'all', name: 'All', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend (React)', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'vanilla javascript', name: 'Vanilla', count: projects.filter(p => p.category === 'vanilla javascript').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="projects-background">
        <div className="project-orb orb-1"></div>
        <div className="project-orb orb-2"></div>
        <div className="project-grid-bg"></div>
      </div>
      
      <div className="container">
        <h2 className="section-title">
          <span className="title-spark">Creative Work</span>
        </h2>
        <p className="section-subtitle">Interactive projects that showcase my development skills</p>
        
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="filter-name">{category.name}</span>
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>
        
        <div className="projects-gallery">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ 
                '--card-color': project.color,
                '--card-delay': `${index * 0.2}s`
              }}
            >
              <div className="project-card-inner">
                <div className="project-header">
                  <div className="project-icon-wrapper">
                    <span className="project-icon">{project.icon}</span>
                    <div className="icon-glow"></div>
                  </div>
                  
                  <div className="project-meta">
                    <span className={`project-status ${project.status}`}>
                      {project.status === 'completed' ? '✅ Live' : '🚧 In Progress'}
                    </span>
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <div className="features-grid">
                    {project.features.map((feature, i) => (
                      <div key={i} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="project-technologies">
                  <h4 className="tech-title">Technologies Used</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-actions">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn demo-btn"
                  >
                    <span className="btn-icon">👁️</span>
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn github-btn"
                  >
                    <span className="btn-icon">💻</span>
                    View Code
                  </a>
                </div>
              </div>
              
              <div className="project-decoration">
                <div className="decoration-ring ring-1"></div>
                <div className="decoration-ring ring-2"></div>
                <div className="decoration-ring ring-3"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <div className="cta-content">
            <h3 className="cta-title">Want to see more projects?</h3>
            <p className="cta-text">Check out my GitHub for more exciting projects and code samples.</p>
            <a 
              href="https://github.com/prateek205" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-btn"
            >
              <span className="cta-icon">🐙</span>
              Visit My GitHub
            </a>
          </div>
          <div className="cta-decoration">🚀</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
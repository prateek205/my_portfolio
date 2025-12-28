import React, { useState } from "react";
import projectsData from "../data/projectData.json";
import getCategoriesData from "../data/category.js";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const categories = getCategoriesData();
  
  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

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
        <p className="section-subtitle">
          Interactive projects that showcase my development skills
        </p>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${
                activeFilter === category.id ? "active" : ""
              }`}
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
              className={`project-card ${
                hoveredProject === project.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                "--card-color": project.color,
                "--card-delay": `${index * 0.2}s`,
              }}
            >
              <div className="project-card-inner">
                <div className="project-header">
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                    <div className="image-overlay"></div>
                  </div>

                  <div className="project-meta">
                    <span className={`project-status ${project.status}`}>
                      {project.status === "completed"
                        ? "✅Live"
                        : "🚧In Progress"}
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
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
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
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github-btn"
                  >
                    <span className="btn-icon">💻</span>
                    Code
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
            <p className="cta-text">
              Check out my GitHub for more exciting projects and code samples.
            </p>
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
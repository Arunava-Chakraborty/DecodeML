import React, { useState } from "react";
import projects from "../data/projects";
import "../styles/Projects.css";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projects-container">
      <h2 className="projects-title">Each card contains Blood, Sweat, and Git commits.</h2>
      <h4 >Proof That I Actually Do Stuff.</h4>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.problem}</p>
            <button onClick={() => setActiveProject(project)}>
              🔍 View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{activeProject.title}</h2>
            <p><strong>Problem:</strong> {activeProject.problem}</p>
            <p><strong>Intuition:</strong> {activeProject.intuition}</p>
            <p><strong>Tech Stack:</strong> {activeProject.techStack.join(", ")}</p>
            <a
              href={activeProject.source}
              target="_blank"
              rel="noopener noreferrer"
              className="source-link"
            >
              🔗 View Source
            </a>
            <button onClick={() => setActiveProject(null)} className="close-btn">
              ❌ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

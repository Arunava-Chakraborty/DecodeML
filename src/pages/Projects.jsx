import React, { useState } from "react";
import "../styles/Projects.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="projects-container">
      <h1 className="projects-title">🛠️ My Projects</h1>

      <div className="projects-grid">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} onClick={setSelected} />
        ))}
      </div>

      {selected && (
        <div className="project-modal">
          <div className="modal-content">
            <h2>{selected.title}</h2>
            <p><strong>🔍 Problem:</strong> {selected.problem}</p>
            <p><strong>💡 Intuition:</strong> {selected.intuition}</p>
            <p><strong>🛠️ Tech Stack:</strong> {selected.techStack.join(", ")}</p>
            <a href={selected.source} target="_blank" rel="noreferrer">🔗 View Source Code</a>
            <button onClick={() => setSelected(null)}>❌ Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

import React from "react";
import "../styles/Projects.css";

const ProjectCard = ({ project, onClick }) => (
  <div className="project-card" onClick={() => onClick(project)}>
    <h3>{project.title}</h3>
    <p>{project.problem}</p>
    <span className="view-details">🔍 View Details</span>
  </div>
);

export default ProjectCard;

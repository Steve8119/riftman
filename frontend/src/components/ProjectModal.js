// ProjectModal.js

import React from 'react';
import './ProjectModal.css'; // Assuming you have a ProjectModal.css file for styling

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{project.title}</h2>
        <img src={`http://localhost:8000${project.image}`} alt={project.title} />
        <p>{project.content}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProjectModal;

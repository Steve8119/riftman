// ServiceModal.js

import React from 'react';
import './ServiceModal.css';

const ServiceModal = ({ service, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{service.title}</h2>
        <img src={`http://localhost:8000${service.image}`} alt={service.title} />
        <p>{service.content}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ServiceModal;

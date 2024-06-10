import React, { useState } from 'react';
import './Projects.css';
import image5 from '../components/images/11.jpg';
import image6 from '../components/images/12.jpg';
import image7 from '../components/images/13.jpg';
import image8 from '../components/images/14.jpg';
import image9 from '../components/images/16.jpg';
import image10 from '../components/images/15.jpg';
import image11 from '../components/images/17.jpg';
import image12 from '../components/images/18.jpg';
import image13 from '../components/images/19.jpg';

const Projects = () => {
  const projects = [
    {
      src: image5,
      title: 'Project 1',
      description: 'This is a description of project 1. It has some interesting details that you might want to read more about.',
    },
    {
      src: image6,
      title: 'Project 2',
      description: 'This is a description of project 2. It has some interesting details that you might want to read more about.',
    },
    {
      src: image7,
      title: 'Project 3',
      description: 'This is a description of project 3. It has some interesting details that you might want to read more about.',
    },
    {
      src: image8,
      title: 'Project 4',
      description: 'This is a description of project 4. It has some interesting details that you might want to read more about.',
    },
    {
      src: image9,
      title: 'Project 5',
      description: 'This is a description of project 5. It has some interesting details that you might want to read more about.',
    },
    {
      src: image10,
      title: 'Project 6',
      description: 'This is a description of project 6. It has some interesting details that you might want to read more about.',
    },
    {
      src: image11,
      title: 'Project 7',
      description: 'This is a description of project 7. It has some interesting details that you might want to read more about.',
    },
    {
      src: image12,
      title: 'Project 8',
      description: 'This is a description of project 8. It has some interesting details that you might want to read more about.',
    },
    {
      src: image13,
      "title": "Roofing",
      "description": "At Riftworkmanship Limited, we redefine roofing excellence, providing unparalleled craftsmanship that stands the test of time. Our comprehensive building services encompass renovation, building, and design work, but our specialty lies in roofing solutions that exceed expectations. With meticulous attention to detail and a commitment to quality, we transform roofs into durable, functional, and aesthetically pleasing structures. Whether it's repairing, upgrading, or installing new roofs, we deliver unmatched expertise and reliability. Trust in our dedication to excellence and contact us via WhatsApp at 0704694052 to elevate your roofing experience with Riftworkmanship Limited."
    }
    
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);
  const [readMore, setReadMore] = useState(Array(projects.length).fill(false));

  const handleReadMore = (index) => {
    const updatedReadMore = [...readMore];
    updatedReadMore[index] = !updatedReadMore[index];
    setReadMore(updatedReadMore);
  };

  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <div>
      <h1 className="projects-title">Done Projects</h1>
      <div className="projects-gallery">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className="projects-item">
            <img src={project.src} alt={project.title} className="projects-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">
              {readMore[index] ? project.description : `${project.description.substring(0, 100)}...`}
              <button className="read-more-button" onClick={() => handleReadMore(index)}>
                {readMore[index] ? 'Show Less' : 'Read More'}
              </button>
            </p>
          </div>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="show-more-container">
          <button className="show-more" onClick={showMoreProjects}>Show More Projects</button>
        </div>
      )}
    </div>
  );
};

export default Projects;

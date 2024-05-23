import React, { Component } from 'react';
import axios from 'axios';
import './Projects.css'; // Assuming you have a Projects.css file for styling
import ProjectModal from './ProjectModal'; // Import the ProjectModal component

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      showModal: false,
      selectedProject: null,
      displayCount: 4, // Number of projects to initially display
    };
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    axios.get('http://localhost:8000/api/posts/')
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }

  toggleModal(project) {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      selectedProject: project
    }));
  }

  handleSeeMore() {
    // Update the displayCount to show all projects
    this.setState({
      displayCount: this.state.projects.length,
    });
  }

  render() {
    const { projects, showModal, selectedProject, displayCount } = this.state;

    // Slice the projects array based on the displayCount
    const displayedProjects = projects.slice(0, displayCount);

    return (
      <div className="projects-container">
        <h1 className="title">Our Projects</h1>
        <div className="projects-grid">
          {displayedProjects.map(project => (
            <div className="project" key={project.id}>
              <img src={`http://localhost:8000${project.image}`} alt={project.title} />
              <div className="hover-box">
                <h2>{project.title}</h2>
                <p>{project.content.slice(0, 150)}...</p>
                <button onClick={() => this.toggleModal(project)}>Read More</button>
              </div>
            </div>
          ))}
        </div>
        {/* Show the "See More" button if not all projects are displayed */}
        {projects.length > displayCount && (
          <button className="see-more-btn" onClick={() => this.handleSeeMore()}>See More</button>
        )}
        {showModal && (
          <ProjectModal project={selectedProject} onClose={() => this.toggleModal(null)} />
        )}
        {/* Downward arrow */}
        <div className="arrow-down">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
      </div>
    );
  }
}

export default Projects;

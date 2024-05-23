import React, { useState } from 'react';
import logo from '../components/images/p.png'; // Import your logo image
import './Navbar.css'; // Import the CSS file
import OnlineBooking from './OnlineBooking'; // Import the OnlineBooking component

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="navbar-logo" /> {/* Use the logo image */}
          Riftworkmanship Limited
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts">Contacts</a>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-primary text-white" onClick={handleModalOpen}>
                Online Booking
              </button> {/* Add the booking link */}
            </li>
          </ul>
        </div>
      </div>
      {showModal && (
        <div className="modal" onClick={handleModalClose}>
          {/* Modal */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleModalClose}>×</span>
            <OnlineBooking /> {/* Render the OnlineBooking component */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

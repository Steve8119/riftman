import React, { useState } from 'react';
import logo from '../components/images/p.png'; // Import your logo image
import './Navbar.css'; // Import the CSS file
import OnlineBooking from './OnlineBooking'; // Import the OnlineBooking component
import PopupScreen from './PopupScreen'; // Import the PopupScreen component

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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

  const handleNavLinkClick = (sectionId) => {
    setIsNavCollapsed(true); // Collapse the navbar when a link is clicked
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="navbar-logo" /> {/* Use the logo image */}
          Riftworkmanship Limited
        </a>
        <button
          className="navbar-toggler d-lg-none" // Hide the toggler on large screens
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
        <div className={`navbar-collapse ${isNavCollapsed ? 'collapse' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="nav-link btn-transparent" onClick={() => handleNavLinkClick('home')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-transparent" onClick={() => handleNavLinkClick('about')}>About</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-transparent" onClick={() => handleNavLinkClick('services')}>Services</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-transparent" onClick={() => handleNavLinkClick('projects')}>Projects</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-transparent" onClick={() => handleNavLinkClick('testimonials')}>Testimonials</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-transparent" onClick={() => handleNavLinkClick('contacts')}>Contacts</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-primary text-white btn-online-booking" onClick={handleModalOpen}>
                Online Booking
              </button> {/* Add the booking link */}
            </li>
          </ul>
        </div>
      </div>
      {showModal && (
        <div className="modal" onClick={handleModalClose}>
          {/* Modal Overlay */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleModalClose}>×</span>
            <OnlineBooking /> {/* Render the OnlineBooking component */}
          </div>
        </div>
      )}
      {showPopup && <PopupScreen handleClose={handlePopupClose} />}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import './Contacts.css';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const Contact = () => {
  return (
    <div className="container1">
      <h2 className="title" style={{ color: 'blackcd ' }}>Contact Us</h2>
      <div className="contact-info">
        <div className="info-item">
          <LocationOn className="icon" style={{ color: '#FFD700' }} />
          <span className="info-text">Page · Construction company, Eldoret, Kenya</span>
        </div>
        <div className="info-item">
          <Phone className="icon" style={{ color: '#FFD700' }} />
          <span className="info-text">0704 694052</span>
        </div>
        <div className="info-item">
          <Email className="icon" style={{ color: '#FFD700' }} />
          <span className="info-text">riftworkmanship77@gmail.com</span>
        </div>
      </div>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.653002383234!2d35.27008911432855!3d0.5186584760274313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18294db656f7b65d%3A0xd1a1f5c34fc1f8a0!2sEldoret%2C%20Kenya!5e0!3m2!1sen!2sau!4v1622386978289!5m2!1sen!2sau"
        allowFullScreen=""
        loading="lazy"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default Contact;

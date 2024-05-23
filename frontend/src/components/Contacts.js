import React from "react";
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to get in touch with us. We are here to assist you.</p>
      <ul className="contact-info">
        <li><i className="fas fa-phone"></i> Phone: (555) 123-4567</li>
        <li><i className="fas fa-envelope"></i> Email: <a href="mailto:info@riftworkmanship.com">info@riftworkmanship.com</a></li>
        <li><i className="fas fa-map-marker-alt"></i> Address: 123 Main St, Anytown, USA</li>
      </ul>
    </div>
  );
};

export default Contacts;

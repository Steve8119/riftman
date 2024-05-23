import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a leading provider of high-quality products and services. Our mission is to help our customers achieve their goals by providing them with the best solutions for their needs.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contacts">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Information</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-map-marker-alt"></i> 123 Main St, Anytown USA</li>
              <li><i className="fas fa-phone"></i> (123) 456-7890</li>
              <li><i className="fas fa-envelope"></i> info@mywebsite.com</li>
              <li><i className="fab fa-twitter"></i> @mywebsite</li>
              <li><i className="fab fa-facebook-f"></i> facebook.com/mywebsite</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

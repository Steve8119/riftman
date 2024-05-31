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
              <li><i className="fas fa-map-marker-alt"></i> Construction company, Eldoret, Kenya</li>
              <li><i className="fas fa-phone"></i> 0704 694052</li>
              <li><i className="fas fa-envelope"></i> riftworkmanship77@gmail.com</li>
              <li><i className="fab fa-twitter"></i> <a href="https://twitter.com/mywebsite">@mywebsite</a></li>
              <li><i className="fab fa-facebook-f"></i> <a href="https://facebook.com/mywebsite">facebook.com/mywebsite</a></li>
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

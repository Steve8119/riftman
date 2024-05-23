import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>We are a team of experienced construction professionals dedicated to delivering high-quality projects on time and within budget. Our mission is to provide exceptional service and craftsmanship to every client.</p>
      </div>
      <div className="about-details">
        <h2>Our Mission</h2>
        <p>At our company, we are committed to excellence in everything we do. Our mission is to provide top-quality construction services while maintaining the highest levels of professionalism, integrity, honesty, and fairness in our relationships with our clients, subcontractors, suppliers, and partners.</p>
        <h2>Our Vision</h2>
        <p>Our vision is to be the construction company of choice in our area, known for our dedication to quality, innovation, and customer satisfaction. We aim to exceed our clients' expectations and build lasting relationships based on trust and mutual respect.</p>
        <h2>Our Values</h2>
        <div className="table-container">
  <table className="table">
    <thead>
      <tr>
        <th>Aspect</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Quality:</strong></td>
        <td>We are committed to delivering exceptional quality in every project we undertake.</td>
      </tr>
      <tr>
        <td><strong>Integrity:</strong></td>
        <td>We conduct business with honesty, transparency, and accountability.</td>
      </tr>
      <tr>
        <td><strong>Teamwork:</strong></td>
        <td>We foster a collaborative environment where teamwork and cooperation are valued.</td>
      </tr>
      <tr>
        <td><strong>Innovation:</strong></td>
        <td>We embrace innovation and continuously seek new ways to improve and excel.</td>
      </tr>
      <tr>
        <td><strong>Customer Satisfaction:</strong></td>
        <td>We prioritize customer satisfaction and strive to exceed our clients' expectations.</td>
      </tr>
      <tr>
        <td><strong>Community Engagement:</strong></td>
        <td>We are actively involved in our community and support local initiatives and organizations.</td>
      </tr>
    </tbody>
  </table>
</div>


        <h2>Our Team</h2>
        <p>Our team consists of skilled professionals with extensive experience in various aspects of construction, including project management, design, engineering, and craftsmanship. We are dedicated to working together to deliver outstanding results and ensure the success of every project.</p>
      </div>
    </div>
  );
};

export default About;

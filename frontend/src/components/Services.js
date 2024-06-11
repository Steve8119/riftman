import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const serviceDescriptions = {
    "Architectural & Structural Drawings": "We provide detailed architectural and structural drawings for your construction projects, ensuring that your building plans meet all necessary regulations and standards.",
    "Bill of Quantities": "Our team prepares comprehensive bills of quantities to estimate construction costs accurately, ensuring that you have a clear understanding of the costs involved in your project.",
    "Approvals Facilitation": "We facilitate the approval process for construction permits and regulatory requirements, saving you time and effort and ensuring that your project is compliant with all necessary regulations.",
    "Interior Design": "Our interior design services help you create beautiful and functional spaces that reflect your personal style and meet your specific needs.",
    "Design and Build Services": "Our design and build services offer a seamless approach to construction projects, combining design, engineering, and construction expertise to deliver high-quality results on time and within budget.",
    "Renovation Works": "We specialize in renovation works that breathe new life into existing spaces, transforming them to meet your changing needs and lifestyle.",
    "1099 Workers": "Our team of skilled workers, including architects, engineers, and contractors, are committed to delivering exceptional results and exceeding your expectations.",
    "Opulence Designs": "Opulence Designs offers luxurious and sophisticated interior design services, creating elegant and timeless spaces that showcase your unique taste and style.",
  };

  const toggleReadMore = (index) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div id="services" className="services-container">
      <div className="title"><h2>Our Services</h2></div>
      <div className="container">
        <div className="row">
          {Object.keys(serviceDescriptions).map((serviceName, index) => (
            <div key={index} className="col-md-3">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">{serviceName}</h4>
                  <p className="card-text">
                    {expandedCards[index]
                      ? serviceDescriptions[serviceName]
                      : `${serviceDescriptions[serviceName].substring(0, 100)}...`}
                  </p>
                  <button className="read-more-button" onClick={() => toggleReadMore(index)}>
                    {expandedCards[index] ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

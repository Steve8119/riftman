import React from 'react';
import './Services.css';

const Services = () => {
  // Define service descriptions
  const serviceDescriptions = {
    "Architectural & Structural Drawings": "We provide detailed architectural and structural drawings for your construction projects, ensuring that your building plans meet all necessary regulations and standards.",
    "Bill of Quantities": "Our team prepares comprehensive bills of quantities to estimate construction costs accurately, ensuring that you have a clear understanding of the costs involved in your project.",
    "Approvals Facilitation": "We facilitate the approval process for construction permits and regulatory requirements, saving you time and effort and ensuring that your project is compliant with all necessary regulations.",
    "Interior Design": "Our interior design services help you create beautiful and functional spaces that reflect your personal style and meet your specific needs.",
    "Design and Build Services": "Our design and build services offer a seamless approach to construction projects, combining design, engineering, and construction expertise to deliver high-quality results on time and within budget.",
    "Renovation Works": "We specialize in renovation works that breathe new life into existing spaces, transforming them to meet your changing needs and lifestyle.",
    "1099 Workers": "Our team of skilled workers, including architects, engineers, and contractors, are committed to delivering exceptional results and exceeding your expectations.",
    "Opulence Designs": "Opulence Designs offers luxurious and sophisticated interior design services, creating elegant and timeless spaces that showcase your unique taste and style.",
    // Add descriptions for other services here
  };

  return (

    <div id="services" style={{ padding: '80px 0' }}>
      <div className='title'><h2>Our Services</h2></div>
          
    <div className="container">

      <div className="row">
        
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Architectural & Structural Drawings</h4>
                <p className="card-text">{serviceDescriptions["Architectural & Structural Drawings"]}</p>
              </div>
            </div>
          </div>
       
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Bill of Quantities</h4>
                <p className="card-text">{serviceDescriptions["Bill of Quantities"]}</p>
              </div>
            </div>
          </div>
       
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Approvals Facilitation</h4>
                <p className="card-text">{serviceDescriptions["Approvals Facilitation"]}</p>
              </div>
            </div>
          </div>
    
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Interior Design</h4>
                <p className="card-text">{serviceDescriptions["Interior Design"]}</p>
              </div>
            </div>
          </div>
   
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Design and Build Services</h4>
                <p className="card-text">{serviceDescriptions["Design and Build Services"]}</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Renovation Works</h4>
                <p className="card-text">{serviceDescriptions["Renovation Works"]}</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">1099 Workers</h4>
                <p className="card-text">{serviceDescriptions["1099 Workers"]}</p>
              </div>
            </div>
          </div>
          {/* Service 8: Opulence Designs */}
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Opulence Designs</h4>
                <p className="card-text">{serviceDescriptions["Opulence Designs"]}</p>
              </div>
            </div>
          </div>
          {/* Add more services here */}
        </div>
      </div>
    </div>
  );
};

export default Services;

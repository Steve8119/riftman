import React from 'react';
import './Testimonials.css'; // Import the CSS file for styling

// Import your images
import johnDoeImage from '../components/images/2.jpg';
import janeSmithImage from '../components/images/3.jpg';
import johnDoeImage1 from '../components/images/4.jpg';
import janeSmithImage1 from '../components/images/5.jpg';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
 <div className='heading'>TESTIMONIES</div>
      <div className="testimonial">
       
        <div className="testimonial-content">
          <img src={johnDoeImage} alt="John Doe" />
          <h2>John Doe</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod suscipit tellus, quis pretium felis feugiat non. Sed consequat consequat eros."</p>
          <p>CEO, Company XYZ</p>
        </div>
      </div>
      {/* Repeat the same structure for other testimonials */}
      <div className="testimonial">
        <div className="testimonial-content">
          <img src={janeSmithImage} alt="Jane Smith" />
          <h2>Jane Smith</h2>
          <p>"Sed et magna vitae dolor fermentum efficitur. Proin a nulla convallis, ultricies felis non, sodales odio. Suspendisse potenti."</p>
          <p>Marketing Manager, ABC Corp</p>
        </div>
      </div>
      <div className="testimonial">
        <div className="testimonial-content">
          <img src={johnDoeImage1} alt="John Doe" />
          <h2>John Doe</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod suscipit tellus, quis pretium felis feugiat non. Sed consequat consequat eros."</p>
          <p>CEO, Company XYZ</p>
        </div>
      </div>
      {/* Repeat the same structure for other testimonials */}
      <div className="testimonial">
        <div className="testimonial-content">
          <img src={janeSmithImage1} alt="Jane Smith" />
          <h2>Jane Smith</h2>
          <p>"Sed et magna vitae dolor fermentum efficitur. Proin a nulla convallis, ultricies felis non, sodales odio. Suspendisse potenti."</p>
          <p>Marketing Manager, ABC Corp</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

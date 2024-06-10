import React, { useState, useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon"; // Import WhatsAppIcon component
import background1 from "../components/images/house1.jpg";
import background2 from "../components/images/house2.jpg";
import background3 from "../components/images/house3.jpg";
import "./Home.css";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(background1);

  useEffect(() => {
    const images = [background1, background2, background3];
    let index = 0;

    const changeImage = () => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    };

    // Change image immediately when the component mounts
    changeImage();
    const interval = setInterval(changeImage, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="image-overlay"></div>
      <div className="welcome">
        <h1 className="home-text">Welcome to Riftworkmanship Limited</h1>
        <p className="home-description">
          Place for construction professionals. We don't just plan; we build
          according to a great plan. We have the skills to make your every dream
          real with our great teamwork. #GIVE LIFE TO ANY BLUEPRINT.
        </p>
      </div>
      <div className="welcome1">
        <h2>Additional Content Here</h2>
        <p>This is another section that can be used for various purposes.</p>
      </div>
      <WhatsAppIcon /> {/* Include WhatsAppIcon component */}
      <div className="arrow-down">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default Home;

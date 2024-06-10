import React, { useState, useEffect } from "react";
import "./Slideshow.css"; // Import the CSS file for styling

const Slideshow = () => {
  const images = [
    "https://source.unsplash.com/random/1920x1080?1",
    "https://source.unsplash.com/random/1920x1080?2",
    "https://source.unsplash.com/random/1920x1080?3"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div
      className="slideshow-container"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="slideshow-content">
        <h1 className="slideshow-text">Welcome to Riftworkmanship Limited</h1>
        <p className="slideshow-description">
          Place for construction professionals. We don't just plan; we build
          according to a great plan. We have the skills to make your every
          dream real with our great teamwork. #GIVE LIVE TO ANY BLUEPRINT.
        </p>
      </div>
    </div>
  );
};

export default Slideshow;

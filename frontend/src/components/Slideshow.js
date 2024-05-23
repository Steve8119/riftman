import React, { useState, useEffect } from "react";


const Slideshow = () => {
  const images = [
    'https://source.unsplash.com/random/1920x1080?1',
    'https://source.unsplash.com/random/1920x1080?2',
    'https://source.unsplash.com/random/1920x1080?3'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="welcome">
        <h1 className="home-text">Welcome to Riftworkmanship Limited</h1>
        <p className="home-description">
          Place for construction professionals. We don't just plan; we build according to a great plan. We have the skills to make your every dream real with our great teamwork. #GIVE LIVE TO ANY BLUEPRINT.
        </p>
      </div>
    </div>
  );
};

export default Slideshow;
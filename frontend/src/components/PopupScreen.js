import React from 'react';

const PopupScreen = ({ handleClose }) => {
  return (
    <div className="popup-screen">
      <div className="popup-content">
        <span className="popup-close" onClick={handleClose}>&times;</span>
        <h2>Popup Screen</h2>
        <p>This is the popup screen content.</p>
      </div>
    </div>
  );
};

export default PopupScreen;

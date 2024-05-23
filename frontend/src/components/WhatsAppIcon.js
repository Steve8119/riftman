import React from "react";
import "./WhatsAppIcon.css";
import WhatsAppIconImage from "../components/images/1.png"; // Import WhatsApp icon image

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-icon">
      <a
        href="https://api.whatsapp.com/send?phone=+254789164425"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WhatsAppIconImage} alt="WhatsApp" /> {/* Use imported image */}
      </a>
    </div>
  );
};

export default WhatsAppIcon;

import React from "react";
import './WebDesign.css'

const WebDesign = () => {
  return (
    
    <div className="header" >
      <h1>Web Design</h1>

      <p className="para">
        Web design is the process of planning,
         creating, and maintaining websites. It focuses on the appearance,
          layout, usability, and user experience of a website.
      </p>

      <h2 className="feature">Features</h2>
      <ul className="content">
        <li>Responsive Design – Works well on mobile, tablet, and desktop devices.</li>
        <li>Fast Loading Speed – Pages load quickly to improve user satisfaction.</li>
        <li>Easy Navigation – Users can find information easily.</li>
        <li>Security – Uses HTTPS and secure authentication methods.</li>
        <li>Quality Content – Relevant, useful, and updated information.</li>
        <li>Cross-Browser Compatibility – Functions properly across different browsers.</li>
      </ul>
    </div>
  );
};

export default WebDesign;
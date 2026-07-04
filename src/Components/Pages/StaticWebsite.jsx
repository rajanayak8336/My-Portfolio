import React from 'react'

const StaticWebsite = () => {
  return (
    <div className="header" >
      <h1>Static Website</h1>

      <p className="para">
        A static website is a website whose pages are created using HTML,
         CSS, and JavaScript and display the same content to every visitor
          unless the developer manually updates the files.
      </p>

      <h2 className="feature">Features</h2>
      <ul className="content">
        <li>Fast Loading Speed - Pages are pre-built and load quickly ,No database queries are required.</li>
        <li>Simple Development - Built using HTML, CSS, and JavaScript ,Easy to create and maintain for small projects.</li>
        <li>High Security - No server-side processing or database ,Less vulnerable to hacking attacks.</li>
        <li>Low Hosting Cost - Can be hosted on simple web servers ,Many platforms offer free hosting for static sites.</li>
        <li>Easy Deployment - Upload files directly to the server ,No complex backend configuration needed.</li>
        <li>Responsive Design Support - Can be made mobile-friendly using CSS media queries ,Works across different screen sizes.</li>
      </ul>
    </div>
  )
}

export default StaticWebsite

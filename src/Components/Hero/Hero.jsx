import React from 'react'
import './Hero.css'
import Resume from '../Resume/Resume'
import profile_img from '../../assets/about_profile.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Raja Nayak,</span><br />frontend Developer</h1>

      <p>Skilled in HTML, CSS, JavaScript, and React.js,
         with a passion for building responsive and user-friendly web applications.</p>

      <div className="hero-action">
        <div className="hero-connect"><a href="#contact">Connect with me</a></div>
        <div className="hero-resume" onClick={() => window.open("/my_resume.pdf", "_blank")} >My resume</div>
      </div>
    </div>
  )
}

export default Hero

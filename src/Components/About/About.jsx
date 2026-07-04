import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.png'
import CodeAlpha from '../Pages/Internships'
import Internships from '../Pages/Internships'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const About = () => {

    const navigate = useNavigate();

    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={about_profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Passionate Frontend Developer with a strong foundation in HTML, CSS,
                             JavaScript, and React.js. I enjoy building responsive, user-friendly
                              web applications and continuously learning modern web technologies to create engaging digital experiences.</p>

                        
                        
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML</p> <hr className='skill-html' style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>CSS</p> <hr className='skill-css' style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p> <hr className='skill-js' style={{ width: "55%" }} /></div>
                        <div className="about-skill"><p>React Js</p> <hr className='skill-react' style={{ width: "60%" }} /></div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Fresher</h1>
                    <p>Experience</p>
                </div>
                <hr />
                <div className="about-achievement" >
                    <a href="#work">
                    <h1>10+</h1>
                    <p>Projects Completed</p>
                    </a>
                </div>
                <hr />
                
                <div className="about-achievement"  onClick={() => navigate("/Internships")} target="_blank" rel="noreferrer" >
                    <h1>3</h1>
                    <p>Internships Completed</p>
                </div>
                
            </div>
        </div>
    )
}

export default About

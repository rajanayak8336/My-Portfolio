import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profiles.jpeg'


const About = () => {
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
                    <p>Intern</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Assessments</p>
                </div>
            </div>
        </div>
    )
}

export default About

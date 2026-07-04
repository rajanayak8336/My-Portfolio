import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/portfolio_logo.png'
import user_icon from '../../assets/user_icon.svg'
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am a passionate Frontend Developer who has successfully completed
                        a structured frontend development internship on Udemy.
                        Through this hands-on training, I have built a strong foundation in modern
                        web technologies and best practices. I am now fully prepared to contribute to a
                        software company as a productive and collaborative team member.</p>
                </div>



                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/raja-nayak/" target="_blank" className="social-btn">
                        <i className="fa-brands fa-linkedin-in"></i>
                        <span>LinkedIn</span>
                    </a>

                    <a href="https://github.com/rajanayak8336" target="_blank" className="social-btn">
                        <i className="fa-brands fa-github"></i>
                        <span>GitHub</span>
                    </a>

                    <a href="https://dashboard.render.com/" target="_blank" className="social-btn">
                        <i className="fa-solid fa-globe"></i>
                        <span>Render</span>
                    </a>
                </div>
            </div>

            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2026 Raja Nayak. All right reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

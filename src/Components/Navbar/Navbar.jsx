import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import portfolio_logo from '../../assets/portfolio_logo.png'
import nav_underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {

  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }



  return (
    <div className='navbar'>
      <img  className='navbar-logo' src={portfolio_logo} alt="" />
      <div className='nav-mob-open'><img src={menu_open} onClick={openMenu} alt="" /></div>


      <ul ref={menuRef} className='nav-menu'>
        <div className="nav-mob-close">
          <img src={menu_close} onClick={closeMenu} alt="" />
        </div>
        <li><a href="#home"><p onClick={() => setMenu("home")} >Home</p> </a> {menu === "home" ? <img src={nav_underline} alt='' /> : <></>} </li>
        <li><a href="#about"><p onClick={() => setMenu("about")} >About Me</p> </a> {menu === "about" ? <img src={nav_underline} alt='' /> : <></>}</li>
        <li><a href="#services"><p onClick={() => setMenu("services")} >Services</p> </a> {menu === "services" ? <img src={nav_underline} alt='' /> : <></>} </li>
        <li><a href="#work"><p onClick={() => setMenu("work")} >Portfolio</p> </a> {menu === "work" ? <img src={nav_underline} alt='' /> : <></>}</li>
        <li><a href="#contact"><p onClick={() => setMenu("contact")} >Contact</p> </a> {menu === "contact" ? <img src={nav_underline} alt='' /> : <></>} </li>
      </ul>

      <div className="nav-connect" ><a href="https://github.com/rajanayak8336" target='_blank'>Git Hub</a></div>

    </div>
  )
}

export default Navbar

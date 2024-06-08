import React, { useState } from 'react';
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

//Logo
const NameLogo = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
    <a href='/' onClick={() => navigate('/')}>
    <img src='images/logo.png' alt='logo' />
    </a>  
  </React.Fragment>
  );
};
// Linkedin & Github Icons
const Icons = () => (
  <React.Fragment>
    <a href='https://www.linkedin.com/in/anas-kharboutli' target='_blank' rel="noreferrer">
        <FaLinkedin className='linkedin-icon' />
        </a>
      <a href='https://github.com/Anas-Kharboutli' target='_blank' rel="noreferrer">
      <AiOutlineGithub className='github-icon' />
      </a>
  </React.Fragment>
);

//Main Navbar Component
const NavBar = () => {
  
  const Menu = () => (
    <React.Fragment>
       
      <ul>
          <li className='nav-item'>
            <NavLink to="/" onClick={() => setToggleMenu(false)}>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/allProjects" onClick={() => setToggleMenu(false)}>Latest Work</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/blog" onClick={() => setToggleMenu(false)}>Blog</NavLink>
          </li>
          <li className='nav-item'>
          <NavLink to="/contact" onClick={() => setToggleMenu(false)}>Contact</NavLink>
          </li>
         </ul> 
    </React.Fragment>
  );
 
  const [toggleMenu, setToggleMenu ] = useState(false);
   
  return (
    <nav>
    <div className='navbar-container'>

      <div className='logo'>
      <NameLogo />     
      </div>
      
      <div className='navbar-links'>
       <Menu />
      </div>  
      
      <div className='navbar-icons'>
        <Icons />
      </div>
    </div>

      <div className='mobile-menu'>
      
      <div className='logo'>
      <NameLogo />     
      </div>
     
      {toggleMenu ? 
       <RiCloseLine className='closed-icon' onClick={() => setToggleMenu(false)} />
       :
       <RiMenu3Line className='line-icon' onClick={() => setToggleMenu(true)} />
      }  
       
   
      
 
     
     

     
      </div>
    
    <div className= {`mobile-menu-container ${toggleMenu ? "active" : ""}`}>
      {toggleMenu && (
      
      <React.Fragment>  
      <div className='mobile-menu-links'>
       <Menu />
      </div>  
      
      <div className='mobile-menu-icons'>
        <Icons />
      </div>
      </React.Fragment> 
        )}
    </div>
    
    </nav>
  )
}

export default NavBar

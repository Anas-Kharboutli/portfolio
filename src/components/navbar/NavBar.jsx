import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

//Logo
const NameLogo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/')
  }, [])
  return (
    <React.Fragment>
    <a href='/' onClick={() => navigate}>
    <img src='/images/logo.png' alt='logo' />
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
            <Link to="/" onClick={() => setToggleMenu(false)}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="/allProjects" onClick={() => setToggleMenu(false)}>All Projects</Link>
          </li>
          <li className='nav-item'>
            <Link to="/blog" onClick={() => setToggleMenu(false)}>Blog</Link>
          </li>
          <li className='nav-item'>
          <Link to="/contact" onClick={() => setToggleMenu(false)}>Contact</Link>
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
       <RiCloseLine size={45} className='x-icon' onClick={() => setToggleMenu(false)} />
       :
       <RiMenu3Line size={45} onClick={() => setToggleMenu(true)} />
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

import React, { useState } from 'react';
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Menu = () => (
  <React.Fragment>
     
    <ul>
        <li className='nav-item'>
          <a href='#about'>About</a>
        </li>
        <li className='nav-item'>
          <a href='skills'>Skills</a>
        </li>
        <li className='nav-item'>
          <a href='blog'>Blog</a>
        </li>
        <li className='nav-item'>
          <a href='contact'>Contact</a>
        </li>
       </ul>
  </React.Fragment>
)

const NavBar = () => {

  const [toggleMenu, setToggleMenu ] = useState(false);


  return (
    <nav>
      <div className='navbar-container'>
      <div className='logo'>
      <img className='name-logo' src='/images/logo.png' alt='logo' />
      </div>
      
      <div className='navbar-links'>
       <Menu />
      </div>  
      
      <div className='navbar-btn'>
      <button>Hire Me</button>
      </div>
      </div>


      <div className='mobile-menu'>
      {toggleMenu ? 
       <RiCloseLine size={50} onClick={() => setToggleMenu(false)} />
       :
       <RiMenu3Line size={50} onClick={() => setToggleMenu(true)} />
    }  

    
      {toggleMenu && 
      <div className='mobile-menu-container'>
        <Menu />
        </div>
      }
    </div>
    
    </nav>
  )
}

export default NavBar

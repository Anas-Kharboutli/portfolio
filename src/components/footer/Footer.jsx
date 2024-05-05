import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className='footer-container'>
      <div className='footer-content section__padding'>
        <div className='footer-heading'>
          <h1>We are defined by the impact we make</h1>
          <h2>Let's make it a great one</h2>
        </div>

        <div className='navigation'>
          <h2>Navigation</h2>
        <ul>
        <li>
        <Link className='nav-item' to="/">Home</Link>
        </li>
        <li>
          <Link className='nav-item' to="/allProjects">latest Work</Link>
        </li>
        <li>
          <Link className='nav-item' to="/blog" >Blog</Link>
        </li>
        <li>
        <Link className='nav-item' to="/contact" >Contact</Link>
        </li>
       </ul>
        </div>
      </div>
    </div>
  )
} 

export default Footer

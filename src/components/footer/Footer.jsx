import React, { useEffect } from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate= useNavigate();

  useEffect(()=> {
    navigate("/");
  }, [navigate])

  return (
    <div className='footer-container'>
      <div className='footer-content section__padding'>
        <div className='heading'>
          <h1>We only live once</h1>
        </div>

        <div className='navigation'>
          <h2>Navigation</h2>
        <ul>
        <li className='nav-item'>
          <a href='/' onClick={() => navigate}>Home</a>
        </li>
        <li className='nav-item'>
          <Link to="/allProjects">latest Work</Link>
        </li>
        <li className='nav-item'>
          <Link to="/blog" >Blog</Link>
        </li>
        <li className='nav-item'>
        <Link to="/contact" >Contact</Link>
        </li>
       </ul>
        </div>

      </div>
    </div>
  )
} 

export default Footer

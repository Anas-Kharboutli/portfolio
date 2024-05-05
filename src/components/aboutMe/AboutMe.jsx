import React from 'react';
import "./aboutMe.css";
import { Link } from 'react-router-dom';

const Description = () => (
<React.Fragment>
  <p>
    Hello there!, I'm Anas Kharboutli, MIT certified full stack web developer specializing in the most modern web development frameworks and libraries like ReactJS, NextJS, NodeJS, ExpressJS, Docker, AWS. 
    I'm also adept at working with databases (MongoDB), API integration, and version control systems like Git.
    </p>
    <p>
I’m capable of developing end to end fully functional and eye-pleasant websites with a keen eye for smallest details and problem-solving mindset.
My journey of 9+ years in the two top IT companies in Asia has particularly shaped my work approach, perfectly communicating needs and responsibilities of projects I was trusted on.
</p>
<p>
My passion is fueled by a curious attitude and  continuous learning no matter of what level I’m at, 
In addition to my professional life, I value staying connected with mother nature as it’s a source of infinite imagination and enlightening inspiration.  
I'm excited about the opportunity to leverage my skills and experience to contribute with solutions to your projects that make a difference. 
  </p>
  </React.Fragment>
);

const AboutMe = () => {
  return (
    <section className='about-me-container'>
      
      <div className='about-img'>
        <img src='/images/about-photo.png' alt='about' />
        <div className='contact-btn'>
        <Link to="/contact">
          <button>Let's Talk</button>
        </Link>
      </div>
      </div>
 
      <div className='about-description'>
        <p>ABOUT ME</p>
        <h1>Anas Kharboutli</h1>
        <Description />
       
      </div>
    </section>
  ) 
}

export default AboutMe

import React from 'react';
import "./hero.css";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => { 
  return (
    <section className='hero-section section__padding'>
      <div className='portrait'>
        <img src='/images/my-portrait.png' alt='my-portrait' />
      </div>

      <motion.div 
      initial={{ opacity: 0, scale: 0.50}}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 1}}
      className='hero-description'>
        <p>HELLO THERE, I AM:</p>
        <h1>Anas Kharboutli</h1>
        <h2>
        <TypeAnimation
      sequence={[
         
        'Full Stack Web Developer',
        1500, 
        'Let us Connect !',
        1500,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />

        </h2>
        <p>Certified by Massachussetts Institue of Technology as Full Stack 
          Web Developer with MERN, Passionate about transforming unique designs into living 
          digital experience.
        </p>

        <Link to='/contact'>
          <button className='let-us-talk-btn'>
          <span>Let's Talk</span>
          </button>
          </Link>
      
      </motion.div>
    </section>
  )
}

export default Hero

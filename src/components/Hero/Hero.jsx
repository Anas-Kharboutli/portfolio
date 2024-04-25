import React from 'react';
import "./hero.css";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

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
        'Happy to Connect !',
        2500,
       
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

        <button><a href='#'>Let's Talk</a></button>
      </motion.div>
    </section>
  )
}

export default Hero

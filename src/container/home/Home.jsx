import React from 'react';
import { EyesShape, Hero, Skills, AboutMe, Projects, WorkExperience, Contact, Footer } from '../../components/exports';



const Home = () => {
  return (
    <React.Fragment>

      
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <WorkExperience />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default Home

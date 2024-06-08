import React from 'react';
import { Hero, Skills, AboutMe, Projects, WorkExperience, Contact } from '../../components/exports';



const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <WorkExperience />
      <Contact />
    </React.Fragment>
  )
}

export default Home

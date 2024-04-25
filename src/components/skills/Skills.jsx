import React from 'react';
import "./skills.css";

const FrontEndList = () => (
  
  <ul>
    <li>
      HTML5
    </li>
    <li>
      CSS3
    </li>
    <li>
      JavaScript
    </li>
    <li>
      TypeScript
    </li>
    <li>
      ReactJS
    </li>
  </ul>
)

const BackEndList = () => (
  <ul>
    <li>
      NodeJS
    </li>
    <li>
      ExpressJS
    </li>
    <li>
      MongoDB
    </li>
  </ul>
)

const OtherSkills = () => (
  <React.Fragment>
  <span>Git Version Control </span>
  <span>AGILE</span>
  <span>Responsive Web Design</span>
  <span>Docker</span>
  <span>REST APIs</span>
  </React.Fragment>
)
const Skills = () => {
  return (
    <section className='skills-section section__padding' id='skills'>
      <h1>SKILLS</h1>
     <div className='skills-container'>
      
      <div className='frontend-skills'>
        <h2>Frontend</h2>
      
       <FrontEndList />
      </div>

      <div className='backend-skills'>
      <h2>Backend</h2>
        <BackEndList />
      </div>
     
      </div>

      <div className='other-skills-container'>
        <OtherSkills />
      </div>
    </section>
  )
}

export default Skills

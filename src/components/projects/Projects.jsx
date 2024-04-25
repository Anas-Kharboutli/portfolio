import React from 'react';
import { Link } from 'react-router-dom';
import "./projects.css";
import { featured_Projects } from "../../utils/data";
import ProjectCard from './projectCard/ProjectCard';

const Projects = () => {
  return (
    <div className='projects-container section__padding'>
      <h1>Projects</h1>

      <div className='full-projects-btn'>
        <Link to="/projects/allProjects/AllProjects">View All Work</Link>
      </div>

      <div className='projects-cards'>
        {featured_Projects.map((project) =>(
          
            <ProjectCard
          key={project.id}
          imgPath={project.imgPath}
          title={project.title}
          description={project.description}
          previewUrl={project.previewUrl}
          gitUrl={project.gitUrl}
          languages={project.languages}
          />        
        ))}

      </div>

      <div className='full-projects-btn'>
        <Link to="/projects/allProjects/AllProjects">View All Work</Link>
      </div>
    </div>
  )
}

export default Projects

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "./projects.css";
import { featured_Projects } from "../../../utils/data";
import ProjectCard from '../projectCard/ProjectCard';
import Slider from 'react-slick';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { EyesShape } from '../../exports';

const Projects = () => { 
  
  const sliderRef = useRef();

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    
    <div className='projects-container section__margin'>
      <h1>PROJECTS</h1>

      <EyesShape />
          
      <div className='projects-cards'>

        <div className='left-btn' onClick={slideLeft}>
          <GrLinkPrevious className="left-icon"/>
        </div>

      <div className='project'>
      <Slider ref={sliderRef} {...settings}>
        {featured_Projects.map((project) => {
        
         return <ProjectCard
          key={project.id}
          imgPath={project.imgPath}
          title={project.title}
          description={project.description}
          previewUrl={project.previewUrl}
          gitUrl={project.gitUrl}
          languages={project.languages}
          />          
})}

      <div className='full-projects-navigate'>
        <Link to="/allProjects">
          <button>Show me All</button>
        </Link>
      </div>
       </Slider>
       </div>

       <div className='right-btn' onClick={slideRight}>
        <GrLinkNext className='right-icon'/>
       </div>

      </div>
     

      <div className='full-projects-btn'>
        <Link to="/allProjects">
          <button>View All Projects</button>
        </Link>
      </div>

    </div>
    
  )
}

export default Projects

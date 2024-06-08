import React, { useRef, useState } from 'react';
import "./allProjects.css";
import { all_Projects } from '../../../utils/data';
import ProjectCard from '../projectCard/ProjectCard';
import { motion, useInView } from 'framer-motion';
import ProjectTag from './projectTag/ProjectTag';
 
const AllProjects = () => {
  //Animated view
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const cardVariants = {
    initial: { y: 50, opacity: 0},
    animate: { y: 0,  opacity: 1}    
  };
 
  //Filtered Prjects tags
  const [ tag, setTag ] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = all_Projects.filter((project) => 
   project.tag.includes(tag)
  );
 
  return (
    <section className='all-projects-section section__padding'>
      
      <div className='heading'>
      <h1>SUCCESSFUL PROJECTS</h1>
      </div>
      
      <div className='tag-btns'>
        <ProjectTag
        name="All" 
        isSelected={tag === "All"}
        onClick={handleTagChange}
        />

        <ProjectTag
        name="MERN"
        isSelected={tag === "MERN"}
        onClick={handleTagChange}
        />

        <ProjectTag
        name="React"
        isSelected={tag === "React"}
        onClick={handleTagChange}
        />  

        <ProjectTag
        name="HTML | CSS | JS"
        isSelected={tag === "HTML | CSS | JS"}
        onClick={handleTagChange}
        />  
      </div>

      <div 
      className='all-projects-cards'
      ref={ref}
      >

        {filteredProjects.map((project, index) =>(

          <motion.div
          key={index}
          variants={cardVariants} 
          initial="initial" 
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1, delay: index * 0.7}}>
          
            <ProjectCard
          key={project.id}
          imgPath={project.imgPath}
          title={project.title}
          description={project.description}
          previewUrl={project.previewUrl}
          gitUrl={project.gitUrl}
          languages={project.languages}
          />   

          </motion.div>     
        ))}
        </div>
    </section>
  )
}

export default AllProjects

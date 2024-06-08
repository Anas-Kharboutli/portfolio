import React from 'react';
import "./projectCard.css";
import { MdPreview } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({imgPath, title, description, gitUrl, previewUrl, languages }) => {
  return (
    <div className='project-card-container'>
      <div className='project-img'>
        <img src={imgPath} alt={title} />
      </div>

      <div className='project-info'>
        <h1>{title}</h1>
        <p>{description}</p>
         
        <div className='project-summary'>
 
            <div className='project-preview'>
                <p>Live Version</p>
               <p><a href={previewUrl} target='_blank' rel="noreferrer">
                  <MdPreview className='preview-icon' />
                </a></p>
            </div>

            <div className='project-github'>
                <p>Github Repo.</p>
                <p><a href={gitUrl} target='_blank' rel="noreferrer">
                  <BsGithub className='git-icon' />
                </a></p>
            </div>
 
            <div className='project-languages'>
                <p>Built With</p>
                <div className='languages-list'>{languages && languages.map((language, index) => (
                  <ul key={index}>
                    <li >
                      {language}
                    </li>
                  </ul>
                ))}
                </div>
                
            </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard

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
                <p>See Live</p>
               <p><a href={previewUrl}>
                  <MdPreview size={40} />
                </a></p>
            </div>

            <div className='project-github'>
                <p>Github Repo.</p>
                <p><a href={gitUrl} target='_blank' rel="noreferrer">
                  <BsGithub size={35} />
                </a></p>
            </div>

            <div className='project-languages'>
                <p>Built Using</p>
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

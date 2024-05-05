import React from 'react';
import "./projectTag.css";
const ProjectTag = ( {name, onClick, isSelected }) => {

    const buttonStyle = isSelected ? "selected" : null; 
    
  return (
    <div className='project-tag-btn'>
        <button className={`btn ${buttonStyle}`}
        onClick={() => onClick(name)}
        >
            {name}
        </button>
    </div>
  )
}

export default ProjectTag

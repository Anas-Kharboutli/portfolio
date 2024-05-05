import React from 'react';
import "./workExperience.css";

const WorkExperience = () => {
  return (
    <div className='work-experience section__padding'>
      <h1>WORK EXPERIENCE</h1>
      <div className='work-experience-container'>
        <div className='accenture-container'>
          <img className='co-icon' src='/images/Accenture-Logo.png' alt='accenture' />
          <p>Bilingual Data Analyst  </p>
          <p> Mar - 2015 to Jan - 2018 </p>
          <p>What i did:</p>
          <ul>
            <li>
            Managed reviewing tools to do content moderation and machine learning at the same time based on client policies and platform guidelines.
            </li>
            <li>
            Top performer awardee for consecutive months and was assigned as POC of the company innovative suite tool (We@ Accenture) which brought the pillar scores from red to green levels.
            </li>
          </ul>
        </div>

        <div className='cognizant-container'>
          <img className='co-icon' src='/images/Cognizant-Logo.png' alt='cognizant' />
          <p>Senior Process Executive </p>
          <p> Feb - 2018 to Oct - 2023  </p>
          <p>What i did:</p>
          <ul>
            <li>
            Reviewed and moderated several types of contents and users accounts based on provided strict policies in coordination with other teams.  
            </li>
            <li>
            Carlo Chiong awardee for creating complete guidelines deck and having implemented by the client to the entire account which has improved the process time by 20%.
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  ) 
};  

export default WorkExperience

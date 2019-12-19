import React from 'react'
import IndProject from './IndProject'
import {projects} from '../projects'

const Portfolio = () => {
    
    const mappedProjects = projects.projects.map((proj, i) => <IndProject {...proj} key={i} />)
    return (
       <div className='portfolio'>
           {mappedProjects}
       </div>
    )
}

export default Portfolio
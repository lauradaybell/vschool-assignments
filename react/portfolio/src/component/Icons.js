import React from 'react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


const Icons = () => {
    return (
        <div className='icons'>
            <a href='https://github.com/lauradaybell' rel="noopener noreferrer" target='_blank'><FaGithubSquare size='4em' /></a>
            <a href='https://www.linkedin.com/in/lauradaybell/' rel="noopener noreferrer" target='_blank'><FaLinkedin size='4em' /></a>
        </div>
    )
}

export default Icons
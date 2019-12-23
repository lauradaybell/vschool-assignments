import React from 'react'
import { FaLinkedin, FaGithubSquare} from "react-icons/fa"



const Header = () => {

   
    return (
        <header>
            <div className="headerContact">
                <a href='mailto:laura.l.daybell@gmail.com' rel="noopener noreferrer" target='_blank'>Laura.L.Daybell@gmail.com</a>
                <h4>520-250-0165</h4> 
            </div>
            <div className="headerName">
                <h1>Laura Daybell</h1>
                <h2>Web Developer</h2>
            </div>    
            <div className="headerIcons">
                <a href='https://github.com/lauradaybell' rel="noopener noreferrer" target='_blank'><FaGithubSquare size='4em' /></a>
                <a href='https://www.linkedin.com/in/lauradaybell/' rel="noopener noreferrer" target='_blank'><FaLinkedin size='4em' /></a>
            </div>
        </header>
    )
}


export default Header
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

   
    return (
        <header>
            <h1>Laura Daybell</h1>
            <nav className= 'navStyle'>
                <Link className='route' to='/aboutMe'>About Me</Link>
                <Link className='route' to='/resume'>Resume'</Link>
                <Link className='route' to='/portfolio'>Projects</Link>
                <Link className='route' to='/skills'>Skills</Link>
                <Link className='route' to='/icons'>Contact Me</Link>
            </nav>
        </header>
    )
}


export default Header
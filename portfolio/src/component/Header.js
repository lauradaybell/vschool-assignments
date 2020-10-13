import React from 'react'
import { HashLink } from 'react-router-hash-link'


const Header = () => {
    return (
        <header>
            {/* how do you add react links again? */}
            <HashLink to='#aboutMe'>About</HashLink>
            <HashLink to='#skills'>Skills</HashLink>
            <HashLink to='#portfolio'>Projects</HashLink>
            <HashLink to='#contact'>Contact</HashLink>
        </header>
    )
}


export default Header
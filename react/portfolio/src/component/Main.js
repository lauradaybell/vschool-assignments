import React from 'react'

//my components

import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Resume from './Resume'
import Icons from './Icons'


const Main = () => {
    return (
        <main>
            <AboutMe />
            <Portfolio />
            <Skills />
            <Resume />
            <Icons />
        </main>
    )
}


export default Main
import React from 'react'

//my components

import Resume from './Resume'
import Skills from './Skills'
import Icons from './Icons'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'



const Main = () => {
    return (
        <main>
           <AboutMe />
           <Resume />
           <Portfolio />
           <Skills />
           <Icons />
        </main>
    )
}


export default Main
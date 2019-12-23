import React from 'react'


// my components

import Header from './component/Header'
import Footer from './component/Footer'
import AboutMe from './component/AboutMe'
import Portfolio from './component/Portfolio'
import Skills from './component/Skills'
import Resume from './component/Resume'
import Icons from './component/Icons'
import './App.css'

const App = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <Skills />
            <Portfolio />
            <Resume />
            <Icons />
            <Footer />
        </div>
    )
}

export default App
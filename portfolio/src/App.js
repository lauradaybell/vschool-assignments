import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { FaArrowCircleUp } from "react-icons/fa"
import Header from './component/Header'
import Footer from './component/Footer'
import AboutMe from './component/AboutMe'
import Portfolio from './component/Portfolio'
import Skills from './component/Skills'
import Icons from './component/Icons'
import './styles/styles.css'

const App = () => {
    return (
        <div>
            <div id='top'></div>

            <Header />

            <div id='aboutMe'></div>
            <AboutMe />

            <div id='skills'></div>
            <Skills />

            <div id='portfolio'></div>
            <Portfolio />

            <div id='contact'></div>
            <Icons />

            <HashLink to='#top'><FaArrowCircleUp className='toTop' /></HashLink>

            <Footer />

        </div>
    )
}

export default App
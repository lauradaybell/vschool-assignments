import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css'
import {withTheme} from './context/ThemeProvider'



const App = (props) => {
    return (
        <div className={`${props.theme}-header`}>
            <Navbar />
            <Main />
            <Footer />
            
        </div>
    )
}

export default withTheme(App)
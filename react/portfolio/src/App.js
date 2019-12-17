import React from 'react'
import {Switch, Route} from 'react-router-dom'

// my components

import Header from './component/Header'
import Main from './component/Main'
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
            <Switch className="content">
                <Route exact path='/' component={Main} />
                <Route path='/aboutMe' component={AboutMe} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/skills' component={Skills} />
                <Route path='/resume' component={Resume} />
                <Route path='/icons' component={Icons} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Footer from './Footer'
import './App.css'


const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path = '/' component = {Home}></Route>
                <Route path = '/about' component = {About}></Route>
                <Route path = '/services' component = {Services}></Route>
            </Switch>
            <Footer />
        </div>
    )
}


export default App
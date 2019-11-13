import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import MealHome from './components/MealHome'
import Footer from './components/Footer'
import Meals from './components/Meals'
import MealList from './components/MealList'


import './App.css'

const App = () => {
    return (
        
        <main>
            <Navbar />
            <Switch className='content'>
                <Route exact path='/' component={MealHome}/>
                <Route  path ='/meals' component={Meals} />
                <Route  path = '/mealList' component={MealList} />
            </Switch>
            <Footer />
        </main>
        
    )
}


export default App
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import MealHome from './components/MealHome'
import Footer from './components/Footer'
import Meals from './components/Meals'
import MealList from './components/MealList'
import Ads from './components/Ads'
import OwnMealForm from './components/OwnMealForm'

import './App.css'

const App = () => {
    return (
        
        <main>
            <Navbar />
            <div className='screen'>
                <Switch className='content'>
                    <Route exact path='/' component={MealHome}/>
                    <Route path='/ownMealForm' render={rProps => <OwnMealForm {...rProps} />}/>
                    <Route  path ='/meals' render={rProps => <Meals {...rProps} />} />
                    <Route  path = '/mealList' render={rProps => <MealList {...rProps} />} />
                </Switch>
                 <Ads />
            </div>
            <Footer />
        </main>
        
    )
}


export default App
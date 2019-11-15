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
                    <Route path='/ownMealForm' component={OwnMealForm}/>
                    <Route  path ='/meals' component = {Meals} />
                    <Route  path = '/mealList' component={MealList} />
                </Switch>
                 <Ads />
            </div>
            <Footer />
        </main>
        
    )
}


export default App
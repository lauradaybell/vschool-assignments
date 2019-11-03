import React from 'react'
import Navbar from './Navbar'
import {Switch, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import ProductList from './ProductList'
import Products from './Products'

import './App.css'



const App = () => {
    return (
        <div>
            <Navbar />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/productlist' component={ProductList} />  
                <Route path='/products/:_id' component={Products} />
                
            </Switch>
        </div>
    )
}



export default App
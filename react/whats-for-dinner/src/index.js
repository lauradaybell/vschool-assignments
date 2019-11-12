import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import MealProvider from './context/MealProvider'




ReactDOM.render(
    <MealProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </MealProvider>
, document.getElementById('root'))
import React from 'react'
import {withMeal} from '../context/MealProvider'

const Meal = (props) => {
    return (
        <div style={{border: '1px solid black'}}>
            <h3>{props.title}</h3>
            <p>{props.ingredients}</p>
            <a href={props.href}>Click for Recipe</a>
            <img className= 'returnedImg' src={props.thumbnail} alt="pic"/>
        </div>
    )
}




export default withMeal(Meal)
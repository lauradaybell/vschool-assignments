import React from 'react'
import Meal from './Meal'
import {withMeal }from '../context/MealProvider'



const MealList = (props) => {
    const mappedMeals = props.meals.map(((meal, i) => <Meal showButton="false" {...meal} key={i} myPath={props.location.pathname} />))
    return(
        <div className='randomMeal'>
            {window.confirm("Please subscribe to our daily spam emails!!!!")}
            {mappedMeals}
        </div>
    )
}


export default withMeal(MealList)
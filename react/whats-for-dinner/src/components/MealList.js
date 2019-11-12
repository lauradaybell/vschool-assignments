import React from 'react'
import Meal from './Meal'
import {withMeal }from '../context/MealProvider'



const MealList = (props) => {
    const mappedMeals = props.meals.map(((meal, i) => <Meal {...meal} key={i}/>))
    return(
        <div className='randomMeal'>
            {mappedMeals}
        </div>
    )
}


export default withMeal(MealList)
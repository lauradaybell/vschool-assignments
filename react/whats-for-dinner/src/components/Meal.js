import React from 'react'
import {withMeal} from '../context/MealProvider'

const Meal = (props) => {
    const myMeal = {
        title: props.title,
        ingredients: props.ingredients,
        href: props.href,
        img:props.thumbnail
    }
    return (
        <div className='cards'>

            <h3>{props.title}</h3>
            <p>{props.ingredients}</p>
            <a href={props.href}>Click for Recipe</a>
            <img className= 'returnedImg' src={props.thumbnail} alt="pic"/>

            {
                props.showButton === "true"
                ?
                <button className='saveButton' onClick={()=> props.handleSave(myMeal)}>Save</button>
                :
                null
            }
            
        </div>
    )
}




export default withMeal(Meal)
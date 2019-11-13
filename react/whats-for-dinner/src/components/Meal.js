import React from 'react'
import {withMeal} from '../context/MealProvider'

const Meal = (props) => {
    const myMeal = {
        title: props.title,
        ingredients: props.ingredients,
        href: props.href,
        thumbnail:props.thumbnail
    }
    return (
        <div className='cards'>

            <h3 className='title'>{props.title}</h3>
            <p className= 'ingredients'>{props.ingredients}</p>
            {
                props.thumbnail !== ''? <img className= 'returnedImg' src={props.thumbnail} alt="pic"/> : null
            }
            
            <button className = 'link'><a href={props.href}>Click for Recipe</a></button>
            

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
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
            {
                props.thumbnail !== ''? <img className= 'returnedImg' src={props.thumbnail} alt="pic"/> : <img className='returnedImg' src="http://www.soidergi.com/wp-content/uploads/ph/photostock-vector-cartoon-cute-stove-oven-appliance-vector-illustration.jpg" alt='pic'/>
            }
            <h3 className='title'>{props.title}</h3>
            <p className= 'ingredients'><strong>Ingredients:</strong><br/>{props.ingredients}</p>
            {
                props.href 
                ?
                <button className = 'link'><a href={props.href}>Click for Recipe</a></button>
                :
                null
            }

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
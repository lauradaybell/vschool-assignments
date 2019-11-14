import React from 'react'
import {withMeal} from '../context/MealProvider'


const OwnMealForm = (props) => {
    return (
        <div className="myOwnFormPage">
            <h3 className='formTitle'>ADD YOUR FAVORITE RECIPES</h3>
            <form onSubmit={props.handleOwnSubmit}
                  className='ownForm'>
                <div className='myInput'>
                    <input 
                        className='ownFormInput'
                        onChange={props.handleChange}
                        type="text"
                        name='title'
                        placeholder='Recipe Name'
                        value={props.title}
                        required
                    />
                    <input
                        className='ownFormInput'
                        onChange={props.handleChange}
                        type='text'
                        name='ingredients'
                        placeholder='Ingredients'
                        value={props.ingredients}
                        required
                    />
                    <input 
                        className='ownFormInput'
                        onChange={props.handleChange}
                        type="text"
                        name='thumbnail'
                        placeholder='Picture URL'
                        value={props.thumbnail}
                        />
                </div>
                <button className='myOwnButton'>Save</button>
            </form>
        </div>
    )
}




export default withMeal(OwnMealForm)
import React from 'react'
import {withMeal} from '../context/MealProvider'

const MealForm = (props) => {
   
   
    return (
        <div >
            <form onSubmit={props.handleSubmit}
            className ='form' >
                <div className='input'>
                    {/* <input 
                        onChange={props.handleChange} 
                        type="text" 
                        name="i"
                        value={props.i}
                        placeholder="Ingredients" /> */}
                    <input 
                        onChange={props.handleChange} 
                        type="text"
                        name="q"
                        value={props.q}
                        placeholder="Food Name" />
                </div>        
                <button className='submitButton'>Submit</button>
            </form>
        </div>
    )
}



export default withMeal(MealForm)
import React from 'react'
import Meal from './Meal'
import {withMeal }from '../context/MealProvider'



const MealList = (props) => {
    const mappedMeals = props.meals.map(((meal, i) => <Meal showButton="false" {...meal} key={i} myPath={props.location.pathname} />))
    return(
        <div className='randomMeal'>
            <div className={props.shouldHide ? 'hidden' : null}>
                <div className="alert">

                        <button className='close' onClick={props.handleAlertSubmit}>X</button>
                    <form>
                        <h1 className='joinUs'>PLEASE ENTER YOUR EMAIL TO JOIN OUR SPAM EMAIL LIST.  WE WILL SELL YOUR PERSONAL INFORMATION TO CONTINUE FUNDING OUR SITE. </h1>
                        <input 
                        className='email'
                        type="email"
                        placeholder='email'/>
                    </form>
                </div>
            </div>
            {mappedMeals}
        </div>
    )
}


export default withMeal(MealList)
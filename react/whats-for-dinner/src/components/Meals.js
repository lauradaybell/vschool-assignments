import React from 'react'
import MealForm from './MealForm'
import SearchList from './SearchList'



const Meals = (props) => {
    return (
        <div className='tryAgain'>
            <MealForm />
            <SearchList myPath={props.location.pathname} />
        </div>
    )
}




export default Meals
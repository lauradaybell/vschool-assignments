import React from 'react'
import Meal from './Meal'
import {withMeal }from '../context/MealProvider'



const SearchList = (props) => {
    console.log(props)
    const mappedList = props.options.map(((option, i) => <Meal showButton="true" {...option} key={i} myPath={props.myPath} />))
    return(
        <div className='randomMeal'>
            {mappedList}
        </div>
    )
}


export default withMeal(SearchList)

import React from 'react'
import Meal from './Meal'
import {withMeal }from '../context/MealProvider'



const SearchList = (props) => {
    console.log(props)
    const mappedList = props.options.map(((option, i) => <Meal {...option} key={i}/>))
    return(
        <div className='randomMeal'>
            {mappedList}
        </div>
    )
}


export default withMeal(SearchList)

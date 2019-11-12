import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () =>{
   
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/meals'>Search</Link>
            <Link to='/mealList'>Meal List</Link>
        </nav>
    )
}




export default Navbar
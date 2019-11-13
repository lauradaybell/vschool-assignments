import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () =>{
   
    return (
        <nav>
            <Link className='route' to='/'>Home</Link>
            <Link className='route' to='/meals'>Search</Link>
            <Link className='route' to='/mealList'>Meal List</Link>
        </nav>
    )
}




export default Navbar
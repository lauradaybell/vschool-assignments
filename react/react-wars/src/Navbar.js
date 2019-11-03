import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    const style = {
        display: 'flex',
        justifyContent: 'space-around',
        border: '1px solid black',
        backgroundColor: 'lightgray'
    }
    return (
        <div style = {style}>
            <Link to ='/'>Home</Link>
            <Link to ='/about'>About</Link>
            <Link to ='/productlist'>Products</Link>
        </div>
    )
}



export default Navbar
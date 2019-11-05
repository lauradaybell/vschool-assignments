import React from 'react'

const Navbar = () => {
    const style = {
        display: 'flex',
        justifyContent: 'space-around',
        border: '1px solid black',
        backgroundColor: 'lightgray'
    }
    return (
        <div style = {style}>
            <h4>Home</h4>
            <h4 to= '/about'>About Us</h4>
            <h4 to= '/services'>Services</h4>
        </div>
    )
}

export default Navbar
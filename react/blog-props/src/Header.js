import React from 'react'
import Navbar from './Navbar'


const Header = () => {
    return (
        <div className = 'header'> 
            <div>
                <div className="overlay"></div>
            </div>
            <div>
                <Navbar />
                <h1 className='head1'>Clean Blog</h1>
                <h3 className= 'head'>A Blog Theme by Start Bootstrap</h3>
            </div>
        </div>
    
    )
}



export default Header
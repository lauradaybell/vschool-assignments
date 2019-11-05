import React from 'react'


const NameCard = (props) => {
    const {name, image} = props

    return( 
        <div className='enemies'>
            <img style={{ height: 200, width: 200, display: 'inline'}}src= {image}/>
            
            <h5>{name}</h5>   
        </div>
    )
}



export default NameCard
import React from 'react'



const Spot = (props) => {
    let {place, price, timeToGo} = props
   
    
    return (
        <div className={timeToGo}>
            <h1>{place}</h1>
            <h3>{timeToGo}</h3>
            { (price > 1000) ? <h5 className = 'money'>$$$</h5> :(price < 500) ? <h5 className = 'money'>$</h5> : <h5 className = 'money'>$$</h5> 
            }
            <h5 className = 'price'>${price}</h5>
            
           
            
        </div>
    )
}


export default Spot
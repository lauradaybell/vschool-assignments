import React from 'react'



const CompletedBadge = (props) => {
    const {firstName, lastName, email, birthPlace, phone, favFood, aboutYou, color} = props
    // const bgColor
    // if(color % 2 === 0) {
    //     bgColor = {backgroundColor: 'blue'}
    // } else {
    //     bgColor = {backgroundColor: 'red'}
    // }

    return (
        
        <div className = "badges">
            {
            (color % 2 === 0) ? <h5 style={{backgroundColor: 'blue'}}>Badge</h5> : <h5 style={{backgroundColor: 'red'}}>Badge</h5>
            }
            <p className="line1">Name:{firstName}{lastName}</p> 
            <p className="line1">Phone: {phone}</p>
            <p className="line2">Place of Birth{birthPlace}</p>
            <p className="line2">Favorite Food:{favFood}</p>
            <p className="line3">Email:{email}</p> 
            <p className="wordBox">{aboutYou}</p>
        </div>
    )
}



export default CompletedBadge
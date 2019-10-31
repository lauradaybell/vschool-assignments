import React from 'react'

const Content = (props) => {
    return (
        <div className = 'singles' 
            style={{backgroundColor: props.bColor, height: 200, }}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <span>{props.information}</span>
        </div>
        
    )
}


export default Content
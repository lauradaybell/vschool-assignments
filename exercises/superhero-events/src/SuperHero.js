import React from 'react'

const SuperHero = (props) => {
    let {name, imageName, catchPhrase} = props

    const yell = () => {
        alert(catchPhrase)
    }
    return (
        <div className = 'heroBox'>
            <h3 onClick={yell}>{name}</h3>
            <img onClick={yell} src={imageName} alt="fun"/>
        </div>
    )
}



export default SuperHero
import React from 'react'
import Pet from './Pet'



const Friend = (props) => {
    console.log(props)
    const mappedPets = props.pet.map(((pet) => <Pet pet = {pet.name}
                                        breed = {pet.breed}
                                                />))

                                                  

    
    let {name, age} = props

    return (
        <div className = 'friends'>
            <h1>{name}</h1>
            <h3>{age}</h3>
            <h2>Pets:</h2>
           {mappedPets}
            <Pet />
            
        </div>
    )
}


export default Friend
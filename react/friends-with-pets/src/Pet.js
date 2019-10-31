import React from 'react'


const Pet = (props) => {
    let {pet, breed} = props
    return (
        <div>
            <h5 className='petName'>{pet}</h5>
            <h5 className='petBreed'>{breed}</h5>
        </div>
    )
}






export default Pet
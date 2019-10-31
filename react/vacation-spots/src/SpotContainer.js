import React from 'react'

//My Components
import Spot from './Spot'
import SpotItems from './Spots.json'

const SpotContainer = () => {
    const mappedSpots = SpotItems.map(((spot, i) => <Spot key = {i + spot.place}
                                                  place = {spot.place}
                                                  price = {spot.price}
                                                  timeToGo = {spot.timeToGo} />))


    return (
        <div className = 'spot-container'>
            {mappedSpots}
        </div>
    )
}








export default SpotContainer
import React from 'react'
import UglyThing from './UglyThing'
import {withThing} from '../context/ThingProvider'


const UglyThingsList = props => {

    const mappedThings = props.things.map(((thing, i) => <UglyThing {...thing} key={i} id={thing._id} />))

    return (
        <div>
            {mappedThings}
        </div>
    )
}

export default withThing(UglyThingsList)
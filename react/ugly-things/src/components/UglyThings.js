import React from 'react'
import UglyThingsList from './UglyThingsList'
import {withThing}from '../context/ThingProvider'
import UglyThingForm from './UglyThingForm'




const UglyThings = () => {
    return (
        <div>
            <UglyThingForm />
            <UglyThingsList />
            
        </div>
    )
}






export default withThing(UglyThings)
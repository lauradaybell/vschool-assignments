import React from 'react'
import {withThing}from '../context/ThingProvider'



const UglyThing = (props) => {
    return (
        <div style={{border: '1px solid black'}} >
            {props.toggle ?
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <img src={props.imgUrl} alt="pic"/>
                    <button onClick={()=> props.handleDelete(props._id)}>Delete</button>
                    <button onClick={()=> props.handleEditFirst(props._id)}>Edit</button>
                </div>
                :
                <Form button='Save' type='update' toggle={props.toggle} id={props._id} description={props.description} image={props.image} name={props.name} />
          }
        </div>  
    )}


export default withThing(UglyThing)
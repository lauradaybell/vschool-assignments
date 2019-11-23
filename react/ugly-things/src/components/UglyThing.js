import React from 'react'
import {withThing}from '../context/ThingProvider'



const UglyThing = (props) => {
    const myForm = document.getElementById('form')
    const myData = document.getElementById('info')

    const toggleForm = () => {
        myForm.classList.toggle('hidden')
        myData.classList.toggle('updates')
    }

    return (
        <div style={{border: '1px solid black'}} >
                <div id='info' className='show'>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <img src={props.imgUrl} alt="pic"/>
                    <button onClick={()=> props.handleDelete(props._id)}>Delete</button>
                    
                    <button onClick={toggleForm}>Edit</button>
                </div>
                <form className = 'hidden' id='form' onSubmit={props.handleEdit}>
                    <input 
                        onChange={props.handleChange} 
                        type='text' 
                        value={props.title} 
                        placeholder='Title' 
                        name='title'/>
                    <input 
                        onChange={props.handleChange} 
                        type='text' 
                        value={props.description}
                        placeholder='description'
                        name='description'/>
                    <input 
                        onChange={props.handleEdit} 
                        type='text' 
                        name='imgUrl'
                        value={props.imgUrl} 
                        placeholder='URL'/>
                </form>
                
                
        </div>  
    )}


export default withThing(UglyThing)
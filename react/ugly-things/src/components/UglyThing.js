import React from 'react'
import {withThing}from '../context/ThingProvider'



const UglyThing = (props) => {
    

    return (
        <div style={{border: '1px solid black'}} >
                <div className={props.shouldHide ? 'hidden' : null}>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <img src={props.imgUrl} alt="pic"/>
                    <button onClick={()=> props.handleDelete(props._id)}>Delete</button>
                    
                    <button onClick={props.handleToggle}>Edit</button>
                </div>
                <form className = {props.shouldHide ? null : 'hidden'} onSubmit={props.handleEdit}>
                    <input 
                        onChange={props.handleChange} 
                        type='text' 
                        value= '' 
                        placeholder='Title' 
                        name='title'/>
                    <input 
                        onChange={props.handleChange} 
                        type='text' 
                        value=''
                        placeholder='description'
                        name='description'/>
                    <input 
                        onChange={props.handleChange} 
                        type='text' 
                        name='imgUrl'
                        value={props.imgUrl} 
                        placeholder='URL'/>
                </form>
                
                
        </div>  
    )}


export default withThing(UglyThing)
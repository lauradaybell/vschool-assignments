import React from 'react'
import {withThing}from '../context/ThingProvider'

const UglyThingForm = props => {
    return (
        <div className={this.props.type === 'add'? 'submit': 'edit'}>
            <form onSubmit={props.handleSubmit}>
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
                    onChange={props.handleChange} 
                    type='text' 
                    name='imgUrl'
                    value={props.imgUrl} 
                    placeholder='URL'/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default withThing(UglyThingForm)
import React from 'react'

const BadgeForm = (props) => {
    let {firstName, lastName, email, birthPlace, phone, favFood, aboutYou, handleChange, handleSubmit} = props

    
    return (
        <form className="formBox" onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" name="firstName" value= {firstName} onChange={handleChange} className="row1"  required minlength = "3"/>

            <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={handleChange} className="row1" required minlength = "3"/>

            <input type="email" placeholder="email" name="email" value={email} onChange={handleChange} className="row2" required minlength = "3"/>

            <input type="text" placeholder="Place of Birth" name ="birthPlace" value= {birthPlace} onChange={handleChange} className="row2" required minlength = "3"/>

            <input type="number" placeholder="Phone Number" name="phone" value={phone} onChange={handleChange} className="row3" required minlength = "3"/>

            <input type="text" placeholder="Favorite Food" name="favFood" value = {favFood} onChange={handleChange} className="row3" required minlength = "3"/>

            <input type="text" placeholder="Tell us about yourself" name="aboutYou" value={aboutYou} onChange={handleChange} className="row4" required minlength = "3"/>
            <button className="row5" >Submit</button>
        </form>
        )}




export default BadgeForm
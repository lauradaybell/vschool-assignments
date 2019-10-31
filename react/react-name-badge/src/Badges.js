import React from 'react'
import BadgeForm from './BadgeForm'
import CompletedBadge from './CompletedBadge'

class Badges extends React.Component {
    constructor() {
        super()
        this.state = {
                firstName: '',
                lastName:'',
                email:'',
                birthPlace:'',
                phone:'',
                favFood:'',
                aboutYou:'',
            badge:[]
        }
        this.style = {
            backgroundColor: "blue"
        }
        
    }

    //function that grabs input and puts in state
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    //another function that grabs from state and populates the badge fields- stores in at state.badge which can be mapped to display
    handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        const newBadge = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName,
            email: this.state.email,
            birthPlace: this.state.birthPlace,
            phone: this.state.phone,
            favFood: this.state.favFood,
            aboutYou: this.state.aboutYou
        }
        this.setState(prevState =>({
            badge:[...prevState.badge, newBadge],
                firstName: '',
                lastName:'',
                email:'',
                birthPlace:'',
                phone:'',
                favFood:'',
                aboutYou:''
        }))
    }
    
    render() {
        const mappedBadges = this.state.badge.map((badge, i) => <CompletedBadge key={i}
                                                        color = {i} 
                                                        firstName = {badge.firstName}
                                                        lastName = {badge.lastName}
                                                        email = {badge.email}
                                                        birthPlace={badge.birthPlace}
                                                        phone = {badge.phone}
                                                        favFood = {badge.favFood}
                                                        aboutYou = {badge.aboutYou}
                                                                />)
        return (
            <div>
                <BadgeForm 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    />
                <div>
                    { mappedBadges }
                </div>
            </div>
        )
    }
    //submit button only available when all fields have at least 3 characters

    //phone number field must only have numbers-no dashes or special charactors


}

export default Badges
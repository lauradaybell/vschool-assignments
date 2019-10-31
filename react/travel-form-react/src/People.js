import React from 'react'


class People extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location:'',
            diet:[]
        }
    }
    //this.handleChange function for checkboxes
    // function that gets input from form and stores in state
    handleSubmit = (e) => {
        e.preventDefault()
        alert(`${this.state.firstName} ${this.state.lastName} ${this.state.age} ${this.state.gender} ${this.state.location} ${this.state.diet}`)
        this.setState({
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location:'',
            diet:[]
        })
    }
    handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'diet') {
            this.setState(prevState => ({
                diet: [...prevState.diet, value]
            }))
        } else {
            this.setState({
                [name]: value
            })
        }
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/>

                <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/>

                <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
                
                <label>Male</label><input type="radio" name="gender" value="male" onChange={this.handleChange}/>

                <label>Female</label><input type="radio" name="gender" value="female" onChange={this.handleChange}/>

                <select name="location" onChange={this.handleChange}>
                    <option name="location" value="choose">Choose a Destination</option>
                    <option name="location" value="hawaii">Hawaii</option>
                    <option name="location" value="tahiti">Tahiti</option>
                    <option name="location" value="florida">Florida</option>
                </select>

                <label>Vegan</label><input type='checkbox' name ='diet' value='vegan'onChange ={this.handleChange} />

                <label>Low Fat</label><input type="checkbox" name="diet" value="lowFat" onChange = {this.handleChange} />

                <label>Gluten Free</label><input type="checkbox" name="diet" value="glutenFree" onChange={this.handleChange} />
                <button>Submit</button>
            </form>
            
        )
    }
}






export default People
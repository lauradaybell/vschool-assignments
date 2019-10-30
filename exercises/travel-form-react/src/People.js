import React from 'react'


class People extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            gender: '',
            destination:'',
            diet:''
        }
    }

    // function that gets input from form and stores in state


    render() {
        return (
            <form action="">
                <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName}/>
                <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} />
                <input type="number" name="age" placeholder="Age" value={this.state.age} />
                <input type="radio" name="gender" id="" value={this.state.gender}/>
                <input type="radio" name="gender" id="" value={this.state.gender}/>
                <option value=""></option>


            </form>
            //input boxes
            //submit button
        )
    }
}






export default People
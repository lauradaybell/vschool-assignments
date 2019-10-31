import React from 'react'


class PeopleContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            list: ['Bob', 'Chrissy', 'Steph', 'Bert'],
            name: ""
        }
        // this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState =>({
            list: [...prevState.list, this.state.name],
            name: ""
        }))
    }
    


    render() {
        return (
           <div> 
               <h1>{this.state.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
                    <button>submit</button>
                </form>

                <ol>
                    {this.state.list.map(name => <li>{name}</li> )}
                </ol>
            </div>
        )
    }
}





export default PeopleContainer
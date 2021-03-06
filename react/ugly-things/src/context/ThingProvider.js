import React, {Component} from 'react'



const ThingContext = React.createContext()

class ThingProvider extends Component {
    constructor() {
        super()
        this.state = {
            things : [],
            title: '',
            description: '',
            imgUrl: '',
            _id: 1,
            toggle: true,
            shouldHide: false
        }
    }
    
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    handleDelete = id => {
        console.log(id)
        let filteredArray = this.state.things.filter(thing => {
            console.log(thing._id)
            return thing._id !== id 
        })
        console.log(filteredArray)
        this.setState({
            things: filteredArray
        })
    }
    
    // replace changed item
    handleEdit = e => {
        e.preventDefault()
        
        const updates = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }
        this.setState({
            things: [...this.state.things, updates]
        })
    }

    handleToggle = () => {
        this.setState({
            shouldHide: !this.state.shouldHide
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
        const newThing = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl,
            _id: this.state._id
        }
        this.setState(prevState => ({
            things:[...prevState.things, newThing],
            title: '',
            description: '',
            imgUrl: '',
            _id: this.state._id + 1
        }))
        
    }




    render() {
        return (
            <ThingContext.Provider
                value ={{
                    things: this.state.things,
                    title: this.state.title,
                    description: this.state.description,
                    imgUrl: this.state.imgUrl,
                    shouldHide: this.state.shouldHide,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit,
                    handleToggle: this.handleToggle
                    
                }}>
                {this.props.children}
            </ThingContext.Provider>
        )
    }
}

export default ThingProvider

export const withThing = C => props => (
    <ThingContext.Consumer>
        {value => <C {...value} {...props} />}
    </ThingContext.Consumer>
)
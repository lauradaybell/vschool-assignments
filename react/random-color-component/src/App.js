import React, {Component} from 'react'
import axios from 'axios'


class App extends Component {
    constructor() {
        super()
        this.state = {
            backgroundColor: blue,
            colors: []
        }

    }
    componentDidMount() {
        axios.get('http://www.colr.org/api.html').then((response) => this.setState({
            backgroundColor= (Math.floor(Math.random)* 6) 
        }))
    }

    render() {
        const mappedColors = this.state.colors.map(())
    }

}






export default App
import React, {Component} from 'react'
import NameCard from './NameCard'
import axios from 'axios'


class Names extends Component {
    componentDidMount() {
        axios.get('http://s3.amazonaws.com/v-school/data/hitlist.json').then((response) => { this.setState ({
            hit: response.data
        })})
    }

    constructor() {
        super()
        this.state = {
            hit: []
        }
    }
    render() {
        const mappedHits = this.state.hit.map((hit, i) => <NameCard key = {i}
                                                            image={hit.image}
                                                            name = {hit.name}
                                                            />) 
        return (
            <div className='container'>
                {mappedHits}
            </div>
        )
    }
}


export default Names
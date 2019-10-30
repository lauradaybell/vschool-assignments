import React from 'react'


class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            dice: [1, 2, 3, 4, 5]
        }
        this
    }

    rollDice = () => {
        const newDice = this.state.dice.map(() => {
            return (Math.floor(Math.random() * 5) + 1)
        })
        this.setState({
            dice: newDice
        })
    }
        
    
    render() {
        return (
            <div>
                <h1>{this.state.dice}</h1>
                <button onClick={this.rollDice}>Click</button>
            </div>
        )
    }

}

export default DiceBox
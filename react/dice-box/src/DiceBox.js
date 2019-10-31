import React from 'react'

import Dice from './Dice'

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
    }
    changeOne = () => {
        let newNum = Math.floor(Math.random() *6 )
         this.setState({
          num1: newNum
        })
    }
    changeTwo = () => {
        let newNum = Math.floor(Math.random() *6 )
         this.setState({
          num2: newNum
        })
    }
    changeFive = () => {
        let newNum = Math.floor(Math.random() *6 )
         this.setState({
          num5: newNum
        })
    }
    changeThree = () => {
        let newNum = Math.floor(Math.random() *6 )
         this.setState({
          num3: newNum
        })
    }
    changeFour = () => {
        let newNum = Math.floor(Math.random() *6 )
         this.setState({
          num4: newNum
        })
    }
    render() {
        
        return (
            
            <div>
            <Dice>{this.state.num1}</Dice>
            <button onClick={this.changeOne}>Click</button>
            <h1>{this.state.num2}</h1>
            <button onClick={this.changeTwo}>Click</button>
            <h1>{this.state.num3}</h1>
            <button onClick={this.changeThree}>Click</button>
            <h1>{this.state.num4}</h1>
            <button onClick={this.changeFour}>Click</button>
            <h1>{this.state.num5}</h1>
            <button onClick={this.changeFive}>Click</button>
        </div>
        )
    }


}

export default DiceBox
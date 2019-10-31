import React from 'react'
import Square from './Square'


class SquareContainer extends React.Component {
    constructor() {
        super()
        this.state= {
           box1: 'white',
           box2: 'white',
           box3: 'white',
           box4: 'white'
        }
    }

    toBlack = () => {
        if (this.state.box1 === 'white') {
            //change state
            this.setState({
                box1: "black",
                box2: "black",
                box3: "black",
                box4: "black"
            })
        } else {
            //change other state
            this.setState({
                box1: 'white',
                box2: 'white',
                box3: 'white',
                box4: 'white'
            })
        }
    }
    toPurple = () => {
        this.setState({
            box1:'purple',
            box2: 'purple'
        })
    }
    leftBlue = () => {
        this.setState({
            box3: 'blue'
        })
    }
    rightBlue = () => {
        this.setState({
            box4: 'blue'
        })
    }
    square1 = () => {
        this.setState({
            box1: 'orange'
        })
    }
    square2 = () => {
        this.setState({
            box2: 'silver'
        })
    }
    square3 = () => {
        this.setState({
            box3: 'pink'
        })
    }
    square4 = () => {
        this.setState({
            box4: 'yellow'
        })
    }



    render() {

        return (
            <div className='container'>
                <button className="orange" onClick={this.square1}>Orange?</button>
                <button className="silver" onClick={this.square2}>Silver!!</button>
                <button className = 'button1' onClick={this.toBlack}>Black or White</button>
                <button className = 'button3' onClick={this.leftBlue}>Blue?</button>
                <div className="boxes">
                    <Square color={this.state.box1} />
                    <Square color={this.state.box2} />
                    <Square color={this.state.box3} />
                    <Square color={this.state.box4} />
                </div>
                <button className = 'button2' onClick={this.toPurple}>Purple Anyone?</button>
                <button className = 'button4' onClick={this.rightBlue}>More Blue!</button>
                <button className="pink" onClick={this.square3}>Pink</button>
                <button className="yellow" onClick={this.square4}>Yellow</button>
            </div>
        )
    }
}



export default SquareContainer
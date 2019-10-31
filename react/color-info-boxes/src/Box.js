import React from 'react'
import Content from './Content'

const Box = () => {
    return (
        <div className = 'box'>
            <Content 
                bColor = 'blue'
                title = 'Box 1'
                subtitle = 'This is the BOX!!'
                information = 'This is a box that was formed in 2008 BC.  It is old.  Really old' />
            <Content
                bColor = 'red'
                title = 'Box 2'
                subtitle = 'Look Here!'
                information = 'This box is not as old... It is younger' />
            <Content
                bColor = 'gray'
                title = 'Box 3'
                subtitle = 'Do NOT look at me!!'
                information = 'You looked!  Oh the horror!' />
            <Content
                bColor = 'yellow'
                title = 'Box 4'
                subtitle = 'The beauty of the sun'
                information = 'This box contains rays of            sunlight- bringing joy to the world' />
        </div>
    )
}



export default Box
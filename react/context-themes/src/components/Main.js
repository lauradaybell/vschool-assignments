import React from 'react'
import {withTheme} from '../context/ThemeProvider'



const Main = (props) => {
    
    return (
        <div>
            <button onClick={props.changeTheme}>{props.theme ==='dark'? 'Switch to Light': 'Switch to Dark'}</button>
            
        </div>
    )
}


export default withTheme(Main)

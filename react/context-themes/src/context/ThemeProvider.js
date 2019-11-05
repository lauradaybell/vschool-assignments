import React, {Component} from 'react'


const ThemeContext = React.createContext()

class ThemeProvider extends Component {
    constructor() {
        super()
        this.state = {
            theme: 'dark'
        }
    }

    changeTheme = ()  => {
        this.setState(prevState => ({
            theme: prevState.theme === 'dark'? 'light': 'dark'
        }))
        
    }

    render() {
        return (
            <ThemeContext.Provider 
                value={{
                    theme: this.state.theme,
                    changeTheme: this.changeTheme
                }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeProvider

export const withTheme = C => props => (
    <ThemeContext.Consumer>
        {value => <C {...value} {...props} />}
    </ThemeContext.Consumer>
)
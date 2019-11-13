import React, {Component} from 'react'
import axios from 'axios'
require("dotenv").config()

const foodAxios = axios.create()



foodAxios.interceptors.request.use((config) => {
    config.headers = {
        "X-RapidAPI-Key": process.env.REACT_APP_FOOD_KEY,
        "x-rapidapi-host":"recipe-puppy.p.rapidapi.com"
    }
    return config
})



const MealContext = React.createContext()

class MealProvider extends Component {
    constructor() {
        super()
        this.state ={
            meals:  [],
            options: [],
            title: 'title',
            ingredients: 'ingredients',
            href: 'href',
            thumbnail: 'thumbnail',
            q:'',

        }
    }
    handleChange = e => {
        const {name , value} = e.target
        this.setState({
            [name]:value
        })
    }

    componentDidMount() {
        this.getList()
        
    }

    getList = () => {
        this.setState({
           meals: JSON.parse(localStorage.getItem('favorites')) || []
        })
    }

    handleSave = (obj) => {
        let newMeal = obj
        this.setState(prevState => ({
            meals: [...prevState.meals, newMeal]   
        }), () => localStorage.setItem('favorites', JSON.stringify(this.state.meals)))
    }

    handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
        const {q} = this.state

        
        foodAxios.get(`https://recipe-puppy.p.rapidapi.com`,{
            params: {
                q
            }
        })
            .then(res => {
                console.log(res)
        this.setState(() => ({
            options: res.data.results,
            title:'',
            ingredients:'',
            href:'',
            thumbnail:''
        }))})
    }

    render() {
        return(
            <MealContext.Provider
                value ={{
                    options: this.state.options,
                    meals: this.state.meals,
                    title: this.state.title,
                    description: this.state.description,
                    href: this.state.href,
                    thumbnail: this.state.thumbnail,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit,
                    handleSave: this.handleSave
                    
                }}>
                {this.props.children}
            </MealContext.Provider>

        )
    }
}

export default MealProvider

export const withMeal = C => props => (
    <MealContext.Consumer>
        {value => <C {...value} {...props} />}
    </MealContext.Consumer>
)
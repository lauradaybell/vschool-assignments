import React from 'react'
import {withMeal} from '../context/MealProvider'


const OwnMealForm = (props) => {
    return (
        <div className="myOwnFormPage">
            <h3 className='formTitle'>ADD YOUR FAVORITE RECIPES</h3>
            <form onSubmit={props.handleOwnSubmit}
                  className='ownForm'>
                <div className='myInput'>
                    <input 
                        className='ownFormInput'
                        onChange={props.handleChange}
                        type="text"
                        name='title'
                        placeholder='Recipe Name'
                        value={props.title}
                        required
                    />
                    <input
                        className='ownFormInput'
                        onChange={props.handleChange}
                        type='text'
                        name='ingredients'
                        placeholder='Ingredients'
                        value={props.ingredients}
                        required
                    />
                    <input 
                        className='ownFormInput'
                        onChange={props.handleChange}
                        type="text"
                        name='thumbnail'
                        placeholder='Picture URL'
                        value={props.thumbnail}
                        />
                </div>
                <button className='myOwnButton'>Save</button>
            </form>
            {/* <div className='mealAdContainer'>
                <img className='mealAds' src="https://grist.files.wordpress.com/2010/07/ad_7up175baby.jpg" alt="ad"/>
                <img className='mealAds'src="https://static.businessinsider.com/image/5187d34feab8eaa436000003-/image.jpg" alt="ad"/>
                <img src="https://i.blackfriday.com/imagery/ad-scan-pages/47145.fit_lim.size_400x.v_1573802105.png" alt="ad" className="mealAds"/>
                <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/09/bkwtf2-796x429.jpg" alt="ad" className="mealAds"/>
            </div> */}
        </div>
    )
}




export default withMeal(OwnMealForm)
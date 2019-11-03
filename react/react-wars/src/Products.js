import React from 'react'
import products from './product.json'

const Products = (props) => {
    let {_id} = props.match.params
    const product = products.find(product => product._id === _id)
    let {name, description, price} = product

    return (
    <div className='products'>
      
        <h1>{name}</h1>
        <h3>Price =${price}</h3>
        <h5>{description}</h5>
    </div>
   )
}


export default Products
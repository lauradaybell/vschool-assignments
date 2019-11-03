import React from 'react'
import {Link} from 'react-router-dom'

import list from './product.json'


const ProductList = () => {
    const mappedProducts = list.map(product => <Link key={product._id} to={`/products/${product._id}`}>{product.name}</Link> )

    return (
        <div className='ProductList'>
            <h1>Products</h1>
            <div className="product-links">
                {mappedProducts}
            </div>
            
        </div>
    )
}



export default ProductList
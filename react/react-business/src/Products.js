import React from 'react'

// My Components

import ProductsList from './ProductsList'
import ServicesList from './ServicesList'

const Products = () => {
    return (
        <div className='Products'>
            <ProductsList />
            <ServicesList />
        </div>
    )
}

export default Products
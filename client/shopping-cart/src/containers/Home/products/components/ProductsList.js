import React from 'react'
import Product from './Product'

const ProductsList = ( { products } ) => {
    const sortedProducts = products?.sort((a, b) => a.id - b.id) || [];

    return (
        <div className='product-list-container'>
            {
                sortedProducts &&
                sortedProducts.map(t => {
                    return(
                        <Product
                            key={t.id}
                            product={t}
                        />
                    )
                })
            }
        </div>
    )
}

export default ProductsList
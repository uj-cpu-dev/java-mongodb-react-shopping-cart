import React from 'react'
import ProductsList from './components/ProductsList'

const Products = ( { data, isLoading }) => {

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return <ProductsList products={data} />
}

export default Products
import React from 'react'
import Products from './products/Products'
import ProductsHeader from './products/components/ProductsHeader'
import getListOfProducts from "../../api/getProducts";

const Home = () => {
  const {data, isLoading, error} = getListOfProducts();

  return (
    <div className='home-page-container'>
        <ProductsHeader productsCount={data?.length || 0} />
        <Products data={data} isLoading={isLoading} error={error} />
    </div>
  )
}

export default Home
import React from 'react'
import Products from './products/Products'
import getListOfProducts from "../../api/getProducts";
import HeaderTitle from "../../components/controls/HeaderTitle";

const Home = () => {
  const {data, isLoading, error} = getListOfProducts();

  return (
    <div className='home-page-container'>
        <HeaderTitle title={`Products (${data?.length || 0})`} additionalClassName={'products-header-container'} />
        <Products data={data} isLoading={isLoading} error={error} />
    </div>
  )
}

export default Home
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Products from '../../components/products/Products'
import ProductsHeader from '../../components/products/components/ProductsHeader'

const Home = () => {
  const { error, data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => axios .get('http://localhost:8080/api/v1/shopping-list').then((res) => res.data),
})

  return (
    <div className='home-page-container'>
        <ProductsHeader productsCount={data?.length || 0} />
        <Products data={data} isLoading={isLoading} error={error} />
    </div>
  )
}

export default Home
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Products = () => {
    const { error, data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => axios .get('http://localhost:8080/api/v1/shopping-list').then((res) => res.data),
    })

    console.log(data)

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <div>Products</div>
    )
}

export default Products
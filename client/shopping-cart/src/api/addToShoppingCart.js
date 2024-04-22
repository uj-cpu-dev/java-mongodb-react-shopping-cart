import React from 'react';
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useAddToShoppingCart = () => {
    const mutation = useMutation({
        mutationFn: (cartItem ) => {
            return axios.post('http://localhost:8080/api/v1/shopping-cart-list', cartItem)
        },
    })

    return {
        mutation
    }
}

export default useAddToShoppingCart;
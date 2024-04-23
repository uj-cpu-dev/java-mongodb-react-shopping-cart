import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useAddToShoppingCart = () => {
    const mutateAddToShoppingCart = useMutation({
        mutationFn: (cartItem ) => {
            return axios.post('http://localhost:8080/api/v1/shopping-cart-list', cartItem)
        }
    })

    return {
        mutateAddToShoppingCart
    }
}

export default useAddToShoppingCart;
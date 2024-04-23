import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useUpdateShoppingCart = () => {
    const mutateUpdateShoppingCart = useMutation({
        mutationFn: (cartItem ) => {
            return axios.put(`http://localhost:8080/api/v1/shopping-cart-list/${cartItem.id}`, cartItem)
        },
    })

    return {
        mutateUpdateShoppingCart
    };
}

export default useUpdateShoppingCart;
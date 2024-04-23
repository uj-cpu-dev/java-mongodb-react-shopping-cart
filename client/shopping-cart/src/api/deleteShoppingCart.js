import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useDeleteShoppingCart = () => {
    const mutateDeleteShoppingCart = useMutation({
        mutationFn: (id ) => {
            return axios.delete(`http://localhost:8080/api/v1/shopping-cart-list/${id}`)
        },
    })

    return {
        mutateDeleteShoppingCart
    }
}

export default useDeleteShoppingCart;
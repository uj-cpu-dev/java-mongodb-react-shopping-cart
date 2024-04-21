import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetCartItems = (id = null) => {
    const { error, data, isLoading } = useQuery({
        queryKey: ['cart-items'],
        queryFn: () => axios .get(`http://localhost:8080/api/v1/shopping-cart-list`).then((res) => res.data),
    });

    return {
        data,
        isLoading,
        error
    }
}

export default useGetCartItems;
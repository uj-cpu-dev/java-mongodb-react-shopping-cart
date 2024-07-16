import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetProduct = (id = null) => {
    const { error, data, isLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: () => axios.get(`http://localhost:8080/api/v1/shopping-list/${id}`).then((res) => res.data),
    });

    return {
        data,
        isLoading,
        error
    }
}

export default useGetProduct;
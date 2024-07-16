import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetListOfProducts = () => {
    const { error, data, isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: () => axios.get('http://localhost:8080/api/v1/shopping-list').then((res) => res.data),
    });

    return {
        data,
        isLoading,
        error
    }
}

export default useGetListOfProducts;
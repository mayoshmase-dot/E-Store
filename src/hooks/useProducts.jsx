import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query';

export default function useProducts() {
    const getProducts = async () => {
        const response = await axiosInstance.get('/Products');
        return response.data;
    }
    const query = useQuery({
        queryKey: ['products', 'en'],
        queryFn: getProducts,
    })
    return query
}

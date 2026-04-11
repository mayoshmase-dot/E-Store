import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query';
import i18n from '../i18n';

export default function useProducts(limit=3) {
    const getProducts = async () => {
        const response = await axiosInstance.get(`/Products?limit=${limit}`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['products', limit],
        queryFn: getProducts,
    })
    return query
}

import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query';
import i18n from '../i18n';

export default function useProducts({ limit = 3, sortBy, price, search, ascending }) {
    const getProducts = async () => {
        const response = await axiosInstance.get(`/Products?limit=${limit}&sortBy=${sortBy}&price=${price},&search=${search},&ascending=${ascending}`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['products', i18n.language, limit, sortBy, price, search, ascending],
        queryFn: getProducts,
    })
    return query
}

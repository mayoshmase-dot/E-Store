import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query';
import i18n from '../i18n';

export default function useProducts({ limit = 3, page = 1, sortBy="price", minPrice="", maxPrice="", search="", ascending = "false" }) {
    const getProducts = async () => {
        const response = await axiosInstance.get(`/Products?limit=${limit}&page=${page}&sortBy=${sortBy}&minPrice=${minPrice}&maxPrice=${maxPrice}&search=${search}&ascending=${ascending}`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['products', i18n.language, {limit, page, sortBy, minPrice, maxPrice, search, ascending}],
        queryFn: getProducts,
    })
    return query
}

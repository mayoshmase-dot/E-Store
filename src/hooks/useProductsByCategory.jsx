import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../api/axiosInstance'
import i18n from '../i18n'

export default function useProductsByCategory(id) {
    const getProductsByCategory = async () => {
        const response = await axiosInstance.get(`/Products/category/${id}`)
        return response.data
    }
    return useQuery({
        queryKey: ['products', i18n.language, id],
        queryFn: getProductsByCategory,
        staleTime: 100 * 60 * 5
    })
}
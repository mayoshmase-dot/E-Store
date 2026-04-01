import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../api/axiosInstance';
import i18n from '../i18n';

export default function useCategories() {
    const getCategories = async () => {
        const response = await axiosInstance.get('/Categories?limit=10');
        return response.data
    }
    const query = useQuery({
        queryKey: ['categories', i18n.language],
        queryFn: getCategories,
        staleTime: 100 * 60 * 5
    });

    return query;
}

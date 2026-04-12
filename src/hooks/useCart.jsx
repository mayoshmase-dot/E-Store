import { useQuery } from '@tanstack/react-query'
import AuthAxiosInstance from '../api/AuthAxiosInstance';
import i18n from '../i18n';

export default function useCart() {
    const getItem = async () => {
        const response = await AuthAxiosInstance.get('/Carts');
        return response.data
    }
    const query = useQuery({
        queryKey: ['cart' , i18n.language  ],
        queryFn: getItem,
        staleTime: 100 * 60 * 5
    });

    return query;
}

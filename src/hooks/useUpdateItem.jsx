import { useMutation, useQueryClient } from '@tanstack/react-query'
import AuthAxiosInstance from '../api/AuthAxiosInstance';

export default function useUpdateItem() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ productId, count }) => {
            await AuthAxiosInstance.patch(`/Carts/${productId}`, { count })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] })
        }
    })
}

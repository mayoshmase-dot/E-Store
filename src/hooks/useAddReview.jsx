import { useMutation, useQueryClient } from '@tanstack/react-query'
import AuthAxiosInstance from '../api/AuthAxiosInstance'
import { toast } from 'react-toastify'

export default function useAddReview(id) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async ({ Rating, Comment }) => {
            const response = await AuthAxiosInstance.post(`/Products/${id}/reviews`, { Rating, Comment })
            return response.data
        },
        onSuccess: () => {
            toast.success('Review added successfully!')
            queryClient.invalidateQueries({ queryKey: ['product', id] })
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || 'Something went wrong')
        }
    })
}
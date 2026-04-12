import { useMutation, useQueryClient } from '@tanstack/react-query'
import AuthAxiosInstance from '../api/AuthAxiosInstance'
import Swal from 'sweetalert2'
import i18n from '../i18n'

export default function useAddReview(id) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async ({ Rating, Comment }) => {
            const response = await AuthAxiosInstance.post(`/Products/${id}/reviews`, { Rating, Comment })
            return response.data
        },
        onSuccess: () => {
            Swal.fire({
                icon: 'success',
                title: i18n.language === 'ar' ? 'تم إضافة التقييم' : 'Review added successfully!',
                showConfirmButton: false,
                timer: 2000
            })
            queryClient.invalidateQueries({ queryKey: ['product', i18n.language, id] })
        },
        onError: (error) => {
            const errors = error?.response?.data?.errors
            if (errors) {
                Object.values(errors).forEach(error => {
                    Swal.fire({
                        icon: 'error',
                        text: error[0]
                    })
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    text: error?.response?.data?.message || 'Something went wrong'
                })
            }
        }
    })
}
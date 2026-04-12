import { useMutation, useQueryClient } from '@tanstack/react-query'
import AuthAxiosInstance from '../api/AuthAxiosInstance'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export default function useCheckout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    return useMutation({
        mutationFn: async (PaymentMethod) => {
            return await AuthAxiosInstance.post('/Checkouts', { PaymentMethod })
        },
        onSuccess: (response) => {
            if (response.data.url) {
                location.href = response.data.url
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Successful',
                    text: 'Thank you for your order! 🎉',
                    confirmButtonColor: 'rgb(48, 168, 90)',
                }).then(() => {
                    navigate('/')
                })

            }
            queryClient.invalidateQueries({ queryKey: ['cart'] })
        },
        onError: (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error?.response?.data?.message || 'Something went wrong',
                confirmButtonColor: 'rgb(48, 168, 90)',
            })
        }
    })
}
import { useMutation, useQueryClient } from '@tanstack/react-query'
import AuthAxiosInstance from '../api/AuthAxiosInstance'
import Swal from 'sweetalert2'

export default function useCheckout() {
    const queryClient = useQueryClient();
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
                })
            }
            queryClient.invalidateQueries({ queryKey: ['cart'] })
        }
    })
}
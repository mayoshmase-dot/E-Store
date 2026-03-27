import { QueryClientContext, useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import AuthAxiosInstance from '../api/AuthAxiosInstance'

export default function useCheckout() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (PaymentMethod) => {
            return await AuthAxiosInstance.post('/Checkouts', { PaymentMethod })
        }, onSuccess: (response) => {
            if (response.data.url) {
                location.href = response.data.url
            }
            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
        }
    })
}

import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function useForgotPassword() {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: async (email) => {
            const response = await axiosInstance.post('/auth/Account/SendCode', { email })
            return response.data
        },
        onSuccess: (data,email) => {
            toast.success('Code sent successfully!', {
                onClose: () => navigate('/verifyCode', { state: { email } })
            })
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || 'Something went wrong')
        }
    })
}
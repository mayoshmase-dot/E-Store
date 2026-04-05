import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function useResetPassword() {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: async (data) => {
            const response = await axiosInstance.patch('/auth/Account/ResetPassword', data)
            return response.data
        },
        onSuccess: () => {
            toast.success('Password reset successfully!', {
                onClose: () => navigate('/login')
            })
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || 'Something went wrong')
        }
    })
}
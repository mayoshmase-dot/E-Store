import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function useForgotPassword() {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: async (email) => {
            const response = await axiosInstance.post('/auth/Account/SendCode', { email })
            return response.data
        },
        onSuccess: (data, email) => {
            localStorage.setItem('email', email)
            Swal.fire({
                title: 'Success!',
                text: 'Code sent successfully!',
                icon: 'success'
            }).then(() => navigate('/verifyCode'))
        },
        onError: (error) => {
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'Something went wrong',
                icon: 'error'
            })
        }
    })
}
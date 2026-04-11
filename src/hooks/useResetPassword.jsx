import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function useResetPassword() {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: async (data) => {
            const response = await axiosInstance.patch('/auth/Account/ResetPassword', data)
            return response.data
        },
        onSuccess: () => {
            Swal.fire({
                title: 'Are you sure?',
                text: 'You are about to reset your password!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, reset it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Done!',
                        text: 'Password reset successfully!',
                        icon: 'success'
                    }).then(() => navigate('/login'))
                }
            })
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
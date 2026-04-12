import { useMutation, useQueryClient } from '@tanstack/react-query'
import AuthAxiosInstance from '../api/AuthAxiosInstance';
import Swal from 'sweetalert2';

export default function useRemoveFromCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (cartItemId) =>
      AuthAxiosInstance.delete(`/Carts/${cartItemId}`),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      Swal.fire({
        icon: 'success',
        text: response?.data?.message || 'Item removed successfully!',
        confirmButtonColor: 'rgb(48, 168, 90)',
        timer: 2000,
      })
    },
    onError: (error) => {
      Swal.fire({
        icon: 'error',
        text: error?.response?.data?.message || 'Something went wrong',
        confirmButtonColor: 'rgb(48, 168, 90)',
      })
    }
  })
}
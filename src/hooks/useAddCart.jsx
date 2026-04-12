import { useMutation, useQueryClient } from '@tanstack/react-query'
import AuthAxiosInstance from '../api/AuthAxiosInstance'
import Swal from 'sweetalert2'

export default function useAddCart() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ ProductId, Count }) => {
      return await AuthAxiosInstance.post('/Carts', {
        ProductId: ProductId,
        Count: Count
      })
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      Swal.fire({
        icon: 'success',
        text: response?.data?.message || 'Added to cart successfully!',
        confirmButtonColor: 'rgb(48, 168, 90)',
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
  return mutation;
}
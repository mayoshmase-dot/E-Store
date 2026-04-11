import { useMutation, useQueryClient } from '@tanstack/react-query'
import AuthAxiosInstance from '../api/AuthAxiosInstance'

export default function useAddCart() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ ProductId, Count }) => {
      return await AuthAxiosInstance.post('/Carts', {
        ProductId: ProductId,
        Count: Count
      })
    }, onSuccess: () => {
      queryClient.invalidateQueries({queryKey :['cart' ]})

    }
  })
  return mutation;
}

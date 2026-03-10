import { useMutation } from '@tanstack/react-query'
import AuthAxiosInstance from '../api/AuthAxiosInstance'

export default function useAddCart() {

   const mutation = useMutation({
mutationFn : async ({ProductId , Count})=>{
    return await AuthAxiosInstance.post('/Carts') , {
    ProductId : ProductId ,
    Count : Count
}}
    })
  return mutation;
}

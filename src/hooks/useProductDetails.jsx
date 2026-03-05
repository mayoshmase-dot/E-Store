import React from 'react'
import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query'

export default function useProductDetails({id}) {
    const getProductDetails = async () =>{
       const response = await axiosInstance.get(`/Products/${id}`)
       return response.data
    }
    const query = useQuery({
        queryKey : ['product' , 'en' , id] ,
        queryFn : getProductDetails ,
        staleTime: 100 * 60 * 5
    })
  return query
}

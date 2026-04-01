import React from 'react'
import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query'
import i18n from '../i18n'

export default function useProductDetails({id}) {
    const getProductDetails = async () =>{
       const response = await axiosInstance.get(`/Products/${id}`)
       return response.data
    }
    const query = useQuery({
        queryKey : ['product' , i18n.language , id] ,
        queryFn : getProductDetails ,
        staleTime: 100 * 60 * 5
    })
  return query
}

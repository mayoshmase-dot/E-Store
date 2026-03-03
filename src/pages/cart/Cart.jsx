import React from 'react'
import useCart from '../../hooks/useCart'

export default function Cart() {
  const {data,isError,isLoading,error} = useCart()
  return (
    <div>Cart</div>
  )
}
